export const recruitmentSEO = {
  description: "Web and digital solutions for recruitment and staffing agencies to attract employers and job seekers.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Recruitment & Staffing Agency Web Design Services",
    description: "Professional websites for recruitment agencies and HR consultancies. Attract top talent and employers with recruitment-focused SEO.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "EmploymentAgency",
    "@context": "https://schema.org",
    "name": "Recruitment Web Design Services",
    "description": "Professional web design and digital marketing services for recruitment agencies and staffing companies",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Employment Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/recruitment",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my recruitment business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website attracts both candidates and employers, streamlining your recruitment process."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for recruitment agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in SEO for UK recruitment agencies and job boards."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "Organization", "name": "Recruitment agency websites" },
      { "@type": "Organization", "name": "Job board platforms" },
      { "@type": "Organization", "name": "SEO for recruiters" },
      { "@type": "Organization", "name": "Candidate management systems" },
      { "@type": "Organization", "name": "Employer portals" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Elite Recruitment" },
        "reviewBody": "Our new website helped us attract better candidates and win more clients in competitive sectors."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "LocalBusiness",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Recruitment Web Design",
    "description": "Professional websites for recruitment agencies, job boards, and HR consultancies",
    "url": "https://kreativekommit.com/industries/recruitment",
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
        "name": "Recruitment",
        "item": "https://kreativekommit.com/industries/recruitment"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Recruitment Agency Web Design Services",
    "description": "Professional websites for recruitment agencies and job boards. Attract top talent and clients with recruitment-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/recruitment-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#0ea5e9"
  },
  
  keywords: [
    // Core recruitment terms
    "recruitment web design", "staffing agency websites", "recruitment SEO", "HR consultancy marketing", "employment agency websites",
    
    // Service-specific keywords
    "executive search websites", "temp agency marketing", "permanent recruitment SEO", "contractor staffing websites",
    "graduate recruitment marketing", "specialist recruitment SEO", "headhunting service websites", "talent acquisition marketing",
    
    // Local recruitment keywords
    "recruitment Manchester", "staffing agencies Liverpool", "job agencies London", "recruitment Birmingham",
    "employment Chester", "staffing Preston", "recruitment Lancashire", "job agencies Yorkshire",
    
    // Industry-specific recruitment
    "IT recruitment websites", "healthcare staffing marketing", "finance recruitment SEO", "construction staffing websites",
    "engineering recruitment marketing", "sales recruitment SEO", "marketing recruitment websites", "legal staffing marketing",
    
    // Intent-based keywords
    "best recruitment website designers UK", "professional staffing websites", "recruitment agency online presence",
    "how to market recruitment services", "recruitment lead generation", "candidate management systems", "staffing SEO experts",
    
    // Voice search & local
    "recruitment agencies near me", "job agencies in my area", "staffing Manchester", "recruitment Liverpool",
    "best recruitment nearby", "local employment agencies", "UK staffing companies", "job opportunities near me",
    
    // Technology & features
    "applicant tracking systems", "candidate database management", "job portal integration", "recruitment CRM platforms",
    "automated candidate screening", "video interview platforms", "recruitment analytics tools", "talent pipeline management"
  ]
};