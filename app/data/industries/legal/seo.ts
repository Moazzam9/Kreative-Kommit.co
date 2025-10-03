import { legalFAQs } from "./faqs";

export const legalSEO = {
  title: 'Legal | Kreative Kommit',
  description: 'Win your case online! Solicitors, barristers, and legal pros get trust-building sites and SEO that brings in new clients.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Legal Services Web Design & Law Firm Marketing",
    description: "SRA compliant websites for solicitors, barristers, and law firms. Build trust and attract clients with legal-focused SEO and marketing.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "LegalService",
    "@context": "https://schema.org",
    "name": "Legal Web Design Services",
    "description": "Professional web design and digital marketing services for solicitors, barristers, and law firms",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Legal Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/legal",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": legalFAQs.map((faq: { q: string; a: string }) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "City Legal Partners" },
        "reviewBody": "Our new website helped us attract more clients and build professional credibility."
      }
    ]
  },

  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "LegalService",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Legal Services Web Design",
    "description": "SRA compliant websites for solicitors, barristers, and law firms",
    "url": "https://kreativekommit.com/industries/legal",
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
        "item": "https://kreativekommit.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
      faqSchema: {
        "@type": "FAQPage",
        "@context": "https://schema.org",
        "mainEntity": legalFAQs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
        "name": "Industries",
        "item": "https://kreativekommit.com/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Legal Services",
        "item": "https://kreativekommit.com/industries/legal"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Legal Services Web Design & Law Firm Marketing",
    "description": "SRA compliant websites for solicitors, barristers, and law firms. Build trust and attract clients with legal-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/legal-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#1f2937"
  },
  
  keywords: [
    // Core legal terms
    'legal web design', 'solicitor websites', 'law firm SEO', 'legal marketing', 'barrister websites',
    
    // Practice area keywords
    'family law websites', 'personal injury solicitors', 'criminal law marketing', 'property law SEO',
    'employment law websites', 'divorce solicitor marketing', 'will writing services', 'conveyancing websites',
    
    // Local legal keywords
    'solicitors Manchester', 'law firms Liverpool', 'legal services London', 'lawyers Birmingham',
    'family solicitors Chester', 'legal advice Preston', 'solicitors Lancashire', 'law firms Yorkshire',
    
    // Specialist legal services
    'commercial law websites', 'immigration law marketing', 'medical negligence solicitors', 'debt recovery services',
    'intellectual property law', 'corporate law websites', 'tax law specialists', 'regulatory compliance legal',
    
    // Intent-based keywords
    'best legal website designers UK', 'professional law firm websites', 'solicitor online presence',
    'how to market legal services', 'legal lead generation', 'law firm client acquisition', 'legal SEO experts',
    
    // Voice search & local
    'solicitors near me', 'lawyers in my area', 'family law Manchester', 'divorce solicitors Liverpool',
    'best solicitors nearby', 'local legal services', 'legal advice UK', 'property lawyers near me',
    
    // Compliance & technology
    'SRA compliant websites', 'secure legal portals', 'client confidentiality systems', 'legal case management',
    'GDPR compliant legal websites', 'encrypted legal communications', 'digital legal services', 'legal practice software'
  ]
};