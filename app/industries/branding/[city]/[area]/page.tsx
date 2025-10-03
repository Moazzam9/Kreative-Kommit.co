import { notFound } from 'next/navigation';
import { brandingPages } from '@/app/data/niches/branding';

interface PageProps {
  params: Promise<{ city: string; area: string }>;
}

export default async function BrandingDynamicPage({ params }: PageProps) {
  const awaitedParams = await params;
  const data = brandingPages.find(
    (p) => p.city === awaitedParams.city && p.area === awaitedParams.area
  );
  if (!data) return notFound();

  return (
    <section className="py-20 bg-white dark:bg-gray-900 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-primary-100 mb-4 animate-fade-up">
            {data.title}
          </h1>
          <p className="mt-4 text-lg text-primary-600 dark:text-primary-400 animate-fade-up">
            {data.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {data.features.map((feature, idx) => (
            <div key={feature} className="flex items-start gap-4 p-6 bg-primary-50 dark:bg-primary-950 rounded-xl shadow animate-fade-up" style={{ animationDelay: `${idx * 0.05}s` }}>
              <span className="inline-block w-3 h-3 mt-2 rounded-full bg-primary-600 dark:bg-primary-400 shrink-0" />
              <span className="text-base text-gray-700 dark:text-gray-200">{feature}</span>
            </div>
          ))}
        </div>
        <div className="bg-primary-100 dark:bg-primary-900 rounded-2xl p-8 lg:p-12 mb-16 animate-fade-in">
          <div className="mx-auto max-w-xl text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4 animate-fade-up">Why Choose KreativeKommit?</h2>
          </div>
          <ul className="space-y-4">
            {data.whyChoose.map((reason, idx) => (
              <li key={reason} className="flex items-center gap-3 animate-fade-up">
                <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400" />
                <span className="text-base text-gray-800 dark:text-gray-100">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4 animate-fade-up">
            {data.cta.heading}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 animate-fade-up">
            {data.cta.text}
          </p>
          <a
            href={data.cta.link}
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 transition-colors animate-fade-up"
          >
            {data.cta.button}
          </a>
        </div>
      </div>
    </section>
  );
}
