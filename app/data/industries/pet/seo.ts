import { petFAQs } from "./faqs";

export const petSEO = {
  description: "Web and marketing solutions for pet care, grooming, and veterinary businesses to reach more pet owners.",

  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Pet Services & Veterinary Web Design",
    description: "Professional websites for pet groomers, veterinarians, and pet care businesses. Attract pet owners with pet-focused SEO and online booking.",
    type: "website",
    locale: "en_GB"
  },

  // Structured data for rich snippets
  schema: {
    "@type": "VeterinaryCare",
    "@context": "https://schema.org",
    "name": "Pet Services Web Design",
    "description": "Professional web design and digital marketing services for pet care and veterinary businesses",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Pet Care"
  },

  // Canonical URL pattern
  canonical: "/industries/pet",

  // Advanced SEO Phase 3 enhancements

  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": petFAQs.map((faq: { q: string; a: string }) => ({
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
      { "@type": "Store", "name": "Pet shop websites" },
      { "@type": "Store", "name": "Veterinary clinic sites" },
      { "@type": "Store", "name": "SEO for pet businesses" },
      { "@type": "Store", "name": "Pet grooming booking" },
      { "@type": "Store", "name": "Animal care platforms" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Happy Paws Pet Shop" },
        "reviewBody": "Our new website helped us connect with more pet owners and grow our local customer base."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "Store",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Pet Business Web Design",
    "description": "Professional websites for pet shops, veterinary clinics, and pet care services",
    "url": "https://kreativekommit.com/industries/pet",
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
        "name": "Pet",
        "item": "https://kreativekommit.com/industries/pet"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Pet Business Web Design Services",
    "description": "Professional websites for pet shops, veterinary clinics, and pet care services. Connect with pet owners through pet-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/pet-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#f97316"
  },
  
  keywords: [
    // Core pet services terms
    "pet services web design", "veterinary websites", "pet grooming SEO", "pet care marketing", "animal services websites",
    
    // Service-specific keywords
    "dog grooming websites", "cat grooming marketing", "pet sitting SEO", "dog walking websites",
    "pet boarding marketing", "veterinary clinic websites", "pet training SEO", "pet daycare marketing",
    
    // Local pet services keywords
    "vets Manchester", "pet grooming Liverpool", "dog walking London", "pet services Birmingham",
    "veterinary Chester", "pet care Preston", "animal services Lancashire", "pet grooming Yorkshire",
    
    // Specialist pet services
    "exotic pet veterinary", "emergency vet websites", "pet behaviorist marketing", "pet photography SEO",
    "mobile pet grooming", "pet food delivery", "pet insurance websites", "animal rescue marketing",
    
    // Intent-based keywords
    "best pet website designers UK", "professional veterinary websites", "pet business online presence",
    "how to market pet services", "pet service lead generation", "veterinary booking systems", "pet care SEO experts",
    
    // Voice search & local
    "vets near me", "pet grooming in my area", "dog walkers Manchester", "pet services Liverpool",
    "best vets nearby", "local pet care services", "emergency vet UK", "pet boarding near me",
    
    // Technology & features
    "pet appointment booking", "veterinary practice management", "pet health tracking", "pet owner portals",
    "pet vaccination reminders", "veterinary telemedicine", "pet insurance integration", "pet care apps"
  ]
};