export const sportsSEO = {
  description: "Websites and marketing for sports clubs, teams, and associations to engage fans and manage memberships.",
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Sports Club & Team Web Design Services",
    description: "Professional websites for sports clubs, teams, and athletic organizations. Engage fans and manage memberships with sports-focused SEO.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "SportsClub",
    "@context": "https://schema.org",
    "name": "Sports Web Design Services",
    "description": "Professional web design and digital marketing services for sports clubs and athletic organizations",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Sports Marketing"
  },
  
  // Canonical URL pattern
  canonical: "/industries/sports",
  
  // Advanced SEO Phase 3 enhancements
  
  // FAQ Schema for rich snippets
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can a website help my sports business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional website helps you attract members, promote events, and manage bookings for your sports club or facility."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for sports clubs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialise in SEO for UK sports clubs, gyms, and fitness facilities."
        }
      }
    ]
  },
  
  // Service offerings schema
  serviceSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      { "@type": "SportsClub", "name": "Sports club websites" },
      { "@type": "SportsClub", "name": "Team management systems" },
      { "@type": "SportsClub", "name": "SEO for sports businesses" },
      { "@type": "SportsClub", "name": "Event booking platforms" },
      { "@type": "SportsClub", "name": "Membership portals" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "City Sports Club" },
        "reviewBody": "Our new website helped us attract more members and streamlined our booking process for courts and facilities."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "SportsClub",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Sports Web Design",
    "description": "Professional websites for sports clubs, gyms, and fitness facilities",
    "url": "https://kreativekommit.com/industries/sports",
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
        "name": "Sports",
        "item": "https://kreativekommit.com/industries/sports"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Sports Club & Fitness Web Design Services",
    "description": "Professional websites for sports clubs, gyms, and fitness facilities. Attract members and manage bookings with sports-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/sports-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#16a34a"
  },
  
  keywords: [
    // Core sports terms
    "sports web design", "sports club websites", "sports SEO", "athletic marketing", "sports facility websites",
    
    // Service-specific keywords
    "football club websites", "tennis coaching marketing", "swimming lessons SEO", "martial arts websites",
    "rugby club marketing", "cricket club SEO", "basketball training websites", "athletics coaching marketing",
    
    // Local sports keywords
    "sports clubs Manchester", "fitness centres Liverpool", "sports facilities London", "gyms Birmingham",
    "sports coaching Chester", "athletics Preston", "sports clubs Lancashire", "fitness Yorkshire",
    
    // Specialist sports services
    "youth sports programs", "professional sports training", "sports injury rehabilitation", "sports psychology websites",
    "performance analysis marketing", "sports nutrition SEO", "elite athlete training", "adaptive sports programs",
    
    // Intent-based keywords
    "best sports website designers UK", "professional sports websites", "sports club online presence",
    "how to market sports services", "sports membership generation", "sports booking systems", "athletic SEO experts",
    
    // Voice search & local
    "sports clubs near me", "fitness classes in my area", "football clubs Manchester", "tennis coaching Liverpool",
    "best sports facilities nearby", "local sports services", "UK sports clubs", "sports training near me",
    
    // Technology & features
    "sports booking platforms", "membership management systems", "performance tracking tools", "sports event management",
    "team communication platforms", "sports analytics software", "fixture scheduling systems", "sports social networks"
  ]
};