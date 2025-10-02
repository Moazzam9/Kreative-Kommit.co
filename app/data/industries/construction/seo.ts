export const constructionSEO = {
  title: "Construction & Building Services | Kreative Kommit",
  description: "Build your online presence! Professional websites for builders, contractors, and construction companies. Generate leads with construction-focused SEO and digital marketing.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Construction Web Design & Digital Marketing Services",
    description: "Specialized web design and SEO for construction companies, builders, and contractors. Professional websites that generate quality leads.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "Service",
    "@context": "https://schema.org",
    "name": "Construction Web Design Services",
    "description": "Professional web design and digital marketing services for construction companies and building contractors",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Web Design"
  },
  
  // Canonical URL pattern
  canonical: "/industries/construction",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my construction business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website builds trust and helps you win more local projects."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in local SEO for UK construction companies."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "Service", "name": "Residential Construction" },
      { "@type": "Service", "name": "Commercial Construction" },
      { "@type": "Service", "name": "Renovations & Extensions" },
      { "@type": "Service", "name": "Project Management" },
      { "@type": "Service", "name": "Site Surveys" },
      { "@type": "Service", "name": "Sustainable Building Solutions" },
      { "@type": "Service", "name": "Design & Build Packages" },
      { "@type": "Service", "name": "Restoration & Heritage Work" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Smith & Sons Ltd." },
        "reviewBody": "Kreative Kommit delivered a stunning website and helped us double our project leads in six months!"
      },
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "GreenBuild Homes" },
        "reviewBody": "Our new site is fast, modern, and brings in more local enquiries than ever. Highly recommended."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "HomeAndConstructionBusiness",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Construction Web Design",
    "description": "Professional web design and digital marketing services for construction companies and building contractors",
    "url": "https://kreativekommit.com/industries/construction",
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
        "name": "Construction",
        "item": "https://kreativekommit.com/industries/construction"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Construction Web Design & Digital Marketing Services",
    "description": "Specialized web design and SEO for construction companies, builders, and contractors. Professional websites that generate quality leads.",
    "image": "https://kreativekommit.com/images/industries/construction-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#f97316"
  },
  
  keywords: [
    // Core construction terms
    "construction web design", "construction SEO", "construction website design", "construction digital marketing",
    
    // Service-specific keywords
    "builder website design", "contractor web design", "construction company websites", "building contractor SEO",
    "construction portfolio websites", "construction project management software", "construction booking systems",
    
    // Local construction keywords
    "construction SEO Manchester", "builder websites Liverpool", "contractor marketing Chester", "construction web design Birmingham",
    "building company websites London", "construction SEO Preston", "contractor websites Lancashire", "builder marketing Yorkshire",
    
    // Niche construction services
    "residential construction websites", "commercial construction SEO", "home renovation websites", "extension builder marketing",
    "loft conversion websites", "groundworks contractor SEO", "roofing contractor websites", "kitchen extension marketing",
    
    // Intent-based keywords
    "best construction website designer UK", "professional builder websites", "construction company online presence",
    "how to market construction business", "construction lead generation websites", "building contractor digital marketing",
    
    // Voice search & local
    "construction companies near me", "best builders in my area", "local construction contractors", "building services nearby",
    "construction website designer near me", "affordable construction SEO services", "construction marketing experts UK",
    
    // Technology & trends 2025
    "mobile construction websites", "construction CRM integration", "building project tracking websites", "sustainable construction marketing",
    "eco-friendly builder websites", "construction safety compliance websites", "construction industry digital transformation"
  ]
};
