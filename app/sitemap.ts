import { MetadataRoute } from 'next';
import { services } from './data/services/services';
import { cityFacts } from './data/cities/facts';
import { industries } from './data/industries/industries';

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

  return [...staticUrls, ...serviceCityUrls, industryListingUrl, ...industryDetailUrls];
}