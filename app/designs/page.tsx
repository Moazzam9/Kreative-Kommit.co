import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/Button';
import { Eye, Download } from 'lucide-react';

// ...existing code...

const designs = [
  {
    id: 1,
    name: 'SaaS Dashboard Pro',
    category: 'Dashboard',
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Modern analytics dashboard with dark mode support',
    tags: ['React', 'Tailwind', 'Charts'],
    price: 'Free',
  },
  {
    id: 2,
    name: 'E-commerce Starter',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complete e-commerce template with payment integration',
    tags: ['Next.js', 'Stripe', 'SEO'],
    price: '$49',
  },
  {
    id: 3,
    name: 'Portfolio Showcase',
    category: 'Portfolio',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Creative portfolio template for designers and developers',
    tags: ['CSS Grid', 'Animations', 'Responsive'],
    price: '$29',
  },
  {
    id: 4,
    name: 'Landing Page Kit',
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'High-converting landing page components',
    tags: ['Conversion', 'A/B Testing', 'Forms'],
    price: '$39',
  },
  {
    id: 5,
    name: 'Blog Platform',
    category: 'Blog',
    image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Modern blog template with CMS integration',
    tags: ['MDX', 'CMS', 'SEO'],
    price: 'Free',
  },
  {
    id: 6,
    name: 'Agency Starter',
    category: 'Agency',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Professional agency website template',
    tags: ['Multi-page', 'Contact Forms', 'Performance'],
    price: '$59',
  },
];

export default function DesignsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Design Library - KreativeKommit',
    description: 'Explore our collection of modern, conversion-focused design templates and UI components.',
    url: 'https://kreativekommit.com/designs',
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
          name: 'Design Library',
          item: 'https://kreativekommit.com/designs',
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
              Design Library
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Modern, conversion-focused design templates and UI components for your next project
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Dashboard', 'E-commerce', 'Portfolio', 'Marketing', 'Blog', 'Agency'].map((category) => (
              <Button
                key={category}
                className={`
        rounded-full 
        bg-primary-600 
        text-white 
        hover:bg-primary-700 
        dark:bg-primary-600 
        dark:text-white 
        dark:hover:bg-primary-700
      `}
              >
                {category}
              </Button>
            ))}
          </div>


          {/* Design Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <Card key={design.id} className="group overflow-hidden animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={design.image}
                    alt={design.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-primary-600/80 text-white backdrop-blur-sm hover:bg-primary-700"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>

                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{design.category}</Badge>
                    <span className="text-sm font-semibold text-green-500 dark:text-green-400">
                      {design.price}
                    </span>
                  </div>
                  <CardTitle className="text-black dark:text-white group-hover:text-primary-600 transition-colors">
                    {design.name}
                  </CardTitle>

                  <CardDescription className='text-gray-600 dark:text-gray-400'>{design.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {design.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className="
    w-full
    bg-primary-600 
    text-white 
    hover:bg-primary-700 
    dark:bg-primary-600 
    dark:text-white 
    dark:hover:bg-primary-700
  "
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {design.price === 'Free' ? 'Download Free' : 'Purchase'}
                  </Button>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}