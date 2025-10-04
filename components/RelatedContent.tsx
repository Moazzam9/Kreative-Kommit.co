import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import type { RelatedPage } from '@/lib/internalLinking';

interface RelatedContentProps {
  content: RelatedPage[];
}

export function RelatedContent({ content }: RelatedContentProps) {
  if (content.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Related Content
          </h2>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Continue exploring topics you&apos;re interested in
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {content.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="group p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === 'content' && (
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                        Article
                      </span>
                    )}
                    {item.type === 'service' && (
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                        Service
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
