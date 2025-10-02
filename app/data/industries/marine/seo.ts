export const marineSEO = {
  description: "Websites and marketing for marine, boating, and yachting businesses to attract clients and showcase services.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Marine & Boating Web Design Services",
    description: "Professional websites for marine businesses, yacht brokers, and boat services. Attract maritime clients with marine-focused SEO and marketing.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "Service",
    "@context": "https://schema.org",
    "name": "Marine Web Design Services",
    "description": "Professional web design and digital marketing services for marine and boating businesses",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Marine Marketing"
  },
  
  // Canonical URL pattern
  canonical: "/industries/marine",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my marine business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website showcases your marine services and helps boat owners find and book your expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for marine businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in SEO for UK marine, boating, and yachting businesses."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "Organization", "name": "Marine service websites" },
      { "@type": "Organization", "name": "Yacht broker platforms" },
      { "@type": "Organization", "name": "SEO for marine businesses" },
      { "@type": "Organization", "name": "Boat sales websites" },
      { "@type": "Organization", "name": "Marina management systems" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Coastal Marine" },
        "reviewBody": "Our new website helped us attract more yacht owners and grow our marine services business."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "Organization",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Marine Web Design",
    "description": "Professional websites for marine, boating, and yachting businesses",
    "url": "https://kreativekommit.com/industries/marine",
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
        "name": "Marine",
        "item": "https://kreativekommit.com/industries/marine"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Marine & Boating Web Design Services",
    "description": "Professional websites for marine businesses, yacht brokers, and boat services. Attract maritime clients with marine-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/marine-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#0ea5e9"
  },
  
  keywords: [
    // Core marine terms
    "marine web design", "boating websites", "marine SEO", "maritime marketing", "boat service websites",
    
    // Service-specific keywords
    "yacht broker websites", "boat repair marketing", "marina SEO", "boat sales websites",
    "marine engineering marketing", "boat insurance SEO", "yacht charter websites", "boat storage marketing",
    
    // Local marine keywords
    "marinas Manchester", "boat services Liverpool", "yacht clubs London", "marine Birmingham",
    "boating Chester", "maritime Preston", "marine Lancashire", "boat services Yorkshire",
    
    // Specialist marine services
    "commercial marine websites", "recreational boating marketing", "marine electronics SEO", "boat surveying websites",
    "marine construction marketing", "underwater services SEO", "boat transport websites", "marine fuel marketing",
    
    // Intent-based keywords
    "best marine website designers UK", "professional boating websites", "marine business online presence",
    "how to market marine services", "boating lead generation", "yacht booking systems", "marine SEO experts",
    
    // Voice search & local
    "marinas near me", "boat services in my area", "yacht brokers Manchester", "marine services Liverpool",
    "best marinas nearby", "local boating services", "UK marine companies", "boat repairs near me",
    
    // Technology & features
    "boat inventory management", "marina booking systems", "vessel tracking platforms", "marine weather integration",
    "tidal information systems", "boat maintenance scheduling", "marine CRM platforms", "yacht charter management"
  ]
};