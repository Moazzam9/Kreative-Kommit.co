import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Import all niche data files
import { beautyBrandingPages } from '@/app/data/niches/beauty';
import { constructionBrandingPages } from '@/app/data/niches/construction';
import { realEstateBrandingPages } from '@/app/data/niches/realestate';
import { educationBrandingPages } from '@/app/data/niches/education';
import { legalBrandingPages } from '@/app/data/niches/legal';
import { ecommerceBrandingPages } from '@/app/data/niches/ecommerce';
import { dentalBrandingPages } from '@/app/data/niches/dental';
import { charityBrandingPages } from '@/app/data/niches/charity';
import { restaurantBrandingPages } from '@/app/data/niches/restaurant';
import { medicalBrandingPages } from '@/app/data/niches/medical';
import { financialBrandingPages } from '@/app/data/niches/financial';
import { techBrandingPages } from '@/app/data/niches/tech';
import { hospitalityBrandingPages } from '@/app/data/niches/hospitality';
import { petServicesBrandingPages } from '@/app/data/niches/petservices';
import { tradesBrandingPages } from '@/app/data/niches/trades';
import { healthWellnessBrandingPages } from '@/app/data/niches/healthwellness';
import { childcareBrandingPages } from '@/app/data/niches/childcare';
import { artsCultureBrandingPages } from '@/app/data/niches/artsculture';
import { sportsBrandingPages } from '@/app/data/niches/sports';
import { homeGardenBrandingPages } from '@/app/data/niches/homegarden';
import { automotiveServicesBrandingPages } from '@/app/data/niches/automotiveservices';
import { foodDrinkBrandingPages } from '@/app/data/niches/fooddrink';
import { photographyBrandingPages } from '@/app/data/niches/photography';
import { travelTourismBrandingPages } from '@/app/data/niches/traveltourism';
import { cleaningBrandingPages } from '@/app/data/niches/cleaning';
import { securityBrandingPages } from '@/app/data/niches/security';
import { recruitmentBrandingPages } from '@/app/data/niches/recruitment';
import { plumbersBrandingPages } from '@/app/data/niches/plumbers';
import { roofersBrandingPages } from '@/app/data/niches/roofers';
import { flooringBrandingPages } from '@/app/data/niches/flooring';
import { windowCleanersBrandingPages } from '@/app/data/niches/windowcleaners';
import { paintersBrandingPages } from '@/app/data/niches/painters';
import { vetsBrandingPages } from '@/app/data/niches/vets';
import { fitnessBrandingPages } from '@/app/data/niches/fitness';
import { automotiveBrandingPages } from '@/app/data/niches/automotive';
import { eventsBrandingPages } from '@/app/data/niches/events';
import { brandingPages } from '@/app/data/niches/branding';

// Define niche page data type
interface NichePageData {
  city: string;
  area?: string;
  title: string;
  description: string;
  features: string[];
  whyChoose: string[];
  cta: {
    heading: string;
    text: string;
    button: string;
    link: string;
  };
}

// Aggregate all niche data
const allNicheData: Record<string, NichePageData[]> = {
  beauty: beautyBrandingPages,
  construction: constructionBrandingPages,
  realestate: realEstateBrandingPages,
  education: educationBrandingPages,
  legal: legalBrandingPages,
  ecommerce: ecommerceBrandingPages,
  dental: dentalBrandingPages,
  charity: charityBrandingPages,
  restaurant: restaurantBrandingPages,
  medical: medicalBrandingPages,
  financial: financialBrandingPages,
  tech: techBrandingPages,
  hospitality: hospitalityBrandingPages,
  petservices: petServicesBrandingPages,
  trades: tradesBrandingPages,
  healthwellness: healthWellnessBrandingPages,
  childcare: childcareBrandingPages,
  artsculture: artsCultureBrandingPages,
  sports: sportsBrandingPages,
  homegarden: homeGardenBrandingPages,
  automotiveservices: automotiveServicesBrandingPages,
  fooddrink: foodDrinkBrandingPages,
  photography: photographyBrandingPages,
  traveltourism: travelTourismBrandingPages,
  cleaning: cleaningBrandingPages,
  security: securityBrandingPages,
  recruitment: recruitmentBrandingPages,
  plumbers: plumbersBrandingPages,
  roofers: roofersBrandingPages,
  flooring: flooringBrandingPages,
  windowcleaners: windowCleanersBrandingPages,
  painters: paintersBrandingPages,
  vets: vetsBrandingPages,
  fitness: fitnessBrandingPages,
  automotive: automotiveBrandingPages,
  events: eventsBrandingPages,
  branding: brandingPages,
};

// Generate static params for all niche/city/area combinations
export async function generateStaticParams() {
  const params: { niche: string; city: string; area: string }[] = [];
  
  Object.entries(allNicheData).forEach(([nicheSlug, pages]) => {
    pages.forEach((page) => {
      if (page.city && page.area) {
        params.push({
          niche: nicheSlug,
          city: page.city,
          area: page.area,
        });
      }
    });
  });
  
  return params;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ niche: string; city: string; area: string }> }): Promise<Metadata> {
  const awaitedParams = await params;
  const { niche, city, area } = awaitedParams;
  
  const pages = allNicheData[niche];
  if (!pages) return {};
  
  const data = pages.find((p) => p.city === city && p.area === area);
  if (!data) return {};
  
  return {
    title: `${data.title} | Kreative Kommit`,
    description: data.description,
    alternates: {
      canonical: `https://kreativekommit.com/industries/${niche}/${city}/${area}`
    },
    metadataBase: new URL('https://kreativekommit.com'),
    openGraph: {
      title: `${data.title} | Kreative Kommit`,
      description: data.description,
      url: `https://kreativekommit.com/industries/${niche}/${city}/${area}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title} | Kreative Kommit`,
      description: data.description,
    },
  };
}

interface PageProps {
  params: Promise<{ niche: string; city: string; area: string }>;
}

export default async function NicheCityAreaPage({ params }: PageProps) {
  const awaitedParams = await params;
  const { niche, city, area } = awaitedParams;
  
  const pages = allNicheData[niche];
  if (!pages) return notFound();
  
  const data = pages.find((p) => p.city === city && p.area === area);
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
            {data.whyChoose.map((reason) => (
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
