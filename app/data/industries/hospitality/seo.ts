export const hospitalitySEO = {
  title: 'Hospitality (Hotels, B&Bs) | Kreative Kommit',
  description: 'Fill more rooms! We help hotels and B&Bs get booked with beautiful sites, online booking, and local SEO that attracts travelers.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Hotel & B&B Web Design Services",
    description: "Professional websites for hotels, B&Bs, and hospitality businesses. Increase bookings with hospitality-focused SEO and marketing.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "LodgingBusiness",
    "@context": "https://schema.org",
    "name": "Hospitality Web Design Services",
    "description": "Professional web design and digital marketing services for hotels, B&Bs, and hospitality businesses",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "amenityFeature": "Online Booking"
  },
  
  // Canonical URL pattern
  canonical: "/industries/hospitality",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my hotel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A modern website with booking integration increases direct bookings and trust."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for hotels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in local SEO for UK hotels and B&Bs."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "LodgingBusiness", "name": "Hotel website design" },
      { "@type": "LodgingBusiness", "name": "Online booking integration" },
      { "@type": "LodgingBusiness", "name": "SEO for hotels and B&Bs" },
      { "@type": "LodgingBusiness", "name": "Photo galleries and reviews" },
      { "@type": "LodgingBusiness", "name": "Content marketing for hospitality" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Seaside B&B" },
        "reviewBody": "Our new website and booking system filled more rooms than ever."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "LodgingBusiness",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Hospitality Web Design",
    "description": "Professional web design and digital marketing services for hotels, B&Bs, and hospitality businesses",
    "url": "https://kreativekommit.com/industries/hospitality",
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
        "name": "Hospitality",
        "item": "https://kreativekommit.com/industries/hospitality"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Hotel & B&B Web Design Services",
    "description": "Professional websites for hotels, B&Bs, and hospitality businesses. Increase bookings with hospitality-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/hospitality-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#dc2626"
  },
  
  keywords: [
    // Core hospitality terms
    'hospitality web design', 'hotel websites', 'B&B marketing', 'hospitality SEO', 'tourism website design',
    
    // Accommodation types
    'boutique hotel websites', 'luxury hotel marketing', 'budget hotel SEO', 'bed and breakfast websites',
    'guest house marketing', 'holiday cottage websites', 'hostel booking systems', 'resort marketing',
    
    // Local hospitality keywords
    'hotels Manchester', 'B&B Liverpool', 'hospitality SEO London', 'accommodation Birmingham',
    'hotel marketing Chester', 'tourism websites Preston', 'hospitality Lancashire', 'hotels Yorkshire',
    
    // Service-specific keywords
    'hotel booking systems', 'restaurant websites', 'pub marketing', 'café SEO',
    'event venue websites', 'wedding venue marketing', 'conference centre SEO', 'catering websites',
    
    // Intent-based keywords
    'best hotel website designers UK', 'professional hospitality websites', 'hotel online presence',
    'how to market hotels online', 'hospitality lead generation', 'hotel booking optimisation', 'tourism marketing experts',
    
    // Voice search & local
    'hotels near me', 'best B&B in area', 'accommodation nearby', 'restaurants Manchester',
    'wedding venues Liverpool', 'conference centres London', 'holiday cottages UK', 'luxury hotels England',
    
    // Technology & features
    'online booking integration', 'property management systems', 'channel manager integration', 'guest review management',
    'virtual hotel tours', 'contactless check-in', 'hotel CRM systems', 'revenue management platforms'
  ]
};