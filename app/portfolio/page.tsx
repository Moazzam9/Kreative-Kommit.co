import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Zap, Clock, Users } from 'lucide-react';

// ...existing code...

const projects = [
  {
    id: 1,
    name: 'TechFlow Solutions',
    category: 'B2B SaaS',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete platform redesign that increased user engagement by 340% and reduced bounce rate by 65%.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    performance: 98,
    loadTime: '1.2s',
    users: '50K+',
    link: 'https://techflow-demo.com',
    metrics: {
      conversion: '+240%',
      performance: '98/100',
      seo: '95/100',
    },
  },
  {
    id: 2,
    name: 'EcoGreen Marketplace',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sustainable e-commerce platform with advanced filtering, real-time inventory, and carbon footprint tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
    performance: 96,
    loadTime: '1.4s',
    users: '25K+',
    link: 'https://ecogreen-demo.com',
    metrics: {
      conversion: '+180%',
      performance: '96/100',
      seo: '92/100',
    },
  },
  {
    id: 3,
    name: 'FinanceFlow Dashboard',
    category: 'Fintech',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Personal finance management app with real-time data visualization and budget tracking.',
    technologies: ['Vue.js', 'Python', 'Chart.js', 'PWA'],
    performance: 94,
    loadTime: '1.1s',
    users: '15K+',
    link: 'https://financeflow-demo.com',
    metrics: {
      conversion: '+210%',
      performance: '94/100',
      seo: '89/100',
    },
  },
  {
    id: 4,
    name: 'HealthTech Portal',
    category: 'Healthcare',
    image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'HIPAA-compliant patient portal with appointment booking and telemedicine integration.',
    technologies: ['Angular', 'C#', 'Azure', 'WebRTC'],
    performance: 93,
    loadTime: '1.3s',
    users: '30K+',
    link: 'https://healthtech-demo.com',
    metrics: {
      conversion: '+160%',
      performance: '93/100',
      seo: '91/100',
    },
  },
  {
    id: 5,
    name: 'CreativeSpace Studio',
    category: 'Creative Agency',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Award-winning creative agency website with immersive portfolio showcase and client testimonials.',
    technologies: ['Nuxt.js', 'Headless CMS', 'GSAP', 'WebGL'],
    performance: 97,
    loadTime: '1.0s',
    users: '10K+',
    link: 'https://creativespace-demo.com',
    metrics: {
      conversion: '+290%',
      performance: '97/100',
      seo: '94/100',
    },
  },
  {
    id: 6,
    name: 'EduLearn Platform',
    category: 'Education',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Online learning platform with video streaming, progress tracking, and interactive assessments.',
    technologies: ['React', 'GraphQL', 'Video.js', 'Socket.io'],
    performance: 95,
    loadTime: '1.5s',
    users: '40K+',
    link: 'https://edulearn-demo.com',
    metrics: {
      conversion: '+200%',
      performance: '95/100',
      seo: '88/100',
    },
  },
];

export default function PortfolioPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Portfolio - KreativeKommit',
    description: 'High-performance websites and applications built by KreativeKommit',
    url: 'https://kreativekommit.com/portfolio',
    breadcrumb: {
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
          name: 'Portfolio',
          item: 'https://kreativekommit.com/portfolio',
        },
      ],
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

      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-primary-100">
              Our Portfolio
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              High-performance websites and applications that deliver exceptional results for our clients
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={project.id} className="group overflow-hidden animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Badge variant="default">
                      <Zap className="h-3 w-3 mr-1" />
                      {project.performance}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-black dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 py-4">
                    <div className="text-center">
                      <Clock className="h-5 w-5 text-green-500 dark:text-green-500 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-primary-800 dark:text-primary-300">
                        {project.loadTime}
                      </div>
                      <div className="text-xs text-gray-500">Load Time</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-5 w-5 text-primary-600 dark:text-primary-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-primary-800 dark:text-primary-300">
                        {project.users}
                      </div>
                      <div className="text-xs text-gray-500">Users</div>
                    </div>
                    <div className="text-center">
                      <Zap className="h-5 w-5 text-yellow-400 dark:text-yellow-400 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-primary-800 dark:text-primary-300">
                        {project.metrics.conversion}
                      </div>
                      <div className="text-xs text-gray-500">Conversion</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Site
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700"
                    >
                      Case Study
                    </Button>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Let's build something amazing together
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>

          </div>
        </div>
      </div>
    </>
  );
}