import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About Us - Meet the KreativeKommit Team',
  description: "Learn about KreativeKommit's mission, values, and the passionate team behind our award-winning web design and development services.",
  keywords: ['about', 'team', 'agency', 'web design', 'digital marketing', 'KreativeKommit'],
  openGraph: {
    title: 'About Us - Meet the KreativeKommit Team',
    description: "Learn about KreativeKommit's mission, values, and the passionate team behind our award-winning web design and development services.",
    type: 'website',
    url: 'https://kreativekommit.com/about',
    siteName: 'KreativeKommit',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About KreativeKommit Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Meet the KreativeKommit Team',
    description: "Learn about KreativeKommit's mission, values, and the passionate team behind our award-winning web design and development services.",
    creator: '@kreativekommit',
    images: ['/og-about.jpg'],
  },
};

