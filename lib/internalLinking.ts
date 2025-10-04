import { services } from '@/app/data/services/services';
import { cityFacts } from '@/app/data/cities/facts';

export interface RelatedPage {
  title: string;
  url: string;
  type: 'service' | 'city' | 'content';
}

/**
 * Get related services for internal linking
 * Returns other services in the same city
 */
export function getRelatedServices(currentServiceSlug: string, citySlug: string, limit = 6): RelatedPage[] {
  return services
    .filter((service) => service.slug !== currentServiceSlug)
    .slice(0, limit)
    .map((service) => ({
      title: `${service.name} in ${cityFacts.find((c) => c.slug === citySlug)?.name || citySlug}`,
      url: `/services/${service.slug}/${citySlug}`,
      type: 'service' as const,
    }));
}

/**
 * Get nearby cities for internal linking
 * Returns the same service in different cities
 */
export function getNearbyCities(serviceSlug: string, currentCitySlug: string, limit = 6): RelatedPage[] {
  const currentCity = cityFacts.find((c) => c.slug === currentCitySlug);
  if (!currentCity) return [];

  // Priority cities (major UK cities)
  const priorityCities = [
    'manchester',
    'london',
    'liverpool',
    'birmingham',
    'leeds',
    'bristol',
    'sheffield',
    'newcastle',
    'nottingham',
    'cardiff',
  ];

  // Get priority cities first, then others
  const sortedCities = cityFacts.sort((a, b) => {
    const aIsPriority = priorityCities.includes(a.slug);
    const bIsPriority = priorityCities.includes(b.slug);
    if (aIsPriority && !bIsPriority) return -1;
    if (!aIsPriority && bIsPriority) return 1;
    return 0;
  });

  const serviceName = services.find((s) => s.slug === serviceSlug)?.name || serviceSlug;

  return sortedCities
    .filter((city) => city.slug !== currentCitySlug)
    .slice(0, limit)
    .map((city) => ({
      title: `${serviceName} in ${city.name}`,
      url: `/services/${serviceSlug}/${city.slug}`,
      type: 'city' as const,
    }));
}

/**
 * Get all related pages for a service×city page
 * Combines related services and nearby cities
 */
export function getRelatedPages(
  serviceSlug: string,
  citySlug: string,
  servicesLimit = 3,
  citiesLimit = 3
): {
  relatedServices: RelatedPage[];
  nearbyCities: RelatedPage[];
} {
  return {
    relatedServices: getRelatedServices(serviceSlug, citySlug, servicesLimit),
    nearbyCities: getNearbyCities(serviceSlug, citySlug, citiesLimit),
  };
}

/**
 * Get related content for blog posts
 * Returns a mix of related blog posts and relevant services
 */
export async function getRelatedBlogContent(
  currentSlug: string,
  tags: string[] = [],
  limit = 6
): Promise<RelatedPage[]> {
  const { getBlogPosts } = await import('@/lib/getBlogPosts');
  
  const allPosts = await getBlogPosts();
  const related: RelatedPage[] = [];

  // Find related blog posts by matching tags
  if (tags && tags.length > 0) {
    const relatedPosts = allPosts
      .filter((post) => {
        // Don't include current post
        if (post.slug === currentSlug) return false;
        // Match at least one tag
        return post.tags?.some((postTag: string) => tags.includes(postTag));
      })
      .slice(0, 4) // Get up to 4 related blog posts
      .map((post) => ({
        title: post.title,
        url: `/blog/${post.slug}`,
        type: 'content' as const,
      }));
    related.push(...relatedPosts);
  }

  // If we still need more content, add relevant services based on tags
  if (related.length < limit && tags && tags.length > 0) {
    const serviceKeywordMap: Record<string, string[]> = {
      'web-design': ['design', 'website', 'web', 'UI', 'UX', 'frontend', 'responsive'],
      'seo': ['SEO', 'search', 'google', 'ranking', 'keywords', 'organic', 'optimisation'],
      'branding': ['brand', 'branding', 'logo', 'identity', 'visual', 'brand strategy'],
      'ecommerce-development': ['ecommerce', 'shop', 'store', 'shopify', 'WooCommerce', 'sales', 'online store'],
      'social-media-marketing': ['social', 'media', 'facebook', 'instagram', 'twitter', 'TikTok', 'LinkedIn'],
      'content-creation': ['content', 'writing', 'copywriting', 'blog', 'article', 'marketing'],
      'ppc-advertising': ['PPC', 'ads', 'advertising', 'Google Ads', 'paid', 'campaigns'],
    };

    const relevantServices = services
      .filter((service) => {
        const keywords = serviceKeywordMap[service.slug] || [];
        return tags.some((tag) => 
          keywords.some((keyword) => 
            tag.toLowerCase().includes(keyword.toLowerCase()) ||
            keyword.toLowerCase().includes(tag.toLowerCase())
          )
        );
      })
      .slice(0, limit - related.length)
      .map((service) => ({
        title: `${service.name} Services`,
        url: `/services/${service.slug}`,
        type: 'service' as const,
      }));
    related.push(...relevantServices);
  }

  return related.slice(0, limit);
}

