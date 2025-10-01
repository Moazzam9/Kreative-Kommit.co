// Generic fallback descriptions for each service
export const genericServiceDescriptions: { [serviceSlug: string]: string } = {
  'seo-optimisation': "Our SEO optimisation services help your business climb the search rankings, get found, and get results—no matter where you are!",
  'web-design': "We design beautiful, high-converting websites for businesses in every city. Get ready to impress your audience!",
  'content-marketing': "We craft content that’s so engaging, your audience will forget to scroll TikTok. Blogs, guides, and more, all designed to boost your brand and charm search engines!",
  'social-media-management': "We’ll make your socials sparkle, sizzle, and actually get noticed. From memes to meaningful moments, we grow your followers and keep your brand top-of-feed!",
  'ppc-advertising': "Our PPC campaigns are so targeted, they could find a needle in a haystack. Get instant clicks, measurable ROI, and ads that make your competitors cry (in a good way).",
  'branding-identity': "Stand out from the crowd! We create memorable logos, brand guidelines, and visual identities that make your business instantly recognisable and trusted!"
};

// Centralized city descriptions for services
// Keyed by city slug, then by service slug
// AUTO-GENERATED: All cities from cityFacts with generic fallbacks for each service
export const cityServiceDescriptions: {
  [citySlug: string]: {
    [serviceSlug: string]: string;
  };
} =
// ...generated object below...
{
  "aldershot": {
    "seo-optimisation": "Our SEO optimisation services help your business climb the search rankings, get found, and get results—no matter where you are!",
    "web-design": "We design beautiful, high-converting websites for businesses in every city. Get ready to impress your audience!",
    "content-marketing": "We craft content that’s so engaging, your audience will forget to scroll TikTok. Blogs, guides, and more, all designed to boost your brand and charm search engines!",
    "social-media-management": "We’ll make your socials sparkle, sizzle, and actually get noticed. From memes to meaningful moments, we grow your followers and keep your brand top-of-feed!",
    "ppc-advertising": "Our PPC campaigns are so targeted, they could find a needle in a haystack. Get instant clicks, measurable ROI, and ads that make your competitors cry (in a good way).",
    "branding-identity": "Stand out from the crowd! We create memorable logos, brand guidelines, and visual identities that make your business instantly recognisable and trusted!"
  },
  "andover": {
    "seo-optimisation": "Our SEO optimisation services help your business climb the search rankings, get found, and get results—no matter where you are!",
    "web-design": "We design beautiful, high-converting websites for businesses in every city. Get ready to impress your audience!",
    "content-marketing": "We craft content that’s so engaging, your audience will forget to scroll TikTok. Blogs, guides, and more, all designed to boost your brand and charm search engines!",
    "social-media-management": "We’ll make your socials sparkle, sizzle, and actually get noticed. From memes to meaningful moments, we grow your followers and keep your brand top-of-feed!",
    "ppc-advertising": "Our PPC campaigns are so targeted, they could find a needle in a haystack. Get instant clicks, measurable ROI, and ads that make your competitors cry (in a good way).",
    "branding-identity": "Stand out from the crowd! We create memorable logos, brand guidelines, and visual identities that make your business instantly recognisable and trusted!"
  },
  // ...existing code...
}
;

// TEMP: Export service descriptions as JSON for script (must be at very end of file)
if (require.main === module) {
  const fs = require('fs');
  fs.writeFileSync('genericServiceDescriptions.json', JSON.stringify(genericServiceDescriptions, null, 2));
  fs.writeFileSync('cityServiceDescriptions.json', JSON.stringify(cityServiceDescriptions, null, 2));
}
