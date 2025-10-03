import { MetadataRoute } from 'next';

import { services } from './data/services/services';
import { cityFacts } from './data/cities/facts';
import { industries } from './data/industries/industries';

// Import all niche data files
import { beautyBrandingPages } from './data/niches/beauty';
import { constructionBrandingPages } from './data/niches/construction';
import { realEstateBrandingPages } from './data/niches/realestate';
import { educationBrandingPages } from './data/niches/education';
import { legalBrandingPages } from './data/niches/legal';
import { ecommerceBrandingPages } from './data/niches/ecommerce';
import { dentalBrandingPages } from './data/niches/dental';
import { charityBrandingPages } from './data/niches/charity';
import { restaurantBrandingPages } from './data/niches/restaurant';
import { medicalBrandingPages } from './data/niches/medical';
import { financialBrandingPages } from './data/niches/financial';
import { techBrandingPages } from './data/niches/tech';
import { hospitalityBrandingPages } from './data/niches/hospitality';
import { petServicesBrandingPages } from './data/niches/petservices';
import { tradesBrandingPages } from './data/niches/trades';
import { healthWellnessBrandingPages } from './data/niches/healthwellness';
import { childcareBrandingPages } from './data/niches/childcare';
import { artsCultureBrandingPages } from './data/niches/artsculture';
import { sportsBrandingPages } from './data/niches/sports';
import { homeGardenBrandingPages } from './data/niches/homegarden';
import { automotiveServicesBrandingPages } from './data/niches/automotiveservices';
import { foodDrinkBrandingPages } from './data/niches/fooddrink';
import { photographyBrandingPages } from './data/niches/photography';
import { travelTourismBrandingPages } from './data/niches/traveltourism';
import { cleaningBrandingPages } from './data/niches/cleaning';
import { securityBrandingPages } from './data/niches/security';
import { recruitmentBrandingPages } from './data/niches/recruitment';
import { plumbersBrandingPages } from './data/niches/plumbers';
import { roofersBrandingPages } from './data/niches/roofers';
import { flooringBrandingPages } from './data/niches/flooring';
import { windowCleanersBrandingPages } from './data/niches/windowcleaners';
import { paintersBrandingPages } from './data/niches/painters';
import { vetsBrandingPages } from './data/niches/vets';
import { fitnessBrandingPages } from './data/niches/fitness';
import { automotiveBrandingPages } from './data/niches/automotive';
import { eventsBrandingPages } from './data/niches/events';
import { brandingPages } from './data/niches/branding';

// Define niche page data type for sitemap
interface NichePageData {
  city: string;
  area?: string;
  title: string;
  description: string;
}

// Aggregate all niche data
const allNicheData: Record<string, NichePageData[]> = {
  beauty: beautyBrandingPages,
  construction: constructionBrandingPages,
  realestate: realEstateBrandingPages,
  education: educationBrandingPages,
  legal: legalBrandingPages,
  ecommerce: ecommerceBrandingPages,
  dental: dentalBrandingPages,
  charity: charityBrandingPages,
  restaurant: restaurantBrandingPages,
  medical: medicalBrandingPages,
  financial: financialBrandingPages,
  tech: techBrandingPages,
  hospitality: hospitalityBrandingPages,
  petservices: petServicesBrandingPages,
  trades: tradesBrandingPages,
  healthwellness: healthWellnessBrandingPages,
  childcare: childcareBrandingPages,
  artsculture: artsCultureBrandingPages,
  sports: sportsBrandingPages,
  homegarden: homeGardenBrandingPages,
  automotiveservices: automotiveServicesBrandingPages,
  fooddrink: foodDrinkBrandingPages,
  photography: photographyBrandingPages,
  traveltourism: travelTourismBrandingPages,
  cleaning: cleaningBrandingPages,
  security: securityBrandingPages,
  recruitment: recruitmentBrandingPages,
  plumbers: plumbersBrandingPages,
  roofers: roofersBrandingPages,
  flooring: flooringBrandingPages,
  windowcleaners: windowCleanersBrandingPages,
  painters: paintersBrandingPages,
  vets: vetsBrandingPages,
  fitness: fitnessBrandingPages,
  automotive: automotiveBrandingPages,
  events: eventsBrandingPages,
  branding: brandingPages,
};

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kreativekommit.com';

  // Static URLs
  const staticUrls: Array<{ url: string; lastModified: Date; changeFrequency?: 'monthly' | 'weekly' | 'always' | 'hourly' | 'daily' | 'yearly' | 'never'; priority?: number }> = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/designs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Dynamic service/city URLs
  const serviceCityUrls: Array<{ url: string; lastModified: Date; changeFrequency?: 'monthly' | 'weekly' | 'always' | 'hourly' | 'daily' | 'yearly' | 'never'; priority?: number }> = [];
  services.forEach((service: { slug: string }) => {
    cityFacts.forEach((city: { slug: string }) => {
      serviceCityUrls.push({
        url: `${baseUrl}/services/${service.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  // Dynamic niche/city/area URLs
  const nicheCityUrls: Array<{ url: string; lastModified: Date; changeFrequency?: 'monthly' | 'weekly' | 'always' | 'hourly' | 'daily' | 'yearly' | 'never'; priority?: number }> = [];
  Object.entries(allNicheData).forEach(([nicheSlug, pages]) => {
    pages.forEach((entry) => {
      if (entry.city && entry.area) {
        nicheCityUrls.push({
          url: `${baseUrl}/industries/${nicheSlug}/${entry.city}/${entry.area}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      }
    });
  });

  // Industry listing page
  const industryListingUrl = {
    url: `${baseUrl}/industries`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  };

  // Industry detail pages
  const industryDetailUrls: Array<{ url: string; lastModified: Date; changeFrequency?: 'monthly' | 'weekly' | 'always' | 'hourly' | 'daily' | 'yearly' | 'never'; priority?: number }> = industries.map((industry: { slug: string }) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...serviceCityUrls, ...nicheCityUrls, industryListingUrl, ...industryDetailUrls];
}