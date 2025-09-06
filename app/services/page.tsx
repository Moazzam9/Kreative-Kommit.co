import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Services - Web Design & Development | KreativeKommit',
  description: 'Complete web design, development, and digital marketing services. From UI/UX design to SEO optimization and performance audits.',
};

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, conversion-focused designs that captivate your audience and drive engagement.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Accessibility'],
    price: 'From $2,500',
    duration: '2-4 weeks',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Fast, scalable web applications built with modern technologies and best practices.',
    features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Testing', 'Deployment'],
    price: 'From $5,000',
    duration: '4-8 weeks',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Technical SEO and content strategies that boost search rankings and organic traffic.',
    features: ['Technical SEO', 'Content Strategy', 'Local SEO', 'Analytics', 'Reporting'],
    price: 'From $1,500',
    duration: '2-3 weeks',
  },
  {
    icon: Zap,
    title: 'Performance Audit',
    description: 'Comprehensive analysis and optimization of your website\'s speed and performance.',
    features: ['Core Web Vitals', 'Speed Optimization', 'Image Optimization', 'Code Splitting', 'CDN Setup'],
    price: 'From $800',
    duration: '1 week',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    description: 'Ensure your website works perfectly across all devices and screen sizes.',
    features: ['Responsive Design', 'Mobile-First', 'Touch Optimization', 'App-like Experience', 'PWA'],
    price: 'From $1,200',
    duration: '1-2 weeks',
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description: 'Keep your website secure, updated, and running smoothly with our maintenance plans.',
    features: ['Security Updates', 'Backup Solutions', 'Monitoring', 'SSL Certificates', '24/7 Support'],
    price: 'From $300/month',
    duration: 'Ongoing',
  },
];

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary-600 dark:text-primary-600 mb-4" />
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-black dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </CardTitle>
                    <Badge variant="outline">{service.duration}</Badge>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-primary-800 dark:text-primary-300">
                      {service.price}
                    </span>
                  </div>

                  <Button
                    className="w-full bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
                    size="sm"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

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
              Let's discuss your project and how we can help bring your vision to life
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
        </div>
      </div>
    </>
  );
}