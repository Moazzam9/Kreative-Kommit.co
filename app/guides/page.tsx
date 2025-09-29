import Link from 'next/link';
import { GuideMeta, getGuides } from '../../lib/getGuides';
export { metadata } from './metadata';

export default function GuideLandingPage() {
  const guides: GuideMeta[] = getGuides();
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
              Development Guides
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Step-by-step tutorials, resources, and expert advice to help you master modern web development and build high-performance digital experiences.
            </p>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 pb-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {guides.length === 0 ? (
            <div className="col-span-full text-center text-lg text-muted-foreground">No guides found.</div>
          ) : (
            guides.map((guide: GuideMeta) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex bg-white dark:bg-gray-900 rounded-2xl border-2 border-primary-600 dark:border-primary-400 shadow-lg hover:shadow-xl hover:border-purple-500 transition-all p-8 flex-col justify-between animate-fade-up focus:outline-none focus:ring-4 focus:ring-primary-300"
                style={{ textDecoration: 'none' }}
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-black dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{guide.excerpt}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{guide.date}</span>
                  <span className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 px-4 py-1 rounded-full text-sm font-medium transition-colors">Read More</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
