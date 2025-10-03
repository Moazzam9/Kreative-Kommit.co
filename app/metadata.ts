import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KreativeKommit - Intelligent Web Agency & Design Studio',
  description: 'KreativeKommit builds fast, SEO, SSR and SSG optimised web experiences that drive real results. Expert web design, development, and digital marketing services.',
  openGraph: {
    title: 'KreativeKommit - Intelligent Web Agency & Design Studio',
    description: 'KreativeKommit builds fast, SEO, SSR and SSG optimised web experiences that drive real results.',
    type: 'website',
    url: 'https://kreativekommit.com',
    images: [
      {
        url: 'https://kreativekommit.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KreativeKommit - Web Agency & Design Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KreativeKommit - Intelligent Web Agency & Design Studio',
    description: 'KreativeKommit builds fast, SEO, SSR and SSG optimised web experiences that drive real results.',
    creator: '@kreativekommit',
    images: ['https://kreativekommit.com/og-image.jpg'],
  },
};

