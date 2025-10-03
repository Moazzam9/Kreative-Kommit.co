import { technologyFAQs } from "./faqs";

export const technologySEO = {
  title: 'Technology & IT Services | Kreative Kommit',
  description: 'Showcase your tech! We help IT firms and tech startups stand out with modern sites and SEO that attracts business clients.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Technology & IT Services Web Design",
    description: "Professional websites for tech companies, IT services, and software startups. Generate B2B leads with technology-focused SEO and marketing.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "TechArticle",
    "@context": "https://schema.org",
    "name": "Technology Web Design Services",
    "description": "Professional web design and digital marketing services for IT companies and technology startups",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "about": "Information Technology"
  },
  
  // Canonical URL pattern
  canonical: "/industries/technology",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": technologyFAQs.map((faq: { q: string; a: string }) => ({
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
      { "@type": "Organization", "name": "IT firm website design" },
      { "@type": "Organization", "name": "SEO for tech startups" },
      { "@type": "Organization", "name": "Lead generation for SaaS" },
      { "@type": "Organization", "name": "Content marketing for tech" },
      { "@type": "Organization", "name": "Client portal development" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "TechForward" },
        "reviewBody": "Our new website and SEO brought in more B2B clients."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "Organization",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Technology Web Design",
    "description": "Professional web design and digital marketing services for IT companies and technology startups",
    "url": "https://kreativekommit.com/industries/technology",
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
        "name": "Technology",
        "item": "https://kreativekommit.com/industries/technology"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Technology & IT Services Web Design",
    "description": "Professional websites for tech companies, IT services, and software startups. Generate B2B leads with technology-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/technology-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#6366f1"
  },
  
  keywords: [
    // Core technology terms
    'technology web design', 'IT services websites', 'tech company SEO', 'software development marketing', 'IT support websites',
    
    // Service-specific keywords
    'managed IT services websites', 'cloud computing marketing', 'cybersecurity company SEO', 'software development websites',
    'IT consultancy marketing', 'network support websites', 'data backup services SEO', 'tech startup websites',
    
    // Local technology keywords
    'IT services Manchester', 'tech companies Liverpool', 'software developers London', 'IT support Birmingham',
    'cybersecurity Chester', 'technology Preston', 'IT consultants Lancashire', 'tech services Yorkshire',
    
    // Specialist tech services
    'Microsoft partner websites', 'Google workspace specialists', 'AWS cloud services', 'Azure consultancy marketing',
    'SaaS development websites', 'mobile app development', 'AI consulting services', 'blockchain development marketing',
    
    // Intent-based keywords
    'best tech website designers UK', 'professional IT websites', 'technology company online presence',
    'how to market IT services', 'tech lead generation', 'B2B technology marketing', 'IT service providers',
    
    // Voice search & local
    'IT support near me', 'tech companies in my area', 'software developers Manchester', 'IT services Liverpool',
    'best tech support nearby', 'local IT consultants', 'technology services UK', 'managed IT providers near me',
    
    // Technology trends 2025
    'AI integration services', 'machine learning consultancy', 'IoT development websites', 'digital transformation services',
    'remote work solutions', 'cloud migration services', 'cybersecurity auditing', 'GDPR compliance technology'
  ]
};