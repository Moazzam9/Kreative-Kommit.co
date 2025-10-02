export const dentalSEO = {
  description: "Websites and digital marketing for dental practices to attract new patients and build trust online.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Dental Practice Web Design & Marketing Services",
    description: "GDC compliant websites for dentists and dental practices. Attract new patients and build trust with dental-focused SEO and online booking.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "DentistClinic",
    "@context": "https://schema.org",
    "name": "Dental Web Design Services",
    "description": "Professional web design and digital marketing services for dental practices and dentists",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Dental Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/dental",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my dental practice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website helps patients find your practice and book appointments for dental care."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for dentists?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in local SEO for UK dental practices and oral health professionals."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "Dentist", "name": "Dental practice websites" },
      { "@type": "Dentist", "name": "Patient booking systems" },
      { "@type": "Dentist", "name": "SEO for dentists" },
      { "@type": "Dentist", "name": "Treatment showcases" },
      { "@type": "Dentist", "name": "Patient portals" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Smile Dental Practice" },
        "reviewBody": "Our new dental website helped us attract more patients and showcase our modern treatment options."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "Dentist",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Dental Web Design",
    "description": "Professional websites for dental practices and oral health professionals",
    "url": "https://kreativekommit.com/industries/dental",
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
        "name": "Dental",
        "item": "https://kreativekommit.com/industries/dental"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Dental Practice Web Design Services",
    "description": "Professional websites for dental practices and oral health professionals. Attract patients with dental-focused SEO and appointment booking systems.",
    "image": "https://kreativekommit.com/images/industries/dental-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#0ea5e9"
  },
  
  keywords: [
    // Core dental terms
    "dental web design", "dentist websites", "dental practice SEO", "dental marketing", "oral health websites",
    
    // Service-specific keywords
    "cosmetic dentist websites", "orthodontic practice marketing", "dental implant SEO", "teeth whitening websites",
    "private dentist marketing", "NHS dentist SEO", "emergency dentist websites", "pediatric dentist marketing",
    
    // Local dental keywords
    "dentists Manchester", "dental practices Liverpool", "dentists London", "oral health Birmingham",
    "dental clinics Chester", "dentistry Preston", "dentists Lancashire", "dental services Yorkshire",
    
    // Specialist dental services
    "dental surgery websites", "periodontal treatment marketing", "root canal specialist SEO", "oral surgery websites",
    "dental hygienist marketing", "sedation dentistry SEO", "invisalign provider websites", "dental emergency services",
    
    // Intent-based keywords
    "best dental website designers UK", "professional dentist websites", "dental practice online presence",
    "how to market dental services", "dental patient acquisition", "dentist booking systems", "dental SEO experts",
    
    // Voice search & local
    "dentists near me", "dental practices in my area", "emergency dentist Manchester", "cosmetic dentist Liverpool",
    "best dentists nearby", "local dental services", "NHS dentist UK", "dental appointments near me",
    
    // Technology & features
    "dental appointment booking", "patient record systems", "dental treatment planning", "oral health education platforms",
    "dental insurance integration", "before/after smile galleries", "dental CRM systems", "teledentistry platforms"
  ]
};