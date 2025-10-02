export const tradesSEO = {
  title: 'Trades | Kreative Kommit',
  description: 'Get found for your skills! Plumbers, electricians, carpenters, and more—our sites and SEO help you win more local jobs.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Trades Web Design & Tradesman Marketing Services",
    description: "Professional websites for plumbers, electricians, and tradespeople. Win more local jobs with trades-focused SEO and digital marketing.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "HomeAndConstructionBusiness",
    "@context": "https://schema.org",
    "name": "Trades Web Design Services",
    "description": "Professional web design and digital marketing services for tradespeople and skilled contractors",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Trade Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/trades",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my trade business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website helps you get found locally and builds trust with potential customers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for tradespeople?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in local SEO for UK plumbers, electricians, and other skilled trades."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "HomeAndConstructionBusiness", "name": "Tradesperson websites" },
      { "@type": "HomeAndConstructionBusiness", "name": "Local SEO for trades" },
      { "@type": "HomeAndConstructionBusiness", "name": "Online booking systems" },
      { "@type": "HomeAndConstructionBusiness", "name": "Quote request forms" },
      { "@type": "HomeAndConstructionBusiness", "name": "Trade directory listings" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Expert Plumbers" },
        "reviewBody": "Our new website helped us get more local jobs and build our reputation."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "HomeAndConstructionBusiness",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Trades Web Design",
    "description": "Professional web design and digital marketing services for tradespeople and skilled contractors",
    "url": "https://kreativekommit.com/industries/trades",
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
        "name": "Trades",
        "item": "https://kreativekommit.com/industries/trades"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Trades Web Design & Tradesman Marketing Services",
    "description": "Professional websites for plumbers, electricians, and tradespeople. Win more local jobs with trades-focused SEO and digital marketing.",
    "image": "https://kreativekommit.com/images/industries/trades-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#f97316"
  },
  
  keywords: [
    // Core trades terms
    'trades web design', 'tradesman websites', 'trades SEO', 'tradesperson marketing', 'trade services websites',
    
    // Specific trade services
    'plumber websites', 'electrician SEO', 'carpenter marketing', 'decorator websites', 'handyman SEO',
    'locksmith marketing', 'glazier websites', 'tiler SEO', 'plasterer marketing', 'roofer websites',
    
    // Local trades keywords
    'plumbers Manchester', 'electricians Liverpool', 'carpenters London', 'decorators Birmingham',
    'handyman Chester', 'trades Preston', 'tradesmen Lancashire', 'local trades Yorkshire',
    
    // Emergency services
    'emergency plumber websites', '24 hour locksmith marketing', 'emergency electrician SEO', 'urgent repairs websites',
    'call-out services marketing', 'emergency glazier websites', 'boiler repair SEO', 'heating engineer marketing',
    
    // Intent-based keywords
    'best tradesman websites UK', 'professional trade websites', 'tradesperson online presence',
    'how to market trade services', 'trades lead generation', 'local tradesman marketing', 'trade booking systems',
    
    // Voice search & local
    'plumbers near me', 'electricians in my area', 'local carpenter Manchester', 'handyman Liverpool',
    'emergency plumber nearby', 'best tradesmen UK', 'local trade services', 'qualified tradespeople near me',
    
    // Technology & features
    'trade booking systems', 'job scheduling websites', 'quote calculator tools', 'before/after galleries',
    'trade certification display', 'customer review systems', 'mobile-friendly trade websites', 'trade CRM systems'
  ]
};