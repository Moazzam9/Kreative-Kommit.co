export interface Service {
  name: string;
  slug: string;
  description: string;
  cityDescriptions?: { [citySlug: string]: string[] };
  industries?: string[];
  industryData?: any[];
  cities?: string[];
  keywords?: string[];
  facts?: string[];
  templateSlug?: string;
}
import { industries } from '../industries';

export const services: Service[] = [
  {
    name: "Web Design",
    slug: "web-design",
    description: "Create stunning, user-friendly websites that engage visitors and drive conversions. Our web design services combine creativity, strategy, and the latest technology for results that stand out.",
    cityDescriptions: {
      manchester: ["Professional web design in {city} for businesses seeking modern, responsive websites that convert visitors into customers."],
      liverpool: ["Liverpool web design experts crafting beautiful, effective websites for local brands."],
      leeds: ["Leeds web design services focused on user experience and business growth."],
      newcastle: ["Newcastle web design for companies wanting to stand out online."],
      sheffield: ["Sheffield web design solutions for creative and industrial sectors."]
    },
    industries: industries.map(i => i.slug),
    keywords: ["web design", "website design [city]", "responsive web design"],
    templateSlug: "web-design"
  },
  {
    name: "SEO Optimisation",
    slug: "seo-optimisation",
    description: "Boost your search engine rankings and attract more organic traffic. Our SEO optimisation services include keyword research, on-page SEO, technical audits, and link building.",
    cityDescriptions: {
      manchester: ["SEO services in {city} to improve your website’s visibility and drive local traffic."],
      liverpool: ["Liverpool SEO experts helping businesses rank higher and grow online."],
      leeds: ["Leeds SEO optimisation for better search rankings and more customers."],
      newcastle: ["Newcastle SEO strategies for increased online presence."],
      sheffield: ["Sheffield SEO solutions for creative and industrial companies."]
    },
    industries: industries.map(i => i.slug),
    keywords: ["SEO", "SEO optimisation [city]", "search engine optimisation"],
    templateSlug: "seo-optimisation"
  },
  {
    name: "Content Marketing",
    slug: "content-marketing",
    description: "Engage your audience and build authority with strategic content marketing. We create blogs, articles, guides, and multimedia content tailored to your brand and goals.",
    cityDescriptions: {
      manchester: ["Content marketing in {city} to grow your brand and connect with customers."],
      liverpool: ["Liverpool content marketing for local business growth and engagement."],
      leeds: ["Leeds content marketing strategies for authority and reach."],
      newcastle: ["Newcastle content marketing for impactful storytelling."],
      sheffield: ["Sheffield content marketing for creative and industrial sectors."]
    },
    industries: industries.map(i => i.slug),
    keywords: ["content marketing", "content marketing [city]", "blog writing"],
    templateSlug: "content-marketing"
  },
  {
    name: "Social Media Management",
    slug: "social-media-management",
    description: "Grow your brand and engage your audience with expert social media management. We create, schedule, and optimize posts across all major platforms to maximize your reach.",
    cityDescriptions: {
      manchester: ["Social media management in {city} for brands wanting to connect and grow online."],
      liverpool: ["Liverpool social media management for local engagement and brand building."],
      leeds: ["Leeds social media strategies for business growth."],
      newcastle: ["Newcastle social media management for impactful online presence."],
      sheffield: ["Sheffield social media solutions for creative and industrial sectors."]
    },
    industries: industries.map(i => i.slug),
    keywords: ["social media", "social media management [city]", "social media marketing"],
    templateSlug: "social-media-management"
  },
  {
    name: "PPC Advertising",
    slug: "ppc-advertising",
    description: "Drive instant traffic and leads with targeted PPC advertising. We manage Google Ads, Bing Ads, and social media campaigns to maximize your ROI.",
    cityDescriptions: {
      manchester: ["PPC advertising in {city} for businesses seeking fast results and measurable ROI."],
      liverpool: ["Liverpool PPC management for local brands and campaigns."],
      leeds: ["Leeds PPC advertising for business growth and lead generation."],
      newcastle: ["Newcastle PPC strategies for online success."],
      sheffield: ["Sheffield PPC solutions for creative and industrial sectors."]
    },
    industries: industries.map(i => i.slug),
    keywords: ["PPC", "PPC advertising [city]", "pay-per-click"],
    templateSlug: "ppc-advertising"
  }
];
