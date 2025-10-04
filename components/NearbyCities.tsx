import Link from 'next/link';
import { MapPin } from 'lucide-react';
import type { RelatedPage } from '@/lib/internalLinking';

interface NearbyCitiesProps {
  cities: RelatedPage[];
  serviceName: string;
}

export function NearbyCities({ cities, serviceName }: NearbyCitiesProps) {
  if (cities.length === 0) return null;

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          {serviceName} in Other Cities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cities.map((city, index) => (
            <Link
              key={index}
              href={city.url}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {city.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
