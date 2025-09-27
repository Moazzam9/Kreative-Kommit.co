// Unified industry data for targeting, SEO, and dynamic page generation
export interface Industry {
  slug: string;
  name: string;
  description: string;
  keywords?: string[];
  facts?: string[];
}

export const industries: Industry[] = [
  {
    slug: "retail",
    name: "Retail",
    description: "Shops, boutiques, and ecommerce businesses selling products to consumers.",
    keywords: ["retail web design", "retail SEO", "ecommerce website development", "shop marketing [city]"],
    facts: [
      "Retail businesses benefit from local SEO and conversion-focused web design.",
      "Ecommerce solutions help retailers reach more customers online.",
      "Retailers in the UK see up to 40% more foot traffic with effective local SEO strategies.",
      "Ecommerce in retail is projected to grow 15% annually through 2027.",
      "Retail web design trends include mobile-first layouts and integrated payment solutions.",
      "Shop marketing in [city] leverages social media and influencer partnerships for brand growth."
    ]
  },
  {
    slug: "electricians",
    name: "Electricians",
    description: "Certified electricians offering installation, repair, and emergency services.",
    keywords: ["electrician web design", "electrician SEO", "emergency electrician marketing", "local electrician SEO expert"],
    facts: [
      "Electricians need local SEO to attract urgent service calls.",
      "Professional websites build trust for trades.",
      "Electricians in [city] report a 30% increase in bookings after launching new websites.",
      "Emergency electrician SEO targets high-intent local searches for rapid response.",
      "Trade businesses benefit from online reviews and reputation management.",
      "Mobile-friendly electrician websites improve customer engagement and lead generation."
    ]
  },
  {
    slug: "dentists",
    name: "Dentists",
    description: "Dental practices providing healthcare and cosmetic services.",
    keywords: ["dentist web design", "dentist SEO", "best dentist website design", "local dentist SEO expert"],
    facts: [
      "Dentists benefit from reputation management and local search visibility.",
      "Online booking increases patient conversions.",
      "Dental practices in [city] see higher patient retention with online appointment systems.",
      "Dentist SEO focuses on local keywords and patient reviews for top rankings.",
      "Cosmetic dentistry is a growing trend in UK cities, driving demand for targeted marketing.",
      "Healthcare websites must comply with accessibility and privacy regulations."
    ]
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    description: "Dining establishments serving food and drink to customers.",
    keywords: ["restaurant web design", "restaurant SEO", "local restaurant marketing", "restaurant website designer near me"],
    facts: [
      "Restaurants need mobile-friendly websites and local SEO for reservations.",
      "Social media marketing drives engagement and reviews.",
      "Restaurants in [city] increase bookings with integrated online reservation systems.",
      "Local restaurant marketing uses Google My Business and review platforms for visibility.",
      "Food delivery and takeaway services are key growth areas for UK restaurants.",
      "Restaurant web design trends include menu integration and photo galleries."
    ]
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    description: "Accountants, solicitors, consultants, and agencies offering expert advice and support.",
    keywords: ["accountant web design", "solicitor SEO", "consultant marketing", "professional services website designer"],
    facts: [
      "Professional services benefit from trust-building web design and targeted SEO.",
      "Clear service pages improve conversion rates.",
      "Professional services in [city] gain credibility with client testimonials and case studies.",
      "Solicitor SEO targets local legal queries and reputation management.",
      "Consultants use content marketing to establish expertise and attract leads.",
      "Accountant websites feature secure client portals and compliance information."
    ]
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Medical practices, clinics, dentists, and wellness providers serving patients.",
    keywords: ["healthcare web design", "clinic SEO", "private practice marketing", "healthcare website designer"],
    facts: [
      "Healthcare providers need secure, accessible websites and strong local SEO.",
      "Online reviews and reputation management are critical.",
      "Healthcare clinics in [city] improve patient trust with transparent online information.",
      "Private practice marketing uses local SEO and social proof for growth.",
      "Wellness providers benefit from educational content and blog strategies.",
      "Healthcare web design must prioritize accessibility and mobile usability."
    ]
  },
  {
    slug: "construction",
    name: "Construction",
    description: "Builders, trades, architects, and property developers working on residential and commercial projects.",
    keywords: ["builder web design", "construction SEO", "property developer marketing", "trades website designer"],
    facts: [
      "Construction businesses benefit from project galleries and local SEO.",
      "Clear contact info increases lead generation.",
      "Construction firms in [city] showcase completed projects to attract new clients.",
      "Builder SEO targets local renovation and new build queries.",
      "Architect websites highlight design portfolios and awards.",
      "Trades benefit from online quote forms and customer reviews."
    ]
  }
];
