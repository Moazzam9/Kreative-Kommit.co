import { ecommerceFAQs } from "./faqs";
export const ecommerceSEO = {
  title: 'E-commerce & Online Retail | Kreative Kommit',
  description: 'Sell more online! We build fast, secure, and conversion-focused e-commerce sites with SEO that brings shoppers straight to your store.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "E-commerce Web Design & Online Store Development",
    description: "Professional e-commerce websites that convert. Shopify, WooCommerce & custom online stores with SEO that drives sales.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "Store",
    "@context": "https://schema.org",
    "name": "E-commerce Web Design Services",
    "description": "Professional e-commerce development and digital marketing services for online retailers",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "E-commerce Development"
  },
  
  // Canonical URL pattern
  canonical: "/industries/e-commerce",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": ecommerceFAQs.map((faq: { q: string; a: string }) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  },
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "Store", "name": "E-commerce website design" },
      { "@type": "Store", "name": "SEO for online stores" },
      { "@type": "Store", "name": "Conversion optimization" },
      { "@type": "Store", "name": "Product photography" },
      { "@type": "Store", "name": "Content marketing for retail" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "ShopSmart" },
        "reviewBody": "Our new site and SEO strategy brought in more customers than ever."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "Store",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - E-commerce Web Design",
    "description": "Professional e-commerce development and digital marketing services for online retailers",
    "url": "https://kreativekommit.com/industries/e-commerce",
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
        "name": "E-commerce",
        "item": "https://kreativekommit.com/industries/e-commerce"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "E-commerce Web Design & Online Store Development",
    "description": "Professional e-commerce websites that convert. Shopify, WooCommerce & custom online stores with SEO that drives sales.",
    "image": "https://kreativekommit.com/images/industries/ecommerce-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#ec4899"
  },
  
  keywords: [
    // Core e-commerce terms
    'e-commerce web design', 'online store development', 'e-commerce SEO', 'online retail marketing', 'e-commerce websites',
    
    // Platform-specific keywords
    'Shopify web design', 'WooCommerce development', 'Magento websites', 'BigCommerce SEO', 'PrestaShop development',
    'custom e-commerce platforms', 'headless commerce websites', 'marketplace integration', 'multi-channel e-commerce',
    
    // Local e-commerce keywords
    'e-commerce Manchester', 'online stores Liverpool', 'e-commerce SEO London', 'retail websites Birmingham',
    'online shop development Chester', 'e-commerce marketing Preston', 'retail SEO Lancashire', 'online stores Yorkshire',
    
    // Product-specific e-commerce
    'fashion e-commerce websites', 'electronics online stores', 'food delivery platforms', 'handmade product websites',
    'subscription box websites', 'wholesale e-commerce platforms', 'B2B online stores', 'dropshipping websites',
    
    // Intent-based keywords
    'best e-commerce developers UK', 'professional online stores', 'e-commerce conversion optimisation',
    'how to sell online UK', 'e-commerce website designers', 'online retail experts', 'e-commerce growth marketing',
    
    // Voice search & mobile
    'mobile e-commerce websites', 'responsive online stores', 'e-commerce app development', 'mobile shopping platforms',
    'voice commerce integration', 'progressive web apps e-commerce', 'mobile-first online stores',
    
    // Technology & features
    'payment gateway integration', 'inventory management systems', 'e-commerce analytics', 'abandoned cart recovery',
    'product recommendation engines', 'e-commerce personalisation', 'omnichannel retail platforms', 'social commerce integration'
  ]
};