import { franchiseFAQs } from "./faqs";

export const franchiseSEO = {
  description: "Web and marketing solutions for franchise businesses to manage brand consistency and drive local leads.",

  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Franchise Web Design & Marketing Services",
    description: "Professional websites for franchise businesses and franchisors. Maintain brand consistency and drive local leads with franchise-focused SEO.",
    type: "website",
    locale: "en_GB"
  },

  // Structured data for rich snippets
  schema: {
    "@type": "Organization",
    "@context": "https://schema.org",
    "name": "Franchise Web Design Services",
    "description": "Professional web design and digital marketing services for franchise businesses and franchisors",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Franchise Marketing"
  },

  // Canonical URL pattern
  canonical: "/industries/franchise",

  // Advanced SEO Phase 3 enhancements

  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": franchiseFAQs.map(faq => ({
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
      { "@type": "Organization", "name": "Franchise websites" },
      { "@type": "Organization", "name": "Multi-location SEO" },
      { "@type": "Organization", "name": "Franchisee recruitment" },
      { "@type": "Organization", "name": "Brand consistency tools" },
      { "@type": "Organization", "name": "Location management" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "National Franchise Group" },
        "reviewBody": "Our franchise website helped us recruit quality franchisees and maintain brand consistency across locations."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "Organization",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Franchise Web Design",
    "description": "Professional websites for franchise businesses and multi-location companies",
    "url": "https://kreativekommit.com/industries/franchise",
    "areaServed": ["Manchester", "Liverpool", "Birmingham", "London", "Chester", "Preston", "Lancashire", "Yorkshire"],
    "serviceArea": "United Kingdom",
    "priceRange": "££££"
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
        "name": "Franchise",
        "item": "https://kreativekommit.com/industries/franchise"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Franchise Business Web Design Services",
    "description": "Professional websites for franchise businesses and multi-location companies. Attract franchisees and maintain brand consistency with franchise-focused SEO.",
    "image": "https://kreativekommit.com/images/industries/franchise-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#0ea5e9"
  },
  
  keywords: [
    // Core franchise terms
    "franchise web design", "franchising websites", "franchise SEO", "franchise marketing", "business opportunity websites",
    
    // Service-specific keywords
    "franchise recruitment websites", "franchisee support marketing", "franchise development SEO", "business format websites",
    "franchise training marketing", "franchise consultancy SEO", "master franchise websites", "franchise territory marketing",
    
    // Local franchise keywords
    "franchises Manchester", "business opportunities Liverpool", "franchising London", "franchise Birmingham",
    "franchise Chester", "business Preston", "franchising Lancashire", "opportunities Yorkshire",
    
    // Industry-specific franchises
    "food franchise websites", "retail franchise marketing", "service franchise SEO", "healthcare franchise websites",
    "fitness franchise marketing", "education franchise SEO", "automotive franchise websites", "cleaning franchise marketing",
    
    // Intent-based keywords
    "best franchise website designers UK", "professional franchising websites", "franchise business online presence",
    "how to market franchise opportunities", "franchise lead generation", "franchisee recruitment systems", "franchising SEO experts",
    
    // Voice search & local
    "franchise opportunities near me", "business opportunities in my area", "franchises Manchester", "business Liverpool",
    "best franchises nearby", "local business opportunities", "UK franchise companies", "franchise investments near me",
    
    // Technology & features
    "franchise management systems", "franchisee portals", "territory mapping tools", "franchise performance tracking",
    "training delivery platforms", "franchise communication systems", "business planning tools", "franchise analytics platforms"
  ]
};