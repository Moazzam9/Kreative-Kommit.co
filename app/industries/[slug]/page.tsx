// Add static params for Next.js static export
export async function generateStaticParams() {
  return industries.map(industry => ({ slug: industry.slug }));
}

import { industries, Industry } from '@/app/data/industries/industries';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const awaitedParams = await params;
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
  const industry = industries.find(i => i.slug === awaitedParams.slug) as Industry | undefined;
  if (!industry) return notFound();

  // SEO-optimized, engaging description
  const description = industry.description;
  const schemaMarkup = industry.schema ?? null;

  return (
    <>
      <head>
        <title>{industry.name} Industry Services | Kreative Kommit</title>
        <meta name="description" content={description} />
  <meta name="keywords" content={industry.keywords ? industry.keywords.join(', ') : ''} />
        {schemaMarkup && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
          />
        )}
      </head>
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
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
