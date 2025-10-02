export const healthcareSEO = {
  title: 'Healthcare & Medical Clinics | Kreative Kommit',
  description: 'Healthy online presence! We support clinics and healthcare providers with accessible, trustworthy websites and local SEO that brings in new patients.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Healthcare Web Design & Medical Marketing Services",
    description: "GDPR-compliant websites for medical clinics, GP practices, and healthcare providers. Boost patient acquisition with medical SEO.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "MedicalBusiness",
    "@context": "https://schema.org",
    "name": "Healthcare Web Design Services",
    "description": "Professional web design and digital marketing services for medical clinics and healthcare providers",
    "provider": {
      "@type": "Organization", 
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "medicalSpecialty": "General Practice"
  },
  
  // Canonical URL pattern
  canonical: "/industries/healthcare",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my clinic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website builds trust and makes it easy for patients to book appointments."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for healthcare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in local SEO for UK clinics and medical practices."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "MedicalBusiness", "name": "Clinic website design" },
      { "@type": "MedicalBusiness", "name": "Local SEO for healthcare" },
      { "@type": "MedicalBusiness", "name": "Online appointment booking" },
      { "@type": "MedicalBusiness", "name": "Content marketing for clinics" },
      { "@type": "MedicalBusiness", "name": "Patient portal development" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "City Clinic" },
        "reviewBody": "Our bookings and patient trust soared after our new website launch."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "MedicalBusiness",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Healthcare Web Design",
    "description": "GDPR compliant web design and digital marketing services for medical clinics and healthcare providers",
    "url": "https://kreativekommit.com/industries/healthcare",
    "areaServed": ["Manchester", "Liverpool", "Birmingham", "London", "Chester", "Preston", "Lancashire", "Yorkshire"],
    "serviceArea": "United Kingdom",
    "priceRange": "£££",
    "medicalSpecialty": "General Practice"
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
        "name": "Healthcare",
        "item": "https://kreativekommit.com/industries/healthcare"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Healthcare Web Design & Medical Marketing Services",
    "description": "GDPR-compliant websites for medical clinics, GP practices, and healthcare providers. Boost patient acquisition with medical SEO.",
    "image": "https://kreativekommit.com/images/industries/healthcare-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#3b82f6"
  },
  
  keywords: [
    // Core healthcare terms
    'healthcare web design', 'medical clinic websites', 'healthcare SEO', 'medical practice marketing', 'clinic website design',
    
    // Service-specific keywords
    'GP practice websites', 'private clinic marketing', 'medical appointment booking systems', 'patient portal development',
    'healthcare CRM websites', 'medical directory listings', 'telemedicine website design', 'medical practice management',
    
    // Local healthcare keywords
    'medical clinics Manchester', 'healthcare SEO Liverpool', 'GP practices London', 'clinic marketing Birmingham',
    'healthcare websites Chester', 'medical SEO Preston', 'clinic websites Lancashire', 'healthcare marketing Yorkshire',
    
    // Specialist medical services
    'physiotherapy clinic websites', 'dental practice marketing', 'optometry clinic SEO', 'mental health practice websites',
    'dermatology clinic marketing', 'cardiology practice websites', 'paediatric clinic SEO', 'orthopedic practice marketing',
    
    // Intent-based keywords
    'best medical website designers UK', 'professional healthcare websites', 'medical practice online presence',
    'how to market medical clinic', 'healthcare lead generation', 'patient acquisition websites', 'medical SEO experts',
    
    // Voice search & local
    'medical clinics near me', 'GP practices in my area', 'healthcare services nearby', 'private clinics near me',
    'best doctors Manchester', 'medical specialists Liverpool', 'healthcare providers UK', 'clinic appointments online',
    
    // Compliance & accessibility
    'GDPR compliant medical websites', 'accessible healthcare websites', 'NHS compliant websites', 'medical website accessibility',
    'healthcare data protection', 'patient confidentiality websites', 'medical website security', 'healthcare compliance marketing'
  ]
};