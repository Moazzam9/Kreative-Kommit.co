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
    city: "birmingham",
    area: "jewellery-quarter",
    industry: "jewelry",
    title: "Jewellery Quarter Branding & Website Design in Birmingham",
    description: "Shine bright in Birmingham’s Jewellery Quarter! We create dazzling branding and websites for jewelers and jewelry shops. Get noticed with luxury design, AR try-on, and SEO that sparkles.",
    features: [
      "Bespoke jewelry e-commerce websites",
      "AR try-on integration",
      "Luxury branding and logo design",
      "SEO and digital marketing for jewelers"
    ],
    whyChoose: [
      "We know the jewelry scene inside out",
      "Fun, modern, and conversion-focused design",
      "Emphasis on luxury and trust",
      "Perfect for new and established jewelers"
    ],
    cta: {
      heading: "Ready to sparkle online?",
      text: "Book your free consultation and let’s make your Jewellery Quarter brand shine!",
      button: "Shine with KreativeKommit",
      link: "/contact"
    }
  },
  {
    city: "london",
    area: "hatton-garden",
    industry: "jewelry",
    title: "Hatton Garden Jewelry Branding & Web Design London",
    description: "Rule the diamond district! Our creative team brings Hatton Garden jewelers fun, luxury branding and websites that dazzle. Stand out in London’s iconic jewelry hub with SEO that glitters.",
    features: [
      "Custom jewelry shop websites",
      "Diamond-level logo design",
      "Instagrammable branding",
      "SEO for London jewelers"
    ],
    whyChoose: [
      "London jewelry market expertise",
      "Fun, bold, and luxury design",
      "SEO to get you found by buyers",
      "Perfect for boutiques and big brands"
    ],
    cta: {
      heading: "Let’s make your brand sparkle!",
      text: "Book a free call and discover how we can help your Hatton Garden business shine online.",
      button: "Book a Branding Call",
      link: "/contact"
    }
  },
  {
    city: "sheffield",
    area: "jewellery-quarter",
    industry: "jewelry",
    title: "Sheffield Jewellery Quarter Branding & Web Design",
    description: "Forge your jewelry brand in Sheffield’s historic Jewellery Quarter! We craft fun, modern branding and websites for makers, goldsmiths, and shops. Get found with SEO that’s pure gold.",
    features: [
      "Handcrafted jewelry websites",
      "Logo design for makers",
      "Brand storytelling",
      "SEO for Sheffield jewelers"
    ],
    whyChoose: [
      "Sheffield jewelry heritage know-how",
      "Fun, creative, and modern design",
      "SEO to attract local buyers",
      "Great for independents and collectives"
    ],
    cta: {
      heading: "Ready to shine in Sheffield?",
      text: "Let’s build a brand as unique as your jewelry. Book a free chat!",
      button: "Start Your Brand Journey",
      link: "/contact"
    }
  },
  {
    city: "manchester",
    area: "northern-quarter",
    industry: "jewelry",
    title: "Manchester Northern Quarter Jewelry Branding & Web Design",
    description: "Bring your jewelry brand to life in Manchester’s creative Northern Quarter! We design playful, eye-catching branding and websites for jewelers and indie shops. SEO that gets you seen and loved.",
    features: [
      "Trendy jewelry e-commerce sites",
      "Logo design for indie jewelers",
      "Social media branding",
      "SEO for Manchester jewelers"
    ],
    whyChoose: [
      "Manchester creative scene experts",
      "Fun, bold, and modern design",
      "SEO to boost your shop’s reach",
      "Perfect for new and growing brands"
    ],
    cta: {
      heading: "Let’s make your brand pop!",
      text: "Book a free consultation and let’s create something unforgettable for your jewelry business.",
      button: "Book a Fun Branding Call",
      link: "/contact"
    }
  },
  {
    city: "glasgow",
    area: "argyle-arcade",
    industry: "jewelry",
    title: "Glasgow Argyle Arcade Jewelry Branding & Web Design",
    description: "Shine in Scotland’s jewelry capital! We create fun, luxury branding and websites for Glasgow’s Argyle Arcade jewelers. Get noticed with SEO and design that’s as brilliant as your gems.",
    features: [
      "Luxury jewelry shop websites",
      "Logo design for Scottish jewelers",
      "Branding for boutiques",
      "SEO for Glasgow jewelers"
    ],
    whyChoose: [
      "Argyle Arcade and Glasgow market know-how",
      "Fun, luxury, and modern design",
      "SEO to attract jewelry lovers",
      "Great for boutiques and family businesses"
    ],
    cta: {
      heading: "Ready to dazzle Glasgow?",
      text: "Let’s make your Argyle Arcade brand shine online. Book a free call!",
      button: "Shine in Glasgow",
      link: "/contact"
    }
  },
  {
    city: "liverpool",
    area: "hatton-garden",
    industry: "jewelry",
    title: "Liverpool Hatton Garden Jewelry Branding & Web Design",
    description: "Make your mark in Liverpool’s Hatton Garden! We design fun, modern branding and websites for jewelers and goldsmiths. SEO that helps your jewelry business sparkle in Merseyside.",
    features: [
      "Custom jewelry shop websites",
      "Logo design for goldsmiths",
      "Branding for Liverpool jewelers",
      "SEO for Merseyside jewelers"
    ],
    whyChoose: [
      "Liverpool jewelry market expertise",
      "Fun, creative, and modern design",
      "SEO to get you found locally",
      "Perfect for shops and makers"
    ],
    cta: {
      heading: "Let’s make your jewelry shine!",
      text: "Book a free consultation and let’s create a brand that stands out in Liverpool’s Hatton Garden.",
      button: "Book a Branding Call",
      link: "/contact"
    }
  },
  {
    city: "brighton",
    area: "the-lanes",
    industry: "jewelry",
    title: "Brighton The Lanes Jewelry Branding & Web Design",
    description: "Shine on the South Coast! We create playful, creative branding and websites for jewelers in Brighton’s famous Lanes. Get found with SEO and design as unique as your gems.",
    features: [
      "Boutique jewelry websites",
      "Logo design for Brighton jewelers",
      "Branding for indie shops",
      "SEO for The Lanes jewelers"
    ],
    whyChoose: [
      "Brighton indie scene expertise",
      "Fun, creative, and modern design",
      "SEO to attract tourists and locals",
      "Perfect for quirky and classic jewelers"
    ],
    cta: {
      heading: "Let’s make your Lanes brand sparkle!",
      text: "Book a free call and let’s create a Brighton jewelry brand that stands out.",
      button: "Shine in Brighton",
      link: "/contact"
    }
  },
  {
    city: "edinburgh",
    area: "george-street",
    industry: "jewelry",
    title: "Edinburgh George Street Jewelry Branding & Web Design",
    description: "Make your mark in Edinburgh’s elegant George Street! We design luxury branding and websites for jewelers, with SEO to attract Scotland’s jewelry lovers.",
    features: [
      "Luxury jewelry websites",
      "Logo design for Scottish jewelers",
      "Branding for boutiques",
      "SEO for Edinburgh jewelers"
    ],
    whyChoose: [
      "Edinburgh luxury market know-how",
      "Elegant, modern, and fun design",
      "SEO to reach local and tourist buyers",
      "Great for boutiques and family jewelers"
    ],
    cta: {
      heading: "Ready to shine in Edinburgh?",
      text: "Book a free consultation and let’s make your George Street brand sparkle.",
      button: "Book a Branding Call",
      link: "/contact"
    }
  },
  {
    city: "cardiff",
    area: "morgan-arcade",
    industry: "jewelry",
    title: "Cardiff Morgan Arcade Jewelry Branding & Web Design",
    description: "Sparkle in Cardiff’s Morgan Arcade! We create fun, modern branding and websites for jewelers in Wales’ capital, with SEO to get you found by jewelry lovers everywhere.",
    features: [
      "Jewelry shop websites",
      "Logo design for Cardiff jewelers",
      "Branding for arcades and boutiques",
      "SEO for Cardiff jewelers"
    ],
    whyChoose: [
      "Cardiff retail scene expertise",
      "Fun, modern, and creative design",
      "SEO to attract local and regional buyers",
      "Perfect for arcades and independents"
    ],
    cta: {
      heading: "Let’s make your Cardiff brand shine!",
      text: "Book a free call and let’s create a jewelry brand that stands out in Morgan Arcade.",
      button: "Shine in Cardiff",
      link: "/contact"
    }
  },
  {
    city: "belfast",
    area: "cathedral-quarter",
    industry: "jewelry",
    title: "Belfast Cathedral Quarter Jewelry Branding & Web Design",
    description: "Shine in Belfast’s creative Cathedral Quarter! We design fun, modern branding and websites for jewelers and goldsmiths, with SEO to help you stand out in Northern Ireland.",
    features: [
      "Jewelry shop websites",
      "Logo design for Belfast jewelers",
      "Branding for goldsmiths",
      "SEO for Belfast jewelers"
    ],
    whyChoose: [
      "Belfast creative scene expertise",
      "Fun, modern, and creative design",
      "SEO to attract local buyers",
      "Great for shops and makers"
    ],
    cta: {
      heading: "Let’s make your Belfast brand sparkle!",
      text: "Book a free consultation and let’s create a jewelry brand that shines in the Cathedral Quarter.",
      button: "Book a Branding Call",
      link: "/contact"
    }
  },
  {
    city: "leeds",
    area: "victoria-quarter",
    industry: "jewelry",
    title: "Leeds Victoria Quarter Jewelry Branding & Web Design",
    description: "Shine in Leeds’ stylish Victoria Quarter! We create fun, luxury branding and websites for jewelers, with SEO to get you found by Yorkshire’s jewelry lovers.",
    features: [
      "Jewelry shop websites",
      "Logo design for Leeds jewelers",
      "Branding for boutiques",
      "SEO for Leeds jewelers"
    ],
    whyChoose: [
      "Leeds retail scene expertise",
      "Fun, modern, and luxury design",
      "SEO to attract local buyers",
      "Perfect for boutiques and independents"
    ],
    cta: {
      heading: "Let’s make your Leeds brand shine!",
      text: "Book a free call and let’s create a jewelry brand that stands out in Victoria Quarter.",
      button: "Shine in Leeds",
      link: "/contact"
    }
  },
  {
    city: "nottingham",
    area: "lace-market",
    industry: "jewelry",
    title: "Nottingham Lace Market Jewelry Branding & Web Design",
    description: "Sparkle in Nottingham’s historic Lace Market! We design fun, modern branding and websites for jewelers and makers, with SEO to help you get found in the East Midlands.",
    features: [
      "Jewelry shop websites",
      "Logo design for Nottingham jewelers",
      "Branding for makers",
      "SEO for Nottingham jewelers"
    ],
    whyChoose: [
      "Nottingham creative scene expertise",
      "Fun, modern, and creative design",
      "SEO to attract local buyers",
      "Great for shops and independents"
    ],
    cta: {
      heading: "Let’s make your Nottingham brand sparkle!",
      text: "Book a free consultation and let’s create a jewelry brand that shines in the Lace Market.",
      button: "Book a Branding Call",
      link: "/contact"
    }
  },
  {
    city: "newcastle",
    area: "grey-street",
    industry: "jewelry",
    title: "Newcastle Grey Street Jewelry Branding & Web Design",
    description: "Shine in Newcastle’s Grey Street! We create fun, modern branding and websites for jewelers and goldsmiths, with SEO to help you stand out in the North East.",
    features: [
      "Jewelry shop websites",
      "Logo design for Newcastle jewelers",
      "Branding for goldsmiths",
      "SEO for Newcastle jewelers"
    ],
    whyChoose: [
      "Newcastle retail scene expertise",
      "Fun, modern, and creative design",
      "SEO to attract local buyers",
      "Great for shops and makers"
    ],
    cta: {
      heading: "Let’s make your Newcastle brand shine!",
      text: "Book a free call and let’s create a jewelry brand that stands out on Grey Street.",
      button: "Shine in Newcastle",
      link: "/contact"
    }
  },
  {
    city: "york",
    area: "stonegate",
    industry: "jewelry",
    title: "York Stonegate Jewelry Branding & Web Design",
    description: "Sparkle in York’s historic Stonegate! We design fun, modern branding and websites for jewelers and goldsmiths, with SEO to help you get found in North Yorkshire.",
    features: [
      "Jewelry shop websites",
      "Logo design for York jewelers",
      "Branding for goldsmiths",
      "SEO for York jewelers"
    ],
    whyChoose: [
      "York historic market expertise",
      "Fun, modern, and creative design",
      "SEO to attract local buyers",
      "Great for shops and independents"
    ],
    cta: {
      heading: "Let’s make your York brand sparkle!",
      text: "Book a free consultation and let’s create a jewelry brand that shines on Stonegate.",
      button: "Book a Branding Call",
      link: "/contact"
    }
  },
  {
    city: "bath",
    area: "old-bond-street",
    industry: "jewelry",
    title: "Bath Old Bond Street Jewelry Branding & Web Design",
    description: "Shine in Bath’s elegant Old Bond Street! We create fun, luxury branding and websites for jewelers, with SEO to get you found by Somerset’s jewelry lovers.",
    features: [
      "Jewelry shop websites",
      "Logo design for Bath jewelers",
      "Branding for boutiques",
      "SEO for Bath jewelers"
    ],
    whyChoose: [
      "Bath retail scene expertise",
      "Fun, modern, and luxury design",
      "SEO to attract local buyers",
      "Perfect for boutiques and independents"
    ],
    cta: {
      heading: "Let’s make your Bath brand shine!",
      text: "Book a free call and let’s create a jewelry brand that stands out on Old Bond Street.",
      button: "Shine in Bath",
      link: "/contact"
    }
  },
  {
    city: "cambridge",
    area: "trinity-street",
    industry: "jewelry",
    title: "Cambridge Trinity Street Jewelry Branding & Web Design",
    description: "Sparkle in Cambridge’s Trinity Street! We design fun, modern branding and websites for jewelers and goldsmiths, with SEO to help you get found in Cambridgeshire.",
    features: [
      "Jewelry shop websites",
      "Logo design for Cambridge jewelers",
      "Branding for goldsmiths",
      "SEO for Cambridge jewelers"
    ],
    whyChoose: [
      "Cambridge retail scene expertise",
      "Fun, modern, and creative design",
      "SEO to attract local buyers",
      "Great for shops and independents"
    ],
    cta: {
      heading: "Let’s make your Cambridge brand sparkle!",
      text: "Book a free consultation and let’s create a jewelry brand that shines on Trinity Street.",
      button: "Book a Branding Call",
      link: "/contact"
    }
  }
];
