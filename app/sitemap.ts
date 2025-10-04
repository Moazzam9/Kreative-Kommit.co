import type { MetadataRoute } from 'next';
import { services } from './data/services/services';
import { cityFacts } from './data/cities/facts';
import { industries } from './data/industries/industries';
import { getBlogPosts } from '@/lib/getBlogPosts';
import { getGuides } from '@/lib/getGuides';

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

interface NichePageData {
  city: string;
  area?: string;
  title: string;
  description: string;
}

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

/**
 * Comprehensive sitemap for kreativekommit.com
 * 
 * Structure:
 * - Core static pages (5 URLs)
 * - Service pages: index + individual + service×city (9,840 URLs)
 * - City pages (517 URLs)
 * - Industry pages: index + individual + niche×city×area (514 URLs)
 * - Content pages: blog + guides (68 URLs)
 * 
 * Total: ~10,944 URLs (well under Google's 50,000 limit)
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kreativekommit.com';

  // ========== CORE STATIC PAGES (5 URLs) ==========
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
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
  ];

  // ========== SERVICE PAGES (~9,840 URLs) ==========
  // Services index page
  const servicesIndex = {
    url: `${baseUrl}/services`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  };

  // Individual service pages (19 URLs)
  const servicePages = services.map((service: { slug: string }) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Service × City pages (9,820 URLs)
  const serviceCityPages = services.flatMap((service: { slug: string }) =>
    cityFacts.map((city: { slug: string }) => ({
      url: `${baseUrl}/services/${service.slug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // ========== CITY PAGES (517 URLs) ==========
  const cityPages = cityFacts.map((city: { slug: string }) => ({
    url: `${baseUrl}/cities/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // ========== INDUSTRY PAGES (~514 URLs) ==========
  // Industries index page (niche branding overview)
  const industriesIndex = {
    url: `${baseUrl}/industries`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  };

  // Individual industry overview pages (40 URLs) - now at /industry/ (singular)
  const industryPages = industries.map((industry: { slug: string }) => ({
    url: `${baseUrl}/industry/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Niche × City × Area pages (473 URLs)
  const nicheCityAreaPages = Object.entries(allNicheData).flatMap(([nicheSlug, pages]) =>
    pages
      .filter((entry) => entry.city && entry.area)
      .map((entry) => ({
        url: `${baseUrl}/industries/${nicheSlug}/${entry.city}/${entry.area}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
  );

  // ========== CONTENT PAGES (68 URLs) ==========
  // Blog index page
  const blogIndex = {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  };

  // Blog posts (43 URLs)
  const blogPosts = await getBlogPosts();
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Guides index page
  const guidesIndex = {
    url: `${baseUrl}/guides`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  };

  // Guide pages (23 URLs)
  const guides = await getGuides();
  const guidePages = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // ========== COMBINE ALL URLS ==========
  return [
    ...staticPages,
    servicesIndex,
    ...servicePages,
    ...serviceCityPages,
    ...cityPages,
    industriesIndex,
    ...industryPages,
    ...nicheCityAreaPages,
    blogIndex,
    ...blogPages,
    guidesIndex,
    ...guidePages,
  ];
}