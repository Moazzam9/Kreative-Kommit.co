import { craftFAQs } from "./faqs";
export const craftSEO = {
  description: "Websites and marketing for craft makers, handmade goods, and artisan businesses to sell products and grow their brand.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Craft & Handmade Business Web Design Services",
    description: "Professional websites for craft makers and artisan businesses. Showcase your handmade products with craft-focused SEO and e-commerce.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "Store",
    "@context": "https://schema.org",
    "name": "Craft Web Design Services",
    "description": "Professional web design and e-commerce solutions for craft makers and artisan businesses",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "E-commerce Design"
  },
  
  // Canonical URL pattern
  canonical: "/industries/craft",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
    // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
    faqSchema: {
      "@type": "FAQPage",
      "@context": "https://schema.org",
      "mainEntity": craftFAQs.map((faq: { q: string; a: string }) => ({
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
      { "@type": "Store", "name": "Craft e-commerce websites" },
      { "@type": "Store", "name": "Handmade product photography" },
      { "@type": "Store", "name": "SEO for craft makers" },
      { "@type": "Store", "name": "Online craft workshops" },
      { "@type": "Store", "name": "Artisan brand development" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Handmade Haven" },
        "reviewBody": "Our new e-commerce site helped us sell our handmade crafts to customers across the UK."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "Store",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Craft Web Design",
    "description": "Professional e-commerce websites for craft makers and artisan businesses",
    "url": "https://kreativekommit.com/industries/craft",
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
        "name": "Craft",
        "item": "https://kreativekommit.com/industries/craft"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Craft & Handmade Business Web Design Services",
    "description": "Professional websites for craft makers and artisan businesses. Showcase your handmade products with craft-focused SEO and e-commerce.",
    "image": "https://kreativekommit.com/images/industries/craft-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#f59e0b"
  },
  
  keywords: [
    // Core craft terms
    "craft web design", "handmade websites", "artisan SEO", "craft business marketing", "creative websites",
    
    // Service-specific keywords
    "pottery studio websites", "jewellery making marketing", "woodworking SEO", "textile craft websites",
    "ceramics studio marketing", "glassblowing SEO", "metalworking websites", "leathercraft marketing",
    
    // Local craft keywords
    "craft studios Manchester", "artisans Liverpool", "makers London", "craft workshops Birmingham",
    "handmade Chester", "crafters Preston", "artisan Lancashire", "craft Yorkshire",
    
    // Specialist craft services
    "custom commissions websites", "craft workshop marketing", "artisan marketplace SEO", "handmade gifts websites",
    "craft supply marketing", "maker space SEO", "art restoration websites", "craft teaching marketing",
    
    // Intent-based keywords
    "best craft website designers UK", "professional artisan websites", "craft business online presence",
    "how to market craft business", "handmade product SEO", "craft e-commerce platforms", "artisan SEO experts",
    
    // Voice search & local
    "craft studios near me", "handmade goods in my area", "pottery classes Manchester", "craft workshops Liverpool",
    "best artisans nearby", "local craft services", "UK craft makers", "handmade products near me",
    
    // Technology & features
    "craft portfolio websites", "commission booking systems", "workshop scheduling platforms", "craft tutorial integration",
    "handmade product galleries", "craft process documentation", "artisan story platforms", "craft community networks"
  ]
};