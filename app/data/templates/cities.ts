// Service-specific templates
export const serviceTemplates: {
	[service: string]: {
		getTitle?: (city: string) => string;
		getMetaDescription?: (city: string) => string;
		getIntroParagraph?: (city: string) => string;
		getCTA?: (city: string) => string;
		getFAQ?: (city: string) => Array<{ q: string; a: string }>;
		getSchemaMarkup?: (city: string) => Record<string, unknown>;
	}
} = {
	seo: {
		getTitle: city => `SEO Services in ${city} | ${brand}`,
		getMetaDescription: city => `Boost your rankings in ${city} with expert SEO from ${brand}. Local specialists in technical, local, and content SEO.`,
		getIntroParagraph: city => `Looking for top-rated SEO in ${city}? ${brand} delivers proven strategies to help your business get found and grow online.`,
		getCTA: city => `Ready to rank higher in ${city}? Contact our SEO experts for a free audit!`,
		getFAQ: city => [
			{ q: `How does SEO help my business in ${city}?`, a: `SEO increases your visibility in ${city}, driving more traffic and leads to your website.` },
			{ q: `What makes ${brand} the best SEO agency in ${city}?`, a: `${brand} uses advanced techniques and local expertise to deliver measurable results.` },
			{ q: `How long does SEO take in ${city}?`, a: `Most clients see improvements within weeks, with ongoing growth over time.` }
		],
		getSchemaMarkup: city => ({
			'@context': 'https://schema.org',
			'@type': 'LocalBusiness',
			name: brand,
			address: { '@type': 'PostalAddress', addressLocality: city, addressCountry: 'UK' },
			description: `SEO services in ${city} for local businesses.`,
			areaServed: city,
	url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kreativekommit.com'}/seo/${city}`
		})
	},
	'web design': {
		getTitle: city => `Web Design in ${city} | ${brand}`,
		getMetaDescription: city => `Modern, responsive web design for businesses in ${city}. Get a stunning website from ${brand}.`,
		getIntroParagraph: city => `Need a new website in ${city}? ${brand} creates beautiful, user-friendly sites that convert visitors into customers.`,
		getCTA: city => `Ready for a new website in ${city}? Contact our web design team for a free quote!`,
		getFAQ: city => [
			{ q: `Why is professional web design important for my business in ${city}?`, a: `A well-designed website builds trust and helps you stand out in ${city}.` },
			{ q: `How long does it take to build a website in ${city}?`, a: `Most projects are completed in 2-6 weeks, depending on your needs.` },
			{ q: `Can you redesign my existing site in ${city}?`, a: `Absolutely! We specialise in redesigns and upgrades for local businesses.` }
		],
		getSchemaMarkup: city => ({
			'@context': 'https://schema.org',
			'@type': 'LocalBusiness',
			name: brand,
			address: { '@type': 'PostalAddress', addressLocality: city, addressCountry: 'UK' },
			description: `Web design services in ${city} for local businesses.`,
			areaServed: city,
	url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kreativekommit.com'}/web-design/${city}`
		})
	}
	// Add more services as needed
};

// City-specific customisation for high-value cities
export const cityOverrides: {
	[city: string]: {
		getIntroParagraph?: (service: string) => string;
		getCTA?: (service: string) => string;
		getSchemaMarkup?: (service: string) => Record<string, unknown>;
	}
} = {
	London: {
		getIntroParagraph: service => `London businesses deserve the best. Our ${service} services are trusted by leading brands and startups across the capital.`,
		getCTA: service => `Ready to stand out in London? Contact our ${service} team for a free strategy session!`,
		getSchemaMarkup: service => ({
			'@context': 'https://schema.org',
			'@type': 'LocalBusiness',
			name: brand,
			address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'UK' },
			description: `Premium ${service} services for London businesses.`,
			areaServed: 'London',
	url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kreativekommit.com'}/${service}/london`
		})
	},
	Manchester: {
		getIntroParagraph: service => `Manchester is a hub for innovation. Our ${service} solutions help local businesses grow and compete online.`,
		getCTA: service => `Grow your Manchester business with expert ${service}. Book a free consultation today!`,
		getSchemaMarkup: service => ({
			'@context': 'https://schema.org',
			'@type': 'LocalBusiness',
			name: brand,
			address: { '@type': 'PostalAddress', addressLocality: 'Manchester', addressCountry: 'UK' },
			description: `Expert ${service} for Manchester businesses.`,
			areaServed: 'Manchester',
	url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kreativekommit.com'}/${service}/manchester`
		})
	}
	// Add more city overrides as needed
};
// SEO City Page Templates for Kreative Kommit (Digital Agency)
// Usage: Fill in {service}, {city}, {brand} as needed

export const brand = "Kreative Kommit";

// Main template functions with service/city override support
export function getTitle(service: string, city: string): string {
	if (serviceTemplates[service]?.getTitle) return serviceTemplates[service].getTitle!(city);
	return `${service.charAt(0).toUpperCase() + service.slice(1)} in ${city} | ${brand}`;
}

export function getMetaDescription(service: string, city: string): string {
	if (serviceTemplates[service]?.getMetaDescription) return serviceTemplates[service].getMetaDescription!(city);
	return `Grow your business in ${city} with expert ${service} from ${brand}. Local specialists in web design, SEO, and digital marketing.`;
}

export function getIntroParagraph(service: string, city: string): string {
	if (cityOverrides[city]?.getIntroParagraph) return cityOverrides[city].getIntroParagraph!(service);
	if (serviceTemplates[service]?.getIntroParagraph) return serviceTemplates[service].getIntroParagraph!(city);
	return `Looking for top-rated ${service} in ${city}? ${brand} delivers results-driven digital solutions for local businesses. Get found, get leads, and grow your brand today.`;
}

export function getCTA(service: string, city: string): string {
	if (cityOverrides[city]?.getCTA) return cityOverrides[city].getCTA!(service);
	if (serviceTemplates[service]?.getCTA) return serviceTemplates[service].getCTA!(city);
	return `Ready to boost your business in ${city}? Contact our ${service} experts now for a free consultation!`;
}

export function getFAQ(service: string, city: string): Array<{ q: string; a: string }> {
	if (serviceTemplates[service]?.getFAQ) return serviceTemplates[service].getFAQ!(city);
	return [
		{
			q: `How does ${service} help my business in ${city}?`,
			a: `Our ${service} services are tailored for local businesses in ${city}, helping you attract more customers and grow online.`
		},
		{
			q: `Why choose ${brand} for ${service} in ${city}?`,
			a: `${brand} combines local expertise with proven digital strategies to deliver measurable results for your business in ${city}.`
		},
		{
			q: `How do I get started with ${service} in ${city}?`,
			a: `Contact us for a free consultation and discover how our ${service} solutions can help your business thrive in ${city}.`
		}
	];
}

export function getSchemaMarkup(service: string, city: string): Record<string, unknown> {
	if (cityOverrides[city]?.getSchemaMarkup) return cityOverrides[city].getSchemaMarkup!(service);
	if (serviceTemplates[service]?.getSchemaMarkup) return serviceTemplates[service].getSchemaMarkup!(city);
	return {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: brand,
		address: {
			'@type': 'PostalAddress',
			addressLocality: city,
			addressCountry: 'UK'
		},
		description: `Expert ${service} in ${city} for local businesses.`,
		areaServed: city,
	url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://kreativekommit.com'}/${service}/${city}`
	};
}
// Centralised description generator for cities
// If you want to add city-specific templates, define them here:
export const citySpecificTemplates: { [key: string]: Array<(city: string) => string> } = {};
