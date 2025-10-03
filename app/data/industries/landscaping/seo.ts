import { landscapingFAQs } from "./faqs";

export const landscapingSEO = {
  description: "Websites and marketing for landscapers and gardening businesses to grow their client base and showcase projects.",

  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Landscaping & Garden Design Web Services",
    description: "Professional websites for landscapers and garden designers. Showcase your outdoor projects with landscaping-focused SEO and marketing.",
    type: "website",
    locale: "en_GB"
  },

  // Structured data for rich snippets
  schema: {
    "@type": "HomeAndConstructionBusiness",
    "@context": "https://schema.org",
    "name": "Landscaping Web Design Services",
    "description": "Professional web design and digital marketing services for landscapers and garden design businesses",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Landscaping Services"
  },

  // Canonical URL pattern
  canonical: "/industries/landscaping",

  // Advanced SEO Phase 3 enhancements

  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": landscapingFAQs.map((faq: { q: string; a: string }) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  },

  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "Service", "name": "Custom landscaping websites" },
      { "@type": "Service", "name": "Project gallery integration" },
      { "@type": "Service", "name": "SEO for local landscapers" },
      { "@type": "Service", "name": "Online quote forms" },
      { "@type": "Service", "name": "Branding & logo design" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Garden Makeover" },
        "reviewBody": "The new website brought in more landscaping projects!"
      },
      {
        "@type": "Review", 
        "author": { "@type": "Organization", "name": "Lawn Care Leads" },
        "reviewBody": "SEO helped us reach more local clients."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "LocalBusiness",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Landscaping Web Design",
    "description": "Professional web design and digital marketing services for landscaping businesses",
    "url": "https://kreativekommit.com/industries/landscaping",
    "areaServed": ["Manchester", "Liverpool", "Birmingham", "London", "Chester", "Preston", "Lancashire", "Yorkshire"],
    "serviceArea": "United Kingdom",
    "priceRange": "££",
    "telephone": "+44-XXX-XXX-XXXX"
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
        "name": "Landscaping",
        "item": "https://kreativekommit.com/industries/landscaping"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit", 
    "title": "Landscaping & Garden Design Web Services",
    "description": "Professional websites for landscapers and garden designers. Showcase your outdoor projects with landscaping-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/landscaping-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#10b981"
  },
  
  keywords: [
    // Core landscaping terms
    "landscaping web design", "garden design websites", "landscaping SEO", "groundworks marketing", "outdoor services websites",
    
    // Service-specific keywords
    "garden maintenance websites", "tree surgery marketing", "paving contractor SEO", "fence installation websites",
    "artificial grass marketing", "driveway installation SEO", "garden clearance websites", "hedge cutting marketing",
    
    // Local landscaping keywords
    "landscapers Manchester", "garden designers Liverpool", "groundworks London", "landscaping Birmingham",
    "tree surgeons Chester", "gardeners Preston", "landscaping Lancashire", "garden services Yorkshire",
    
    // Specialist services
    "commercial landscaping websites", "residential garden design", "sports ground maintenance", "ecological landscaping marketing",
    "hard landscaping SEO", "soft landscaping websites", "garden lighting installation", "irrigation system marketing",
    
    // Intent-based keywords
    "best landscaping website designers UK", "professional garden websites", "landscaping business online presence",
    "how to market landscaping services", "garden design lead generation", "landscaping quote systems", "groundworks SEO experts",
    
    // Voice search & local
    "landscapers near me", "garden designers in my area", "tree surgeons Manchester", "gardeners Liverpool",
    "best landscaping nearby", "local garden services", "groundworks contractors UK", "landscaping services near me",
    
    // Technology & features
    "landscape design software", "garden planning tools", "before/after project galleries", "seasonal maintenance scheduling",
    "plant care databases", "landscaping project management", "garden maintenance apps", "outdoor lighting systems"
  ]
};