/**
 * Get related content for guide pages
 * Returns a mix of related guides, blog posts, and relevant services
 */
export async function getRelatedGuideContent(
  currentSlug: string,
  tags: string[] = [],
  limit = 6
): Promise<RelatedPage[]> {
  const { getGuides } = await import('@/lib/getGuides');
  const { getBlogPosts } = await import('@/lib/getBlogPosts');
  
  const allGuides = await getGuides();
  const allPosts = await getBlogPosts();
  const related: RelatedPage[] = [];

  // Find related guides by matching tags (if guides have tags)
  if (tags && tags.length > 0) {
    const relatedGuides = allGuides
      .filter((guide) => {
        // Don't include current guide
        if (guide.slug === currentSlug) return false;
        // Match at least one tag if guide has tags
        // Note: GuideMeta doesn't include tags in type def, but some guides have them
        const guideTags = (guide as unknown as { tags?: string[] }).tags;
        return guideTags?.some((guideTag: string) => tags.includes(guideTag));
      })
      .slice(0, 2) // Get up to 2 related guides
      .map((guide) => ({
        title: guide.title,
        url: `/guides/${guide.slug}`,
        type: 'content' as const,
      }));
    related.push(...relatedGuides);

    // Find related blog posts by matching tags
    const relatedPosts = allPosts
      .filter((post) => {
        return post.tags?.some((postTag: string) => tags.includes(postTag));
      })
      .slice(0, 2) // Get up to 2 related blog posts
      .map((post) => ({
        title: post.title,
        url: `/blog/${post.slug}`,
        type: 'content' as const,
      }));
    related.push(...relatedPosts);
  }

  // If we still need more content, add relevant services based on tags
  if (related.length < limit && tags && tags.length > 0) {
    const serviceKeywordMap: Record<string, string[]> = {
      'web-design': ['design', 'website', 'web', 'UI', 'UX', 'frontend', 'responsive'],
      'seo': ['SEO', 'search', 'google', 'ranking', 'keywords', 'organic', 'optimisation', 'optimization'],
      'branding': ['brand', 'branding', 'logo', 'identity', 'visual', 'brand strategy'],
      'ecommerce-development': ['ecommerce', 'shop', 'store', 'shopify', 'WooCommerce', 'sales', 'online store'],
      'social-media-marketing': ['social', 'media', 'facebook', 'instagram', 'twitter', 'TikTok', 'LinkedIn'],
      'content-creation': ['content', 'writing', 'copywriting', 'blog', 'article', 'marketing'],
      'ppc-advertising': ['PPC', 'ads', 'advertising', 'Google Ads', 'paid', 'campaigns'],
    };

    const relevantServices = services
      .filter((service) => {
        const keywords = serviceKeywordMap[service.slug] || [];
        return tags.some((tag) => 
          keywords.some((keyword) => 
            tag.toLowerCase().includes(keyword.toLowerCase()) ||
            keyword.toLowerCase().includes(tag.toLowerCase())
          )
        );
      })
      .slice(0, limit - related.length)
      .map((service) => ({
        title: `${service.name} Services`,
        url: `/services/${service.slug}`,
        type: 'service' as const,
      }));
    related.push(...relevantServices);
  }

  return related.slice(0, limit);
}
