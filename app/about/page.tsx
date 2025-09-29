import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, Heart } from 'lucide-react';

// ...existing code...

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Creative Director',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Passionate about creating digital experiences that make a difference.',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Full-stack developer with expertise in modern web technologies.',
  },
  {
    name: 'Marcus Johnson',
    role: 'SEO Specialist',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Data-driven SEO strategist focused on organic growth.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'UX Designer',
    image: 'https://images.pexels.com/photos/3756966/pexels-photo-3756966.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'User experience designer creating intuitive digital solutions.',
  },
];

const stats = [
  { icon: Users, label: 'Happy Clients', value: '150+' },
  { icon: Globe, label: 'Projects Completed', value: '200+' },
  { icon: Award, label: 'Awards Won', value: '25+' },
  { icon: Heart, label: 'Years Experience', value: '5+' },
];

const values = [
  {
    title: 'Quality First',
    description: 'We never compromise on quality. Every project receives our full attention to detail and commitment to excellence.',
  },
  {
    title: 'Client Success',
    description: 'Your success is our success. We measure our achievements by the real results we deliver for your business.',
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of industry trends and continuously adopt new technologies to give you a competitive edge.',
  },
  {
    title: 'Transparency',
    description: 'Clear communication, honest timelines, and transparent pricing. No surprises, just results.',
  },
];

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About KreativeKommit',
  description: 'Learn about KreativeKommit&#39;s mission, values, and team',
    url: 'https://kreativekommit.com/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'KreativeKommit',
      foundingDate: '2020',
      founder: {
        '@type': 'Person',
        name: 'Alex Rivera',
      },
      numberOfEmployees: 15,
      description: 'Intelligent web agency specialising in high-performance websites and digital experiences.',
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
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
              About KreativeKommit
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We&#39;re passionate creators building the future of web experiences
            </p>
          </div>

          <div className="bg-primary-700 dark:bg-primary-700 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-white dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 dark:text-gray-300 leading-relaxed">
                At KreativeKommit, we believe that exceptional web experiences should be accessible to businesses of all sizes.
                We combine <span className="font-semibold text-white dark:text-white">cutting-edge technology</span> with
                <span className="font-semibold text-white dark:text-white"> creative design</span> to build websites
                that not only look stunning but also deliver measurable business results.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="h-12 w-12 text-primary-600 dark:text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-800 dark:text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white">
                Meet Our Team
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Talented professionals dedicated to your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={member.name} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg text-black dark:text-white">
                      {member.name}
                    </CardTitle>
                    <Badge variant="secondary" className="mx-auto">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={value.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-black dark:text-primary-600 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {value.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Want to Work With Us?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              We'd love to hear about your project and discuss how we can help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                <Link href="/services">View Services</Link>
              </Button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}