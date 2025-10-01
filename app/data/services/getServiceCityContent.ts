
import { services } from '@/app/data/services';
import { cityFacts } from '@/app/data/cities/facts';
import { getCityDescription } from '@/app/data/cities/targets';
import { cityServiceDescriptions, genericServiceDescriptions } from '@/app/data/cities/serviceDescriptions';

export function getServiceCityContent(serviceSlug: string, citySlug: string) {
  const service = services.find(s => s.slug === serviceSlug);
  const city = cityFacts.find(c => c.slug === citySlug);
  if (!service || !city) return null;

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

  // Schema markup example
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: service.name,
    address: { '@type': 'PostalAddress', addressLocality: city.name, addressCountry: 'UK' },
    description,
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
