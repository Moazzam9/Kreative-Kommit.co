export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    image?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

export function generatePageMetadata(config: SEOConfig) {
  const baseUrl = 'https://kreativekommit.com';
  
  return {
    title: config.title,
    description: config.description,
    canonical: config.canonical ? `${baseUrl}${config.canonical}` : undefined,
    openGraph: {
      title: config.openGraph?.title || config.title,
      description: config.openGraph?.description || config.description,
      type: config.openGraph?.type || 'website',
      url: config.canonical ? `${baseUrl}${config.canonical}` : baseUrl,
      siteName: 'KreativeKommit',
      images: config.openGraph?.image ? [
        {
          url: config.openGraph.image,
          width: 1200,
          height: 630,
          alt: config.openGraph.title || config.title,
        },
      ] : undefined,
    },
    twitter: {
      card: config.twitter?.card || 'summary_large_image',
      title: config.twitter?.title || config.title,
      description: config.twitter?.description || config.description,
      images: config.twitter?.image ? [config.twitter.image] : undefined,
      creator: '@kreativekommit',
    },
  };
}

export function generateStructuredData(type: string, data: any) {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return JSON.stringify(baseStructure);
}