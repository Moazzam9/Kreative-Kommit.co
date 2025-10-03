import { nonProfitFAQs } from "./faqs";
export const nonProfitSEO = {
  description: "Digital solutions for non-profits and charities to increase awareness, donations, and volunteer engagement.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Non-profit & Charity Web Design Services",
    description: "Professional websites for charities and non-profit organizations. Increase donations and volunteer engagement with non-profit focused SEO.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "NGO",
    "@context": "https://schema.org",
    "name": "Non-profit Web Design Services",
    "description": "Professional web design and digital marketing services for charities and non-profit organizations",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Non-profit Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/non-profit",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
    // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": nonProfitFAQs.map((faq: { q: string; a: string }) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "NGO", "name": "Charity websites" },
      { "@type": "NGO", "name": "Donation platforms" },
      { "@type": "NGO", "name": "SEO for non-profits" },
      { "@type": "NGO", "name": "Fundraising tools" },
      { "@type": "NGO", "name": "Volunteer portals" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Hope Foundation" },
        "reviewBody": "Our new website helped us reach more supporters and increase donations for our charitable work."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "NGO",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Charity Web Design",
    "description": "Professional websites for charities, non-profits, and community organisations",
    "url": "https://kreativekommit.com/industries/non-profit",
    "areaServed": ["Manchester", "Liverpool", "Birmingham", "London", "Chester", "Preston", "Lancashire", "Yorkshire"],
    "serviceArea": "United Kingdom",
    "priceRange": "££"
  },
  
  // Breadcrumb schema
  breadcrumbSchema: {
    "@type": "BreadcrumbList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kreativekommit.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": "https://kreativekommit.com/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Non-Profit",
        "item": "https://kreativekommit.com/industries/non-profit"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Charity & Non-Profit Web Design Services",
    "description": "Professional websites for charities and non-profit organisations. Increase donations and support with charity-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/non-profit-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#16a34a"
  },
  
  keywords: [
    // Core nonprofit terms
    "nonprofit web design", "charity websites", "nonprofit SEO", "charity marketing", "fundraising websites",
    
    // Service-specific keywords
    "charity donation websites", "nonprofit CRM systems", "fundraising platforms", "volunteer management websites",
    "grant application systems", "nonprofit event websites", "charity shop websites", "community group marketing",
    
    // Local nonprofit keywords
    "charities Manchester", "nonprofits Liverpool", "community groups London", "charity Birmingham",
    "fundraising Chester", "volunteers Preston", "charities Lancashire", "nonprofits Yorkshire",
    
    // Cause-specific nonprofits
    "animal rescue websites", "homeless charity marketing", "environmental nonprofit SEO", "health charity websites",
    "education nonprofit marketing", "disability charity SEO", "mental health charity websites", "youth charity marketing",
    
    // Intent-based keywords
    "best nonprofit website designers UK", "professional charity websites", "nonprofit online presence",
    "how to market charity services", "nonprofit lead generation", "charity donation systems", "fundraising website experts",
    
    // Voice search & local
    "charities near me", "volunteer opportunities in my area", "local charities Manchester", "nonprofits Liverpool",
    "charity shops nearby", "local community groups", "volunteer work UK", "charity events near me",
    
    // Technology & features
    "online donation systems", "charity CRM integration", "volunteer management software", "fundraising event platforms",
    "grant management systems", "charity impact tracking", "nonprofit social media tools", "charity newsletter systems"
  ]
};