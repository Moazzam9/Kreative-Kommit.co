import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Development Guides | Kreative Kommit',
  description: 'Step-by-step tutorials, resources, and expert advice to help you master modern web development and build high-performance digital experiences.',
  alternates: {
    canonical: 'https://kreativekommit.com/guides'
  },
  metadataBase: new URL('https://kreativekommit.com'),
  openGraph: {
    title: 'Development Guides | Kreative Kommit',
    description: 'Step-by-step tutorials, resources, and expert advice to help you master modern web development and build high-performance digital experiences.',
    url: 'https://kreativekommit.com/guides',
    type: 'website',
    siteName: 'KreativeKommit',
    images: [
      {
        url: 'https://kreativekommit.com/og-images/guides-og.png',
        width: 1200,
        height: 630,
        alt: 'KreativeKommit Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Development Guides | Kreative Kommit',
    description: 'Step-by-step tutorials, resources, and expert advice to help you master modern web development and build high-performance digital experiences.',
    creator: '@kreativekommit',
    images: ['https://kreativekommit.com/og-images/guides-og.png'],
  },
};
