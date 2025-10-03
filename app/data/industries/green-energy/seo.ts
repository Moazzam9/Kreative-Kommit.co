
import { greenEnergyFAQs } from "./faqs";

export const greenEnergySEO = {
  title: 'Green Energy & Sustainability | Kreative Kommit',
  description: 'Digital marketing and web solutions for UK-based solar, wind, EV charging, and eco-friendly businesses. Stand out in the UK green energy market.',
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Green Energy & Sustainability Web Design Services",
    description: "Professional websites for renewable energy companies, solar installers, and eco-friendly businesses. Generate green leads with sustainability-focused SEO.",
    type: "website",
    locale: "en_GB"
  },
  
  // Structured data for rich snippets
  schema: {
    "@type": "Service",
    "@context": "https://schema.org",
    "name": "Green Energy Web Design Services",
    "description": "Professional web design and digital marketing services for renewable energy and sustainability businesses",
    "provider": {
      "@type": "Organization",
      "name": "Kreative Kommit"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Renewable Energy Marketing"
  },
  
  // Canonical URL pattern
  canonical: "/industries/green-energy",
  
  // Advanced SEO Phase 3 enhancements
  
  
  // Service offerings schema
  faqSchema: {
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "mainEntity": greenEnergyFAQs.map((faq: { q: string; a: string }) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  },
  
  // Local Business schema enhancement
  localBusinessSchema: {
    "@type": "LocalBusiness",
    "@context": "https://schema.org",
    "name": "Kreative Kommit - Green Energy Web Design",
    "description": "Professional websites for renewable energy, solar, and sustainable technology companies",
    "url": "https://kreativekommit.com/industries/green-energy",
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
        "name": "Green Energy",
        "item": "https://kreativekommit.com/industries/green-energy"
      }
    ]
  },
  
  // Twitter Card metadata
  twitterCard: {
    "card": "summary_large_image",
    "site": "@kreativekommit",
    "title": "Green Energy & Solar Web Design Services",
    "description": "Professional websites for renewable energy companies and solar installers. Attract eco-conscious clients with green energy SEO and marketing.",
    "image": "https://kreativekommit.com/images/industries/green-energy-og.jpg"
  },
  
  // Advanced meta tags
  metaTags: {
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "googlebot": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "theme-color": "#16a34a"
  },
  
  keywords: [
    // Core green energy terms
    'green energy web design', 'renewable energy websites', 'sustainability SEO', 'eco-friendly marketing', 'solar power websites',
    
    // Service-specific keywords
    'solar panel installation websites', 'wind energy marketing', 'heat pump SEO', 'energy efficiency websites',
    'battery storage marketing', 'EV charging SEO', 'biomass heating websites', 'green technology marketing',
    
    // Local green energy keywords
    'solar installers Manchester', 'renewable energy Liverpool', 'green energy London', 'heat pumps Birmingham',
    'solar panels Chester', 'sustainability Preston', 'green energy Lancashire', 'renewable energy Yorkshire',
    
    // Specialist services
    'commercial solar websites', 'residential renewables marketing', 'energy auditing SEO', 'carbon footprint websites',
    'green building consultancy', 'environmental impact marketing', 'sustainable technology SEO', 'energy management websites',
    
    // Intent-based keywords
    'best green energy website designers UK', 'professional renewable energy websites', 'sustainability online presence',
    'how to market green energy', 'renewable energy lead generation', 'solar quote systems', 'green energy SEO experts',
    
    // Voice search & local
    'solar installers near me', 'renewable energy in my area', 'heat pump installers Manchester', 'green energy Liverpool',
    'best solar companies nearby', 'local renewable energy', 'sustainable energy UK', 'solar panels near me',
    
    // Technology & features
    'energy monitoring systems', 'solar calculator tools', 'carbon footprint calculators', 'energy efficiency assessments',
    'renewable energy financing', 'government grant integration', 'smart energy management', 'sustainability reporting tools'
  ],
};