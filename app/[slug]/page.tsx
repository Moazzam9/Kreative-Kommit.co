import { niches } from '@/app/data/niches/nichesList';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Generate static params for all niches
export async function generateStaticParams() {
  return niches.map(niche => ({ slug: niche.slug }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const awaitedParams = await params;
  const niche = niches.find(n => n.slug === awaitedParams.slug);
  
  if (!niche) return {};

  return {
    title: `${niche.name} Web Design & Branding | Kreative Kommit`,
    description: niche.description,
    alternates: {
      canonical: `https://kreativekommit.com/${niche.slug}`
    },
    metadataBase: new URL('https://kreativekommit.com'),
    keywords: [`${niche.name.toLowerCase()} website design`, `${niche.name.toLowerCase()} branding`, `${niche.name.toLowerCase()} digital marketing`],
  };
}

interface NichePageData {
  city: string;
  area: string;
  title: string;
  description: string;
  features?: string[];
  whyChoose?: string[];
  cta?: {
    heading: string;
    text: string;
    button: string;
    link: string;
  };
}

export default async function NichePage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  const niche = niches.find(n => n.slug === awaitedParams.slug);

  if (!niche) {
    notFound();
  }

  // Try to import the niche data to get available locations
  let nicheData: NichePageData[] = [];
  let hasData = false;
  let allFeatures: string[] = [];
  let allWhyChoose: string[] = [];
  
  try {
    // Map slug to data file name (e.g., 'plumbers' -> 'plumbers.ts' exports 'plumbersBrandingPages')
    const dataModule = await import(`@/app/data/niches/${niche.slug}`);
    const exportName = Object.keys(dataModule)[0];
    nicheData = dataModule[exportName] || [];
    hasData = nicheData.length > 0;
    
    // Extract unique features and benefits from all locations
    const featuresSet = new Set<string>();
    const whyChooseSet = new Set<string>();
    
    nicheData.forEach(location => {
      if (location.features) {
        location.features.forEach((f: string) => featuresSet.add(f));
      }
      if (location.whyChoose) {
        location.whyChoose.forEach((w: string) => whyChooseSet.add(w));
      }
    });
    
    allFeatures = Array.from(featuresSet).slice(0, 6);
    allWhyChoose = Array.from(whyChooseSet).slice(0, 4);
  } catch (error) {
    // No data file exists for this niche
    hasData = false;
  }

  // Group locations by city
  const locationsByCity = nicheData.reduce((acc, location) => {
    if (!acc[location.city]) {
      acc[location.city] = [];
    }
    acc[location.city].push(location);
    return acc;
  }, {} as Record<string, NichePageData[]>);

  const cities = Object.keys(locationsByCity).sort();

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `${niche.name} Web Design & Branding`,
    provider: {
      '@type': 'Organization',
      name: 'Kreative Kommit',
      url: 'https://kreativekommit.com',
    },
    areaServed: cities.length > 0 ? cities.map(city => ({
      '@type': 'City',
      name: city.charAt(0).toUpperCase() + city.replace(/-/g, ' ').slice(1),
    })) : { '@type': 'Country', name: 'United Kingdom' },
    description: niche.description,
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
        name: niche.name,
        item: `https://kreativekommit.com/${niche.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-background text-foreground font-sans">
        <div className="container mx-auto px-4 py-16">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm text-gray-600 dark:text-gray-400" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="hover:text-primary">Home</a>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-gray-500 dark:text-gray-500">{niche.name}</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-4">
              {niche.name} Web Design & Branding
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {niche.description}
            </p>
          </div>

        {/* Features Section - from niche data */}
        {allFeatures.length > 0 && (
          <div className="mx-auto max-w-4xl mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
              What We Offer {niche.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allFeatures.map((feature, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xl">✓</span>
                      <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Services Section */}
        <div className="mx-auto max-w-4xl mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
            Our {niche.name} Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Website Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Custom websites that showcase your {niche.name.toLowerCase()} business and convert visitors into customers.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Branding & Logo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Professional branding that makes your {niche.name.toLowerCase()} business stand out from the competition.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>SEO & Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Get found online by customers searching for {niche.name.toLowerCase()} services in your area.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us Section - from niche data */}
        {allWhyChoose.length > 0 && (
          <div className="mx-auto max-w-4xl mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
              Why Choose Us for {niche.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allWhyChoose.map((reason, idx) => (
                <Card key={idx} className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xl">★</span>
                      <p className="text-gray-700 dark:text-gray-300">{reason}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Locations Section */}
        {hasData && cities.length > 0 && (
          <div className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
              {niche.name} Services by Location
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              We provide specialist {niche.name.toLowerCase()} web design and branding services in these locations:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map(city => (
                <Card key={city} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="capitalize text-black dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {city.replace(/-/g, ' ')}
                    </CardTitle>
                    <CardDescription>
                      {locationsByCity[city].length} location{locationsByCity[city].length > 1 ? 's' : ''}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {locationsByCity[city].slice(0, 3).map((location, idx) => (
                        <Link
                          key={idx}
                          href={`/industries/${niche.slug}/${location.city}/${location.area}`}
                          className="block text-sm text-primary hover:underline capitalize"
                        >
                          {location.area.replace(/-/g, ' ')}
                        </Link>
                      ))}
                      {locationsByCity[city].length > 3 && (
                        <p className="text-sm text-gray-500">
                          +{locationsByCity[city].length - 3} more areas
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        {hasData && (
          <div className="mx-auto max-w-5xl mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">{nicheData.length}+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Locations Served</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">{cities.length}+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cities Covered</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mx-auto max-w-3xl mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How much does a {niche.name.toLowerCase()} website cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Our {niche.name.toLowerCase()} websites start from £1,200 for a professional 5-page site. Pricing varies based on features, customization, and your specific needs. Contact us for a personalized quote.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does it take to build a website?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  A typical {niche.name.toLowerCase()} website takes 2-4 weeks from design to launch. Rush projects can be completed in 1-2 weeks for an additional fee.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide ongoing support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! All our {niche.name.toLowerCase()} websites include 30 days of free support after launch. We also offer monthly maintenance packages starting from £50/month.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Will my website be mobile-friendly?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices. Mobile-friendliness is also critical for SEO.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-3xl text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Ready to Grow Your {niche.name} Business?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Get a free consultation and discover how we can help your {niche.name.toLowerCase()} business stand out online.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold text-lg"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </div>
    </main>
    </>
  );
}
