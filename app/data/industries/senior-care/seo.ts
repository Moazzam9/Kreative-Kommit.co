import { seniorCareFAQs } from './faqs';

export const seniorCareSEO = {
  description: "Web and digital solutions for senior care, assisted living, and home care providers to build trust and attract families.",

  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Senior Care & Assisted Living Web Design Services",
    description: "Professional websites for care homes and senior care providers. Build trust with families through senior care-focused SEO and marketing.",
    type: "website",
    locale: "en_GB"
  },

  // Structured data for rich snippets
  schema: {
    "@type": "MedicalBusiness",
    "@context": "https://schema.org",
    "name": "Senior Care Web Design Services",
    "description": "Professional web design and digital marketing services for senior care and assisted living providers",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Senior Care"
  },

  // Canonical URL pattern
  canonical: "/industries/senior-care",

  // Advanced SEO Phase 3 enhancements

  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  get faqSchema() {
    return {
      "@type": "FAQPage",
      "@context": "https://schema.org",
      "mainEntity": seniorCareFAQs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "Organization", "name": "Care home websites" },
      { "@type": "Organization", "name": "Senior living platforms" },
      { "@type": "Organization", "name": "SEO for care providers" },
      { "@type": "Organization", "name": "Family portals" },
      { "@type": "Organization", "name": "Care facility marketing" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Comfort Care Home" },
        "reviewBody": "Our new website helped families find us and learn about our caring approach to senior care services."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "LocalBusiness",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Senior Care Web Design",
    "description": "Professional websites for care homes, nursing facilities, and senior care providers",
    "url": "https://kreativekommit.com/industries/senior-care",
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
        "name": "Senior Care",
        "item": "https://kreativekommit.com/industries/senior-care"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Senior Care & Nursing Home Web Design Services",
    "description": "Professional websites for care homes and senior care providers. Build trust with families through compassionate care-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/senior-care-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#16a34a"
  },
  
  keywords: [
    // Core senior care terms
    "senior care web design", "care home websites", "elderly care SEO", "senior care marketing", "assisted living websites",
    
    // Service-specific keywords
    "nursing home websites", "home care marketing", "dementia care SEO", "respite care websites",
    "live-in care marketing", "day care centres SEO", "palliative care websites", "rehabilitation services marketing",
    
    // Local senior care keywords
    "care homes Manchester", "senior care Liverpool", "elderly care London", "nursing homes Birmingham",
    "care services Chester", "senior care Preston", "care homes Lancashire", "elderly care Yorkshire",
    
    // Specialist care services
    "alzheimer's care websites", "parkinson's care marketing", "stroke rehabilitation SEO", "mental health care websites",
    "mobility care marketing", "continence care SEO", "medication management websites", "social care marketing",
    
    // Intent-based keywords
    "best care home website designers UK", "professional senior care websites", "care provider online presence",
    "how to market care services", "care home lead generation", "care assessment systems", "senior care SEO experts",
    
    // Voice search & local
    "care homes near me", "senior care in my area", "nursing homes Manchester", "elderly care Liverpool",
    "best care homes nearby", "local care services", "UK care providers", "home care services near me",
    
    // Technology & features
    "care management systems", "resident monitoring platforms", "family communication portals", "care planning software",
    "medication tracking systems", "health record management", "emergency alert systems", "care quality monitoring"
  ]
};