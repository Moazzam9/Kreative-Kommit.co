export const childcareSEO = {
  title: 'Childcare & Nurseries | Kreative Kommit',
  description: 'Care that shows! We help nurseries and childcare providers connect with parents through friendly, informative websites and local SEO.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Childcare & Nursery Web Design Services",
    description: "Ofsted compliant websites for nurseries and childcare providers. Connect with parents and showcase your care with childcare-focused SEO.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "ChildCare",
    "@context": "https://schema.org",
    "name": "Childcare Web Design Services",
    "description": "Professional web design and digital marketing services for nurseries and childcare providers",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Childcare Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/childcare",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my childcare business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website builds trust with parents and showcases your childcare facilities and approach."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for nurseries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in SEO for UK nurseries, childcare providers, and early years settings."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "ChildCare", "name": "Nursery websites" },
      { "@type": "ChildCare", "name": "Childcare provider sites" },
      { "@type": "ChildCare", "name": "SEO for childcare" },
      { "@type": "ChildCare", "name": "Parent portals" },
      { "@type": "ChildCare", "name": "Booking systems" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Little Stars Nursery" },
        "reviewBody": "Our new website helped parents find us and learn about our caring approach to early years education."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "ChildCare",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Childcare Web Design",
    "description": "Professional websites for nurseries, childcare providers, and early years settings",
    "url": "https://kreativekommit.com/industries/childcare",
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
        "name": "Childcare",
        "item": "https://kreativekommit.com/industries/childcare"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Childcare & Nursery Web Design Services",
    "description": "Professional websites for nurseries and childcare providers. Build trust with parents through childcare-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/childcare-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#ec4899"
  },
  
  keywords: [
    // Core childcare terms
    'childcare web design', 'nursery websites', 'childcare SEO', 'nursery marketing', 'daycare websites',
    
    // Service-specific keywords
    'private nursery websites', 'childminder marketing', 'pre-school SEO', 'after-school club websites',
    'holiday club marketing', 'breakfast club websites', 'nursery booking systems', 'childcare CRM systems',
    
    // Local childcare keywords
    'nurseries Manchester', 'childcare Liverpool', 'daycare London', 'nurseries Birmingham',
    'childminders Chester', 'nursery Preston', 'childcare Lancashire', 'nurseries Yorkshire',
    
    // Age-specific services
    'baby nursery websites', 'toddler daycare marketing', 'preschool education SEO', 'reception class preparation',
    'SEND childcare services', 'bilingual nursery marketing', 'Montessori nursery websites', 'forest school marketing',
    
    // Intent-based keywords
    'best childcare website designers UK', 'professional nursery websites', 'childcare provider online presence',
    'how to market nursery services', 'childcare lead generation', 'nursery enrollment websites', 'parent communication systems',
    
    // Voice search & local
    'nurseries near me', 'childcare in my area', 'daycare Manchester', 'nurseries Liverpool',
    'best nurseries nearby', 'local childcare services', 'childminders UK', 'nursery places near me',
    
    // Compliance & features
    'Ofsted rated nurseries', 'safeguarding compliant websites', 'nursery parent portals', 'child development tracking',
    'nursery meal planning', 'childcare staff training', 'early years education', 'nursery safety protocols'
  ]
};