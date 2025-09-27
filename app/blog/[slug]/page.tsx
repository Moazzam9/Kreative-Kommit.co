import { getBlogPosts } from '../../../lib/getBlogPosts';
import { notFound } from 'next/navigation';
import { getBlogPostContent } from '../../../lib/getBlogPostContent';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  const post = await getBlogPostContent(awaitedParams.slug) as {
    title?: string;
    excerpt?: string;
    description?: string;
    canonical?: string;
    contentHtml: string;
  };
  return {
    title: post.title,
    description: post.excerpt || post.description,
    alternates: {
      canonical: post.canonical || `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kreativekommit.com'}/blog/${awaitedParams.slug}`
    },
    metadataBase: new URL('https://kreativekommit.com'),
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map(post => ({ slug: post.slug }));
}

type BlogPost = {
  title: string;
  contentHtml: string;
  draft?: boolean;
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  let post: BlogPost | null = null;
  try {
    post = await getBlogPostContent(awaitedParams.slug) as BlogPost;
  } catch {
    return notFound();
  }
  if (!post || !post.title || post.draft) return notFound();
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white font-sans">
      <article className="max-w-2xl mx-auto my-12 rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-10 bg-white dark:bg-gray-900 animate-fade-up">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{post.title}</h1>
        <div
          className="prose prose-lg text-gray-600 dark:text-gray-400 prose-slate dark:prose-invert w-full"
          dangerouslySetInnerHTML={{
            __html: post.contentHtml.replace(/<h1[^>]*>.*?<\/h1>/i, '')
          }}
        />
      </article>
    </main>
  );
}

