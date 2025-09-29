import type { Metadata } from 'next';
import { services } from '@/app/data/services/services';

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.service);
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
