"use client";
import type { Metadata } from 'next';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import {
  Palette,
  Code,
  Search,
  Zap,
  Shield,
  Smartphone,
  BarChart3,
  Headphones,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

import { cityFacts, CityFact } from '@/app/data/cities/facts';

import { services } from '@/app/data/services';

// Map icons to service slugs for display
const serviceIcons = {
  'web-design': Palette,
  'seo-optimisation': Search,
  'content-marketing': Code,
  'social-media-management': Smartphone,
  'ppc-advertising': Zap,
  'security-maintenance': Shield,
};

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business goals, target audience, and project requirements.',
  },
  {
    step: '02',
    title: 'Design & Prototype',
    description: 'Create wireframes, mockups, and interactive prototypes to visualize the solution.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Build your website with clean code, thorough testing, and performance optimization.',
  },
  {
    step: '04',
    title: 'Launch & Optimize',
    description: 'Deploy your site and continuously optimize based on real user data and feedback.',
  },
];

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'Organization',
      name: 'KreativeKommit',
    },
    serviceType: 'Web Design and Development Services',
    description: 'Complete web design, development, and digital marketing services including UI/UX design, web development, SEO optimization, and performance audits.',
    url: 'https://kreativekommit.com/services',
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://kreativekommit.com/contact',
      serviceType: 'Online',
    },
  };


  const [showAll, setShowAll] = React.useState(false);
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd, null, 0),
        }}
      />

      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Complete web solutions from design to deployment and beyond
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {visibleServices.map((service, index) => (
              <Card key={service.slug} className="group hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  {serviceIcons[service.slug as keyof typeof serviceIcons] && (
                    React.createElement(
                      serviceIcons[service.slug as keyof typeof serviceIcons],
                      { className: "h-12 w-12 text-primary-600 dark:text-primary-600 mb-4" }
                    )
                  )}
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-black dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {service.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.keywords?.map((keyword) => (
                      <li key={keyword} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mr-3" />
                        {keyword}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    passHref
                  >
                    <Button
                      className="w-full bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
                      size="sm"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          {!showAll && services.length > 6 && (
            <div className="text-center mb-12">
              <Button
                size="lg"
                className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
                onClick={() => setShowAll(true)}
              >
                Show More
              </Button>
            </div>
          )}

          {/* Process Section */}
          <div className="bg-primary-50 dark:bg-primary-950 rounded-2xl p-8 lg:p-12">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white">
                Our Process
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                A proven methodology that delivers exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    {/* Glowing background circle */}
                    <div
                      className="absolute inset-0 rounded-full bg-purple-500 opacity-0 animate-pulse-glow"
                      style={{
                        animationDelay: `${index * 0.5}s`,
                        animationDuration: '2s',
                        animationIterationCount: 'infinite'
                      }}
                    />
                    {/* Main circle */}
                    <div className="relative w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-600 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Let&#39;s discuss your project and how we can help bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                <Link href="/contact">Get Free Consultation</Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Internal links to city landing pages */}
          <section className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Serving These UK Cities</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {cityFacts.map((city: CityFact) => (
                <Link
                  key={city.slug}
                  href={`/cities/${city.slug}`}
                  className="block bg-white dark:bg-gray-900 rounded-lg border border-primary-200 dark:border-primary-700 shadow hover:shadow-lg p-4 text-center transition-all"
                >
                  <span className="font-semibold text-primary-700 dark:text-primary-400">{city.name}</span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}