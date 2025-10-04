import { getCityFacts } from '@/app/data/cities/facts';
import { allRegionsCities, getCityKeyword } from '@/app/data/cities/targets';
import { getTitle, getMetaDescription, getCTA, getFAQ, getSchemaMarkup } from '@/app/data/templates/cities';
import { services } from '@/app/data/services/services';
import { cityServiceDescriptions, genericServiceDescriptions } from '@/app/data/cities/serviceDescriptions';
import { industries } from '@/app/data/industries/industries';
import type { Metadata } from 'next';


export async function generateStaticParams() {
  return allRegionsCities.map(city => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: PageProps<'/cities/[slug]'>): Promise<Metadata> {
  const awaitedParams = await params;
  const cityData = allRegionsCities.find(c => c.slug === awaitedParams.slug);
  if (!cityData) return {};
  const city = getCityFacts(cityData.slug, cityData.name);
  // For demo, use 'web design' as the main service. You can make this dynamic.
  const service = 'web design';
  
  // Get comprehensive city-specific keywords
  const cityKeywords = getCityKeyword(city.name)
    .split(',')
    .map(k => k.trim().replace('[city]', city.name))
    .slice(0, 20);
  
  return {
    title: getTitle(service, city.name),
    description: getMetaDescription(service, city.name),
    keywords: [
      city.name,
      service,
      ...cityKeywords,
      'KreativeKommit'
    ],
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
  const cityData = allRegionsCities.find(c => c.slug === awaitedParams.slug);
  if (!cityData) return <div>City not found.</div>;
  const city = getCityFacts(cityData.slug, cityData.name);

  const service = 'web-design'; // You can make this dynamic based on route or user selection
  // Get city-specific or fallback service description
  const cityServiceDesc = cityServiceDescriptions[city.slug]?.[service] || genericServiceDescriptions[service] || '';
  const intro = cityServiceDesc;
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
            {/* Top Industries in this City */}
            <section className="mt-10">
              <h2 className="text-2xl font-semibold text-primary mb-3">Top Industries in {city.name}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.filter(ind =>
                  services.some(s => s.industries?.includes(ind.slug) && (cityServiceDescriptions[city.slug]?.[s.slug] || genericServiceDescriptions[s.slug]))
                ).map(ind => (
                  <li key={ind.slug} className="bg-gray-100 dark:bg-gray-800 rounded px-4 py-2 shadow-sm text-gray-900 dark:text-gray-100">
                    <a href={`/industries/${ind.slug}`} className="hover:underline text-primary font-medium">{ind.name}</a>
                  </li>
                ))}
              </ul>
            </section>
            {/* Top Services in this City */}
            <section className="mt-10">
              <h2 className="text-2xl font-semibold text-primary mb-3">Top Services in {city.name}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.filter(s => cityServiceDescriptions[city.slug]?.[s.slug] || genericServiceDescriptions[s.slug]).map(s => (
                  <li key={s.slug} className="bg-gray-100 dark:bg-gray-800 rounded px-4 py-2 shadow-sm text-gray-900 dark:text-gray-100">
                    <a href={`/services/${s.slug}`} className="hover:underline text-primary font-medium">{s.name}</a>
                  </li>
                ))}
              </ul>
            </section>
            {/* Contextual Internal Links: Service for Industry in City */}
            <section className="mt-10">
              <h2 className="text-2xl font-semibold text-primary mb-3">Explore Services by Industry</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.filter(ind =>
                  services.some(s => s.industries?.includes(ind.slug) && (cityServiceDescriptions[city.slug]?.[s.slug] || genericServiceDescriptions[s.slug]))
                ).flatMap(ind =>
                  services.filter(s =>
                    s.industries?.includes(ind.slug) && (cityServiceDescriptions[city.slug]?.[s.slug] || genericServiceDescriptions[s.slug])
                  ).map(s => (
                    <li key={`${s.slug}-${ind.slug}`} className="bg-gray-50 dark:bg-gray-900 rounded px-4 py-2 shadow-sm text-gray-900 dark:text-gray-100">
                      <a href={`/services/${s.slug}/${city.slug}`} className="hover:underline text-primary font-medium">
                        {s.name} for {ind.name} in {city.name}
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 pb-16">
  <h2 className="text-2xl font-bold mb-6" aria-label={`Why Choose KreativeKommit in ${city.name}`}>Why Choose KreativeKommit in {city.name}?</h2>
        <ul className="list-disc pl-6 text-base text-gray-700 dark:text-gray-300">
          {city.facts.map((fact, idx) => (
            <li key={idx} aria-label={`City fact: ${fact}`}>{fact}</li>
          ))}
        </ul>
      </section>
      <section className="container mx-auto px-4 pb-16">
  <h2 className="text-2xl font-bold mb-6" aria-label="Frequently Asked Questions">Frequently Asked Questions</h2>
        <ul className="list-disc pl-6 text-base text-gray-700 dark:text-gray-300">
          {faqs.map((faq, idx) => (
            <li key={idx} aria-label={`FAQ: ${faq.q}`}><strong>{faq.q}</strong><br />{faq.a}</li>
          ))}
        </ul>
      </section>
      {/* Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
