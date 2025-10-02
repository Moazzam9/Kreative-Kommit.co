export const manufacturingSEO = {
  description: "Web and digital solutions for manufacturing and industrial companies to showcase capabilities and attract B2B clients.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Manufacturing & Industrial Web Design Services",
    description: "Professional B2B websites for manufacturing and industrial companies. Generate business leads with manufacturing-focused SEO and marketing.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "Corporation",
    "@context": "https://schema.org",
    "name": "Manufacturing Web Design Services",
    "description": "Professional web design and digital marketing services for manufacturing and industrial companies",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Manufacturing Marketing"
  },
  
  // Canonical URL pattern
  canonical: "/industries/manufacturing",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my manufacturing business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website showcases your manufacturing capabilities and helps you win B2B contracts."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for manufacturing companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in B2B SEO for UK manufacturing and industrial companies."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "Organization", "name": "Manufacturing websites" },
      { "@type": "Organization", "name": "Industrial B2B platforms" },
      { "@type": "Organization", "name": "SEO for manufacturers" },
      { "@type": "Organization", "name": "Product catalog systems" },
      { "@type": "Organization", "name": "Quote request portals" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Precision Manufacturing Ltd" },
        "reviewBody": "Our new website helped us showcase our capabilities and win larger manufacturing contracts."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "Organization",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Manufacturing Web Design",
    "description": "Professional websites for manufacturing, industrial, and engineering companies",
    "url": "https://kreativekommit.com/industries/manufacturing",
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
        "name": "Manufacturing",
        "item": "https://kreativekommit.com/industries/manufacturing"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Manufacturing & Industrial Web Design Services",
    "description": "Professional websites for manufacturing and industrial companies. Win B2B contracts with manufacturing-focused SEO and digital marketing.",
    "image": "https://kreativekommit.com/images/industries/manufacturing-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#0ea5e9"
  },
  
  keywords: [
    // Core manufacturing terms
    "manufacturing web design", "industrial websites", "manufacturing SEO", "production marketing", "factory websites",
    
    // Service-specific keywords
    "custom manufacturing websites", "precision engineering marketing", "CNC machining SEO", "injection molding websites",
    "metal fabrication marketing", "plastic manufacturing SEO", "assembly services websites", "quality control marketing",
    
    // Local manufacturing keywords
    "manufacturers Manchester", "industrial Liverpool", "factories London", "manufacturing Birmingham",
    "engineering Chester", "production Preston", "manufacturing Lancashire", "industrial Yorkshire",
    
    // Industry-specific manufacturing
    "automotive manufacturing websites", "aerospace production marketing", "medical device manufacturing", "food production SEO",
    "electronics manufacturing websites", "pharmaceutical production marketing", "chemical manufacturing SEO", "textile manufacturing websites",
    
    // Intent-based keywords
    "best manufacturing website designers UK", "professional industrial websites", "manufacturing company online presence",
    "how to market manufacturing services", "B2B manufacturing lead generation", "factory tour systems", "manufacturing SEO experts",
    
    // Voice search & local
    "manufacturers near me", "industrial services in my area", "custom manufacturing Manchester", "factories Liverpool",
    "best manufacturers nearby", "local production services", "UK manufacturing companies", "industrial suppliers near me",
    
    // Technology & features
    "manufacturing process documentation", "quality certification display", "supply chain integration", "industrial equipment showcases",
    "production capacity calculators", "manufacturing CRM systems", "B2B order management", "industrial safety compliance"
  ]
};