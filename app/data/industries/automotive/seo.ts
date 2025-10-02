export const automotiveSEO = {
  title: 'Automotive | Kreative Kommit',
  description: 'Drive more business! We tune up your online presence for dealerships, garages, and car washes with sleek sites and local search power.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Automotive Web Design & Car Dealership Marketing",
    description: "Professional websites for car dealerships, garages, and automotive services. Drive more customers with automotive-focused SEO and marketing.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "AutomotiveBusiness",
    "@context": "https://schema.org",
    "name": "Automotive Web Design Services",
    "description": "Professional web design and digital marketing services for car dealerships and automotive businesses",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Automotive Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/automotive",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my car dealership?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website showcases your vehicle inventory and helps customers find and book services easily."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for automotive businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in local SEO for UK car dealerships, garages, and automotive services."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "AutomotiveBusiness", "name": "Car dealership websites" },
      { "@type": "AutomotiveBusiness", "name": "Vehicle inventory systems" },
      { "@type": "AutomotiveBusiness", "name": "SEO for automotive" },
      { "@type": "AutomotiveBusiness", "name": "Online booking systems" },
      { "@type": "AutomotiveBusiness", "name": "Digital marketing for cars" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Premier Motors" },
        "reviewBody": "Our new website increased online inquiries and car sales significantly."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "AutomotiveBusiness",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Automotive Web Design",
    "description": "Professional web design and digital marketing services for car dealerships and automotive businesses",
    "url": "https://kreativekommit.com/industries/automotive",
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
        "name": "Automotive",
        "item": "https://kreativekommit.com/industries/automotive"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Automotive Web Design & Car Dealership Marketing",
    "description": "Professional websites for car dealerships, garages, and automotive services. Drive more customers with automotive-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/automotive-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#dc2626"
  },
  
  keywords: [
    // Core automotive terms
    'automotive web design', 'car dealership websites', 'garage SEO', 'automotive marketing', 'motor trade websites',
    
    // Service-specific keywords
    'car dealership marketing', 'garage booking systems', 'MOT test websites', 'car service marketing',
    'auto parts e-commerce', 'vehicle rental websites', 'car wash booking systems', 'automotive CRM systems',
    
    // Local automotive keywords
    'car dealers Manchester', 'garages Liverpool', 'automotive SEO London', 'car services Birmingham',
    'dealerships Chester', 'garage marketing Preston', 'automotive Lancashire', 'car dealers Yorkshire',
    
    // Vehicle-specific services
    'used car dealer websites', 'luxury car dealerships', 'commercial vehicle sales', 'motorcycle dealerships',
    'classic car restoration', 'electric vehicle services', 'hybrid car specialists', 'van rental websites',
    
    // Intent-based keywords
    'best automotive website designers UK', 'professional car dealer websites', 'garage online presence',
    'how to market car dealership', 'automotive lead generation', 'car sales websites', 'garage management systems',
    
    // Voice search & local
    'car dealers near me', 'garages in my area', 'MOT test centres nearby', 'car services Manchester',
    'best car dealers Liverpool', 'automotive services UK', 'car repair shops near me', 'vehicle servicing nearby',
    
    // Technology & features
    'vehicle inventory management', 'car finance calculators', 'automotive CRM integration', 'vehicle history reports',
    'online car valuation tools', 'automotive lead tracking', 'garage appointment booking', 'vehicle inspection systems'
  ]
};