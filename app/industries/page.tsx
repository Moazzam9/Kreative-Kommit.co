
import Link from 'next/link';
import { industries } from '@/app/data/industries/industries';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-4">Industries We Serve</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Explore our specialist digital solutions for every industry. Click to learn more about how we help your sector grow online.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <Card key={industry.slug} className="group hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-black dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" aria-label={`Industry: ${industry.name}`}>
                  {industry.name}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {industry.description || 'Digital solutions for this industry.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/industries/${industry.slug}`} className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition w-full text-center font-semibold" aria-label={`Learn more about ${industry.name}`}>
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
