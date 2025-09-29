
import { services } from '@/app/data/services/services';
import { serviceFacts } from '@/app/data/services/facts';
import {
  getTitle,
  getMetaDescription,
  getIntroParagraph,
  getCTA,
  getFAQ,
  getSchemaMarkup,
  brand
} from '@/app/data/templates/cities';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return services.map((service: typeof services[number]) => ({ service: service.slug }));
}



export default async function ServicePage({ params }: PageProps<'/services/[service]'>) {
  const awaitedParams = await params;
  const service = services.find((s: typeof services[number]) => s.slug === awaitedParams.service);
  if (!service) return <div>Service not found.</div>;

  // Use generic (non-city) content for service landing page
  const title = service.name + ' | ' + brand;
  const metaDescription = service.description;
  const intro = `Discover our ${service.name} services.`;
  const cta = `Ready to get started with ${service.name}? Contact us today!`;
  const faq: { q: string; a: string }[] = [
    { q: `What is ${service.name}?`, a: service.description },
    { q: `How can ${brand} help with ${service.name}?`, a: `We offer expert ${service.name} tailored to your business needs.` }
  ];
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: { '@type': 'Organization', name: brand },
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kreativekommit.com'}/services/${service.slug}`
  };
  const facts: string[] = serviceFacts.find(f => f.slug === service.slug)?.facts || service.facts || [];

  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={service.keywords ? service.keywords.join(', ') : ''} />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://kreativekommit.com'}/services/${service.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://kreativekommit.com'}/services/${service.slug}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <main className="min-h-screen bg-background text-foreground font-sans">
        <div className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
                {title}
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                {intro}
              </p>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          </div>
        </div>
        <section className="container mx-auto px-4 pb-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose {brand} for {service.name}?</h2>
          <ul className="list-disc pl-6 text-base text-gray-700 dark:text-gray-300 mb-8">
            {facts.map((fact, idx) => (
              <li key={idx}>{fact}</li>
            ))}
          </ul>
          <div className="bg-primary/10 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
            <p className="mb-2">{cta}</p>
            <a href="/contact" className="inline-block px-6 py-2 bg-primary text-white rounded hover:bg-primary/80 transition">Contact Us</a>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            <ul className="space-y-4">
              {faq.map((item, idx) => (
                <li key={idx}>
                  <strong className="block text-base text-gray-800 dark:text-gray-200 mb-1">{item.q}</strong>
                  <span className="text-gray-700 dark:text-gray-300">{item.a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
