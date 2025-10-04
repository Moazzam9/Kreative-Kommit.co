// Add static params for Next.js static export
export async function generateStaticParams() {
  return industries.map(ind => ({ slug: ind.slug }));
}


import { industries, Industry } from '@/app/data/industries/industries';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services as allServices, Service } from '@/app/data/services/services';
import { cityServiceDescriptions, genericServiceDescriptions } from '@/app/data/cities/serviceDescriptions';
import { cityFacts } from '@/app/data/cities/facts';


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const awaitedParams = await params;
  const { slug: industrySlug } = awaitedParams;
  const industry = industries.find(i => i.slug === industrySlug);
  if (!industry) return {};

  // Try to dynamically import SEO data for the industry
  try {
    const seoModule = await import(`@/app/data/industries/${industrySlug}/seo`);
    const seo = seoModule[Object.keys(seoModule)[0]];
    return {
      title: `${industry.name} Industry Services | Kreative Kommit`,
      description: seo.description || '',
      alternates: {
        canonical: `https://kreativekommit.com/industry/${industry.slug}`
      },
      metadataBase: new URL('https://kreativekommit.com'),
      keywords: seo.keywords || [],
    };
  } catch {
    // fallback to empty description/keywords
    return {
      title: `${industry.name} Industry Services | Kreative Kommit`,
      description: '',
      alternates: {
        canonical: `https://kreativekommit.com/industry/${industry.slug}`
      },
      metadataBase: new URL('https://kreativekommit.com'),
      keywords: [],
    };
  }
}



export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  const { slug: industrySlug } = awaitedParams;
  const industry = industries.find(i => i.slug === industrySlug) as Industry | undefined;
  if (!industry) return notFound();

  // Try to dynamically import all modular data for the industry
  let seo = null, services = null, projects = null, facts = null, testimonials = null, faqs = null;
  try {
    const seoModule = await import(`@/app/data/industries/${industrySlug}/seo`);
    seo = seoModule[Object.keys(seoModule)[0]];
  } catch {}
  try {
    const servicesModule = await import(`@/app/data/industries/${industrySlug}/services`);
    services = servicesModule[Object.keys(servicesModule)[0]];
  } catch {}
  try {
    const projectsModule = await import(`@/app/data/industries/${industrySlug}/projects`);
    projects = projectsModule[Object.keys(projectsModule)[0]];
  } catch {}
  try {
    const factsModule = await import(`@/app/data/industries/${industrySlug}/facts`);
    facts = factsModule[Object.keys(factsModule)[0]];
  } catch {}
  try {
    const testimonialsModule = await import(`@/app/data/industries/${industrySlug}/testimonials`);
    testimonials = testimonialsModule[Object.keys(testimonialsModule)[0]];
  } catch {}
  try {
    const faqsModule = await import(`@/app/data/industries/${industrySlug}/faqs`);
    faqs = faqsModule[Object.keys(faqsModule)[0]];
  } catch {}

  return (
    <main className="px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-4">{industry.name} Industry Services</h1>
      <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 mb-8">{seo?.description || ''}</p>

      {/* Relevant Services Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-3">Relevant Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {allServices.filter((service: Service) => service.industries?.includes(industry.slug)).map((service: Service) => (
            <li key={service.slug} className="bg-gray-100 dark:bg-gray-800 rounded px-4 py-2 shadow-sm text-gray-900 dark:text-gray-100">
              <a href={`/services/${service.slug}`} className="hover:underline text-primary font-medium">{service.name}</a>
              <div className="text-xs text-gray-600 dark:text-gray-400">{service.description}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Active Cities Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-3">Active Cities</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cityFacts.filter(city =>
            allServices.some(service =>
              service.industries?.includes(industry.slug) && (cityServiceDescriptions[city.slug]?.[service.slug] || genericServiceDescriptions[service.slug])
            )
          ).map(city => (
            <li key={city.slug} className="bg-gray-100 dark:bg-gray-800 rounded px-4 py-2 shadow-sm text-gray-900 dark:text-gray-100">
              <a href={`/cities/${city.slug}`} className="hover:underline text-primary font-medium">{city.name}</a>
            </li>
          ))}
        </ul>
      </section>

      {services && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service: string, idx: number) => (
              <li key={idx} className="bg-gray-100 dark:bg-gray-800 rounded px-4 py-2 shadow-sm text-gray-900 dark:text-gray-100">{service}</li>
            ))}
          </ul>
        </section>
      )}

      {projects && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">Featured Projects</h2>
          <ul className="space-y-4">
            {projects.map((project: { title: string; year: string; description: string }, idx: number) => (
              <li key={idx} className="border-l-4 border-primary pl-4 bg-white dark:bg-gray-900 rounded shadow-sm py-2">
                <div className="font-bold text-lg">{project.title} <span className="text-xs text-gray-500">({project.year})</span></div>
                <div className="text-gray-700 dark:text-gray-300">{project.description}</div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {facts && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">Industry Facts</h2>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
            {facts.map((fact: string, idx: number) => <li key={idx}>{fact}</li>)}
          </ul>
        </section>
      )}

      {testimonials && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">Client Testimonials</h2>
          <ul className="space-y-4">
            {testimonials.map((testimonial: { client: string; feedback: string }, idx: number) => (
              <li key={idx} className="bg-primary/10 dark:bg-primary/20 rounded px-4 py-3 shadow">
                <span className="font-semibold text-primary dark:text-primary-300">{testimonial.client}:</span> <span className="italic text-gray-800 dark:text-gray-200">{testimonial.feedback}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {faqs && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">FAQs</h2>
          <ul className="space-y-4">
            {faqs.map((faq: { q: string; a: string }, idx: number) => (
              <li key={idx} className="bg-gray-50 dark:bg-gray-900 rounded px-4 py-3 shadow">
                <strong>{faq.q}</strong>
                <div>{faq.a}</div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Add more content, service links, case studies, testimonials, and internal links for SEO */}
    </main>
  );
}
