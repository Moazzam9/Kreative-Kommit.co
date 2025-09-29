// Centralised industries data
export interface Industry {
  name: string;
  slug: string;
  keywords?: string[];
  description?: string;
  facts?: string[];
  schema?: Record<string, unknown>;
}

export const industries: Industry[] = [
  {
    name: "Construction",
    slug: "construction",
    keywords: [
      "construction web design",
      "construction SEO",
      "best construction website design",
      "affordable construction SEO services",
      "local construction SEO expert",
      "construction marketing for small business",
      "construction website designer near me"
    ],
    description: "Expert digital solutions for construction companies, contractors, and trades. We build high-performance websites, local SEO, and marketing campaigns to help you win more projects and grow your reputation.",
    facts: [
      "Construction businesses benefit from local SEO and project showcase pages.",
      "Online reviews and reputation management are crucial for winning new contracts.",
      "Mobile-friendly websites help attract homeowners and commercial clients."
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Kreative Kommit',
      areaServed: 'UK',
      industry: 'Construction',
      url: 'https://kreativekommit.com/industries/construction',
      description: 'Digital marketing and web solutions for the construction industry.'
    }
  }
];
