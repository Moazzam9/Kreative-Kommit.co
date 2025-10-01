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
  // Website & App Creation
  {
    name: "Web Design",
    slug: "web-design",
    description: "Transform your online presence with award-winning web design that’s built to convert! We create stunning, mobile-friendly websites tailored to your brand and audience. Impress visitors, boost your SEO, and turn clicks into loyal customers. Ready to stand out? Let’s build your digital masterpiece today!",
    industries: industries.map(i => i.slug),
    keywords: ["web design", "website design [city]", "responsive web design", "custom website", "mobile web design", "conversion-focused web design"],
    templateSlug: "web-design"
  },
  {
    name: "E-commerce Development",
    slug: "ecommerce-development",
    description: "Launch your online store with style and confidence! We build fast, secure, and scalable e-commerce websites that turn browsers into buyers. From product pages to checkout, we make selling online easy and profitable.",
    industries: industries.map(i => i.slug),
    keywords: ["e-commerce", "online store", "shop website", "ecommerce development", "secure checkout", "product pages"],
    templateSlug: "ecommerce-development"
  },
  {
    name: "Custom Web Apps",
    slug: "custom-web-apps",
    description: "Bring your ideas to life with bespoke web applications! We design and build powerful, scalable apps tailored to your business needs—streamline operations, engage users, and stand out from the competition. If you can dream it, we can build it!",
    industries: industries.map(i => i.slug),
    keywords: ["custom web apps", "web application development", "bespoke apps", "business automation", "app design", "custom software"],
    templateSlug: "custom-web-apps"
  },
  {
    name: "UX/UI Design",
    slug: "ux-ui-design",
    description: "Delight your users and boost conversions with beautiful, intuitive UX/UI design! We craft seamless digital experiences that keep visitors engaged and coming back for more. Make every click count with design that works.",
    industries: industries.map(i => i.slug),
    keywords: ["UX design", "UI design", "user experience", "user interface", "conversion optimisation", "digital design"],
    templateSlug: "ux-ui-design"
  },

  // Marketing & Growth
  {
    name: "SEO Optimisation",
    slug: "seo-optimisation",
    description: "Climb to the top of Google and stay there! Our SEO optimisation services use proven strategies, keyword research, and technical expertise to drive organic traffic and real results. Dominate your niche, attract local customers, and grow your business with search engine optimisation that works.",
    industries: industries.map(i => i.slug),
    keywords: ["SEO", "SEO optimisation [city]", "search engine optimisation", "Google ranking", "organic traffic", "local SEO"],
    templateSlug: "seo-optimisation"
  },
  {
    name: "Local SEO & Google Profile",
    slug: "local-seo-google-profile",
    description: "Get found by customers right in your neighbourhood! We optimise your local SEO and Google Business Profile so you show up in maps, local searches, and ‘near me’ results. Dominate your area and turn online searches into real-world visits!",
    industries: industries.map(i => i.slug),
    keywords: ["local SEO", "Google Business Profile", "Google Maps", "near me searches", "local search optimisation"],
    templateSlug: "local-seo-google-profile"
  },
  {
    name: "Content Marketing",
    slug: "content-marketing",
    description: "Supercharge your brand with content that connects, converts, and climbs the search rankings! From blog posts to guides and social media, we create compelling, SEO-rich content that tells your story and drives results. Ready to become the go-to authority in your industry? Let’s get writing!",
    industries: industries.map(i => i.slug),
    keywords: ["content marketing", "content marketing [city]", "blog writing", "SEO content", "content strategy", "brand storytelling"],
    templateSlug: "content-marketing"
  },
  {
    name: "Blog Writing",
    slug: "blog-writing",
    description: "Boost your SEO and engage your audience with expertly written blog posts! Our team crafts compelling, keyword-rich articles that inform, entertain, and convert. Stay top-of-mind and become the go-to resource in your industry—one post at a time.",
    industries: industries.map(i => i.slug),
    keywords: ["blog writing", "SEO blog", "content writing", "business blog", "industry articles", "blog strategy"],
    templateSlug: "blog-writing"
  },
  {
    name: "Social Media Management",
    slug: "social-media-management",
    description: "Turn your social channels into a powerhouse for engagement and growth! We create scroll-stopping content, manage your communities, and grow your followers with data-driven strategies. Be the brand everyone’s talking about—let’s make your socials shine!",
    industries: industries.map(i => i.slug),
    keywords: ["social media", "social media management [city]", "social media marketing", "social engagement", "brand awareness", "community management"],
    templateSlug: "social-media-management"
  },
  {
    name: "PPC Advertising",
    slug: "ppc-advertising",
    description: "Get instant, measurable results with PPC advertising that targets your ideal customers! We craft high-converting ads, optimise your spend, and deliver ROI you can see. Outrank your competitors and drive more leads—let’s launch your next winning campaign!",
    industries: industries.map(i => i.slug),
    keywords: ["PPC", "PPC advertising [city]", "pay-per-click", "Google Ads", "paid search", "ad campaign"],
    templateSlug: "ppc-advertising"
  },
  {
    name: "Email Marketing",
    slug: "email-marketing",
    description: "Unlock the power of your inbox! Our email marketing campaigns nurture leads, drive sales, and keep your audience coming back for more. From newsletters to automation, we help you build lasting relationships and boost your ROI. Ready to grow your list? Let’s get started!",
    industries: industries.map(i => i.slug),
    keywords: ["email marketing", "newsletter", "email campaigns", "lead nurturing", "email automation", "email list growth", "email engagement"],
    templateSlug: "email-marketing"
  },
  {
    name: "Conversion Rate Optimisation (CRO)",
    slug: "conversion-rate-optimisation",
    description: "Turn more visitors into customers with expert CRO! We use A/B testing, UX improvements, and data-driven tweaks to maximise your conversions and revenue. Stop leaving money on the table—let’s optimise your site for real results!",
    industries: industries.map(i => i.slug),
    keywords: ["CRO", "conversion rate optimisation", "A/B testing", "call to action", "user experience", "conversion funnel", "website optimisation"],
    templateSlug: "conversion-rate-optimisation"
  },

  // Brand & Trust
  {
    name: "Branding & Identity",
    slug: "branding-identity",
    description: "Build a brand that’s unforgettable! We design eye-catching logos, craft compelling brand stories, and create visual identities that set you apart. Become the business everyone remembers—let’s make your brand iconic!",
    industries: industries.map(i => i.slug),
    keywords: ["branding", "logo design", "brand identity", "visual identity", "brand guidelines", "brand strategy", "brand storytelling"],
    templateSlug: "branding-identity"
  },

  // Support & Compliance
  {
    name: "Security & Maintenance",
    slug: "security-maintenance",
    description: "Protect your digital investment with 24/7 website security and maintenance! We handle updates, backups, monitoring, and rapid support—so you can focus on your business, not your tech. Stay safe, stay online, and stay ahead of threats with our expert team.",
    industries: industries.map(i => i.slug),
    keywords: ["security", "website maintenance", "backup solutions", "optimisation", "organisation", "website security", "uptime monitoring"],
    templateSlug: "security-maintenance"
  },
  {
    name: "Accessibility Audits",
    slug: "accessibility-audits",
    description: "Make your website welcoming to everyone! Our accessibility audits identify barriers and provide actionable fixes so your site is inclusive, compliant, and user-friendly for all. Open your digital doors to a wider audience.",
    industries: industries.map(i => i.slug),
    keywords: ["accessibility", "accessibility audit", "WCAG compliance", "inclusive design", "website accessibility"],
    templateSlug: "accessibility-audits"
  },
  {
    name: "Hosting & Domain Management",
    slug: "hosting-domain-management",
    description: "Enjoy hassle-free hosting and domain management for your business! We keep your website fast, secure, and always online—plus handle renewals, migrations, and support. Focus on your business while we handle the tech.",
    industries: industries.map(i => i.slug),
    keywords: ["website hosting", "domain management", "secure hosting", "domain renewal", "website uptime"],
    templateSlug: "hosting-domain-management"
  },
  {
    name: "Website Audits",
    slug: "website-audits",
    description: "Unlock your website’s full potential! Our comprehensive audits uncover technical issues, SEO gaps, and UX problems—then deliver a clear, actionable plan to boost your rankings and results. Don’t settle for average—let’s make your site exceptional!",
    industries: industries.map(i => i.slug),
    keywords: ["website audit", "SEO audit", "technical audit", "usability audit", "site review", "site health", "SEO improvement"],
    templateSlug: "website-audits"
  },
  {
    name: "Analytics & Reporting",
    slug: "analytics-reporting",
    description: "Make smarter decisions with powerful analytics and reporting! We set up tracking, build custom dashboards, and deliver insights that help you grow. See what’s working, spot new opportunities, and measure your success with confidence.",
    industries: industries.map(i => i.slug),
    keywords: ["analytics", "reporting", "Google Analytics", "data dashboard", "performance tracking", "business insights", "data-driven marketing"],
    templateSlug: "analytics-reporting"
  },

  // Education
  {
    name: "Training & Workshops",
    slug: "training-workshops",
    description: "Empower your team with expert-led training and workshops! From SEO to social media and content creation, we help you master the digital skills that drive results. Learn, grow, and stay ahead of the competition.",
    industries: industries.map(i => i.slug),
    keywords: ["digital training", "workshops", "SEO training", "social media workshop", "content marketing training"],
    templateSlug: "training-workshops"
  },
  {
    name: "SEO Optimisation",
    slug: "seo-optimisation",
  description: "Climb to the top of Google and stay there! Our SEO optimisation services use proven strategies, keyword research, and technical expertise to drive organic traffic and real results. Dominate your niche, attract local customers, and grow your business with search engine optimisation that works.",
    industries: industries.map(i => i.slug),
    keywords: ["SEO", "SEO optimisation [city]", "search engine optimisation", "Google ranking", "organic traffic", "local SEO"],
    templateSlug: "seo-optimisation"
  },
  {
    name: "Content Marketing",
    slug: "content-marketing",
    description: "Supercharge your brand with content that connects, converts, and climbs the search rankings! From blog posts to guides and social media, we create compelling, SEO-rich content that tells your story and drives results. Ready to become the go-to authority in your industry? Let’s get writing!",
    industries: industries.map(i => i.slug),
    keywords: ["content marketing", "content marketing [city]", "blog writing", "SEO content", "content strategy", "brand storytelling"],
    templateSlug: "content-marketing"
  },
  {
    name: "Social Media Management",
    slug: "social-media-management",
    description: "Turn your social channels into a powerhouse for engagement and growth! We create scroll-stopping content, manage your communities, and grow your followers with data-driven strategies. Be the brand everyone’s talking about—let’s make your socials shine!",
    industries: industries.map(i => i.slug),
    keywords: ["social media", "social media management [city]", "social media marketing", "social engagement", "brand awareness", "community management"],
    templateSlug: "social-media-management"
  },
  {
    name: "PPC Advertising",
    slug: "ppc-advertising",
    description: "Get instant, measurable results with PPC advertising that targets your ideal customers! We craft high-converting ads, optimise your spend, and deliver ROI you can see. Outrank your competitors and drive more leads—let’s launch your next winning campaign!",
    industries: industries.map(i => i.slug),
    keywords: ["PPC", "PPC advertising [city]", "pay-per-click", "Google Ads", "paid search", "ad campaign"],
    templateSlug: "ppc-advertising"
  },
  {
    name: "Security & Maintenance",
    slug: "security-maintenance",
    description: "Protect your digital investment with 24/7 website security and maintenance! We handle updates, backups, monitoring, and rapid support—so you can focus on your business, not your tech. Stay safe, stay online, and stay ahead of threats with our expert team.",
    industries: industries.map(i => i.slug),
    keywords: ["security", "website maintenance", "backup solutions", "optimisation", "organisation", "website security", "uptime monitoring"],
    templateSlug: "security-maintenance"
  },
    {
      name: "Branding & Identity",
      slug: "branding-identity",
      description: "Build a brand that’s unforgettable! We design eye-catching logos, craft compelling brand stories, and create visual identities that set you apart. Become the business everyone remembers—let’s make your brand iconic!",
      industries: industries.map(i => i.slug),
      keywords: ["branding", "logo design", "brand identity", "visual identity", "brand guidelines", "brand strategy", "brand storytelling"],
      templateSlug: "branding-identity"
    },
    {
      name: "Email Marketing",
      slug: "email-marketing",
      description: "Unlock the power of your inbox! Our email marketing campaigns nurture leads, drive sales, and keep your audience coming back for more. From newsletters to automation, we help you build lasting relationships and boost your ROI. Ready to grow your list? Let’s get started!",
      industries: industries.map(i => i.slug),
      keywords: ["email marketing", "newsletter", "email campaigns", "lead nurturing", "email automation", "email list growth", "email engagement"],
      templateSlug: "email-marketing"
    },
    {
      name: "Conversion Rate Optimisation (CRO)",
      slug: "conversion-rate-optimisation",
      description: "Turn more visitors into customers with expert CRO! We use A/B testing, UX improvements, and data-driven tweaks to maximise your conversions and revenue. Stop leaving money on the table—let’s optimise your site for real results!",
      industries: industries.map(i => i.slug),
      keywords: ["CRO", "conversion rate optimisation", "A/B testing", "call to action", "user experience", "conversion funnel", "website optimisation"],
      templateSlug: "conversion-rate-optimisation"
    },
    {
      name: "Analytics & Reporting",
      slug: "analytics-reporting",
      description: "Make smarter decisions with powerful analytics and reporting! We set up tracking, build custom dashboards, and deliver insights that help you grow. See what’s working, spot new opportunities, and measure your success with confidence.",
      industries: industries.map(i => i.slug),
      keywords: ["analytics", "reporting", "Google Analytics", "data dashboard", "performance tracking", "business insights", "data-driven marketing"],
      templateSlug: "analytics-reporting"
    },
    {
      name: "Website Audits",
      slug: "website-audits",
      description: "Unlock your website’s full potential! Our comprehensive audits uncover technical issues, SEO gaps, and UX problems—then deliver a clear, actionable plan to boost your rankings and results. Don’t settle for average—let’s make your site exceptional!",
      industries: industries.map(i => i.slug),
      keywords: ["website audit", "SEO audit", "technical audit", "usability audit", "site review", "site health", "SEO improvement"],
      templateSlug: "website-audits"
    },
];
