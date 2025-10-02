export const travelSEO = {
  description: "Websites and marketing for travel agencies, tour operators, and guides to attract travelers and manage bookings.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Travel & Tourism Web Design Services",
    description: "Professional websites for travel agencies and tour operators. Increase bookings and attract travelers with travel-focused SEO and online reservations.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "TravelAgency",
    "@context": "https://schema.org",
    "name": "Travel Web Design Services",
    "description": "Professional web design and digital marketing services for travel agencies and tour operators",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Travel Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/travel",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my travel business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website showcases your destinations and enables online bookings for your travel services."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for travel agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in SEO for UK travel agencies, tour operators, and hospitality businesses."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "TravelAgency", "name": "Travel agency websites" },
      { "@type": "TravelAgency", "name": "Tour booking systems" },
      { "@type": "TravelAgency", "name": "SEO for travel businesses" },
      { "@type": "TravelAgency", "name": "Destination showcases" },
      { "@type": "TravelAgency", "name": "Holiday packages" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Dream Holidays Travel" },
        "reviewBody": "Our new travel website helped us showcase stunning destinations and increase holiday bookings."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "TravelAgency",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Travel Web Design",
    "description": "Professional websites for travel agencies, tour operators, and hospitality businesses",
    "url": "https://kreativekommit.com/industries/travel",
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
        "name": "Travel",
        "item": "https://kreativekommit.com/industries/travel"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Travel Agency Web Design Services",
    "description": "Professional websites for travel agencies, tour operators, and hospitality businesses. Inspire wanderlust with travel-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/travel-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#0ea5e9"
  },
  
  keywords: [
    // Core travel terms
    "travel web design", "tourism websites", "travel agency SEO", "tour operator marketing", "travel booking websites",
    
    // Service-specific keywords
    "holiday booking websites", "flight booking SEO", "hotel reservation marketing", "cruise booking websites",
    "adventure travel marketing", "luxury travel SEO", "business travel websites", "group travel marketing",
    
    // Local travel keywords
    "travel agents Manchester", "tourism Liverpool", "travel agencies London", "tour operators Birmingham",
    "travel services Chester", "tourism Preston", "travel Lancashire", "tour operators Yorkshire",
    
    // Specialist travel services
    "destination weddings websites", "safari tour marketing", "ski holiday SEO", "cultural tours websites",
    "eco-tourism marketing", "medical tourism SEO", "educational travel websites", "corporate travel marketing",
    
    // Intent-based keywords
    "best travel website designers UK", "professional tourism websites", "travel agency online presence",
    "how to market travel services", "travel booking lead generation", "tour booking systems", "travel SEO experts",
    
    // Voice search & local
    "travel agents near me", "tour operators in my area", "holiday bookings Manchester", "travel agencies Liverpool",
    "best travel agents nearby", "local tourism services", "UK travel companies", "holiday deals near me",
    
    // Technology & features
    "online booking systems", "travel itinerary planners", "destination guides platforms", "travel insurance integration",
    "multilingual travel websites", "currency conversion tools", "travel review systems", "mobile travel apps"
  ]
};