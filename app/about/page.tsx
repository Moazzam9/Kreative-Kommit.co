"use client";
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, Coffee, PartyPopper } from 'lucide-react';

// ...existing code...

const team = [
  {
    name: 'Alex B',
    role: 'Founder, SEO and SSG Specialist',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
  bio: 'Digital Visionary. Has led projects from websites to apps, branding, and digital strategy. SEO & SSG secret: Always add a dash of fun and innovation to every client solution.',
    funFact: 'Can code and dance at the same time.'
  },
  {
    name: 'Dave S',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Chief Meme Officer. Writes code that even robots envy. Loves debugging and cat memes.',
    funFact: 'Once fixed a bug with a meme.'
  },
  {
    name: 'Moazzam A',
    role: 'Frontend and UX Specialist',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Frontend Maestro. Designs pixel-perfect interfaces and smooth user journeys that boost SEO and conversions. Can turn any wireframe into a wow moment.',
    funFact: 'Knows 101 ways to use keywords.'
  },
  {
    name: 'Various Freelancers',
    role: 'Designers & Graphics Experts',
    image: 'https://images.pexels.com/photos/3756966/pexels-photo-3756966.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Our freelance designers and graphics pros create stunning visuals, engaging user journeys, and brand assets that pop. From logos to layouts, they blend creativity with SEO-friendly design.',
    funFact: 'Can spot bad UX from 100 meters.'
  },
];
const testimonials = [
  {
    name: 'Jamie, Manchester',
    quote: 'KreativeKommit built us a site so good, even our competitors asked for their number! Best web design agency in Manchester.'
  },
  {
    name: 'Priya, Liverpool',
    quote: 'Our SEO rankings shot up and we got more leads in a month than the whole last year. Highly recommended!'
  },
  {
    name: 'Tom, Leeds',
    quote: 'The team made the process fun and easy. We love our new site and our customers do too.'
  }
];

const stats = [
  { icon: Users, label: 'Clients Who Sent Memes', value: '150+' },
  { icon: Globe, label: 'Websites Launched Worldwide', value: '200+' },
  { icon: PartyPopper, label: 'Celebratory GIFs Sent', value: '1000+' },
  { icon: Coffee, label: 'Cups of Coffee Drank', value: '8,000+' },
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
  // Fun facts for interactive button
  const funFacts = [
    'We’ve launched sites in 12 countries!',
    'Our team has sent over 1,000 celebratory GIFs.',
    'We once built a site in under 24 hours (with lots of coffee).',
    'We love memes almost as much as SEO.',
    'Our code is 99% bug-free (the other 1% keeps us humble).'
  ];
  const [randomFact, setRandomFact] = React.useState(funFacts[0]);
  function showRandomFact() {
    setRandomFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
  }
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
                Talented professionals dedicated to your success. We’re not just web designers—we’re meme lovers, coffee drinkers, and SEO fanatics.
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
                    <p className="text-xs text-primary-600 dark:text-primary-400 mt-2 italic">
                      Fun Fact: {member.funFact}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="mb-16">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white">
                Why Choose Us?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Award-winning web agency trusted by UK businesses. Creative digital experts, SEO fanatics, and meme connoisseurs. We make websites fun, fast, and Google-friendly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center animate-fade-up">
                <CardHeader>
                  <CardTitle className="text-lg text-black dark:text-white">Fast Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Our sites load faster than you can say “SEO.”</p>
                </CardContent>
              </Card>
              <Card className="text-center animate-fade-up">
                <CardHeader>
                  <CardTitle className="text-lg text-black dark:text-white">Creative Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">We blend creativity and conversion for maximum impact.</p>
                </CardContent>
              </Card>
              <Card className="text-center animate-fade-up">
                <CardHeader>
                  <CardTitle className="text-lg text-black dark:text-white">SEO Obsessed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">We live and breathe Google rankings. Your success is our mission.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mb-16">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white">
                What Our Clients Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <Card key={t.name} className="text-center animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-lg text-black dark:text-white">{t.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">“{t.quote}”</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Random Fun Fact</h2>
            <p className="text-lg text-primary-600 dark:text-primary-400 mb-4">{randomFact}</p>
            <Button size="sm" className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700" onClick={showRandomFact}>
              Show Another Fun Fact
            </Button>
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
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Get a free website audit or just say hi. We promise to reply with a meme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                <Link href="/contact">Get Free Website Audit</Link>
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