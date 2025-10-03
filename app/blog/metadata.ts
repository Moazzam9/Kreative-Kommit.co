import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Blog | Kreative Kommit',
  description: 'Latest news, tutorials, and expert insights on web development, SEO, and digital strategy from Kreative Kommit.',
  alternates: {
    canonical: 'https://kreativekommit.com/blog'
  },
  metadataBase: new URL('https://kreativekommit.com'),
  openGraph: {
    title: 'Web Development Blog | Kreative Kommit',
    description: 'Latest news, tutorials, and expert insights on web development, SEO, and digital strategy from Kreative Kommit.',
    url: 'https://kreativekommit.com/blog',
    type: 'website',
    siteName: 'KreativeKommit',
    images: [
      {
        url: 'https://kreativekommit.com/og-images/blog-og.png',
        width: 1200,
        height: 630,
        alt: 'KreativeKommit Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Blog | Kreative Kommit',
    description: 'Latest news, tutorials, and expert insights on web development, SEO, and digital strategy from Kreative Kommit.',
    creator: '@kreativekommit',
    images: ['https://kreativekommit.com/og-images/blog-og.png'],
  },
};
