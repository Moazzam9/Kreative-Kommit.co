import { beautyFAQs } from "./faqs";
export const beautySEO = {
  description: "Expert digital solutions for the beauty industry, helping salons, spas, and brands grow their online presence.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Beauty & Wellness Web Design Services",
    description: "Professional websites for salons, spas, and beauty businesses. Attract more clients with beauty-focused SEO and online booking systems.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "BeautySalon",
    "@context": "https://schema.org",
    "name": "Beauty Web Design Services",
    "description": "Professional web design and digital marketing services for beauty salons, spas, and wellness businesses",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Beauty Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/beauty",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": beautyFAQs.map(faq => ({
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
      { "@type": "BeautySalon", "name": "Beauty salon websites" },
      { "@type": "BeautySalon", "name": "Spa booking systems" },
      { "@type": "BeautySalon", "name": "SEO for beauty businesses" },
      { "@type": "BeautySalon", "name": "Cosmetic e-commerce" },
      { "@type": "BeautySalon", "name": "Beauty portfolio sites" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Luxe Beauty Spa" },
        "reviewBody": "Our new beauty website helped us attract more clients and streamlined our appointment booking process."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "BeautySalon",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Beauty Web Design",
    "description": "Professional websites for beauty salons, spas, and cosmetic businesses",
    "url": "https://kreativekommit.com/industries/beauty",
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
        "name": "Beauty",
        "item": "https://kreativekommit.com/industries/beauty"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Beauty Salon & Spa Web Design Services",
    "description": "Professional websites for beauty salons, spas, and cosmetic businesses. Attract clients with beauty-focused SEO and online booking systems.",
    "image": "https://kreativekommit.com/images/industries/beauty-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#ec4899"
  },
  
  keywords: [
    // Core beauty & spa terms
    "beauty web design", "salon websites", "spa SEO", "beauty marketing", "wellness websites",
    
    // Service-specific keywords
    "hair salon websites", "beauty salon marketing", "nail salon SEO", "spa booking systems",
    "aesthetics clinic websites", "massage therapy marketing", "beauty treatment SEO", "wellness centre websites",
    
    // Local beauty keywords
    "salons Manchester", "spas Liverpool", "beauty treatments London", "hair salons Birmingham",
    "nail salons Chester", "beauty Preston", "spas Lancashire", "beauty services Yorkshire",
    
    // Specialist beauty services
    "bridal makeup websites", "microblading marketing", "botox clinic SEO", "laser treatment websites",
    "permanent makeup marketing", "skincare clinic SEO", "holistic therapy websites", "beauty training marketing",
    
    // Intent-based keywords
    "best beauty website designers UK", "professional salon websites", "beauty business online presence",
    "how to market beauty services", "salon lead generation", "beauty booking systems", "spa marketing experts",
    
    // Voice search & local
    "salons near me", "beauty treatments in my area", "hair salons Manchester", "spas Liverpool",
    "best beauty salons nearby", "local spa services", "nail salons UK", "beauty treatments near me",
    
    // Technology & features
    "salon booking software", "beauty appointment systems", "treatment management platforms", "client consultation forms",
    "beauty product e-commerce", "loyalty program integration", "beauty CRM systems", "treatment progress tracking"
  ]
};