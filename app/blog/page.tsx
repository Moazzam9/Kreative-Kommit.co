import Link from 'next/link';
import { cityFacts, CityFact } from '@/app/data/cities/facts';
import { getBlogPosts, BlogPostMeta } from '../../lib/getBlogPosts';



export { metadata } from './metadata';
export { viewport } from './viewport';

export default async function BlogLandingPage() {
  const posts: BlogPostMeta[] = await getBlogPosts();
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
              Web Development Blog
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Latest news, tutorials, and expert insights on web development, SEO, and digital strategy from Kreative Kommit.
            </p>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 pb-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.length === 0 ? (
            <div className="col-span-full text-center text-lg text-muted-foreground">No blog posts found.</div>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white dark:bg-gray-900 rounded-2xl border-2 border-primary-600 dark:border-primary-400 shadow-lg hover:shadow-xl hover:border-purple-500 transition-all p-8 flex flex-col justify-between animate-fade-up focus:outline-none focus:ring-4 focus:ring-primary-300"
                style={{ textDecoration: 'none' }}
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-black dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                  <span className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 px-4 py-1 rounded-full text-sm font-medium transition-colors">Read More</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

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
    </main>
  );
  }
