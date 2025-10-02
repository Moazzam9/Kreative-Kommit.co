export const financialSEO = {
  title: 'Financial Services | Kreative Kommit',
  description: 'Build trust and grow! We help accountants, insurance brokers, and financial advisors win clients with professional websites and SEO.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Financial Services Web Design & Marketing",
    description: "FCA compliant websites for accountants, financial advisors, and insurance brokers. Build trust and generate leads with professional SEO.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "FinancialService",
    "@context": "https://schema.org",
    "name": "Financial Services Web Design",
    "description": "Professional web design and digital marketing services for financial advisors, accountants, and insurance brokers",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Financial Planning"
  },
  
  // Canonical URL pattern
  canonical: "/industries/financial",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my financial services firm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website builds trust and helps attract new clients in the financial sector."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer FCA compliant websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we ensure all financial services websites meet FCA compliance requirements."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "FinancialService", "name": "Financial advisor websites" },
      { "@type": "FinancialService", "name": "FCA compliant design" },
      { "@type": "FinancialService", "name": "SEO for financial services" },
      { "@type": "FinancialService", "name": "Lead generation systems" },
      { "@type": "FinancialService", "name": "Client portal development" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Sterling Finance" },
        "reviewBody": "Our new website helped us attract more high-value clients and build trust."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "FinancialService",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Financial Services Web Design",
    "description": "FCA compliant websites for financial advisors, accountants, and insurance brokers",
    "url": "https://kreativekommit.com/industries/financial",
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
        "name": "Financial Services",
        "item": "https://kreativekommit.com/industries/financial"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Financial Services Web Design & Marketing",
    "description": "FCA compliant websites for accountants, financial advisors, and insurance brokers. Build trust and generate leads with professional SEO.",
    "image": "https://kreativekommit.com/images/industries/financial-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#059669"
  },
  
  keywords: [
    // Core financial services terms
    'financial services web design', 'accountant websites', 'financial advisor SEO', 'finance marketing', 'financial compliance websites',
    
    // Service-specific keywords
    'accounting firm websites', 'insurance broker marketing', 'mortgage advisor SEO', 'tax consultant websites',
    'wealth management marketing', 'pension advisor websites', 'financial planning SEO', 'investment advisor marketing',
    
    // Local financial keywords
    'accountants Manchester', 'financial advisors Liverpool', 'insurance brokers London', 'tax consultants Birmingham',
    'mortgage advisors Chester', 'financial services Preston', 'accountants Lancashire', 'financial advisors Yorkshire',
    
    // Specialist financial services
    'chartered accountants websites', 'independent financial advisors', 'corporate finance websites', 'bookkeeping services marketing',
    'payroll services SEO', 'business loans websites', 'financial compliance consulting', 'forensic accounting websites',
    
    // Intent-based keywords
    'best financial website designers UK', 'professional accountant websites', 'financial advisor online presence',
    'how to market financial services', 'financial lead generation', 'compliant financial websites', 'FCA approved websites',
    
    // Voice search & local
    'accountants near me', 'financial advisors in my area', 'tax help Manchester', 'mortgage advice Liverpool',
    'best accountants nearby', 'local financial services', 'pension advice UK', 'investment advisors near me',
    
    // Compliance & technology
    'GDPR compliant financial websites', 'FCA regulated websites', 'secure financial portals', 'encrypted client communications',
    'financial CRM systems', 'client portal development', 'digital financial services', 'fintech web development'
  ]
};