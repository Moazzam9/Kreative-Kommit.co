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
  'Expertise in jewelry e-commerce and digital branding',
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
  {
    city: 'london',
    area: 'hatton-garden',
    industry: 'jewelry',
    title: 'Hatton Garden Jewelry Branding & Web Design in London',
    description: 'Shine in London’s Hatton Garden with a luxury jewelry website and bespoke branding. We create e-commerce experiences, AR try-on, and visual identities for London’s top jewelers.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in London',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Hatton Garden and Central London',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  {
    city: 'sheffield',
    area: 'city-centre',
    industry: 'jewelry',
    title: 'Sheffield Jewelry Branding & Web Design',
    description: 'Showcase your Sheffield jewelry business with a modern website and premium branding. We specialize in e-commerce, AR try-on, and digital marketing for jewelers.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in Sheffield',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Sheffield jewelers',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  {
    city: 'glasgow',
    area: 'argyle-arcade',
    industry: 'jewelry',
    title: 'Argyle Arcade Jewelry Branding & Web Design in Glasgow',
    description: 'Stand out in Glasgow’s Argyle Arcade with a luxury jewelry website and branding. We build e-commerce, AR try-on, and digital marketing for Scotland’s jewelers.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in Glasgow',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Argyle Arcade and Glasgow',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  {
    city: 'manchester',
    area: 'northern-quarter',
    industry: 'jewelry',
    title: 'Northern Quarter Jewelry Branding & Web Design in Manchester',
    description: 'Make your mark in Manchester’s Northern Quarter with a bespoke jewelry website and branding. We offer e-commerce, AR try-on, and digital marketing for independent jewelers.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in Manchester',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Manchester’s Northern Quarter',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  {
    city: 'brighton',
    area: 'the-lanes',
    industry: 'jewelry',
    title: 'The Lanes Jewelry Branding & Web Design in Brighton',
    description: 'Shine in Brighton’s The Lanes with a boutique jewelry website and branding. We create e-commerce, AR try-on, and digital marketing for Brighton’s jewelers.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in Brighton',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting The Lanes and Brighton',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  {
    city: 'liverpool',
    area: 'bold-street',
    industry: 'jewelry',
    title: 'Bold Street Jewelry Branding & Web Design in Liverpool',
    description: 'Stand out on Liverpool’s Bold Street with a modern jewelry website and branding. We build e-commerce, AR try-on, and digital marketing for independent jewelers.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in Liverpool',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Bold Street and Liverpool',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  {
    city: 'cardiff',
    area: 'morgan-arcade',
    industry: 'jewelry',
    title: 'Morgan Arcade Jewelry Branding & Web Design in Cardiff',
    description: 'Shine in Cardiff’s Morgan Arcade with a boutique jewelry website and branding. We create e-commerce, AR try-on, and digital marketing for Cardiff’s jewelers.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in Cardiff',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Morgan Arcade and Cardiff',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  {
    city: 'belfast',
    area: 'queens-arcade',
    industry: 'jewelry',
    title: 'Queen’s Arcade Jewelry Branding & Web Design in Belfast',
    description: 'Stand out in Belfast’s Queen’s Arcade with a luxury jewelry website and branding. We build e-commerce, AR try-on, and digital marketing for jewelers in Northern Ireland.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in Belfast',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Queen’s Arcade and Belfast',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  {
    city: 'chester',
    area: 'eastgate-street',
    industry: 'jewelry',
    title: 'Eastgate Street Jewelry Branding & Web Design in Chester',
    description: 'Shine on Chester’s Eastgate Street with a boutique jewelry website and branding. We create e-commerce, AR try-on, and digital marketing for Chester’s jewelers.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in Chester',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Eastgate Street and Chester',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  {
    city: 'york',
    area: 'stonegate',
    industry: 'jewelry',
    title: 'Stonegate Jewelry Branding & Web Design in York',
    description: 'Stand out on York’s Stonegate with a luxury jewelry website and branding. We build e-commerce, AR try-on, and digital marketing for York’s jewelers.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in York',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Stonegate and York',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  {
    city: 'cambridge',
    area: 'trinity-street',
    industry: 'jewelry',
    title: 'Trinity Street Jewelry Branding & Web Design in Cambridge',
    description: 'Shine on Cambridge’s Trinity Street with a boutique jewelry website and branding. We create e-commerce, AR try-on, and digital marketing for Cambridge’s jewelers.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in Cambridge',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Trinity Street and Cambridge',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  {
    city: 'bath',
    area: 'old-bond-street',
    industry: 'jewelry',
    title: 'Old Bond Street Jewelry Branding & Web Design in Bath',
    description: 'Stand out on Bath’s Old Bond Street with a luxury jewelry website and branding. We build e-commerce, AR try-on, and digital marketing for Bath’s jewelers.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in Bath',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Old Bond Street and Bath',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
  {
    city: 'leeds',
    area: 'victoria-quarter',
    industry: 'jewelry',
    title: 'Victoria Quarter Jewelry Branding & Web Design in Leeds',
    description: 'Shine in Leeds’ Victoria Quarter with a boutique jewelry website and branding. We create e-commerce, AR try-on, and digital marketing for Leeds’ jewelers.',
    features: [
      'Custom jewelry e-commerce with secure checkout',
      'Augmented Reality (AR) try-on features',
      'Luxury branding & logo design',
      'Instagram & social media integration',
      'SEO for jewelry keywords in Leeds',
      'High-end product photography & galleries',
    ],
    whyChoose: [
      'Expertise in jewelry e-commerce and digital branding',
      'Experience with AR, virtual try-on, and luxury e-commerce',
      'Local SEO targeting Victoria Quarter and Leeds',
    ],
    cta: {
      heading: 'Ready to Elevate Your Jewelry Brand?',
      text: 'Let’s create something extraordinary together. Get a free consultation today.',
      button: 'Get a Free Consultation',
      link: '/contact',
    },
  },
];
