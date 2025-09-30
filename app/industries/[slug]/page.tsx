// Add static params for Next.js static export
export async function generateStaticParams() {
  return industries.map(industry => ({ slug: industry.slug }));
}


import { industries, Industry } from '@/app/data/industries/industries';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const industry = industries.find(i => i.slug === slug);
  if (!industry) return {};

  // Try to dynamically import SEO data for the industry
  try {
    const seoModule = await import(`@/app/data/industries/${slug}/seo`);
    const seo = seoModule[Object.keys(seoModule)[0]];
    return {
      title: `${industry.name} Industry Services | Kreative Kommit`,
      description: seo.description || industry.description,
      alternates: {
        canonical: `https://kreativekommit.com/industries/${industry.slug}`
      },
      metadataBase: new URL('https://kreativekommit.com'),
      keywords: seo.keywords || industry.keywords,
    };
  } catch {
    // fallback to industry data
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
}



export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const industry = industries.find(i => i.slug === slug) as Industry | undefined;
  if (!industry) return notFound();

  // Try to dynamically import all modular data for the industry
  let seo = null, services = null, projects = null, facts = null, testimonials = null, faqs = null;
  try {
    const seoModule = await import(`@/app/data/industries/${slug}/seo`);
    seo = seoModule[Object.keys(seoModule)[0]];
  } catch {}
  try {
    const servicesModule = await import(`@/app/data/industries/${slug}/services`);
    services = servicesModule[Object.keys(servicesModule)[0]];
  } catch {}
  try {
    const projectsModule = await import(`@/app/data/industries/${slug}/projects`);
    projects = projectsModule[Object.keys(projectsModule)[0]];
  } catch {}
  try {
    const factsModule = await import(`@/app/data/industries/${slug}/facts`);
    facts = factsModule[Object.keys(factsModule)[0]];
  } catch {}
  try {
    const testimonialsModule = await import(`@/app/data/industries/${slug}/testimonials`);
    testimonials = testimonialsModule[Object.keys(testimonialsModule)[0]];
  } catch {}
  try {
    const faqsModule = await import(`@/app/data/industries/${slug}/faqs`);
    faqs = faqsModule[Object.keys(faqsModule)[0]];
  } catch {}

  return (
    <main className="px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-4">{industry.name} Industry Services</h1>
      <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 mb-8">{seo?.description || industry.description}</p>

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
            {projects.map((project: any, idx: number) => (
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
            {testimonials.map((testimonial: any, idx: number) => (
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
            {faqs.map((faq: any, idx: number) => (
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
