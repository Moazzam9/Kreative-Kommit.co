export const cleaningSEO = {
  description: "Digital marketing and web solutions for cleaning companies, janitorial services, and home care businesses.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Cleaning Services Web Design & Marketing",
    description: "Professional websites for cleaning companies and janitorial services. Win more contracts with cleaning-focused SEO and digital marketing.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "LocalBusiness",
    "@context": "https://schema.org",
    "name": "Cleaning Services Web Design",
    "description": "Professional web design and digital marketing services for cleaning companies and janitorial services",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Cleaning Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/cleaning",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my cleaning business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website helps you attract more clients and manage bookings for your cleaning services."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for cleaning companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in local SEO for UK cleaning services and commercial cleaners."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "LocalBusiness", "name": "Cleaning service websites" },
      { "@type": "LocalBusiness", "name": "Commercial cleaner sites" },
      { "@type": "LocalBusiness", "name": "SEO for cleaning services" },
      { "@type": "LocalBusiness", "name": "Booking management" },
      { "@type": "LocalBusiness", "name": "Customer portals" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Spotless Cleaning Services" },
        "reviewBody": "Our new website helped us attract more residential and commercial cleaning clients in our local area."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "LocalBusiness",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Cleaning Service Web Design",
    "description": "Professional websites for cleaning services and commercial cleaners",
    "url": "https://kreativekommit.com/industries/cleaning",
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
        "name": "Cleaning",
        "item": "https://kreativekommit.com/industries/cleaning"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Cleaning Service Web Design Services",
    "description": "Professional websites for cleaning services and commercial cleaners. Attract local clients with cleaning-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/cleaning-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#0ea5e9"
  },
  
  keywords: [
    // Core cleaning terms
    "cleaning services web design", "cleaning company websites", "cleaning business SEO", "cleaning service marketing", "cleaner websites",
    
    // Service-specific keywords
    "domestic cleaning websites", "commercial cleaning marketing", "office cleaning SEO", "carpet cleaning websites",
    "window cleaning marketing", "deep cleaning services", "end of tenancy cleaning", "industrial cleaning websites",
    
    // Local cleaning keywords
    "cleaning services Manchester", "cleaners Liverpool", "cleaning companies London", "domestic cleaning Birmingham",
    "office cleaning Chester", "cleaning Preston", "cleaning services Lancashire", "cleaners Yorkshire",
    
    // Specialist cleaning services
    "oven cleaning websites", "pressure washing marketing", "gutter cleaning SEO", "upholstery cleaning websites",
    "after builders cleaning", "crime scene cleaning", "biohazard cleaning services", "restaurant cleaning marketing",
    
    // Intent-based keywords
    "best cleaning website designers UK", "professional cleaning websites", "cleaning business online presence",
    "how to market cleaning services", "cleaning lead generation", "cleaning booking systems", "cleaner scheduling software",
    
    // Voice search & local
    "cleaners near me", "cleaning services in my area", "domestic cleaners Manchester", "office cleaning Liverpool",
    "best cleaners nearby", "local cleaning services", "house cleaners UK", "commercial cleaning near me",
    
    // Technology & features
    "cleaning booking apps", "cleaner management systems", "cleaning job scheduling", "cleaning service apps",
    "eco-friendly cleaning services", "green cleaning products", "insured cleaning companies", "vetted cleaning staff"
  ]
};