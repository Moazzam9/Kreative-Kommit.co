import type { Industry } from '../industries/index';

export interface IndustryData {
  industry: Industry['slug'];
  description?: string;
  facts?: string[];
}

export interface Service {
  name: string;
  slug: string;
  description: string;
  industries?: string[];
  industryData?: IndustryData[];
  cities?: string[];
  keywords?: string[];
  facts?: string[];
  templateSlug?: string;
}

import { industries } from '../industries';
import { cityServiceDescriptions, genericServiceDescriptions } from '../cities/serviceDescriptions';

export const services: Service[] = [
  {
    name: "Web Design",
    slug: "web-design",
    description: "Ready to wow your visitors and make your competitors jealous? Our web design turns pixels into profits, with sites so gorgeous even your mum will brag about them. Fast, responsive, and SEO-friendly—let’s make your brand the talk of the internet!",
    industries: industries.map(i => i.slug),
    keywords: ["web design", "website design [city]", "responsive web design"],
    templateSlug: "web-design"
  },
  {
    name: "SEO Optimisation",
    slug: "seo-optimisation",
    description: "Want to be Google’s favourite? We sprinkle SEO magic so your site climbs the ranks faster than a cat chasing a laser pointer. From keywords to technical wizardry, we’ll help you get found, get clicked, and get paid!",
    industries: industries.map(i => i.slug),
    keywords: ["SEO", "SEO optimisation [city]", "search engine optimisation"],
    templateSlug: "seo-optimisation"
  },
  {
    name: "Content Marketing",
    slug: "content-marketing",
    description: "Words matter—especially ours! We craft content that’s so engaging, your audience will forget to scroll TikTok. Blogs, guides, and more, all designed to boost your brand, tickle your funny bone, and charm search engines.",
    industries: industries.map(i => i.slug),
    keywords: ["content marketing", "content marketing [city]", "blog writing"],
    templateSlug: "content-marketing"
  },
  {
    name: "Social Media Management",
    slug: "social-media-management",
    description: "Stop shouting into the void! We’ll make your socials sparkle, sizzle, and actually get noticed. From memes to meaningful moments, we grow your followers and keep your brand top-of-feed (and top-of-mind).",
    industries: industries.map(i => i.slug),
    keywords: ["social media", "social media management [city]", "social media marketing"],
    templateSlug: "social-media-management"
  },
  {
    name: "PPC Advertising",
    slug: "ppc-advertising",
    description: "Why wait for traffic when you can buy it? Our PPC campaigns are so targeted, they could find a needle in a haystack. Get instant clicks, measurable ROI, and ads that make your competitors cry (in a good way).",
    industries: industries.map(i => i.slug),
    keywords: ["PPC", "PPC advertising [city]", "pay-per-click"],
    templateSlug: "ppc-advertising"
  },
  {
  name: "Security & Maintenance",
  slug: "security-maintenance",
  description: "Keep your website secure, updated, and running smoothly with our maintenance plans. Security updates, backups, monitoring, and 24/7 support—so you can sleep easy while we handle the tech! All work is carried out to the highest UK standards.",
  industries: industries.map(i => i.slug),
  keywords: ["security", "website maintenance", "backup solutions", "optimisation", "organisation"],
  templateSlug: "security-maintenance"
  },
    {
      name: "Branding & Identity",
      slug: "branding-identity",
      description: "Stand out from the crowd! We create memorable logos, brand guidelines, and visual identities that make your business instantly recognisable and trusted.",
      industries: industries.map(i => i.slug),
      keywords: ["branding", "logo design", "brand identity", "visual identity", "brand guidelines"],
      templateSlug: "branding-identity"
    },
    {
      name: "Email Marketing",
      slug: "email-marketing",
      description: "Turn subscribers into superfans! We design and manage email campaigns that nurture leads, drive sales, and keep your audience engaged.",
      industries: industries.map(i => i.slug),
      keywords: ["email marketing", "newsletter", "email campaigns", "lead nurturing", "email automation"],
      templateSlug: "email-marketing"
    },
    {
      name: "Conversion Rate Optimisation (CRO)",
      slug: "conversion-rate-optimisation",
      description: "Get more from your traffic! We analyse user behaviour and optimise your site to turn visitors into customers with A/B testing, UX tweaks, and smart CTAs.",
      industries: industries.map(i => i.slug),
      keywords: ["CRO", "conversion rate optimisation", "A/B testing", "call to action", "user experience"],
      templateSlug: "conversion-rate-optimisation"
    },
    {
      name: "Analytics & Reporting",
      slug: "analytics-reporting",
      description: "Know what works! We set up tracking, dashboards, and custom reports so you can measure success and make data-driven decisions.",
      industries: industries.map(i => i.slug),
      keywords: ["analytics", "reporting", "Google Analytics", "data dashboard", "performance tracking"],
      templateSlug: "analytics-reporting"
    },
    {
      name: "Website Audits",
      slug: "website-audits",
      description: "Is your site underperforming? We run deep audits to uncover technical issues, SEO gaps, and UX problems—then give you a clear action plan to fix them.",
      industries: industries.map(i => i.slug),
      keywords: ["website audit", "SEO audit", "technical audit", "usability audit", "site review"],
      templateSlug: "website-audits"
    },
];
