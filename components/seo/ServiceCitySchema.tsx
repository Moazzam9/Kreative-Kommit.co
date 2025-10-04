import React from 'react';

interface ServiceCitySchemaProps {
  serviceName: string;
  cityName: string;
  description: string;
  url: string;
}

/**
 * Comprehensive Schema Markup for Service×City pages
 * Includes: LocalBusiness, Service, FAQPage, and BreadcrumbList schemas
 */
export function ServiceCitySchema({ serviceName, cityName, description, url }: ServiceCitySchemaProps) {
  // LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'KreativeKommit',
    image: 'https://kreativekommit.com/og-image.png',
    '@id': 'https://kreativekommit.com',
    url: 'https://kreativekommit.com',
    telephone: '+44 7490 006357',
    email: 'hello@kreativekommit.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Lancashire',
      addressRegion: 'England',
      postalCode: '',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.7632,
      longitude: -2.7044,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [
      'https://twitter.com/kreativekommit',
      'https://linkedin.com/company/kreativekommit',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
    },
    priceRange: '££',
    areaServed: {
      '@type': 'City',
      name: cityName,
    },
  };

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'Organization',
      name: 'KreativeKommit',
      url: 'https://kreativekommit.com',
      telephone: '+44 7490 006357',
      email: 'hello@kreativekommit.com',
    },
    areaServed: {
      '@type': 'City',
      name: cityName,
    },
    description,
    url,
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kreativekommit.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://kreativekommit.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: serviceName,
        item: url,
      },
    ],
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much does ${serviceName} cost in ${cityName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The cost of ${serviceName} in ${cityName} varies based on project scope and requirements. At KreativeKommit, we offer transparent pricing and free consultations to provide accurate quotes tailored to your needs. Contact us for a detailed estimate.`,
        },
      },
      {
        '@type': 'Question',
        name: `How long does a ${serviceName} project take?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Project timelines for ${serviceName} depend on complexity and scope. Typical projects range from 2-8 weeks. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process.`,
        },
      },
      {
        '@type': 'Question',
        name: `Why choose KreativeKommit for ${serviceName} in ${cityName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `KreativeKommit specializes in ${serviceName} for businesses in ${cityName}. We combine technical expertise with local market knowledge to deliver solutions that drive results. Our team has proven experience serving clients in ${cityName} with high-quality, conversion-focused work.`,
        },
      },
      {
        '@type': 'Question',
        name: `Do you offer ongoing support after the ${serviceName} project is complete?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes! We offer comprehensive maintenance and support packages to ensure your ${serviceName} solution continues to perform optimally. This includes updates, security monitoring, performance optimization, and ongoing enhancements as your business grows.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
