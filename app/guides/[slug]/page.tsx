export { viewport } from './viewport';
import { notFound } from 'next/navigation';
import { getGuideContent } from '../../../lib/getGuideContent';

type Guide = {
  title: string;
  contentHtml: string;
  description: string;
  draft?: boolean;
  keywords?: string[];
  image?: string;
  author?: string;
  tags?: string[];
};

import { getGuides } from '../../../lib/getGuides';

import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const awaitedParams = await params;
  const guide = await getGuideContent(awaitedParams.slug) as Guide;
  if (!guide || guide.draft) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kreativekommit.com'}/guide/${awaitedParams.slug}`
    },
    keywords: guide.keywords,
    authors: guide.author ? [{ name: guide.author }] : undefined,
    openGraph: {
      title: guide.title,
      description: guide.description,
      images: guide.image ? [guide.image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
      images: guide.image ? [guide.image] : undefined,
    },
    metadataBase: new URL('https://kreativekommit.com'),
  };
}

export async function generateStaticParams() {
  const guides = getGuides();
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default async function GuidePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  let guide: Guide | null = null;
  try {
    guide = await getGuideContent(awaitedParams.slug) as Guide;
  } catch {
    return notFound();
  }
  if (!guide || !('title' in guide) || guide.draft) return notFound();
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white font-sans">
      <article className="max-w-2xl mx-auto my-12 rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-10 bg-white dark:bg-gray-900 animate-fade-up">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{guide.title}</h1>
        <div
          className="prose prose-lg text-gray-600 dark:text-gray-400 prose-slate dark:prose-invert w-full"
          dangerouslySetInnerHTML={{
            __html: guide.contentHtml.replace(/<h1[^>]*>.*?<\/h1>/i, '')
          }}
        />
      </article>
    </main>
  );
}
