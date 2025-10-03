import { influencerFAQs } from "./faqs";

export const influencerSEO = {
  description: "Web and branding solutions for influencers, content creators, and personal brands to grow their audience and monetize their content.",

  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Influencer & Content Creator Web Design Services",
    description: "Professional websites for influencers, YouTubers, and content creators. Build your personal brand with influencer-focused SEO and marketing.",
    type: "website",
    locale: "en_GB"
  },

  // Structured data for rich snippets
  schema: {
    "@type": "Person",
    "@context": "https://schema.org",
    "name": "Influencer Web Design Services",
    "description": "Professional web design and personal branding services for influencers and content creators",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "jobTitle": "Content Creator"
  },

  // Canonical URL pattern
  canonical: "/industries/influencer",

  // Advanced SEO Phase 3 enhancements

  // FAQ Schema for rich snippets (dynamically generated from faqs.ts)
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": influencerFAQs.map(faq => ({
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
      { "@type": "Person", "name": "Personal brand websites" },
      { "@type": "Person", "name": "Influencer portfolio design" },
      { "@type": "Person", "name": "SEO for content creators" },
      { "@type": "Person", "name": "Monetization platforms" },
      { "@type": "Person", "name": "Social media integration" }
    ]
  },
  
  // Review/testimonial schema
  reviewSchema: {
    "@type": "ItemList",
    "@context": "https://schema.org",
    "itemListElement": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Digital Creator" },
        "reviewBody": "My new personal brand website helped me attract better sponsorship deals and grow my audience."
      }
    ]
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "Person",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Influencer Web Design",
    "description": "Professional websites for influencers, YouTubers, and content creators",
    "url": "https://kreativekommit.com/industries/influencer",
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
        "name": "Influencer",
        "item": "https://kreativekommit.com/industries/influencer"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Influencer & Content Creator Web Design Services",
    "description": "Professional websites for influencers, YouTubers, and content creators. Build your personal brand with influencer-focused SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/influencer-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#ec4899"
  },
  
  keywords: [
    // Core influencer terms
    "influencer web design", "personal brand websites", "influencer SEO", "content creator marketing", "social media websites",
    
    // Service-specific keywords
    "YouTube channel websites", "Instagram influencer marketing", "TikTok creator SEO", "podcast websites",
    "blogger websites", "vlogger marketing", "social media influencer SEO", "content monetization websites",
    
    // Local influencer keywords
    "influencers Manchester", "content creators Liverpool", "personal brands London", "bloggers Birmingham",
    "influencer Chester", "creators Preston", "influencers Lancashire", "content Yorkshire",
    
    // Niche influencer services
    "fitness influencer websites", "fashion blogger marketing", "travel influencer SEO", "food blogger websites",
    "lifestyle influencer marketing", "tech reviewer SEO", "beauty influencer websites", "gaming streamer marketing",
    
    // Intent-based keywords
    "best influencer website designers UK", "professional personal brand websites", "creator online presence",
    "how to build personal brand", "influencer monetization strategies", "content creator platforms", "influencer SEO experts",
    
    // Voice search & local
    "personal brand consultants near me", "influencer managers in my area", "content creators Manchester", "bloggers Liverpool",
    "best personal brand experts nearby", "local influencer services", "UK content creators", "personal branding near me",
    
    // Technology & features
    "influencer analytics platforms", "brand collaboration tools", "content scheduling systems", "monetization platforms",
    "audience engagement tools", "affiliate marketing integration", "brand partnership platforms", "creator economy tools"
  ]
};