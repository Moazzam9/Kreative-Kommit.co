export const realEstateSEO = {
  title: 'Real Estate & Estate Agents | Kreative Kommit',
  description: 'Unlock property potential! We help estate agents and real estate pros showcase listings, attract buyers, and close deals with stunning websites and targeted SEO.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Real Estate Web Design & Property Marketing Services",
    description: "Professional websites for estate agents and property professionals. Generate more leads with real estate SEO and digital marketing.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "RealEstateAgent",
    "@context": "https://schema.org",
    "name": "Real Estate Web Design Services",
    "description": "Professional web design and digital marketing services for estate agents and property professionals",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Web Design"
  },
  
  // Canonical URL pattern
  canonical: "/industries/real-estate",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my estate agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A modern website attracts more buyers and sellers, and builds trust."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for property listings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in SEO for estate agents and property professionals."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "RealEstateAgent", "name": "Property listing websites" },
      { "@type": "RealEstateAgent", "name": "SEO for estate agents" },
      { "@type": "RealEstateAgent", "name": "Lead generation for realtors" },
      { "@type": "RealEstateAgent", "name": "Virtual tours and galleries" },
      { "@type": "RealEstateAgent", "name": "Content marketing for property" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Prime Estates" },
        "reviewBody": "Our new website brought in more buyers and sellers than ever before."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "RealEstateAgent",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Real Estate Web Design",
    "description": "Professional web design and digital marketing services for estate agents and property professionals",
    "url": "https://kreativekommit.com/industries/real-estate",
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
        "name": "Real Estate",
        "item": "https://kreativekommit.com/industries/real-estate"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Real Estate Web Design & Property Marketing Services",
    "description": "Professional websites for estate agents and property professionals. Generate more leads with real estate SEO and digital marketing.",
    "image": "https://kreativekommit.com/images/industries/real-estate-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#f59e0b"
  },
  
  keywords: [
    // Core real estate terms
    'real estate web design', 'estate agent websites', 'property website design', 'real estate SEO', 'estate agent marketing',
    
    // Service-specific keywords
    'property portal development', 'real estate CRM websites', 'estate agent booking systems', 'property management websites',
    'rental property websites', 'commercial property marketing', 'property valuation websites', 'mortgage broker websites',
    
    // Local real estate keywords
    'estate agents Manchester', 'property websites Liverpool', 'real estate SEO London', 'estate agent marketing Birmingham',
    'property marketing Chester', 'real estate web design Leeds', 'estate agents Preston', 'property SEO Lancashire',
    
    // Niche property services
    'residential estate agents', 'commercial property agents', 'luxury property marketing', 'new build property websites',
    'property investment websites', 'lettings agent websites', 'property auction websites', 'property development marketing',
    
    // Intent-based keywords
    'best estate agent websites UK', 'professional property websites', 'estate agent lead generation', 'property marketing experts',
    'how to market estate agency', 'real estate digital marketing', 'property website designers', 'estate agent online presence',
    
    // Voice search & local
    'estate agents near me', 'property agents in my area', 'local estate agents', 'property services nearby',
    'best estate agents Manchester', 'property marketing services UK', 'estate agent website designers near me',
    
    // Technology & trends 2025
    'virtual property tours', 'property photography services', 'drone property marketing', 'property portal integration',
    'rightmove integration', 'zoopla marketing', 'property social media marketing', 'estate agent CRM systems'
  ]
};