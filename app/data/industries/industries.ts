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
    name: "Accountants",
    slug: "accountants",
    keywords: [
      "accountant web design",
      "accountant SEO",
      "best accountant website design",
      "affordable accountant SEO services",
      "local accountant SEO expert",
      "accountant marketing for small business",
      "accountant website designer near me"
    ],
  description: "Crunching numbers is your thing—making you look good online is ours! Accountants, let us balance your books and your brand with web design and SEO that add up to more clients.",
    facts: [
      "Accountants need clear service pages and strong calls to action.",
      "SEO for accountants targets local businesses and individuals.",
      "Educational content and testimonials build authority."
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Kreative Kommit',
      areaServed: 'UK',
      industry: 'Accountants',
      url: 'https://kreativekommit.com/industries/accountants',
      description: 'Digital marketing and web solutions for accountants.'
    }
  },
  {
    name: "Builders",
    slug: "builders",
    keywords: [
      "builder web design",
      "builder SEO",
      "best builder website design",
      "affordable builder SEO services",
      "local builder SEO expert",
      "builder marketing for small business",
      "builder website designer near me"
    ],
  description: "We build your online reputation brick by brick! Builders, get a website and SEO that lay the foundation for more contracts, more clients, and more success. Hard hats optional.",
    facts: [
      "Builders benefit from project galleries and testimonials.",
      "Local SEO helps attract homeowners and commercial clients.",
      "Online reputation management is key for winning new contracts."
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Kreative Kommit',
      areaServed: 'UK',
      industry: 'Builders',
      url: 'https://kreativekommit.com/industries/builders',
      description: 'Digital marketing and web solutions for builders.'
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
        "roofer website designer near me"
      ],
    description: "Raise the roof on your business! Roofers, we shingle-handedly deliver web design and SEO that help you weather any storm and attract customers from every corner."
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
      "landscaper website designer near me"
    ],
  description: "Let your business blossom! Landscapers, we dig deep with web design and SEO that help you plant more leads, grow your reputation, and rake in new clients."
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
      "dentist website designer near me"
    ],
  description: "Smile online! Dentists, we fill your appointment book and polish your digital reputation—no drilling required. Get web design and SEO that make your practice the crown jewel."
  },
  {
    name: "Solicitors",
    slug: "solicitors",
    keywords: [
      "solicitor web design",
      "solicitor SEO",
      "best solicitor website design",
      "affordable solicitor SEO services",
      "local solicitor SEO expert",
      "solicitor marketing for small business",
      "solicitor website designer near me"
    ],
  description: "Make your case online! Solicitors, we brief your brand with web design and SEO that win clients, build trust, and keep your reputation out of contempt. Justice for your business!"
  },
  {
    name: "Restaurants",
    slug: "restaurants",
    keywords: [
      "restaurant web design",
      "restaurant SEO",
      "best restaurant website design",
      "affordable restaurant SEO services",
      "local restaurant SEO expert",
      "restaurant marketing for small business",
      "restaurant website designer near me"
    ],
  description: "Serve up more bookings and five-star reviews! Restaurants, our web design and SEO are the secret sauce for attracting hungry customers and keeping your tables full."
  },
  {
    name: "Cafes",
    slug: "cafes",
    keywords: [
      "cafe web design",
      "cafe SEO",
      "best cafe website design",
      "affordable cafe SEO services",
      "local cafe SEO expert",
      "cafe marketing for small business",
      "cafe website designer near me"
    ],
  description: "Wake up your online presence! Cafes, we roast up web design and SEO that help you pour in new customers, fill seats, and keep your regulars buzzing."
  },
  {
    name: "Gyms",
    slug: "gyms",
    keywords: [
      "gym web design",
      "gym SEO",
      "best gym website design",
      "affordable gym SEO services",
      "local gym SEO expert",
      "gym marketing for small business",
      "gym website designer near me"
    ],
  description: "Flex your digital muscles! Gyms, our web design and SEO help you lift your membership numbers, strengthen your brand, and keep your business in peak condition."
  },
  {
    name: "Hairdressers",
    slug: "hairdressers",
    keywords: [
      "hairdresser web design",
      "hairdresser SEO",
      "best hairdresser website design",
      "affordable hairdresser SEO services",
      "local hairdresser SEO expert",
      "hairdresser marketing for small business",
      "hairdresser website designer near me"
    ],
  description: "Cut through the noise! Hairdressers, we style your online presence with web design and SEO that attract bookings, build loyalty, and keep your salon looking sharp."
  },
  {
    name: "Barbers",
    slug: "barbers",
    keywords: [
      "barber web design",
      "barber SEO",
      "best barber website design",
      "affordable barber SEO services",
      "local barber SEO expert",
      "barber marketing for small business",
      "barber website designer near me"
    ],
  description: "Fade into success! Barbers, we trim your competition with web design and SEO that keep your chairs full and your brand looking fresh. No appointment needed."
  },
  {
    name: "Florists",
    slug: "florists",
    keywords: [
      "florist web design",
      "florist SEO",
      "best florist website design",
      "affordable florist SEO services",
      "local florist SEO expert",
      "florist marketing for small business",
      "florist website designer near me"
    ],
  description: "Let your business bloom! Florists, we arrange web design and SEO that help you grow your bouquet of customers and keep your shop in full blossom."
  },
  {
    name: "Mechanics",
    slug: "mechanics",
    keywords: [
      "mechanic web design",
      "mechanic SEO",
      "best mechanic website design",
      "affordable mechanic SEO services",
      "local mechanic SEO expert",
      "mechanic marketing for small business",
      "mechanic website designer near me"
    ],
  description: "Rev up your online presence! Mechanics, we tune up your website and SEO so you can drive in more customers, build trust, and keep your business firing on all cylinders."
  },
  {
    name: "Vets",
    slug: "vets",
    keywords: [
      "vet web design",
      "vet SEO",
      "best vet website design",
      "affordable vet SEO services",
      "local vet SEO expert",
      "vet marketing for small business",
      "vet website designer near me"
    ],
  description: "Pawsitively great results! Vets, we fetch web design and SEO that help you care for more pets, attract new clients, and keep tails wagging in your practice."
  },
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
];
