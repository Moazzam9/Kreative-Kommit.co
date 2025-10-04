import type { MetadataRoute } from 'next';
import { services } from './data/services/services';
import { allRegionsCities } from './data/cities/targets';
import { industries } from './data/industries/industries';
import { getBlogPosts } from '@/lib/getBlogPosts';
import { getGuides } from '@/lib/getGuides';

// ========== SITEMAP CONFIGURATION ==========
// Major UK cities with unique content (242 descriptions)
// These cities get higher priority (0.8) vs generic cities (0.6)
const MAJOR_CITIES = [
  'london', 'birmingham', 'manchester', 'leeds', 'liverpool',
  'bristol', 'sheffield', 'newcastle', 'nottingham', 'leicester',
  'southampton', 'brighton', 'york', 'bradford', 'coventry',
  'plymouth', 'wolverhampton', 'portsmouth', 'warrington',
  'glasgow', 'edinburgh', 'cardiff'
];

// Content update dates for accurate lastModified values
const CONTENT_UPDATES = {
  MAJOR_CITIES_UPDATED: new Date('2025-10-04'), // Unique content added
  SCHEMA_UPDATED: new Date('2025-10-04'),       // FAQ & breadcrumb schema added
  PRICING_ADDED: new Date('2025-10-04'),        // Pricing tables added
  GENERIC_CONTENT: new Date('2025-09-01'),      // Original content date
};

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
 * ========== COMPREHENSIVE SITEMAP FOR KREATIVEKOMMIT.COM ==========
 * 
 * CURRENT STATUS (October 2025):
 * ✅ Total URLs: ~20,000 (40% of Google's 50,000 limit)
 * ✅ File Size: ~3.5 MB (7% of 50 MB limit)
 * ✅ Structure: Single sitemap (no splitting needed yet)
 * 
 * URL BREAKDOWN:
 * - Core static pages:           5 URLs
 * - Services index + pages:      20 URLs  
 * - Service × City pages:        15,420 URLs (20 services × 771 cities)
 * - City pages:                  771 URLs (UK + Wales + Scotland + Ireland)
 * - Industries + niche pages:    ~514 URLs
 * - Blog + Guides:               ~100 URLs
 * 
 * PRIORITY STRUCTURE:
 * - 1.0: Homepage
 * - 0.9: Portfolio
 * - 0.8: Services index, Designs, Major city service pages (22 cities)
 * - 0.7: Individual service pages, Major city pages, Industry pages
 * - 0.6: Generic city service pages (495+ cities), Generic city pages, Content
 * 
 * MAJOR CITIES (22 cities with unique content - priority 0.8):
 * London, Birmingham, Manchester, Leeds, Liverpool, Bristol, Sheffield,
 * Newcastle, Nottingham, Leicester, Southampton, Brighton, York, Bradford,
 * Coventry, Plymouth, Wolverhampton, Portsmouth, Warrington, Glasgow,
 * Edinburgh, Cardiff
 * 
 * GEOGRAPHIC COVERAGE (771 cities total):
 * - England: 517 cities (deduplicated)
 * - Wales: 47 cities (Cardiff, Swansea, Newport, etc.)
 * - Scotland: 129 cities (Glasgow, Edinburgh, Aberdeen, etc.)
 * - Ireland: 78 cities (Dublin, Belfast, Cork, etc.)
 * 
 * LAST MODIFIED LOGIC:
 * - Major cities: 2025-10-04 (unique content added)
 * - Service pages: 2025-10-04 (FAQ schema + breadcrumbs added)
 * - Generic cities: 2025-09-01 (original content date)
 * - Content: Actual publish/update dates
 * 
 * FUTURE SCALING:
 * - Split recommended when URLs reach 30,000+ (currently 15,040)
 * - Split structure: static, services, cities, industries, content
 * - Current growth rate: Sustainable for next 6-12 months
 * 
 * GOOGLE SEARCH CONSOLE:
 * Submit to: https://search.google.com/search-console
 * Sitemap URL: https://kreativekommit.com/sitemap.xml
 */
// Generate multiple sitemap segments
export function generateSitemaps() {
  return [
    { id: 'static' },
    { id: 'services' },
    { id: 'cities' },
    { id: 'industries' },
    { id: 'content' },
  ];
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kreativekommit.com';

  // ========== STATIC PAGES (5 URLs) ==========
  if (id === 'static') {
    return [
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
  }

  // ========== SERVICE PAGES (~18,600 URLs) ==========
  if (id === 'services') {
    const servicesIndex = {
      url: `${baseUrl}/services`,
      lastModified: CONTENT_UPDATES.SCHEMA_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };

    const servicePages = services.map((service: { slug: string }) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: CONTENT_UPDATES.SCHEMA_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    const serviceCityPages = services.flatMap((service: { slug: string }) =>
      allRegionsCities.map((city: { slug: string }) => {
        const isMajorCity = MAJOR_CITIES.includes(city.slug);
        return {
          url: `${baseUrl}/services/${service.slug}/${city.slug}`,
          lastModified: isMajorCity 
            ? CONTENT_UPDATES.MAJOR_CITIES_UPDATED
            : CONTENT_UPDATES.GENERIC_CONTENT,
          changeFrequency: 'monthly' as const,
          priority: isMajorCity ? 0.8 : 0.6,
        };
      })
    );

    return [servicesIndex, ...servicePages, ...serviceCityPages];
  }

  // ========== CITY PAGES (979 URLs) ==========
  if (id === 'cities') {
    const cityPages = allRegionsCities.map((city: { slug: string }) => {
      const isMajorCity = MAJOR_CITIES.includes(city.slug);
      return {
        url: `${baseUrl}/cities/${city.slug}`,
        lastModified: isMajorCity 
          ? CONTENT_UPDATES.MAJOR_CITIES_UPDATED 
          : CONTENT_UPDATES.GENERIC_CONTENT,
        changeFrequency: 'monthly' as const,
        priority: isMajorCity ? 0.7 : 0.6,
      };
    });

    return cityPages;
  }

  // ========== INDUSTRY PAGES (~550 URLs) ==========
  if (id === 'industries') {
    const industriesIndex = {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };

    const industryPages = industries.map((industry: { slug: string }) => ({
      url: `${baseUrl}/industry/${industry.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

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

    return [industriesIndex, ...industryPages, ...nicheCityAreaPages];
  }

  // ========== CONTENT PAGES (68 URLs) ==========
  if (id === 'content') {
    const blogIndex = {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };

    const blogPosts = await getBlogPosts();
    const blogPages = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    const guidesIndex = {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };

    const guides = await getGuides();
    const guidePages = guides.map((guide) => ({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: new Date(guide.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    return [blogIndex, ...blogPages, guidesIndex, ...guidePages];
  }

  // Fallback - shouldn't reach here
  return [];
}