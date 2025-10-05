import { industries, Industry } from '@/app/data/industries/industries';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { services as allServices, Service } from '@/app/data/services/services';
import { cityServiceDescriptions, genericServiceDescriptions } from '@/app/data/cities/serviceDescriptions';
import { cityFacts } from '@/app/data/cities/facts';

// Add static params for Next.js static export
export async function generateStaticParams() {
  return industries.map(ind => ({ slug: ind.slug }));
}


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

  // Get relevant services for this industry
  const relevantServices = allServices.filter((service: Service) => service.industries?.includes(industry.slug));

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

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kreative Kommit',
    description: `${industry.name} Industry Services`,
    url: `https://kreativekommit.com/industry/${industry.slug}`,
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kreativekommit.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://kreativekommit.com/industries',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: industry.name,
        item: `https://kreativekommit.com/industry/${industry.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-background px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm text-gray-600 dark:text-gray-400" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-primary">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href="/industries" className="hover:text-primary">Industries</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-gray-500 dark:text-gray-500">{industry.name}</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white mb-4">{industry.name} Industry Services</h1>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{seo?.description || `Comprehensive digital solutions tailored for the ${industry.name.toLowerCase()} industry.`}</p>
          </div>

          {/* Relevant Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">Our {industry.name} Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantServices.map((service: Service) => (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 hover:border-primary"
                >
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Active Cities Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">Cities We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cityFacts.filter(city =>
                allServices.some(service =>
                  service.industries?.includes(industry.slug) && (cityServiceDescriptions[city.slug]?.[service.slug] || genericServiceDescriptions[service.slug])
                )
              ).slice(0, 16).map(city => (
                <a
                  key={city.slug}
                  href={`/cities/${city.slug}`}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 hover:border-primary text-center"
                >
                  <span className="text-primary font-medium">{city.name}</span>
                </a>
              ))}
            </div>
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
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">FAQs</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq: { q: string; a: string }, idx: number) => (
                  <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-lg text-black dark:text-white mb-2">{faq.q}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
              Ready to Transform Your {industry.name} Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Get a free consultation and discover how our specialized {industry.name.toLowerCase()} solutions can help you grow online.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold text-lg"
            >
              Get Your Free Consultation
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
