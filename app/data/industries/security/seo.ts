import { securityFAQs } from "./faqs";

export const securitySEO = {
  description: "Web and marketing solutions for security firms and law enforcement to build trust and attract contracts.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Security Services Web Design & Marketing",
    description: "Professional websites for security companies, CCTV installers, and protection services. Build trust and win contracts with security-focused SEO.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "LocalBusiness",
    "@context": "https://schema.org",
    "name": "Security Services Web Design",
    "description": "Professional web design and digital marketing services for security companies and protection services",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Security Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/security",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": securityFAQs.map((faq: { q: string; a: string }) => ({
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
      { "@type": "Organization", "name": "Security company websites" },
      { "@type": "Organization", "name": "CCTV installer sites" },
      { "@type": "Organization", "name": "SEO for security firms" },
      { "@type": "Organization", "name": "Alarm company marketing" },
      { "@type": "Organization", "name": "Security booking systems" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Guardian Security" },
        "reviewBody": "Our new website helped us win more commercial contracts and improved our professional image."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "LocalBusiness",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Security Web Design",
    "description": "Professional websites for security companies, CCTV installers, and alarm specialists",
    "url": "https://kreativekommit.com/industries/security",
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
        "name": "Security",
        "item": "https://kreativekommit.com/industries/security"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Security Company Web Design Services",
    "description": "Professional websites for security firms, CCTV installers, and alarm companies. Build trust with security-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/security-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#dc2626"
  },
  
  keywords: [
    // Core security terms
    "security web design", "security company websites", "security SEO", "surveillance marketing", "protection service websites",
    
    // Service-specific keywords
    "CCTV installation websites", "alarm system marketing", "security guard SEO", "access control websites",
    "fire safety marketing", "cybersecurity SEO", "private investigation websites", "security consulting marketing",
    
    // Local security keywords
    "security companies Manchester", "CCTV Liverpool", "security services London", "alarm systems Birmingham",
    "security Chester", "surveillance Preston", "security Lancashire", "protection services Yorkshire",
    
    // Specialist security services
    "commercial security websites", "residential security marketing", "event security SEO", "retail security websites",
    "industrial security marketing", "corporate security SEO", "VIP protection websites", "security training marketing",
    
    // Intent-based keywords
    "best security website designers UK", "professional security websites", "security company online presence",
    "how to market security services", "security lead generation", "security quote systems", "surveillance SEO experts",
    
    // Voice search & local
    "security companies near me", "CCTV installers in my area", "alarm systems Manchester", "security Liverpool",
    "best security nearby", "local security services", "UK security companies", "security installation near me",
    
    // Technology & features
    "security system monitoring", "remote surveillance platforms", "access control integration", "security incident management",
    "threat assessment tools", "security compliance tracking", "emergency response systems", "security analytics platforms"
  ]
};