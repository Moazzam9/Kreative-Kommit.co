import { cityFacts } from '@/app/data/cities/facts';
import { getTitle, getMetaDescription, getIntroParagraph, getCTA, getFAQ, getSchemaMarkup } from '@/app/data/templates/cities';

import type { Metadata } from 'next';
import type { CityFact } from '@/app/data/cities/facts';


export async function generateStaticParams() {
  return cityFacts.map(city => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: PageProps<'/cities/[slug]'>): Promise<Metadata> {
  const awaitedParams = await params;
  const city = cityFacts.find(c => c.slug === awaitedParams.slug);
  if (!city) return {};
  // For demo, use 'web design' as the main service. You can make this dynamic.
  const service = 'web design';
  return {
    title: getTitle(service, city.name),
    description: getMetaDescription(service, city.name),
    keywords: [city.name, service, 'SEO', 'digital marketing', 'agency', 'KreativeKommit'],
    alternates: {
      canonical: `https://kreativekommit.com/cities/${city.slug}`
    },
    openGraph: {
      title: getTitle(service, city.name),
      description: getMetaDescription(service, city.name),
      url: `https://kreativekommit.com/cities/${city.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: getTitle(service, city.name),
      description: getMetaDescription(service, city.name),
    },
    metadataBase: new URL('https://kreativekommit.com'),
  };
}

export default async function CityPage({ params }: PageProps<'/cities/[slug]'>) {
  const awaitedParams = await params;
  const city = cityFacts.find(c => c.slug === awaitedParams.slug);
  if (!city) return <div>City not found.</div>;
  const service = 'web design'; // You can make this dynamic based on route or user selection
  const intro = getIntroParagraph(service, city.name);
  const cta = getCTA(service, city.name);
  const faqs = getFAQ(service, city.name);
  const schema = getSchemaMarkup(service, city.name);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
              {getTitle(service, city.name)}
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {intro}
            </p>
            <div className="mt-8 text-primary-700 font-semibold">
              {cta}
            </div>
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
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <ul className="list-disc pl-6 text-base text-gray-700 dark:text-gray-300">
          {faqs.map((faq, idx) => (
            <li key={idx}><strong>{faq.q}</strong><br />{faq.a}</li>
          ))}
        </ul>
      </section>
      {/* Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
