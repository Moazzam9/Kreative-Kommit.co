import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Web Design & Development | KreativeKommit',
  description: 'Complete web design, development, and digital marketing services. From UI/UX design to SEO, SSR and SSG optimisation and performance audits.',
  openGraph: {
    title: 'Services - Web Design & Development | KreativeKommit',
    description: 'Complete web design, development, and digital marketing services. From UI/UX design to SEO, SSR and SSG optimisation and performance audits.',
    url: 'https://kreativekommit.com/services',
    type: 'website',
    siteName: 'KreativeKommit',
    images: [
      {
        url: 'https://kreativekommit.com/og-images/services-og.png',
        width: 1200,
        height: 630,
        alt: 'KreativeKommit Services Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Web Design & Development | KreativeKommit',
    description: 'Complete web design, development, and digital marketing services. From UI/UX design to SEO, SSR and SSG optimisation and performance audits.',
    creator: '@kreativekommit',
    images: ['https://kreativekommit.com/og-images/services-og.png'],
  },
};

