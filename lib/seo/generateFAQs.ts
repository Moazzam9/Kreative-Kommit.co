/**
 * Generate FAQ content for service×city pages
 * Creates 5 common questions that help with SEO and user experience
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceCityFAQ {
  serviceName: string;
  cityName: string;
  serviceSlug: string;
}

// Pricing information for common services
const servicePricing: Record<string, { from: string; typical: string }> = {
  'web-design': { from: '£1,200', typical: '£2,500-£5,000' },
  'seo-optimisation': { from: '£600/month', typical: '£1,200-£2,500/month' },
  'ecommerce-development': { from: '£3,000', typical: '£5,000-£15,000' },
  'custom-web-apps': { from: '£5,000', typical: '£10,000-£50,000' },
  'branding-identity': { from: '£800', typical: '£1,500-£3,500' },
  'content-marketing': { from: '£500/month', typical: '£1,000-£3,000/month' },
  'social-media-management': { from: '£400/month', typical: '£800-£2,000/month' },
  'ppc-advertising': { from: '£500/month', typical: '£1,500-£5,000/month' },
  'email-marketing': { from: '£300/month', typical: '£600-£1,500/month' },
  'conversion-rate-optimisation': { from: '£1,000', typical: '£2,000-£5,000' },
  'analytics-reporting': { from: '£400/month', typical: '£800-£2,000/month' },
  'website-audits': { from: '£500', typical: '£1,000-£2,500' },
  'security-maintenance': { from: '£200/month', typical: '£400-£1,000/month' },
};

// Timeline information for common services
const serviceTimelines: Record<string, string> = {
  'web-design': '4-8 weeks for a typical business website',
  'seo-optimisation': '3-6 months to see significant results',
  'ecommerce-development': '8-16 weeks depending on complexity',
  'custom-web-apps': '12-24 weeks depending on requirements',
  'branding-identity': '2-4 weeks for complete brand package',
  'content-marketing': 'Ongoing service with results in 3-6 months',
  'social-media-management': 'Ongoing service with monthly growth',
  'ppc-advertising': 'Results start immediately, optimization ongoing',
  'email-marketing': 'Setup in 1-2 weeks, ongoing campaigns',
  'conversion-rate-optimisation': '4-12 weeks for initial improvements',
  'analytics-reporting': 'Setup in 1 week, ongoing monthly reports',
  'website-audits': '1-2 weeks for comprehensive audit',
  'security-maintenance': 'Ongoing monthly service',
};

export function generateServiceCityFAQs({ serviceName, cityName, serviceSlug }: ServiceCityFAQ): FAQItem[] {
  const pricing = servicePricing[serviceSlug] || { from: '£500', typical: '£1,000-£5,000' };
  const timeline = serviceTimelines[serviceSlug] || '4-8 weeks';

  return [
    {
      question: `How much does ${serviceName} cost in ${cityName}?`,
      answer: `Our ${serviceName} services in ${cityName} start from ${pricing.from}. Most ${cityName} businesses invest ${pricing.typical}, depending on project scope, complexity, and specific requirements. We offer flexible payment plans and can provide a detailed quote after understanding your needs. Every project is unique, and we ensure transparent pricing with no hidden fees.`,
    },
    {
      question: `Why choose KreativeKommit for ${serviceName} in ${cityName}?`,
      answer: `We're a trusted digital agency serving ${cityName} businesses with proven expertise in ${serviceName}. Our team combines technical excellence with local market knowledge to deliver results that matter. We've helped numerous ${cityName} businesses improve their online presence, increase conversions, and achieve their digital goals. We offer personalized service, ongoing support, and a commitment to your success.`,
    },
    {
      question: `How long does ${serviceName} take in ${cityName}?`,
      answer: `Typically, ${timeline}. However, every ${cityName} business is unique, and timelines can vary based on project scope, complexity, and your specific requirements. We work efficiently without compromising quality and keep you informed throughout the process. For urgent projects, we can often accommodate faster turnaround times with our expedited service options.`,
    },
    {
      question: `Do you work with small businesses in ${cityName}?`,
      answer: `Absolutely! We work with businesses of all sizes in ${cityName}, from startups and small local businesses to established enterprises. We understand that ${cityName} small businesses have unique needs and budgets, which is why we offer flexible packages and scalable solutions. Our ${serviceName} services are designed to deliver maximum value regardless of your business size.`,
    },
    {
      question: `What makes ${serviceName} effective for ${cityName} businesses?`,
      answer: `${serviceName} is essential for ${cityName} businesses looking to compete in today's digital marketplace. By combining industry best practices with local market insights, we create strategies that resonate with your ${cityName} audience. Our approach focuses on measurable results—whether that's increased traffic, better rankings, more leads, or higher conversions. We stay updated with the latest trends and technologies to keep your ${cityName} business ahead of the competition.`,
    },
  ];
}
