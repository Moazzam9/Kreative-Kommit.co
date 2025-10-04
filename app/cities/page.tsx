import Link from 'next/link';
import { allCities } from '@/app/data/cities';
import type { City } from '@/app/data/cities';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

export const metadata = {
  title: 'Cities We Serve | Web Design & Digital Marketing | KreativeKommit',
  description: 'Professional web design, SEO, and digital marketing services across the UK and Ireland. Find your city and discover how we can help your business grow online.',
  keywords: 'web design cities UK, SEO services locations, digital marketing areas, local web development',
  openGraph: {
    title: 'Cities We Serve | KreativeKommit',
    description: 'Professional web design, SEO, and digital marketing services across the UK and Ireland.',
    url: 'https://kreativekommit.com/cities',
    type: 'website',
  },
};

// Group cities by county
function groupCitiesByCounty(cities: City[]): Map<string, City[]> {
  const grouped = new Map<string, City[]>();
  
  cities.forEach(city => {
    const county = city.county || 'Other';
    if (!grouped.has(county)) {
      grouped.set(county, []);
    }
    grouped.get(county)?.push(city);
  });
  
  // Sort cities within each county alphabetically
  grouped.forEach(cities => {
    cities.sort((a, b) => a.name.localeCompare(b.name));
  });
  
  return grouped;
}

// Sort counties alphabetically
function getSortedCounties(grouped: Map<string, City[]>): string[] {
  return Array.from(grouped.keys()).sort();
}

export default function CitiesPage() {
  const groupedCities = groupCitiesByCounty(allCities);
  const sortedCounties = getSortedCounties(groupedCities);
  const totalCities = allCities.length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cities Served by KreativeKommit',
    description: 'Professional web design and digital marketing services available in cities across the UK and Ireland',
    numberOfItems: totalCities,
    itemListElement: allCities.slice(0, 20).map((city, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Place',
        name: city.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.name,
          addressRegion: city.county,
        },
        url: `https://kreativekommit.com/cities/${city.slug}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd, null, 0),
        }}
      />

      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-12 h-12 text-primary" aria-hidden="true" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-4">
              Cities We Serve
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Professional web design, SEO, and digital marketing services across{' '}
              <strong className="text-black dark:text-white">{totalCities}+ cities</strong> in the UK and Ireland.
              Find your city and discover how we can help your business thrive online.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">{totalCities}+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Cities Covered</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">{sortedCounties.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Counties &amp; Regions</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">100%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Local Expertise</p>
              </CardContent>
            </Card>
          </div>

          {/* Cities by County */}
          <div className="space-y-12">
            {sortedCounties.map((county, countyIndex) => {
              const cities = groupedCities.get(county) || [];
              return (
                <div 
                  key={county} 
                  className="animate-fade-up"
                  style={{ animationDelay: `${countyIndex * 0.05}s` }}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-black dark:text-white">
                      {county}
                    </h2>
                    <Badge variant="secondary" className="text-sm">
                      {cities.length} {cities.length === 1 ? 'city' : 'cities'}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {cities.map((city, cityIndex) => (
                      <Card 
                        key={`${county}-${city.slug}-${cityIndex}`} 
                        className="group hover:shadow-lg transition-all hover:scale-105 duration-200"
                      >
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-black dark:text-white group-hover:text-primary transition-colors">
                            {city.name}
                          </CardTitle>
                          {city.population && (
                            <CardDescription className="text-xs text-gray-500 dark:text-gray-500">
                              Pop: {city.population.toLocaleString()}
                            </CardDescription>
                          )}
                        </CardHeader>
                        <CardContent>
                          <Link 
                            href={`/cities/${city.slug}`}
                            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
                            aria-label={`View services in ${city.name}`}
                          >
                            View Services
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-black dark:text-white">
                  Don't See Your City?
                </CardTitle>
                <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                  We work with businesses across the UK and Ireland. If your city isn't listed, get in touch – we'd love to help your business grow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
