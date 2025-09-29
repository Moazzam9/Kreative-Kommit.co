import { getServiceCityContent } from '@/app/data/services/getServiceCityContent';
import { services } from '@/app/data/services';
import { cityFacts } from '@/app/data/cities/facts';
import type { Metadata } from 'next';
// Removed stray return statement causing syntax errors
export async function generateStaticParams() {
  // Generate all service/city combinations
  const params: { service: string; city: string }[] = [];
  services.forEach(service => {
    cityFacts.forEach(city => {
      params.push({ service: service.slug, city: city.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps<'/services/[service]/[city]'>): Promise<Metadata> {
  const awaitedParams = await params;
  const content = getServiceCityContent(awaitedParams.service, awaitedParams.city);
  if (!content) return {};
  const { service, city, description, schemaMarkup } = content;
  return {
    title: `${service.name} in ${city.name} | KreativeKommit`,
    description,
    keywords: [service.name, city.name, 'web design', 'SEO', 'digital marketing', 'KreativeKommit'],
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

export default async function ServiceCityPage({ params }: PageProps<'/services/[service]/[city]'>) {
  const awaitedParams = await params;
  const content = getServiceCityContent(awaitedParams.service, awaitedParams.city);
  if (!content) return <div>Service or city not found.</div>;
  const { service, city, description, facts } = content;
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
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
      {/* Schema Markup and internal links will be added next */}
    </main>
  );
}
