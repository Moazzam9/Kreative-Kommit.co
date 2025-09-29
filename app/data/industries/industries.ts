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
      },
      {
        name: "Electricians",
        slug: "electricians",
        keywords: [
          "electrician web design",
          "electrician SEO",
          "best electrician website design",
          "affordable electrician SEO services",
          "emergency electrician web design",
          "local electrician SEO expert",
          "electrician marketing for small business",
          "electrician website designer near me"
        ],
        description: "We light up your business—literally and digitally! Shockingly good web design, SEO, and marketing for electricians who want to spark more leads and shine online.",
        facts: [
          "Electricians benefit from local SEO and service area pages.",
          "Online reviews and trust signals are crucial for winning new jobs.",
          "Mobile-friendly websites help attract emergency and residential clients."
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Kreative Kommit',
          areaServed: 'UK',
          industry: 'Electricians',
          url: 'https://kreativekommit.com/industries/electricians',
          description: 'Digital marketing and web solutions for electricians.'
        }
      },
      {
        name: "Plumbers",
        slug: "plumbers",
        keywords: [
          "plumber web design",
          "plumber SEO",
          "best plumber website design",
          "affordable plumber SEO services",
          "emergency plumber web design",
          "local plumber SEO expert",
          "plumber marketing for small business",
          "plumber website designer near me"
        ],
        description: "Keep your leads flowing and your website leak-free! Pipe up your online presence with web design and SEO for plumbers who want to unclog their growth and make a splash.",
        facts: [
          "Plumbers need fast-loading, mobile-friendly websites for emergency calls.",
          "Local SEO and Google My Business optimization drive new leads.",
          "Customer reviews and before/after galleries build trust."
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Kreative Kommit',
          areaServed: 'UK',
          industry: 'Plumbers',
          url: 'https://kreativekommit.com/industries/plumbers',
          description: 'Digital marketing and web solutions for plumbers.'
        }
      },
      {
        name: "Roofers",
        slug: "roofers",
        keywords: [
          "roofer web design",
          "roofer SEO",
          "best roofer website design",
          "affordable roofer SEO services",
          "emergency roofer web design",
          "local roofer SEO expert",
          "roofer marketing for small business",
          "roofer website designer near me",
          "roofing contractor SEO",
          "flat roof specialist web design"
        ],
        description: "Raise the roof on your business! Roofers, we shingle-handedly deliver web design and SEO that help you weather any storm and attract customers from every corner.",
        facts: [
          "Roofers benefit from project galleries and before/after photos.",
          "Emergency roofing services need fast, mobile-friendly websites.",
          "Local SEO and reviews drive new leads for roofers."
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Kreative Kommit',
          areaServed: 'UK',
          industry: 'Roofers',
          url: 'https://kreativekommit.com/industries/roofers',
          description: 'Digital marketing and web solutions for roofers.'
        }
      },
      {
        name: "Landscapers",
        slug: "landscapers",
        keywords: [
          "landscaper web design",
          "landscaper SEO",
          "best landscaper website design",
          "affordable landscaper SEO services",
          "local landscaper SEO expert",
          "landscaper marketing for small business",
          "landscaper website designer near me",
          "garden designer SEO",
          "landscape architect web design"
        ],
        description: "Let your business blossom! Landscapers, we dig deep with web design and SEO that help you plant more leads, grow your reputation, and rake in new clients.",
        facts: [
          "Landscapers attract more clients with project galleries and testimonials.",
          "Seasonal SEO campaigns help landscapers stay busy year-round.",
          "Mobile-friendly websites are key for local landscaping leads."
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Kreative Kommit',
          areaServed: 'UK',
          industry: 'Landscapers',
          url: 'https://kreativekommit.com/industries/landscapers',
          description: 'Digital marketing and web solutions for landscapers.'
        }
      },
      {
        name: "Dentists",
        slug: "dentists",
        keywords: [
          "dentist web design",
          "dentist SEO",
          "best dentist website design",
          "affordable dentist SEO services",
          "local dentist SEO expert",
          "dentist marketing for small business",
          "dentist website designer near me",
          "dental clinic SEO",
          "cosmetic dentist web design"
        ],
        description: "Smile online! Dentists, we fill your appointment book and polish your digital reputation—no drilling required. Get web design and SEO that make your practice the crown jewel.",
        facts: [
          "Dentists need online booking and clear service pages for patients.",
          "SEO for dentists targets local families and cosmetic clients.",
          "Patient reviews and before/after galleries build trust."
        ],
        schema: {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Kreative Kommit',
          areaServed: 'UK',
          industry: 'Dentists',
          url: 'https://kreativekommit.com/industries/dentists',
          description: 'Digital marketing and web solutions for dentists.'
        }
      }
      // Add other industries here following the same structure
];
