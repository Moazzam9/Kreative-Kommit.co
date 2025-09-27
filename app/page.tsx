import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Target, Rocket, Palette, Code, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'KreativeKommit - Inteligent Web Agency & Design Studio',
  description: 'KreativeKommit builds fast, SEO-optimized web experiences that drive real results. Expert web design, development, and digital marketing services.',
  openGraph: {
    title: 'KreativeKommit - Intelligent Web Agency & Design Studio',
    description: 'KreativeKommit builds fast, SEO-optimized web experiences that drive real results.',
    type: 'website',
    url: 'https://kreativekommit.com',
  },
};

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, conversion-focused designs that captivate your audience',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Fast, scalable web applications built with modern technologies',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Technical SEO and content strategies that boost search rankings',
  },
];

const portfolioPreview = [
  {
    name: 'TechFlow Solutions',
    description: 'B2B SaaS platform redesign',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    performance: 98,
    tags: ['Next.js', 'TypeScript', 'SEO'],
  },
  {
    name: 'EcoGreen Marketplace',
    description: 'Sustainable e-commerce platform',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    performance: 96,
    tags: ['React', 'Node.js', 'Performance'],
  },
  {
    name: 'FinanceFlow App',
    description: 'Personal finance dashboard',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
    performance: 94,
    tags: ['Vue.js', 'PWA', 'Mobile'],
  },
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'KreativeKommit - Intelligent Web Agency',
    description: 'KreativeKommit builds fast, SEO-optimized web experiences that drive real results.',
    url: 'https://kreativekommit.com',
    mainEntity: {
      '@type': 'Organization',
      name: 'KreativeKommit',
      description: 'Inteligent web agency and design studio',
      url: 'https://kreativekommit.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Hero Section */}
      <Hero />


      {/* Services Overview */}
      <section id="how-it-works" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-primary-600 dark:text-primary-400">
              Everything you need to build a successful web presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary-600 dark:text-primary-600 mx-auto mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-primary-400 dark:text-primary-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Portfolio Preview */}
      <section className="py-20 bg-primary-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Recent Projects
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              High-performance websites that deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioPreview.map((project, index) => (
              <Card
                key={project.name}
                className="group overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">
                      <Zap className="h-3 w-3 mr-1" />
                      {project.performance}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-black dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Why Choose KreativeKommit?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-up">
              <Target className="h-12 w-12 text-primary-600 dark:text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                Results-Driven
              </h3>
              <p className="text-slate-600 dark:text-slate-200">
                We focus on metrics that matter - conversions, performance, and user engagement.
              </p>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <Rocket className="h-12 w-12 text-primary-600 dark:text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                Lightning Fast
              </h3>
              <p className="text-slate-600 dark:text-slate-200">
                Our sites consistently score 90+ on Google PageSpeed with optimized performance.
              </p>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Zap className="h-12 w-12 text-primary-600 dark:text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                SEO Optimized
              </h3>
              <p className="text-slate-600 dark:text-slate-200">
                Built-in technical SEO, structured data, and search engine best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700 dark:bg-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Web Presence?
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Get a free consultation today.
          </p>
          <Button
  asChild
  size="lg"
  className="bg-white text-purple-700 hover:bg-purple-50 dark:bg-white dark:text-purple-700 dark:hover:bg-purple-50"
>
  <Link href="/contact">
    Get Free Consultation
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
</Button>

        </div>
      </section>
    </>
  );
}