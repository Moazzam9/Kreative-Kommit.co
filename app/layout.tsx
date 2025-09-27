import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://kreativekommit.com'),
  title: {
    default: 'KreativeKommit - Premium Web Agency & Design Studio',
    template: '%s | KreativeKommit'
  },
  description: 'KreativeKommit builds fast, SEO-optimised web experiences that drive real results. Expert web design, development, and digital marketing services.',
  keywords: ['web design', 'web development', 'SEO', 'digital marketing', 'agency', 'kreative', 'kommit'],
  authors: [{ name: 'KreativeKommit Team' }],
  creator: 'KreativeKommit',
  publisher: 'KreativeKommit',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kreativekommit.com',
    title: 'KreativeKommit - Intelligent Web Agency & Design Studio',
    description: 'KreativeKommit builds fast, SEO-optimised web experiences that drive real results.',
    siteName: 'KreativeKommit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KreativeKommit - Intelligent Web Agency & Design Studio',
    description: 'KreativeKommit builds fast, SEO-optimised web experiences that drive real results.',
    creator: '@kreativekommit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KreativeKommit',
  description: 'Premium web agency and design studio specializing in fast, SEO-optimized web experiences.',
  url: 'https://kreativekommit.com',
  logo: 'https://kreativekommit.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-KREATIV',
    contactType: 'customer service',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lancashire',
    addressRegion: 'UK',
    addressCountry: 'GB',
  },
  sameAs: [
    'https://twitter.com/kreativekommit',
    'https://linkedin.com/company/kreativekommit',
    'https://github.com/kreativekommit',
  ],
  founder: {
    '@type': 'Person',
    name: 'KreativeKommit Team',
  },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '10-50',
  },
  foundingDate: '2020',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"           // ✅ Sets dark mode as default
          enableSystem={false}         // ✅ Disables system preference
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
