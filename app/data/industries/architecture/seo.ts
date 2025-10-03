import { architectureFAQs } from "./faqs";

export const architectureSEO = {
  description: "Web and branding solutions for architects and interior designers to showcase portfolios and attract new clients.",

  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Architecture & Interior Design Web Design Services",
    description: "Professional portfolio websites for architects and interior designers. Showcase your projects with architecture-focused SEO and marketing.",
    type: "website",
    locale: "en_GB"
  },

  // Structured data for rich snippets
  schema: {
    "@type": "ProfessionalService",
    "@context": "https://schema.org",
    "name": "Architecture Web Design Services",
    "description": "Professional web design and digital marketing services for architects and interior designers",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Architectural Services"
  },

  // Canonical URL pattern
  canonical: "/industries/architecture",

  // Advanced SEO Phase 3 enhancements

  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": architectureFAQs.map((faq: { q: string; a: string }) => ({
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
      { "@type": "Organization", "name": "Architecture firm websites" },
      { "@type": "Organization", "name": "Portfolio showcase sites" },
      { "@type": "Organization", "name": "SEO for architects" },
      { "@type": "Organization", "name": "Project management portals" },
      { "@type": "Organization", "name": "Client collaboration tools" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Modern Design Architects" },
        "reviewBody": "Our new portfolio website helped us showcase our work and attract higher-value architectural projects."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "Organization",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Architecture Web Design",
    "description": "Professional websites for architects and architectural firms",
    "url": "https://kreativekommit.com/industries/architecture",
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
        "name": "Architecture",
        "item": "https://kreativekommit.com/industries/architecture"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Architecture Firm Web Design Services",
    "description": "Professional websites for architects and architectural firms. Showcase your portfolio and win projects with architecture-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/architecture-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#0ea5e9"
  },
  
  keywords: [
    // Core architecture terms
    "architecture web design", "architect websites", "architecture SEO", "design firm marketing", "architectural services websites",
    
    // Service-specific keywords
    "residential architect websites", "commercial architecture marketing", "interior design SEO", "planning consultancy websites",
    "structural engineering marketing", "landscape architecture SEO", "architectural visualisation websites", "building design marketing",
    
    // Local architecture keywords
    "architects Manchester", "architecture Liverpool", "design firms London", "architects Birmingham",
    "planning consultants Chester", "architecture Preston", "architects Lancashire", "design services Yorkshire",
    
    // Specialist architecture services
    "sustainable architecture websites", "heritage building restoration", "passive house design marketing", "BIM services SEO",
    "architectural 3D visualisation", "planning permission services", "building regulations consultancy", "accessibility design websites",
    
    // Intent-based keywords
    "best architecture website designers UK", "professional architect websites", "architecture firm online presence",
    "how to market architecture services", "architectural lead generation", "architect portfolio websites", "design firm SEO experts",
    
    // Voice search & local
    "architects near me", "architecture firms in my area", "house architects Manchester", "design consultants Liverpool",
    "best architects nearby", "local architecture services", "residential architects UK", "planning consultants near me",
    
    // Technology & features
    "architectural portfolio systems", "project management integration", "CAD file sharing platforms", "client collaboration tools",
    "3D visualisation galleries", "planning application tracking", "architectural CRM systems", "design process documentation"
  ]
};