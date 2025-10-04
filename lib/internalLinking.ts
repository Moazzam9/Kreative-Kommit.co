import { services } from '@/app/data/services/services';
import { cityFacts } from '@/app/data/cities/facts';

export interface RelatedPage {
  title: string;
  url: string;
  type: 'service' | 'city' | 'content';
}

/**
 * Get related services for internal linking
 * Returns other services in the same city
 */
export function getRelatedServices(currentServiceSlug: string, citySlug: string, limit = 6): RelatedPage[] {
  return services
    .filter((service) => service.slug !== currentServiceSlug)
    .slice(0, limit)
    .map((service) => ({
      title: `${service.name} in ${cityFacts.find((c) => c.slug === citySlug)?.name || citySlug}`,
      url: `/services/${service.slug}/${citySlug}`,
      type: 'service' as const,
    }));
}

/**
 * Get nearby cities for internal linking
 * Returns the same service in different cities
 */
export function getNearbyCities(serviceSlug: string, currentCitySlug: string, limit = 6): RelatedPage[] {
  const currentCity = cityFacts.find((c) => c.slug === currentCitySlug);
  if (!currentCity) return [];

  // Priority cities (major UK cities)
  const priorityCities = [
    'manchester',
    'london',
    'liverpool',
    'birmingham',
    'leeds',
    'bristol',
    'sheffield',
    'newcastle',
    'nottingham',
    'cardiff',
  ];

  // Get priority cities first, then others
  const sortedCities = cityFacts.sort((a, b) => {
    const aIsPriority = priorityCities.includes(a.slug);
    const bIsPriority = priorityCities.includes(b.slug);
    if (aIsPriority && !bIsPriority) return -1;
    if (!aIsPriority && bIsPriority) return 1;
    return 0;
  });

  const serviceName = services.find((s) => s.slug === serviceSlug)?.name || serviceSlug;

  return sortedCities
    .filter((city) => city.slug !== currentCitySlug)
    .slice(0, limit)
    .map((city) => ({
      title: `${serviceName} in ${city.name}`,
      url: `/services/${serviceSlug}/${city.slug}`,
      type: 'city' as const,
    }));
}

/**
 * Get all related pages for a service×city page
 * Combines related services and nearby cities
 */
export function getRelatedPages(
  serviceSlug: string,
  citySlug: string,
  servicesLimit = 3,
  citiesLimit = 3
): {
  relatedServices: RelatedPage[];
  nearbyCities: RelatedPage[];
} {
  return {
    relatedServices: getRelatedServices(serviceSlug, citySlug, servicesLimit),
    nearbyCities: getNearbyCities(serviceSlug, citySlug, citiesLimit),
  };
}
