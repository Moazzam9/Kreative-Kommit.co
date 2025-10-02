export const educationSEO = {
  title: 'Education & Tutoring | Kreative Kommit',
  description: 'Make learning visible! We help schools, tutors, and educators connect with students and parents through engaging websites and smart search strategies.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Education Web Design & School Marketing Services",
    description: "Professional websites for schools, tutors, and educational institutions. Increase enrollment with education-focused SEO and digital marketing.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "EducationalOrganization",
    "@context": "https://schema.org",
    "name": "Education Web Design Services",
    "description": "Professional web design and digital marketing services for schools, tutors, and educational institutions",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "educationalCredentialAwarded": "Various"
  },
  
  // Canonical URL pattern
  canonical: "/industries/education",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my tutoring business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website builds trust and helps you attract more students."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for schools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in SEO for UK schools and tutors."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "EducationalOrganization", "name": "School website design" },
      { "@type": "EducationalOrganization", "name": "SEO for tutors" },
      { "@type": "EducationalOrganization", "name": "Online course platforms" },
      { "@type": "EducationalOrganization", "name": "Content marketing for education" },
      { "@type": "EducationalOrganization", "name": "Parent/student portals" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Smart Tutors" },
        "reviewBody": "Our new website brought in more students and made bookings easy."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "EducationalOrganization",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Education Web Design",
    "description": "Professional web design and digital marketing services for schools, tutors, and educational institutions",
    "url": "https://kreativekommit.com/industries/education",
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
        "name": "Education",
        "item": "https://kreativekommit.com/industries/education"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Education Web Design & School Marketing Services",
    "description": "Professional websites for schools, tutors, and educational institutions. Increase enrollment with education-focused SEO and digital marketing.",
    "image": "https://kreativekommit.com/images/industries/education-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#8b5cf6"
  },
  
  keywords: [
    // Core education terms
    'education web design', 'school websites', 'tutoring SEO', 'education marketing', 'tutor website design',
    
    // Service-specific keywords
    'private school websites', 'tutoring business marketing', 'online learning platforms', 'education booking systems',
    'school management websites', 'educational resource websites', 'e-learning platform development', 'student portal websites',
    
    // Local education keywords
    'tutoring services Manchester', 'school websites Liverpool', 'education SEO London', 'tutor marketing Birmingham',
    'private schools Chester', 'education websites Preston', 'tutoring SEO Lancashire', 'school marketing Yorkshire',
    
    // Subject-specific tutoring
    'maths tutor websites', 'english tutoring marketing', 'science tutor SEO', 'language learning websites',
    'music lesson websites', 'driving instructor marketing', 'art class websites', 'coding tutor marketing',
    
    // Education levels
    'primary school websites', 'secondary school marketing', 'university websites', 'college marketing',
    'nursery school websites', 'sixth form marketing', 'adult education websites', 'vocational training marketing',
    
    // Intent-based keywords
    'best education website designers UK', 'professional school websites', 'tutoring business online presence',
    'how to market tutoring services', 'education lead generation', 'student enrollment websites', 'education SEO experts',
    
    // Voice search & local
    'tutors near me', 'private schools in my area', 'maths tutors Manchester', 'english tutors Liverpool',
    'best schools nearby', 'local tutoring services', 'education providers UK', 'online tutoring platforms',
    
    // Specialised education
    'SEN school websites', 'special needs education marketing', 'homeschool resources websites', 'exam preparation tutoring',
    'GCSE tutor marketing', 'A-level tutoring websites', '11+ preparation marketing', 'university admissions consulting'
  ]
};