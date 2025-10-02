export const fitnessSEO = {
  title: 'Fitness & Wellness | Kreative Kommit',
  description: 'Grow your gym or studio! We build sites for fitness pros, yoga studios, and trainers that motivate signups and boost local visibility.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Fitness & Wellness Web Design Services",
    description: "Professional websites for gyms, personal trainers, and fitness studios. Increase memberships with fitness-focused SEO and online booking.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "SportsActivityLocation",
    "@context": "https://schema.org",
    "name": "Fitness Web Design Services",
    "description": "Professional web design and digital marketing services for gyms, personal trainers, and fitness businesses",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Fitness Services"
  },
  
  // Canonical URL pattern
  canonical: "/industries/fitness",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my fitness business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A modern website helps you attract new members, manage bookings, and build your fitness community."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for gyms and fitness studios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in local SEO for UK gyms, personal trainers, and fitness studios."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "SportsActivityLocation", "name": "Gym website design" },
      { "@type": "SportsActivityLocation", "name": "Online class booking" },
      { "@type": "SportsActivityLocation", "name": "SEO for fitness" },
      { "@type": "SportsActivityLocation", "name": "Membership management" },
      { "@type": "SportsActivityLocation", "name": "Personal trainer marketing" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "FitLife Gym" },
        "reviewBody": "Our new website increased member signups and made class booking much easier."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "SportsActivityLocation",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Fitness Web Design",
    "description": "Professional web design and digital marketing services for gyms, personal trainers, and fitness businesses",
    "url": "https://kreativekommit.com/industries/fitness",
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
        "name": "Fitness",
        "item": "https://kreativekommit.com/industries/fitness"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Fitness & Wellness Web Design Services",
    "description": "Professional websites for gyms, personal trainers, and fitness studios. Increase memberships with fitness-focused SEO and online booking.",
    "image": "https://kreativekommit.com/images/industries/fitness-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#dc2626"
  },
  
  keywords: [
    // Core fitness terms
    'fitness web design', 'gym websites', 'personal trainer SEO', 'fitness marketing', 'wellness websites',
    
    // Service-specific keywords
    'personal trainer websites', 'fitness class booking', 'gym membership systems', 'yoga studio marketing',
    'pilates instructor SEO', 'nutrition coaching websites', 'sports therapy marketing', 'fitness app development',
    
    // Local fitness keywords
    'gyms Manchester', 'personal trainers Liverpool', 'fitness classes London', 'yoga studios Birmingham',
    'fitness centres Chester', 'personal training Preston', 'gyms Lancashire', 'fitness services Yorkshire',
    
    // Specialist fitness services
    'crossfit gym websites', 'boutique fitness studios', 'outdoor fitness classes', 'corporate wellness programs',
    'rehabilitation fitness', 'senior fitness programs', 'kids fitness classes', 'women-only gym marketing',
    
    // Intent-based keywords
    'best fitness website designers UK', 'professional gym websites', 'personal trainer online presence',
    'how to market fitness business', 'fitness lead generation', 'gym membership websites', 'fitness booking systems',
    
    // Voice search & local
    'gyms near me', 'personal trainers in my area', 'fitness classes Manchester', 'yoga studios Liverpool',
    'best gyms nearby', 'local fitness services', 'personal training UK', 'fitness centres near me',
    
    // Technology & features
    'fitness class booking systems', 'membership management software', 'workout tracking apps', 'virtual fitness classes',
    'fitness progress tracking', 'nutrition planning tools', 'fitness community platforms', 'wearable device integration'
  ]
};