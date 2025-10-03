import { foodFAQs } from "./faqs";

export const foodSEO = {
  description: "Web and marketing solutions for restaurants, cafes, and food brands to attract more customers online.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Restaurant & Food Business Web Design Services",
    description: "Professional websites for restaurants, cafes, and food businesses. Increase bookings and orders with food-focused SEO and online ordering.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "Restaurant",
    "@context": "https://schema.org",
    "name": "Food Business Web Design Services",
    "description": "Professional web design and digital marketing services for restaurants, cafes, and food businesses",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Food Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/food",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": foodFAQs.map((faq: { q: string; a: string }) => ({
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
      { "@type": "Restaurant", "name": "Restaurant websites" },


      { "@type": "Restaurant", "name": "Online ordering systems" },
      { "@type": "Restaurant", "name": "SEO for restaurants" },
      { "@type": "Restaurant", "name": "Menu management" },
      { "@type": "Restaurant", "name": "Reservation systems" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Bella Vista Restaurant" },
        "reviewBody": "Our new restaurant website helped us increase bookings and showcase our authentic Italian cuisine."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "Restaurant",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Restaurant Web Design",
    "description": "Professional websites for restaurants, cafes, and food businesses",
    "url": "https://kreativekommit.com/industries/food",
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
        "name": "Food",
        "item": "https://kreativekommit.com/industries/food"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Restaurant & Food Business Web Design Services",
    "description": "Professional websites for restaurants, cafes, and food businesses. Increase bookings and orders with restaurant-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/food-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#f97316"
  },
  
  keywords: [
    // Core food & beverage terms
    "food web design", "restaurant websites", "catering SEO", "food business marketing", "hospitality websites",
    
    // Service-specific keywords
    "restaurant booking systems", "food delivery platforms", "catering websites", "café marketing",
    "pub websites", "fine dining SEO", "fast food marketing", "food truck websites",
    
    // Local food keywords
    "restaurants Manchester", "catering Liverpool", "food businesses London", "cafés Birmingham",
    "pub Chester", "dining Preston", "restaurants Lancashire", "food services Yorkshire",
    
    // Food service types
    "takeaway websites", "meal delivery marketing", "wedding catering SEO", "corporate catering websites",
    "ghost kitchen marketing", "food manufacturing SEO", "organic food websites", "vegan restaurant marketing",
    
    // Intent-based keywords
    "best restaurant website designers UK", "professional food websites", "restaurant online presence",
    "how to market restaurant business", "food service lead generation", "restaurant reservation systems", "food SEO experts",
    
    // Voice search & local
    "restaurants near me", "food delivery in my area", "best restaurants Manchester", "catering Liverpool",
    "local restaurants nearby", "food services UK", "takeaway near me", "dining options Manchester",
    
    // Technology & features
    "online ordering systems", "restaurant POS integration", "food delivery apps", "menu management systems",
    "restaurant inventory software", "kitchen display systems", "food safety compliance", "allergen information systems"
  ]
};