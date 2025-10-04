import { getServiceCityContent } from '@/app/data/services/getServiceCityContent';
import { services } from '@/app/data/services';
import { allRegionsCities, getCityKeyword } from '@/app/data/cities/targets';
import { ServiceCitySchema } from '@/components/seo/ServiceCitySchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { NavigationBreadcrumb } from '@/components/NavigationBreadcrumb';
import { RelatedServices } from '@/components/RelatedServices';
import { NearbyCities } from '@/components/NearbyCities';
import { PricingTable } from '@/components/PricingTable';
import { getRelatedPages } from '@/lib/internalLinking';
import { generateServiceCityFAQs } from '@/lib/seo/generateFAQs';
import { getServicePricing } from '@/app/data/pricing/pricing';
import type { Metadata } from 'next';

// Type definition for page props
type PageProps = {
  params: Promise<{ service: string; city: string }>;
};

// Removed stray return statement causing syntax errors
export async function generateStaticParams() {
  // Generate all service/city combinations
  const params: { service: string; city: string }[] = [];
  services.forEach(service => {
    allRegionsCities.forEach(city => {
      params.push({ service: service.slug, city: city.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const awaitedParams = await params;
  // Normalize slugs to lowercase for consistent lookups
  const serviceSlug = awaitedParams.service.toLowerCase();
  const citySlug = awaitedParams.city.toLowerCase();
  
  const content = getServiceCityContent(serviceSlug, citySlug);
  if (!content) return {};
  const { service, city, description, schemaMarkup } = content;
  // Extract location-based keywords
  const cityKeywords = getCityKeyword(city.name)
    .split(',')
    .map(k => k.trim().replace('[city]', city.name))
    .slice(0, 15); // Limit to top 15 relevant keywords

  return {
    title: `${service.name} in ${city.name} | KreativeKommit`,
    description,
    keywords: [
      service.name,
      city.name,
      ...(service.keywords || []),
      ...cityKeywords,
      'KreativeKommit'
    ],
    alternates: {
      canonical: schemaMarkup.url
    },
    openGraph: {
      title: `${service.name} in ${city.name} | KreativeKommit`,
      description,
      url: schemaMarkup.url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} in ${city.name} | KreativeKommit`,
      description,
    },
    metadataBase: new URL('https://kreativekommit.com'),
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default async function ServiceCityPage({ params }: PageProps) {
  const awaitedParams = await params;
  // Normalize slugs to lowercase for consistent lookups
  const serviceSlug = awaitedParams.service.toLowerCase();
  const citySlug = awaitedParams.city.toLowerCase();
  
  const content = getServiceCityContent(serviceSlug, citySlug);
  if (!content) return <div>Service or city not found.</div>;
  const { service, city, description, facts, schemaMarkup } = content;
  
  // Get related pages for internal linking
  const { relatedServices, nearbyCities } = getRelatedPages(serviceSlug, citySlug);
  
  // Generate FAQs for this service×city combination
  const faqs = generateServiceCityFAQs({
    serviceName: service.name,
    cityName: city.name,
    serviceSlug: serviceSlug,
  });
  
  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${serviceSlug}` },
    { name: city.name, url: `/services/${serviceSlug}/${citySlug}` },
  ];
  
  // Get pricing for this service and city
  const pricing = getServicePricing(serviceSlug, citySlug);
  
  return (
    <>
      <ServiceCitySchema
        serviceName={service.name}
        cityName={city.name}
        description={description}
        url={schemaMarkup.url}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="min-h-screen bg-background text-foreground font-sans">
        <div className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <NavigationBreadcrumb items={breadcrumbItems} />
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
                {service.name} in {city.name}
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </div>
        <section className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold mb-6">Why Choose KreativeKommit for {service.name} in {city.name}?</h2>
          <ul className="list-disc pl-6 text-base text-gray-700 dark:text-gray-300">
            {facts.map((fact, idx) => (
              <li key={idx}>{fact}</li>
            ))}
          </ul>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <summary className="cursor-pointer p-6 font-semibold text-lg text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors list-none flex items-center justify-between">
                    <span>{faq.question}</span>
                    <svg
                      className="w-5 h-5 text-gray-500 transform transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        {pricing && (
          <PricingTable tiers={pricing.tiers} serviceName={service.name} cityName={city.name} />
        )}
        
        {/* Internal linking sections */}
        <RelatedServices services={relatedServices} cityName={city.name} />
        <NearbyCities cities={nearbyCities} serviceName={service.name} />
      </main>
    </>
  );
}
