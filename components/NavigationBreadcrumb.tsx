import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface NavigationBreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Visual Breadcrumb Navigation Component
 * Displays breadcrumb trail for improved user navigation
 * Should be used alongside BreadcrumbSchema for SEO
 */
export function NavigationBreadcrumb({ items }: NavigationBreadcrumbProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap space-x-2 text-sm text-gray-600 dark:text-gray-400">
        {/* Home icon */}
        <li>
          <Link
            href="/"
            className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" aria-hidden="true" />
              {isLast ? (
                <span className="font-medium text-gray-900 dark:text-white" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
