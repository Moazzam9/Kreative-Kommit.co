export interface Service {
  name: string;
  slug: string;
  description: string;
  cityDescriptions?: { [citySlug: string]: string[] };
  industries?: string[];
  industryData?: any[];
  cities?: string[];
  keywords?: string[];
  facts?: string[];
  templateSlug?: string;
}
import { industries } from '../industries';

export const services: Service[] = [
  {
    name: "Web Design",
    slug: "web-design",
    description: "Ready to wow your visitors and make your competitors jealous? Our web design turns pixels into profits, with sites so gorgeous even your mum will brag about them. Fast, responsive, and SEO-friendly—let’s make your brand the talk of the internet!",
    cityDescriptions: {
      manchester: ["Manchester: Want a website as bold as a Mancunian and twice as stylish? We’ll make your site the talk of the town—fast, fabulous, and ready to convert visitors into raving fans!"],
      liverpool: ["Liverpool: Your website will be as lively as the docks and as memorable as a Beatles chorus. Let’s make your brand sing online!"],
      leeds: ["Leeds: We design sites that work as hard as you do—smart, speedy, and ready to impress even the toughest Yorkshire critics!"],
      newcastle: ["Newcastle: Want a site that’s Geordie-proof and gorgeous? We’ll build you a digital castle that stands out on the Tyne!"],
      sheffield: ["Sheffield: From steel to pixels, we craft websites that are strong, shiny, and impossible to ignore. Get ready to wow your crowd!"],
    },
    industries: industries.map(i => i.slug),
    keywords: ["web design", "website design [city]", "responsive web design"],
    templateSlug: "web-design"
  },
  {
    name: "SEO Optimisation",
    slug: "seo-optimisation",
    description: "Want to be Google’s favourite? We sprinkle SEO magic so your site climbs the ranks faster than a cat chasing a laser pointer. From keywords to technical wizardry, we’ll help you get found, get clicked, and get paid!",
    cityDescriptions: {
      manchester: ["Manchester: We’ll get your site ranking higher than a football chant at Old Trafford. SEO so good, even Google will cheer!"],
      liverpool: ["Liverpool: Want to be top of the search charts? Our SEO will have your site climbing faster than a Scouser at Anfield!"],
      leeds: ["Leeds: SEO that’s as sharp as a Yorkshire wit—get found, get famous, get results!"],
      newcastle: ["Newcastle: We’ll put your site on the map—no fog on the Tyne, just clear search results!"],
      sheffield: ["Sheffield: SEO that’s tougher than steel and twice as shiny. Get ready to be seen!"],
    },
    industries: industries.map(i => i.slug),
    keywords: ["SEO", "SEO optimisation [city]", "search engine optimisation"],
    templateSlug: "seo-optimisation"
  },
  {
    name: "Content Marketing",
    slug: "content-marketing",
    description: "Words matter—especially ours! We craft content that’s so engaging, your audience will forget to scroll TikTok. Blogs, guides, and more, all designed to boost your brand, tickle your funny bone, and charm search engines.",
    cityDescriptions: {
      manchester: ["Manchester: Our content is so good, your audience will forget about the rain. Blogs, guides, and stories that make your brand shine!"],
      liverpool: ["Liverpool: Content that’s as catchy as a Merseybeat tune—get your message heard and your brand loved!"],
      leeds: ["Leeds: We write with Yorkshire charm and SEO smarts. Your brand will be the talk of the town!"],
      newcastle: ["Newcastle: Storytelling that’s as legendary as the local nightlife. Let’s get your brand buzzing!"],
      sheffield: ["Sheffield: Content that’s creative, clever, and built to last—just like the city itself!"],
    },
    industries: industries.map(i => i.slug),
    keywords: ["content marketing", "content marketing [city]", "blog writing"],
    templateSlug: "content-marketing"
  },
  {
    name: "Social Media Management",
    slug: "social-media-management",
    description: "Stop shouting into the void! We’ll make your socials sparkle, sizzle, and actually get noticed. From memes to meaningful moments, we grow your followers and keep your brand top-of-feed (and top-of-mind).",
    cityDescriptions: {
      manchester: ["Manchester: We’ll make your socials as lively as a night out on Deansgate. Memes, moments, and engagement galore!"],
      liverpool: ["Liverpool: Your brand will trend harder than a Beatles reunion. Let’s get you noticed and followed!"],
      leeds: ["Leeds: Social media that’s as friendly as a Yorkshire welcome and as smart as a Leeds grad!"],
      newcastle: ["Newcastle: We’ll get your brand buzzing like the Bigg Market on a Friday night!"],
      sheffield: ["Sheffield: Socials that sparkle, sizzle, and get shared—just like the city’s creative spirit!"],
    },
    industries: industries.map(i => i.slug),
    keywords: ["social media", "social media management [city]", "social media marketing"],
    templateSlug: "social-media-management"
  },
  {
    name: "PPC Advertising",
    slug: "ppc-advertising",
    description: "Why wait for traffic when you can buy it? Our PPC campaigns are so targeted, they could find a needle in a haystack. Get instant clicks, measurable ROI, and ads that make your competitors cry (in a good way).",
    cityDescriptions: {
      manchester: ["Manchester: Our PPC is faster than a tram to Piccadilly—get instant clicks and ROI that’ll make you smile!"],
      liverpool: ["Liverpool: Ads so good, your competitors will want to copy them. Get noticed, get leads, get growing!"],
      leeds: ["Leeds: PPC that’s as efficient as a Yorkshire tea break—quick, effective, and always satisfying!"],
      newcastle: ["Newcastle: We’ll get your ads seen by the right crowd—no Geordie confusion, just results!"],
      sheffield: ["Sheffield: PPC campaigns that work as hard as the city’s makers. Get ready for measurable success!"],
    },
    industries: industries.map(i => i.slug),
    keywords: ["PPC", "PPC advertising [city]", "pay-per-click"],
    templateSlug: "ppc-advertising"
  }
];
