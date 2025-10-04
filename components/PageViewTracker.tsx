'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useGoogleAnalytics } from './GoogleAnalytics';

/**
 * Tracks page views on route changes
 * Must be a client component to use Next.js navigation hooks
 */
export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useGoogleAnalytics();

  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      
      // Track page view
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
        page_path: url,
      });

      // Optional: Also track as a custom event for better visibility
      window.gtag('event', 'page_view', {
        page_location: window.location.href,
        page_path: url,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
