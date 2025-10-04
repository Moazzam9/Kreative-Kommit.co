/**
 * Pricing Data Structure for KreativeKommit Services
 * Includes tier-based pricing with regional multipliers
 */

export interface PricingTier {
  name: string;
  price: number;
  recurring?: 'monthly' | 'one-time';
  features: string[];
  popular?: boolean;
}

export interface ServicePricing {
  tiers: {
    basic: PricingTier;
    professional: PricingTier;
    enterprise: PricingTier;
  };
  regionalMultipliers: {
    [citySlug: string]: number;
  };
}

export const servicePricing: { [serviceSlug: string]: ServicePricing } = {
  'web-design': {
    tiers: {
      basic: {
        name: 'Starter Website',
        price: 1200,
        recurring: 'one-time',
        features: [
          '5-page responsive website',
          'Mobile-optimized design',
          'Contact form integration',
          'Basic SEO setup',
          '1 month support',
          'Free SSL certificate',
        ],
      },
      professional: {
        name: 'Business Website',
        price: 2500,
        recurring: 'one-time',
        popular: true,
        features: [
          '10-page responsive website',
          'Custom design & branding',
          'CMS integration (WordPress/headless)',
          'Advanced SEO optimization',
          '3 months support & updates',
          'Blog setup & training',
          'Google Analytics integration',
          'Social media integration',
        ],
      },
      enterprise: {
        name: 'Enterprise Solution',
        price: 5000,
        recurring: 'one-time',
        features: [
          'Unlimited pages',
          'Custom functionality & features',
          'Advanced animations & interactions',
          'E-commerce capability',
          'Advanced analytics & tracking',
          '12 months priority support',
          'Performance optimization',
          'Security hardening',
          'Regular backups',
        ],
      },
    },
    regionalMultipliers: {
      london: 1.3,
      manchester: 1.1,
      birmingham: 1.1,
      liverpool: 1.05,
      edinburgh: 1.15,
      glasgow: 1.1,
      bristol: 1.1,
      leeds: 1.05,
      cardiff: 1.05,
      default: 1.0,
    },
  },

  'seo-optimisation': {
    tiers: {
      basic: {
        name: 'Local SEO',
        price: 600,
        recurring: 'monthly',
        features: [
          'Keyword research & strategy',
          'On-page optimization',
          'Google Business Profile setup',
          'Local citation building',
          'Monthly performance report',
          'Meta tags & descriptions',
        ],
      },
      professional: {
        name: 'Advanced SEO',
        price: 1200,
        recurring: 'monthly',
        popular: true,
        features: [
          'Everything in Local SEO',
          'Content strategy & creation',
          'Link building campaigns',
          'Competitor analysis',
          'Technical SEO audits',
          'Weekly performance reports',
          'Google Search Console setup',
          'Schema markup implementation',
        ],
      },
      enterprise: {
        name: 'Enterprise SEO',
        price: 2500,
        recurring: 'monthly',
        features: [
          'Everything in Advanced SEO',
          'International SEO strategy',
          'Advanced technical optimization',
          'Dedicated account manager',
          'Daily performance monitoring',
          'Conversion rate optimization',
          'A/B testing & experiments',
          'Quarterly strategy sessions',
        ],
      },
    },
    regionalMultipliers: {
      london: 1.4,
      manchester: 1.2,
      birmingham: 1.15,
      default: 1.0,
    },
  },

  'ecommerce-development': {
    tiers: {
      basic: {
        name: 'Starter Store',
        price: 3000,
        recurring: 'one-time',
        features: [
          'Up to 50 products',
          'Mobile-responsive design',
          'Payment gateway integration',
          'Basic shipping options',
          'SSL certificate',
          'Product management training',
          '2 months support',
        ],
      },
      professional: {
        name: 'Business Store',
        price: 6000,
        recurring: 'one-time',
        popular: true,
        features: [
          'Unlimited products',
          'Custom design & branding',
          'Advanced payment options',
          'Inventory management',
          'Marketing integrations',
          'Email automation setup',
          'Analytics & reporting',
          '6 months priority support',
        ],
      },
      enterprise: {
        name: 'Enterprise Store',
        price: 15000,
        recurring: 'one-time',
        features: [
          'Everything in Business Store',
          'Custom functionality',
          'Multi-currency support',
          'Advanced shipping options',
          'CRM integration',
          'API development',
          'Performance optimization',
          '12 months priority support',
          'Dedicated account manager',
        ],
      },
    },
    regionalMultipliers: {
      london: 1.35,
      manchester: 1.15,
      default: 1.0,
    },
  },

  'custom-web-apps': {
    tiers: {
      basic: {
        name: 'MVP Development',
        price: 5000,
        recurring: 'one-time',
        features: [
          'Core functionality',
          'User authentication',
          'Database setup',
          'Mobile-responsive',
          'Basic admin panel',
          '3 months support',
        ],
      },
      professional: {
        name: 'Full Application',
        price: 15000,
        recurring: 'one-time',
        popular: true,
        features: [
          'Everything in MVP',
          'Advanced features',
          'API development',
          'Third-party integrations',
          'Advanced admin panel',
          'User roles & permissions',
          '6 months support',
          'Documentation',
        ],
      },
      enterprise: {
        name: 'Enterprise Application',
        price: 50000,
        recurring: 'one-time',
        features: [
          'Everything in Full Application',
          'Scalable architecture',
          'Advanced security',
          'Performance optimization',
          'CI/CD pipeline',
          'Load balancing',
          '12 months support',
          'Dedicated team',
          'Ongoing maintenance',
        ],
      },
    },
    regionalMultipliers: {
      london: 1.5,
      manchester: 1.2,
      default: 1.0,
    },
  },

  'branding-identity': {
    tiers: {
      basic: {
        name: 'Logo Package',
        price: 800,
        recurring: 'one-time',
        features: [
          'Logo design (3 concepts)',
          '3 revision rounds',
          'Color palette',
          'Logo files (PNG, SVG)',
          'Basic brand guidelines',
        ],
      },
      professional: {
        name: 'Full Brand Identity',
        price: 2000,
        recurring: 'one-time',
        popular: true,
        features: [
          'Everything in Logo Package',
          'Business card design',
          'Letterhead design',
          'Social media templates',
          'Brand style guide',
          'Typography selection',
          'Email signature design',
        ],
      },
      enterprise: {
        name: 'Complete Brand System',
        price: 5000,
        recurring: 'one-time',
        features: [
          'Everything in Full Brand Identity',
          'Marketing collateral designs',
          'Brand messaging & voice',
          'Comprehensive brand guidelines',
          'Presentation templates',
          'Icon set design',
          'Brand workshop session',
          'Ongoing brand support',
        ],
      },
    },
    regionalMultipliers: {
      london: 1.25,
      manchester: 1.1,
      default: 1.0,
    },
  },

  'content-marketing': {
    tiers: {
      basic: {
        name: 'Content Starter',
        price: 500,
        recurring: 'monthly',
        features: [
          '4 blog posts per month',
          'Keyword research',
          'SEO optimization',
          'Image sourcing',
          'Basic promotion',
        ],
      },
      professional: {
        name: 'Content Growth',
        price: 1500,
        recurring: 'monthly',
        popular: true,
        features: [
          '8 blog posts per month',
          'Advanced keyword strategy',
          'Social media posts',
          'Email newsletters',
          'Content calendar',
          'Analytics reporting',
        ],
      },
      enterprise: {
        name: 'Content Authority',
        price: 3000,
        recurring: 'monthly',
        features: [
          '16+ blog posts per month',
          'Video scripts',
          'Whitepapers & ebooks',
          'Infographic design',
          'Content distribution',
          'Influencer outreach',
          'Dedicated content strategist',
        ],
      },
    },
    regionalMultipliers: {
      london: 1.3,
      manchester: 1.15,
      default: 1.0,
    },
  },

  'social-media-management': {
    tiers: {
      basic: {
        name: 'Social Starter',
        price: 400,
        recurring: 'monthly',
        features: [
          '2 social platforms',
          '12 posts per month',
          'Content creation',
          'Basic engagement',
          'Monthly analytics',
        ],
      },
      professional: {
        name: 'Social Growth',
        price: 1000,
        recurring: 'monthly',
        popular: true,
        features: [
          '4 social platforms',
          '20 posts per month',
          'Custom graphics',
          'Community management',
          'Influencer collaboration',
          'Weekly analytics',
        ],
      },
      enterprise: {
        name: 'Social Authority',
        price: 2500,
        recurring: 'monthly',
        features: [
          'All social platforms',
          'Daily posts',
          'Video content',
          'Paid social campaigns',
          'Crisis management',
          'Dedicated social media manager',
          'Real-time monitoring',
        ],
      },
    },
    regionalMultipliers: {
      london: 1.25,
      default: 1.0,
    },
  },

  'ppc-advertising': {
    tiers: {
      basic: {
        name: 'PPC Starter',
        price: 500,
        recurring: 'monthly',
        features: [
          'Google Ads management',
          'Up to £1,000 ad spend',
          'Keyword research',
          'Ad copywriting',
          'Monthly reporting',
        ],
      },
      professional: {
        name: 'PPC Growth',
        price: 1500,
        recurring: 'monthly',
        popular: true,
        features: [
          'Google & Bing Ads',
          'Up to £5,000 ad spend',
          'Landing page optimization',
          'A/B testing',
          'Conversion tracking',
          'Weekly reporting',
        ],
      },
      enterprise: {
        name: 'PPC Authority',
        price: 3500,
        recurring: 'monthly',
        features: [
          'Multi-platform campaigns',
          'Unlimited ad spend',
          'Advanced remarketing',
          'Display advertising',
          'Shopping campaigns',
          'Dedicated PPC specialist',
          'Daily optimization',
        ],
      },
    },
    regionalMultipliers: {
      london: 1.4,
      manchester: 1.2,
      default: 1.0,
    },
  },
};

/**
 * Get pricing for a specific service and city
 * Applies regional multiplier if available
 */
export function getServicePricing(serviceSlug: string, citySlug: string): ServicePricing | null {
  const pricing = servicePricing[serviceSlug];
  if (!pricing) return null;

  const multiplier = pricing.regionalMultipliers[citySlug] || pricing.regionalMultipliers.default || 1.0;

  return {
    ...pricing,
    tiers: {
      basic: {
        ...pricing.tiers.basic,
        price: Math.round(pricing.tiers.basic.price * multiplier),
      },
      professional: {
        ...pricing.tiers.professional,
        price: Math.round(pricing.tiers.professional.price * multiplier),
      },
      enterprise: {
        ...pricing.tiers.enterprise,
        price: Math.round(pricing.tiers.enterprise.price * multiplier),
      },
    },
  };
}

/**
 * Format price for display
 */
export function formatPrice(price: number, recurring?: 'monthly' | 'one-time'): string {
  const formatted = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return recurring === 'monthly' ? `${formatted}/mo` : formatted;
}
