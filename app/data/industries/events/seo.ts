import { eventsFAQs } from "./faqs";

export const eventsSEO = {
  title: 'Events & Wedding Planners | Kreative Kommit',
  description: 'Make every event unforgettable! We help planners showcase services, galleries, and reviews to attract more bookings.',

  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Events & Wedding Planning Web Design Services",
    description: "Professional websites for event planners and wedding professionals. Showcase your events and attract bookings with events-focused SEO.",
    type: "website",
    locale: "en_GB"
  },

  // Structured data for rich snippets
  schema: {
    "@type": "EventPlanning",
    "@context": "https://schema.org",
    "name": "Events Web Design Services",
    "description": "Professional web design and digital marketing services for event planners and wedding professionals",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Event Planning"
  },

  // Canonical URL pattern
  canonical: "/industries/events",

  // Advanced SEO Phase 3 enhancements

  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": eventsFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "EventPlanning",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Events Web Design",
    "description": "Professional web design and digital marketing services for event planners and wedding professionals",
    "url": "https://kreativekommit.com/industries/events",
    "areaServed": ["Manchester", "Liverpool", "Birmingham", "London", "Chester", "Preston", "Lancashire", "Yorkshire"],
    "serviceArea": "United Kingdom",
    "priceRange": "£££"
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
        "name": "Events",
        "item": "https://kreativekommit.com/industries/events"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Events & Wedding Planning Web Design Services",
    "description": "Professional websites for event planners and wedding professionals. Showcase your events and attract bookings with events-focused SEO.",
    "image": "https://kreativekommit.com/images/industries/events-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#ec4899"
  },
  
  keywords: [
    // Core events terms
    'events web design', 'wedding planner websites', 'event management SEO', 'events marketing', 'party planning websites',
    
    // Event-specific services
    'wedding planner marketing', 'corporate events SEO', 'party organiser websites', 'conference planning marketing',
    'exhibition stand design', 'festival organisation websites', 'birthday party planning', 'anniversary events SEO',
    
    // Local events keywords
    'wedding planners Manchester', 'events Liverpool', 'party planners London', 'wedding services Birmingham',
    'event management Chester', 'wedding planning Preston', 'events Lancashire', 'party services Yorkshire',
    
    // Venue & supplier keywords
    'wedding venue marketing', 'catering service websites', 'DJ service SEO', 'photography booking systems',
    'florist wedding websites', 'wedding cake designers', 'bridal shop marketing', 'event equipment rental',
    
    // Intent-based keywords
    'best wedding website designers UK', 'professional event websites', 'wedding planner online presence',
    'how to market wedding services', 'event lead generation', 'wedding booking systems', 'event management platforms',
    
    // Voice search & local
    'wedding planners near me', 'event organisers in my area', 'party planners Manchester', 'wedding services Liverpool',
    'best wedding venues nearby', 'local event services', 'corporate event planners UK', 'birthday party organisers near me',
    
    // Technology & features
    'event booking systems', 'wedding planning tools', 'guest list management', 'event timeline planning',
    'vendor management systems', 'event photography galleries', 'live event streaming', 'event ticketing platforms'
  ]
};