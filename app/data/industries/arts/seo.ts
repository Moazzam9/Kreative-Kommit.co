import { artsFAQs } from "./faqs";
export const artsSEO = {
  description: "Web and digital marketing for artists, galleries, and creative agencies to showcase portfolios and attract clients.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Arts & Creative Web Design Services",
    description: "Professional websites for artists, galleries, and creative agencies. Showcase your portfolio with arts-focused SEO and marketing.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "CreativeWork",
    "@context": "https://schema.org",
    "name": "Arts Web Design Services",
    "description": "Professional web design and digital marketing services for artists, galleries, and creative agencies",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "genre": "Visual Arts"
  },
  
  // Canonical URL pattern
  canonical: "/industries/arts",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": artsFAQs.map((faq: { q: string; a: string }) => ({
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
    "@type": "Organization",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Arts Web Design",
    "description": "Professional web design and digital marketing services for artists, galleries, and creative agencies",
    "url": "https://kreativekommit.com/industries/arts",
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
        "name": "Arts",
        "item": "https://kreativekommit.com/industries/arts"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Arts & Creative Web Design Services",
    "description": "Professional websites for artists, galleries, and creative agencies. Showcase your work with arts-focused SEO and digital marketing.",
    "image": "https://kreativekommit.com/images/industries/arts-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#8b5cf6"
  },
  
  keywords: [
    // Core arts terms
    "arts web design", "creative agency websites", "gallery SEO", "artist marketing", "creative websites",
    
    // Service-specific keywords
    "art gallery websites", "artist portfolio marketing", "creative studio SEO", "design agency websites",
    "museum websites", "exhibition marketing", "arts centre SEO", "cultural venue websites",
    
    // Local arts keywords
    "art galleries Manchester", "creative agencies Liverpool", "artists London", "arts Birmingham",
    "galleries Chester", "creative Preston", "arts Lancashire", "cultural Yorkshire",
    
    // Specialist arts services
    "contemporary art websites", "sculpture gallery marketing", "digital art SEO", "fine art websites",
    "street art marketing", "performance art SEO", "art education websites", "art therapy marketing",
    
    // Intent-based keywords
    "best arts website designers UK", "professional creative websites", "artist online presence",
    "how to market art business", "creative agency lead generation", "art portfolio platforms", "arts SEO experts",
    
    // Voice search & local
    "art galleries near me", "creative agencies in my area", "artists Manchester", "galleries Liverpool",
    "best art galleries nearby", "local creative services", "UK art galleries", "art exhibitions near me",
    
    // Technology & features
    "artist portfolio systems", "gallery exhibition platforms", "art e-commerce websites", "virtual gallery tours",
    "art collection management", "exhibition booking systems", "creative project portfolios", "art community platforms"
  ]
};