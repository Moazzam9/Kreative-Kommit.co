import { services } from '@/app/data/services/services';
import { industries } from '@/app/data/industries/industries';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const params: { service: string; industry: string }[] = [];
  services.forEach(service => {
    industries.forEach(industry => {
      params.push({ service: service.slug, industry: industry.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: { service: string; industry: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.service);
  const industry = industries.find(i => i.slug === params.industry);
  if (!service || !industry) return {};
  return {
    title: `${service.name} for ${industry.name} | KreativeKommit`,
    description: `${service.description} Specialised for ${industry.name}: ${industry.description}`,
    keywords: [service.name, industry.name, 'web design', 'SEO', 'digital marketing', 'KreativeKommit'],
    alternates: {
      canonical: `https://kreativekommit.com/services/${service.slug}/industry/${industry.slug}`
    },
    openGraph: {
      title: `${service.name} for ${industry.name} | KreativeKommit`,
      description: `${service.description} Specialised for ${industry.name}: ${industry.description}`,
      url: `https://kreativekommit.com/services/${service.slug}/industry/${industry.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} for ${industry.name} | KreativeKommit`,
      description: `${service.description} Specialised for ${industry.name}: ${industry.description}`,
    },
    metadataBase: new URL('https://kreativekommit.com'),
  };
}

export default async function ServiceIndustryPage({ params }: { params: { service: string; industry: string } }) {
  const service = services.find(s => s.slug === params.service);
  const industry = industries.find(i => i.slug === params.industry);
  if (!service || !industry) return <div>Service or Industry not found.</div>;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-primary">{service.name} for {industry.name}</h1>
            <p className="mb-6 text-lg text-muted-foreground">{service.description}</p>
            <p className="mb-6 text-lg text-muted-foreground">Specialised for {industry.name}: {industry.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
