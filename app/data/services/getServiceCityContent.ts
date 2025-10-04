
import { services } from '@/app/data/services';
import { getCityFacts } from '@/app/data/cities/facts';
import { getCityDescription, getCityKeyword, allRegionsCities } from '@/app/data/cities/targets';
import { cityServiceDescriptions, genericServiceDescriptions } from '@/app/data/cities/serviceDescriptions';

export function getServiceCityContent(serviceSlug: string, citySlug: string) {
  const service = services.find(s => s.slug === serviceSlug);
  const cityData = allRegionsCities.find(c => c.slug === citySlug);
  if (!service || !cityData) return null;
  
  // Get city facts (will use default facts if not in database)
  const city = getCityFacts(cityData.slug, cityData.name);
  if (!city) return null;

  // City-specific description or fallback
  const description =
    cityServiceDescriptions[city.slug]?.[service.slug] ||
    genericServiceDescriptions[service.slug] ||
    getCityDescription(city.name);

  // Combine service and city facts
  const facts = [
    ...(service.facts || []),
    ...(city.facts || [])
  ];

  // Get location-specific keywords
  const cityKeywords = getCityKeyword(city.name)
    .split(',')
    .map(k => k.trim().replace('[city]', city.name))
    .slice(0, 10)
    .join(', ');

  // Schema markup example
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: service.name,
    address: { '@type': 'PostalAddress', addressLocality: city.name, addressCountry: 'UK' },
    description,
    keywords: `${service.name}, ${city.name}, ${cityKeywords}`,
    areaServed: city.name,
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kreativekommit.com'}/services/${service.slug}/${city.slug}`
  };

  return {
    service,
    city,
    description,
    facts,
    schemaMarkup
  };
}
