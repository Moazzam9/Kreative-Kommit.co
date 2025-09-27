import { services } from '@/app/data/services/services';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return services.map(service => ({ service: service.slug }));
}

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const awaitedParams = await params;
  const service = services.find(s => s.slug === awaitedParams.service);
  if (!service) return {};
  return {
    title: `${service.name} Services | KreativeKommit`,
    description: service.description,
    keywords: [service.name, 'web design', 'SEO', 'digital marketing', 'KreativeKommit'],
    alternates: {
      canonical: `https://kreativekommit.com/services/${service.slug}`
    },
    openGraph: {
      title: `${service.name} Services | KreativeKommit`,
      description: service.description,
      url: `https://kreativekommit.com/services/${service.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} Services | KreativeKommit`,
      description: service.description,
    },
    metadataBase: new URL('https://kreativekommit.com'),
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const awaitedParams = await params;
  const service = services.find(s => s.slug === awaitedParams.service);
  if (!service) return <div>Service not found.</div>;
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
              {service.name} Services
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {service.description}
            </p>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">Why Choose KreativeKommit for {service.name}?</h2>
        <ul className="list-disc pl-6 text-base text-gray-700 dark:text-gray-300">
          {service.facts?.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
      </section>
      {/* Schema Markup and internal links can be added here */}
    </main>
  );
}
