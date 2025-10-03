import { coachingFAQs } from "./faqs";

export const coachingSEO = {
  description: "Websites and digital marketing for personal coaches, consultants, and trainers to attract and convert clients.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Coaching & Consulting Web Design Services",
    description: "Professional websites for coaches and consultants. Attract clients and showcase expertise with coaching-focused SEO and client testimonials.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "ProfessionalService",
    "@context": "https://schema.org",
    "name": "Coaching Web Design Services",
    "description": "Professional web design and digital marketing services for coaches and consultants",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Coaching Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/coaching",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": coachingFAQs.map((faq: { q: string; a: string }) => ({
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
      { "@type": "Person", "name": "Coach websites" },
      { "@type": "Person", "name": "Personal trainer sites" },
      { "@type": "Person", "name": "SEO for coaches" },
      { "@type": "Person", "name": "Booking systems" },
      { "@type": "Person", "name": "Client portals" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah Life Coach" },
        "reviewBody": "My new coaching website helped me attract more clients and showcase my transformation programs."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "Person",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Coach Web Design",
    "description": "Professional websites for coaches, trainers, and personal development professionals",
    "url": "https://kreativekommit.com/industries/coaching",
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
        "name": "Coaching",
        "item": "https://kreativekommit.com/industries/coaching"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Coach & Personal Trainer Web Design Services",
    "description": "Professional websites for coaches, trainers, and personal development professionals. Build your coaching practice with coach-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/coaching-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#16a34a"
  },
  
  keywords: [
    // Core coaching terms
    "coaching web design", "consultant websites", "coaching SEO", "personal development marketing", "business coach websites",
    
    // Service-specific keywords
    "life coach websites", "business coaching marketing", "executive coach SEO", "career coach websites",
    "wellness coach marketing", "performance coach SEO", "mindset coach websites", "relationship coach marketing",
    
    // Local coaching keywords
    "coaches Manchester", "consultants Liverpool", "coaching London", "personal development Birmingham",
    "life coaches Chester", "coaching Preston", "consultants Lancashire", "coaching Yorkshire",
    
    // Specialist coaching services
    "leadership coaching websites", "health coaching marketing", "financial coaching SEO", "spiritual coaching websites",
    "productivity coaching marketing", "confidence coaching SEO", "divorce coaching websites", "parenting coach marketing",
    
    // Intent-based keywords
    "best coaching website designers UK", "professional consultant websites", "coach online presence",
    "how to market coaching services", "coaching client acquisition", "coach booking systems", "coaching SEO experts",
    
    // Voice search & local
    "life coaches near me", "business consultants in my area", "coaches Manchester", "consultants Liverpool",
    "best coaches nearby", "local coaching services", "UK business coaches", "personal development near me",
    
    // Technology & features
    "coaching session booking", "client progress tracking", "coaching assessment tools", "virtual coaching platforms",
    "coaching program delivery", "client communication systems", "coaching analytics tools", "outcome measurement platforms"
  ]
};