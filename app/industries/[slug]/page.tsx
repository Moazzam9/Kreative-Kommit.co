// Add static params for Next.js static export
export async function generateStaticParams() {
  return industries.map(industry => ({ slug: industry.slug }));
}

import { industries, Industry } from '@/app/data/industries/industries';
import { constructionSEO } from '@/app/data/industries/construction/seo';
import { constructionServices } from '@/app/data/industries/construction/services';
import { constructionProjects } from '@/app/data/industries/construction/projects';
import { constructionFacts } from '@/app/data/industries/construction/facts';
import { constructionTestimonials } from '@/app/data/industries/construction/testimonials';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const awaitedParams = await params;
  if (awaitedParams.slug === 'construction') {
    return {
      title: `Construction Industry Services | Kreative Kommit`,
      description: constructionSEO.description,
      alternates: {
        canonical: `https://kreativekommit.com/industries/construction`
      },
      metadataBase: new URL('https://kreativekommit.com'),
      keywords: constructionSEO.keywords,
    };
  }
  const industry = industries.find(i => i.slug === awaitedParams.slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Industry Services | Kreative Kommit`,
    description: industry.description,
    alternates: {
      canonical: `https://kreativekommit.com/industries/${industry.slug}`
    },
    metadataBase: new URL('https://kreativekommit.com'),
    keywords: industry.keywords,
  };
}


export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  if (awaitedParams.slug === 'construction') {
    return (
      <>
        <main className="px-4 py-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-4">Construction Industry Services</h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 mb-8">{constructionSEO.description}</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary mb-3">Services</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {constructionServices.map((service, idx) => (
                <li key={idx} className="bg-gray-100 dark:bg-gray-800 rounded px-4 py-2 shadow-sm text-gray-900 dark:text-gray-100">{service}</li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary mb-3">Featured Projects</h2>
            <ul className="space-y-4">
              {constructionProjects.map((project, idx) => (
                <li key={idx} className="border-l-4 border-primary pl-4 bg-white dark:bg-gray-900 rounded shadow-sm py-2">
                  <div className="font-bold text-lg">{project.title} <span className="text-xs text-gray-500">({project.year})</span></div>
                  <div className="text-gray-700 dark:text-gray-300">{project.description}</div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary mb-3">Industry Facts</h2>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
              {constructionFacts.map((fact, idx) => <li key={idx}>{fact}</li>)}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-primary mb-3">Client Testimonials</h2>
            <ul className="space-y-4">
              {constructionTestimonials.map((testimonial, idx) => (
                <li key={idx} className="bg-primary/10 dark:bg-primary/20 rounded px-4 py-3 shadow">
                  <span className="font-semibold text-primary dark:text-primary-300">{testimonial.client}:</span> <span className="italic text-gray-800 dark:text-gray-200">{testimonial.feedback}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </>
    );
  }
  const industry = industries.find(i => i.slug === awaitedParams.slug) as Industry | undefined;
  if (!industry) return notFound();

  // SEO-optimized, engaging description
  const description = industry.description;
  const schemaMarkup = industry.schema ?? null;

  return (
    <>
      <main className="px-4 py-8 max-w-3xl mx-auto">
        <h1>{industry.name} Industry Services</h1>
        <p>{description}</p>
        <section style={{ marginTop: '2rem' }}>
          <h2>Industry Details</h2>
          <div><strong>{industry.name}</strong>: {industry.description}</div>
          {industry.keywords && industry.keywords.length > 0 && (
            <div><em>Keywords:</em> {industry.keywords.join(", ")}</div>
          )}
          {industry.facts && industry.facts.length > 0 && (
            <div><em>Facts:</em> <ul>{industry.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}</ul></div>
          )}
        </section>
        {/* Add more content, service links, case studies, testimonials, and internal links for SEO */}
      </main>
    </>
  );
}
