import type { Metadata } from 'next';
import { services } from '@/app/data/services/services';
import { serviceFacts } from '@/app/data/services/facts';

const seoService = services.find(s => s.slug === 'seo');
const seoFacts = serviceFacts.find(f => f.slug === 'seo')?.facts || [];

export const metadata: Metadata = {
  title: 'SEO Services | KreativeKommit',
  description: seoService?.description,
  keywords: seoService?.keywords,
  alternates: {
    canonical: 'https://kreativekommit.com/services/seo'
  },
  openGraph: {
    title: 'SEO Services | KreativeKommit',
    description: seoService?.description,
    url: 'https://kreativekommit.com/services/seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services | KreativeKommit',
    description: seoService?.description,
  },
  metadataBase: new URL('https://kreativekommit.com'),
};

export default function SEOServicePage() {
  if (!seoService) return <div>SEO service not found.</div>;
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
              SEO Services
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {seoService.description}
            </p>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">Why Choose KreativeKommit for SEO?</h2>
        <ul className="list-disc pl-6 text-base text-gray-700 dark:text-gray-300">
          {seoFacts.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
      </section>
      {/* Add more sections: features, process, FAQs, testimonials, CTA, etc. */}
    </main>
  );
}
