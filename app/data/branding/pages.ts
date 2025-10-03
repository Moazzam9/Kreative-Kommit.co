// Data-driven branding/landing page content for cities and business types

export interface BrandingPageData {
  city: string; // e.g. 'birmingham'
  area?: string; // e.g. 'jewellery-quarter'
  industry: string; // e.g. 'jewelry', 'branding', etc.
  title: string;
  description: string;
  features: string[];
  whyChoose: string[];
  cta: {
    heading: string;
    text: string;
    button: string;
    link: string;
  };
}

export const brandingPages: BrandingPageData[] = [
  {
    city: 'birmingham',
    area: 'jewellery-quarter',
    industry: 'jewelry',
    title: 'Jewellery Quarter Branding & Website Design in Birmingham',
    description: 'Stand out in Birmingham’s Jewellery Quarter with a stunning, conversion-focused website and luxury branding. We build bespoke jewelry e-commerce sites, integrate AR try-on, and craft visual identities that attract high-value clients.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in Birmingham',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Proven results: 280% sales increase for jewelry clients',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Birmingham’s Jewellery Quarter',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  // Add more entries for other cities/areas/industries here
];
