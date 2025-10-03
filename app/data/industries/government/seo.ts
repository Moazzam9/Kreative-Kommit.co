
import { governmentFAQs } from "./faqs";

export const governmentSEO = {
  description: "Web and digital solutions for local government, councils, and public sector organisations to improve communication and public engagement.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Government & Public Sector Web Design Services",
    description: "WCAG compliant websites for local councils and government agencies. Improve public engagement with accessible, secure digital solutions.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "GovernmentOrganization",
    "@context": "https://schema.org",
    "name": "Government Web Design Services",
    "description": "Professional web design and digital solutions for local government and public sector organizations",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Digital Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/government",
  
  // Advanced SEO Phase 3 enhancements
  
  
  // Service offerings schema
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": governmentFAQs.map((faq: { q: string; a: string }) => ({
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
    "@type": "GovernmentOrganization",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Government Web Design",
    "description": "WCAG compliant websites for local councils and government agencies",
    "url": "https://kreativekommit.com/industries/government",
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
        "name": "Government",
        "item": "https://kreativekommit.com/industries/government"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Government & Public Sector Web Design Services",
    "description": "WCAG compliant websites for local councils and government agencies. Improve public engagement with accessible, secure digital solutions.",
    "image": "https://kreativekommit.com/images/industries/government-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#1f2937"
  },
  
  keywords: [
    // Core government terms
    "government web design", "council websites", "public sector SEO", "government marketing", "civic websites",
    
    // Service-specific keywords
    "local council websites", "government portal development", "public services SEO", "civic engagement platforms",
    "government transparency websites", "public consultation platforms", "council services SEO", "government communications",
    
    // Local government keywords
    "council Manchester", "local government Liverpool", "public services London", "civic Birmingham",
    "council services Chester", "government Preston", "public sector Lancashire", "council Yorkshire",
    
    // Specialist government services
    "planning applications websites", "council tax platforms", "waste management SEO", "housing services websites",
    "electoral services marketing", "licensing applications SEO", "environmental services websites", "community services marketing",
    
    // Intent-based keywords
    "best government website designers UK", "professional civic websites", "council online presence",
    "how to improve government services", "public sector digital transformation", "government accessibility compliance", "civic SEO experts",
    
    // Voice search & local
    "council services near me", "local government in my area", "council Manchester", "public services Liverpool",
    "local council nearby", "government services UK", "council offices near me", "public sector services",
    
    // Technology & features
    "government service portals", "online council applications", "public consultation systems", "government accessibility standards",
    "civic engagement platforms", "government data transparency", "public service booking systems", "council CRM platforms"
  ]
};