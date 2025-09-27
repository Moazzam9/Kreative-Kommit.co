import { cityFacts } from '@/app/data/cities/facts';
import type { Metadata } from 'next';
import type { CityFact } from '@/app/data/cities/facts';

export async function generateStaticParams() {
  return cityFacts.map(city => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const awaitedParams = await params;
  const city = cityFacts.find(c => c.slug === awaitedParams.slug);
  if (!city) return {};
  return {
    title: `${city.name} Web Design, SEO & Digital Services | KreativeKommit`,
    description: `Discover web design, SEO, and digital marketing services in ${city.name}. ${city.facts[0]}`,
    keywords: [city.name, 'web design', 'SEO', 'digital marketing', 'agency', 'KreativeKommit'],
    alternates: {
      canonical: `https://kreativekommit.com/cities/${city.slug}`
    },
    openGraph: {
      title: `${city.name} Web Design, SEO & Digital Services | KreativeKommit`,
      description: `Discover web design, SEO, and digital marketing services in ${city.name}. ${city.facts[0]}`,
      url: `https://kreativekommit.com/cities/${city.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city.name} Web Design, SEO & Digital Services | KreativeKommit`,
      description: `Discover web design, SEO, and digital marketing services in ${city.name}. ${city.facts[0]}`,
    },
    metadataBase: new URL('https://kreativekommit.com'),
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  const city = cityFacts.find(c => c.slug === awaitedParams.slug);
  if (!city) return <div>City not found.</div>;

  // Schema Markup for LocalBusiness and City
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'KreativeKommit',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: 'UK',
      addressCountry: 'GB',
    },
    description: `${city.name} Web Design, SEO & Digital Services. ${city.facts[0]}`,
    url: `https://kreativekommit.com/cities/${city.slug}`,
    telephone: '+44 1234 567890',
    areaServed: city.name,
    sameAs: [
      'https://twitter.com/kreativekommit',
      'https://linkedin.com/company/kreativekommit',
      'https://github.com/kreativekommit',
    ],
    additionalType: 'City',
    cityFacts: city.facts,
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
              {city.name} Web Design, SEO & Digital Services
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {city.facts[0]}
            </p>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">Why Choose KreativeKommit in {city.name}?</h2>
        <ul className="list-disc pl-6 text-base text-gray-700 dark:text-gray-300">
          {city.facts.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
      </section>
      {/* Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
