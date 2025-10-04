

import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter (per IP)
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRequestLog = new Map<string, number[]>();

// Basic input sanitization
function sanitize(str: unknown): string {
  return String(str ?? '').replace(/[<>"'`]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    // Check if request has body
    if (!request.body) {
      return NextResponse.json(
        { error: 'No request body provided' },
        { status: 400 }
      );
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    const log = ipRequestLog.get(ip) || [];
    const recentLog = log.filter((ts: number) => now - ts < RATE_LIMIT_WINDOW_MS);
    if (recentLog.length >= RATE_LIMIT_MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    recentLog.push(now);
    ipRequestLog.set(ip, recentLog);

    // Parse JSON with error handling
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch (jsonError) {
      // In production, use proper error logging service (e.g., Sentry)
      if (process.env.NODE_ENV === 'development') {
        console.error('JSON parsing error:', jsonError);
      }
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Destructure with fallback for missing fields
    const name = String(body?.name ?? '');
    const email = String(body?.email ?? '');
    const company = String(body?.company ?? '');
    const projectType = String(body?.projectType ?? '');
    const budget = String(body?.budget ?? '');
    const message = String(body?.message ?? '');
    const honeypot = String(body?.honeypot ?? '');

    // Honeypot field check (should be empty)
    if (honeypot) {
      return NextResponse.json(
        { error: 'Bot detected.' },
        { status: 400 }
      );
    }

    // Basic validation
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeCompany = sanitize(company);
    const safeProjectType = sanitize(projectType);
    const safeBudget = sanitize(budget);
    const safeMessage = sanitize(message);

    // For now, we'll just log and return success
    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    if (process.env.NODE_ENV === 'development') {
      console.log('New contact form submission:', {
        name: safeName,
        email: safeEmail,
        company: safeCompany,
        projectType: safeProjectType,
        budget: safeBudget,
        message: safeMessage,
        timestamp: new Date().toISOString(),
      });
    }

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        message: 'Contact form submitted successfully',
        submittedAt: new Date().toISOString(),
      },
      { status: 200 }
    );

  } catch (error) {
    // In production, use proper error logging service (e.g., Sentry)
    if (process.env.NODE_ENV === 'development') {
      console.error('Error processing contact form:', error);
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      // In production, restrict this to your domain, e.g. 'https://yourdomain.com'
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}