import { industries } from '../industries';
import { getTitle, getMetaDescription } from '../templates/cities';
import { suburbDescriptionsByCity } from '../cities/suburbDescriptions';
import type { Industry } from '../industries';

// Service templates
export interface Service {
  name: string;
  slug: string;
  description: string;
  cityDescriptions?: { [citySlug: string]: string[] }; // optional city-specific descriptions, now supports multiple options
  industries?: string[]; // array of industry slugs
  industryData?: Industry[]; // array of full industry objects
  cities?: string[]; // array of city slugs (optional)
  keywords?: string[]; // array of keyword strings or slugs
  facts?: string[]; // array of fact strings or fact slugs
  templateSlug?: string; // slug for template reference
}

export const services: Service[] = [
  {
    name: "Copywriting",
    slug: "copywriting",
    description: "Persuade and inform with expertly crafted copy. We write website content, ads, emails, and more to help you communicate your message and drive action.",
      cityDescriptions: {
        manchester: [
            "Drive results in {city} with SEO-optimised copywriting for tech, retail, and creative businesses. Our Manchester writers craft website content, ads, and emails that convert visitors into customers.",
            "Boost your brand in {city} with persuasive copy for websites, landing pages, and social media. We help Manchester companies communicate clearly and drive action.",
            "Get expert copywriting in {city} for higher engagement and search rankings.",
            "Increase your conversions in {city} with tailored copywriting that speaks to Manchester’s diverse audience. We optimise your content for local search and brand impact.",
            "Stand out in {city} with creative, conversion-focused copywriting for Manchester businesses."
        ],
        liverpool: [
            "Grow your Liverpool business with compelling copywriting. We create website content and ads for local brands, helping you stand out from the waterfront to the city centre.",
            "Liverpool companies convert more leads with our SEO-friendly copywriting. Showcase your story and boost engagement in {city}.",
            "Capture attention in {city} with professional copywriting for websites, blogs, and campaigns.",
            "Increase your conversions in {city} with tailored copywriting that resonates with Liverpool’s vibrant market. We optimise your content for local search and brand impact.",
            "Stand out in {city} with creative, conversion-focused copywriting for Liverpool businesses."
        ],
        leeds: [
            "Elevate your Leeds brand with clear, persuasive copywriting. We write website content and marketing materials for Leeds businesses, driving conversions and online growth.",
            "Leeds companies communicate their message with expert copywriting for digital and print. Boost your results in {city}.",
            "Get SEO-optimised copywriting in {city} for better visibility and engagement.",
            "Increase your conversions in {city} with tailored copywriting that connects with Leeds’ dynamic audience. We optimise your content for local search and brand impact.",
            "Stand out in {city} with creative, conversion-focused copywriting for Leeds businesses."
        ],
        newcastle: [
            "Increase engagement in {city} with professional copywriting for websites, ads, and emails. We help Newcastle businesses connect with customers and grow online.",
            "Newcastle companies build trust and drive action with our expert copywriting. Stand out in {city} with clear, persuasive content.",
            "Get high-converting copywriting in {city} for your business.",
            "Increase your conversions in {city} with tailored copywriting that appeals to Newcastle’s energetic market. We optimise your content for local search and brand impact.",
            "Stand out in {city} with creative, conversion-focused copywriting for Newcastle businesses."
        ],
        sheffield: [
            "Boost your Sheffield business with persuasive copywriting for websites, blogs, and campaigns. We help local companies communicate their value and drive conversions in {city}.",
            "Sheffield brands stand out with SEO-friendly copywriting for digital and print. Increase your results in {city}.",
            "Get expert copywriting in {city} for higher engagement and sales.",
            "Increase your conversions in {city} with tailored copywriting that connects with Sheffield’s creative and industrial sectors. We optimise your content for local search and brand impact.",
            "Stand out in {city} with creative, conversion-focused copywriting for Sheffield businesses."
        ]
      },

    industries: industries.map(i => i.slug),
  industryData: industries,
    keywords: ["copywriting", "website copywriting [city]"],
    templateSlug: "copywriting"
  },
  {
    name: "Reputation Management",
    slug: "reputation-management",
    description: "Protect and enhance your brand’s reputation online. We monitor reviews, manage feedback, and implement strategies to build trust and credibility for your business.",
      cityDescriptions: {
        manchester: [
            "Build trust and credibility in {city} with our reputation management services. We monitor reviews, manage feedback, and implement strategies for Manchester businesses.",
            "Protect your brand online in {city} with expert reputation management tailored for Manchester’s competitive market.",
            "Boost your Manchester business’s credibility and customer trust with proactive reputation management.",
            "Increase your online reputation in {city} with review monitoring and feedback management for Manchester companies.",
            "Stand out in {city} with strategies that protect and enhance your Manchester brand’s reputation."
        ],
        liverpool: [
            "Protect your brand online in {city} with our reputation management expertise. We monitor reviews and manage feedback for Liverpool businesses.",
            "Build trust and credibility in {city} with proactive reputation management tailored for Liverpool’s vibrant market.",
            "Boost your Liverpool business’s reputation and customer trust with expert strategies.",
            "Increase your online reputation in {city} with review monitoring and feedback management for Liverpool companies.",
            "Stand out in {city} with strategies that protect and enhance your Liverpool brand’s reputation."
        ],
        leeds: [
            "Enhance credibility in {city} with proactive reputation management. We monitor reviews and manage feedback for Leeds businesses.",
            "Protect your brand online in {city} with expert reputation management tailored for Leeds’ dynamic market.",
            "Boost your Leeds business’s reputation and customer trust with proven strategies.",
            "Increase your online reputation in {city} with review monitoring and feedback management for Leeds companies.",
            "Stand out in {city} with strategies that protect and enhance your Leeds brand’s reputation."
        ],
        newcastle: [
            "Monitor reviews and manage feedback in {city} with our reputation management services. We help Newcastle businesses build trust and credibility online.",
            "Protect your brand online in {city} with expert reputation management tailored for Newcastle’s energetic market.",
            "Boost your Newcastle business’s reputation and customer trust with proactive strategies.",
            "Increase your online reputation in {city} with review monitoring and feedback management for Newcastle companies.",
            "Stand out in {city} with strategies that protect and enhance your Newcastle brand’s reputation."
        ],
        sheffield: [
            "Build trust and credibility online in {city} with our reputation management services. We monitor reviews and manage feedback for Sheffield businesses.",
            "Protect your brand online in {city} with expert reputation management tailored for Sheffield’s creative and industrial sectors.",
            "Boost your Sheffield business’s reputation and customer trust with proven strategies.",
            "Increase your online reputation in {city} with review monitoring and feedback management for Sheffield companies.",
            "Stand out in {city} with strategies that protect and enhance your Sheffield brand’s reputation."
        ]
      },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["reputation management", "online reputation management [city]"],
    templateSlug: "reputation-management"
  },
  {
    name: "Digital Strategy",
    slug: "digital-strategy",
    description: "Achieve your business goals with a clear digital strategy. We analyse your market, set objectives, and create actionable plans to help you succeed online.",
      cityDescriptions: {
        manchester: [
            "Succeed online in {city} with our digital strategy services. We analyse your market, set objectives, and create actionable plans for Manchester businesses.",
            "Achieve your goals in {city} with clear, measurable digital strategies tailored for Manchester’s competitive market.",
            "Boost your Manchester business with strategic planning and execution that drives results in {city}.",
            "Increase your ROI in {city} with digital strategies designed for Manchester companies.",
            "Stand out in {city} with actionable digital plans that deliver growth for Manchester brands."
        ],
        liverpool: [
            "Achieve your goals in {city} with clear digital strategies. We analyse your market and create actionable plans for Liverpool businesses.",
            "Grow your business in {city} with strategic planning and execution tailored for Liverpool’s vibrant market.",
            "Boost your Liverpool brand with measurable digital strategies that drive results in {city}.",
            "Increase your ROI in {city} with digital strategies designed for Liverpool companies.",
            "Stand out in {city} with actionable digital plans that deliver growth for Liverpool brands."
        ],
        leeds: [
            "Set objectives and create actionable plans in {city} with our digital strategy services. We help Leeds businesses grow online with clear, measurable strategies.",
            "Achieve your goals in {city} with strategic planning and execution tailored for Leeds’ dynamic market.",
            "Boost your Leeds brand with digital strategies that drive results in {city}.",
            "Increase your ROI in {city} with digital strategies designed for Leeds companies.",
            "Stand out in {city} with actionable digital plans that deliver growth for Leeds brands."
        ],
        newcastle: [
            "Analyse your market for online success in {city} with our digital strategy services. We help Newcastle businesses set objectives and create actionable plans.",
            "Grow your business in {city} with strategic planning and execution tailored for Newcastle’s energetic market.",
            "Boost your Newcastle brand with digital strategies that drive results in {city}.",
            "Increase your ROI in {city} with digital strategies designed for Newcastle companies.",
            "Stand out in {city} with actionable digital plans that deliver growth for Newcastle brands."
        ],
        sheffield: [
            "Achieve business goals in {city} with our digital strategy services. We help Sheffield companies set objectives and create actionable plans for growth.",
            "Achieve your goals in {city} with strategic planning and execution tailored for Sheffield’s creative and industrial sectors.",
            "Boost your Sheffield brand with digital strategies that drive results in {city}.",
            "Increase your ROI in {city} with digital strategies designed for Sheffield companies.",
            "Stand out in {city} with actionable digital plans that deliver growth for Sheffield brands."
        ]
      },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["digital strategy", "digital strategy agency [city]"],
    templateSlug: "digital-strategy"
  },
  {
    name: "Training & Workshops",
    slug: "training-workshops",
    description: "Empower your team with practical training and workshops. We offer sessions on digital marketing, web development, and more to help your staff stay ahead of the curve.",
      cityDescriptions: {
        manchester: [
            "Stay ahead in {city} with our training and workshops. We offer practical sessions for Manchester teams on digital marketing, web development, and more.",
            "Empower your staff in {city} with expert-led workshops tailored for Manchester’s competitive market.",
            "Boost your Manchester business with training that drives results and growth in {city}.",
            "Increase your team’s skills in {city} with hands-on workshops for Manchester companies.",
            "Stand out in {city} with professional development sessions that keep your Manchester staff ahead of the curve."
        ],
        liverpool: [
            "Empower your staff in {city} with practical training and workshops. We offer expert-led sessions for Liverpool companies on digital marketing, web development, and more.",
            "Upskill your team in {city} with workshops tailored for Liverpool’s vibrant market.",
            "Boost your Liverpool business with training that drives results and growth in {city}.",
            "Increase your team’s skills in {city} with hands-on workshops for Liverpool companies.",
            "Stand out in {city} with professional development sessions that keep your Liverpool staff ahead of the curve."
        ],
        leeds: [
            "Learn digital marketing and web development skills in {city} with our training and workshops. We offer practical sessions for Leeds brands and teams.",
            "Empower your staff in {city} with expert-led workshops tailored for Leeds’ dynamic market.",
            "Boost your Leeds business with training that drives results and growth in {city}.",
            "Increase your team’s skills in {city} with hands-on workshops for Leeds companies.",
            "Stand out in {city} with professional development sessions that keep your Leeds staff ahead of the curve."
        ],
        newcastle: [
            "Benefit from expert-led workshops in {city} with our training sessions. We offer practical development for Newcastle businesses and teams.",
            "Upskill your team in {city} with workshops tailored for Newcastle’s energetic market.",
            "Boost your Newcastle business with training that drives results and growth in {city}.",
            "Increase your team’s skills in {city} with hands-on workshops for Newcastle companies.",
            "Stand out in {city} with professional development sessions that keep your Newcastle staff ahead of the curve."
        ],
        sheffield: [
            "Upskill your teams in {city} with our training and workshops. We offer practical sessions for Sheffield companies on digital marketing, web development, and more.",
            "Empower your staff in {city} with expert-led workshops tailored for Sheffield’s creative and industrial sectors.",
            "Boost your Sheffield business with training that drives results and growth in {city}.",
            "Increase your team’s skills in {city} with hands-on workshops for Sheffield companies.",
            "Stand out in {city} with professional development sessions that keep your Sheffield staff ahead of the curve."
        ]
      },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["training", "workshops", "digital marketing training [city]"],
    templateSlug: "training-workshops"
  },
  {
    name: "Photography",
    slug: "photography",
    description: "Showcase your business with professional photography. We capture your products, team, and events to create stunning visuals that enhance your brand and attract customers.",
      cityDescriptions: {
        manchester: [
            "Attract customers in {city} with our professional photography. We capture products, team, and events for Manchester businesses, creating stunning visuals that enhance your brand.",
            "Showcase your brand in {city} with high-quality photography tailored for Manchester’s competitive market.",
            "Boost your Manchester business with images that drive engagement and sales in {city}.",
            "Increase your online presence in {city} with creative photography for Manchester companies.",
            "Stand out in {city} with visuals that build trust and attract customers for Manchester brands."
        ],
        liverpool: [
            "Showcase your brand in {city} with stunning visuals. We capture products, team, and events for Liverpool businesses, creating images that build trust and attract customers.",
            "Create lasting impressions in {city} with expert photography tailored for Liverpool’s vibrant market.",
            "Boost your Liverpool business with images that drive engagement and sales in {city}.",
            "Increase your online presence in {city} with creative photography for Liverpool companies.",
            "Stand out in {city} with visuals that build trust and attract customers for Liverpool brands."
        ],
        leeds: [
            "Enhance your image in {city} with expert photography. We capture products, team, and events for Leeds businesses, creating visuals that build trust and attract customers.",
            "Showcase your brand in {city} with high-quality photography tailored for Leeds’ dynamic market.",
            "Boost your Leeds business with images that drive engagement and sales in {city}.",
            "Increase your online presence in {city} with creative photography for Leeds companies.",
            "Stand out in {city} with visuals that build trust and attract customers for Leeds brands."
        ],
        newcastle: [
            "Capture products, team, and events in {city} with our professional photography. We help Newcastle businesses create lasting impressions and attract customers.",
            "Create lasting impressions in {city} with expert photography tailored for Newcastle’s energetic market.",
            "Boost your Newcastle business with images that drive engagement and sales in {city}.",
            "Increase your online presence in {city} with creative photography for Newcastle companies.",
            "Stand out in {city} with visuals that build trust and attract customers for Newcastle brands."
        ],
        sheffield: [
            "Create lasting impressions in {city} with professional photography. We capture products, team, and events for Sheffield businesses, creating visuals that build trust and attract customers.",
            "Showcase your brand in {city} with high-quality photography tailored for Sheffield’s creative and industrial sectors.",
            "Boost your Sheffield business with images that drive engagement and sales in {city}.",
            "Increase your online presence in {city} with creative photography for Sheffield companies.",
            "Stand out in {city} with visuals that build trust and attract customers for Sheffield brands."
        ]
      },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["photography", "business photography [city]"],
    templateSlug: "photography"
  },
  {
    name: "Branding",
    slug: "branding",
    description: "Build a memorable brand that stands out in your market. We help you define your identity, create a cohesive visual style, and communicate your values to attract loyal customers.",
      cityDescriptions: {
        manchester: [
            "Stand out in {city} with our expert branding services. We help Manchester businesses define their identity, create a cohesive visual style, and communicate values to attract loyal customers.",
            "Build a memorable brand in {city} with creative solutions tailored for Manchester’s competitive market.",
            "Boost your Manchester business with branding that drives engagement and loyalty in {city}.",
            "Increase your online presence in {city} with strong brand identity for Manchester companies.",
            "Attract loyal customers in {city} with branding that communicates your values and vision for Manchester brands."
        ],
        liverpool: [
            "Build memorable brands in {city} with our creative solutions. We help Liverpool companies define their identity and communicate values to attract loyal customers.",
            "Attract loyal customers in {city} with strong branding tailored for Liverpool’s vibrant market.",
            "Boost your Liverpool business with branding that drives engagement and loyalty in {city}.",
            "Increase your online presence in {city} with strong brand identity for Liverpool companies.",
            "Stand out in {city} with branding that communicates your values and vision for Liverpool brands."
        ],
        leeds: [
            "Attract loyal customers in {city} with our branding expertise. We help Leeds brands define their identity and communicate values to build loyalty.",
            "Build a memorable brand in {city} with creative solutions tailored for Leeds’ dynamic market.",
            "Boost your Leeds business with branding that drives engagement and loyalty in {city}.",
            "Increase your online presence in {city} with strong brand identity for Leeds companies.",
            "Stand out in {city} with branding that communicates your values and vision for Leeds brands."
        ],
        newcastle: [
            "Define your identity in {city} with our branding support. We help Newcastle businesses create a cohesive visual style and communicate values to attract loyal customers.",
            "Attract loyal customers in {city} with strong branding tailored for Newcastle’s energetic market.",
            "Boost your Newcastle business with branding that drives engagement and loyalty in {city}.",
            "Increase your online presence in {city} with strong brand identity for Newcastle companies.",
            "Stand out in {city} with branding that communicates your values and vision for Newcastle brands."
        ],
        sheffield: [
            "Communicate your values in {city} with strong branding. We help Sheffield companies define their identity and create a cohesive visual style to attract loyal customers.",
            "Build a memorable brand in {city} with creative solutions tailored for Sheffield’s creative and industrial sectors.",
            "Boost your Sheffield business with branding that drives engagement and loyalty in {city}.",
            "Increase your online presence in {city} with strong brand identity for Sheffield companies.",
            "Stand out in {city} with branding that communicates your values and vision for Sheffield brands."
        ]
      },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["branding", "brand identity", "branding agency [city]"],
    templateSlug: "branding"
  },
  {
    name: "Social Media Marketing",
    slug: "social-media-marketing",
    description: "Grow your audience and boost engagement with strategic social media marketing. We create compelling content, manage your profiles, and run targeted campaigns to help you connect with your community.",
    cityDescriptions: {
      manchester: [
    "Grow your audience in {city} with our social media marketing. We create compelling content, manage profiles, and run targeted campaigns for Manchester brands.",
    "Boost engagement in {city} with strategic social campaigns tailored for Manchester’s competitive market.",
    "Increase your online presence in {city} with social media strategies that connect you with your community.",
    "Drive results in {city} with creative content and targeted social media management for Manchester companies.",
    "Stand out in {city} with campaigns that build loyalty and engagement for Manchester brands."
      ],
      liverpool: [
    "Boost engagement in {city} with strategic social campaigns. We create compelling content and manage profiles for Liverpool companies.",
    "Connect with your community in {city} through social media strategies tailored for Liverpool’s vibrant market.",
    "Increase your online presence in {city} with creative content and targeted campaigns for Liverpool brands.",
    "Drive results in {city} with social media management that builds loyalty and engagement for Liverpool companies.",
    "Stand out in {city} with campaigns that connect you with your audience in Liverpool."
      ],
      leeds: [
    "Connect with your community in {city} through social media. We create compelling content and manage profiles for Leeds businesses.",
    "Boost engagement in {city} with strategic social campaigns tailored for Leeds’ dynamic market.",
    "Increase your online presence in {city} with creative content and targeted campaigns for Leeds brands.",
    "Drive results in {city} with social media management that builds loyalty and engagement for Leeds companies.",
    "Stand out in {city} with campaigns that connect you with your audience in Leeds."
      ],
      newcastle: [
    "Run targeted campaigns for maximum impact in {city} with our social media marketing. We create compelling content and manage profiles for Newcastle brands.",
    "Connect with your community in {city} through social media strategies tailored for Newcastle’s energetic market.",
    "Increase your online presence in {city} with creative content and targeted campaigns for Newcastle companies.",
    "Drive results in {city} with social media management that builds loyalty and engagement for Newcastle brands.",
    "Stand out in {city} with campaigns that connect you with your audience in Newcastle."
      ],
      sheffield: [
    "Manage profiles and create compelling content in {city} with our social media marketing. We run targeted campaigns for Sheffield companies.",
    "Boost engagement in {city} with strategic social campaigns tailored for Sheffield’s creative and industrial sectors.",
    "Increase your online presence in {city} with creative content and targeted campaigns for Sheffield brands.",
    "Drive results in {city} with social media management that builds loyalty and engagement for Sheffield companies.",
    "Stand out in {city} with campaigns that connect you with your audience in Sheffield."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["social media marketing", "social media management [city]"],
    templateSlug: "social-media-marketing"
  },
  {
    name: "Content Creation",
    slug: "content-creation",
    description: "Engage your audience with high-quality content tailored to your brand. We produce blogs, videos, graphics, and more to help you tell your story and drive results.",
    cityDescriptions: {
      manchester: [
    "Engage audiences in {city} with our content creation services. We produce blogs, videos, graphics, and more for Manchester businesses, helping you tell your story and drive results.",
    "Tell your story in {city} with high-quality content tailored for Manchester’s competitive market.",
    "Boost your Manchester brand with creative content that increases engagement and sales in {city}.",
    "Increase your online presence in {city} with content marketing for Manchester companies.",
    "Stand out in {city} with content that builds trust and drives measurable results for Manchester brands."
      ],
      liverpool: [
    "Tell your story in {city} with high-quality content. We produce blogs, videos, graphics, and more for Liverpool companies, helping you engage audiences and drive results.",
    "Drive results in {city} with tailored content creation for Liverpool’s vibrant market.",
    "Boost your Liverpool brand with creative content that increases engagement and sales in {city}.",
    "Increase your online presence in {city} with content marketing for Liverpool companies.",
    "Stand out in {city} with content that builds trust and drives measurable results for Liverpool brands."
      ],
      leeds: [
    "Drive results in {city} with tailored content creation. We produce blogs, videos, graphics, and more for Leeds brands, helping you engage audiences and grow online.",
    "Tell your story in {city} with high-quality content tailored for Leeds’ dynamic market.",
    "Boost your Leeds brand with creative content that increases engagement and sales in {city}.",
    "Increase your online presence in {city} with content marketing for Leeds companies.",
    "Stand out in {city} with content that builds trust and drives measurable results for Leeds brands."
      ],
      newcastle: [
    "Produce blogs, videos, and graphics for your audience in {city} with our content creation services. We help Newcastle businesses engage audiences and drive results.",
    "Drive results in {city} with tailored content creation for Newcastle’s energetic market.",
    "Boost your Newcastle brand with creative content that increases engagement and sales in {city}.",
    "Increase your online presence in {city} with content marketing for Newcastle companies.",
    "Stand out in {city} with content that builds trust and drives measurable results for Newcastle brands."
      ],
      sheffield: [
    "Build trust with engaging content in {city}. We produce blogs, videos, graphics, and more for Sheffield companies, helping you tell your story and drive results.",
    "Tell your story in {city} with high-quality content tailored for Sheffield’s creative and industrial sectors.",
    "Boost your Sheffield brand with creative content that increases engagement and sales in {city}.",
    "Increase your online presence in {city} with content marketing for Sheffield companies.",
    "Stand out in {city} with content that builds trust and drives measurable results for Sheffield brands."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["content creation", "content marketing [city]"],
    templateSlug: "content-creation"
  },
  {
    name: "Analytics & Reporting",
    slug: "analytics-reporting",
    description: "Make informed decisions with our analytics and reporting services. We track key metrics, provide actionable insights, and help you measure the success of your digital marketing efforts.",
    cityDescriptions: {
      manchester: [
        "Make data-driven decisions in {city} with our analytics and reporting services. We track key metrics for Manchester businesses, providing actionable insights to help you grow and improve.",
        "Manchester companies boost performance with detailed analytics and clear reporting tailored for the city’s competitive market.",
        "Increase your ROI in {city} with custom analytics solutions that measure success and drive results for Manchester brands.",
        "Grow your Manchester business with transparent, actionable analytics and reporting."
      ],
      liverpool: [
        "Track performance and growth in {city} with our analytics solutions. We provide clear insights for Liverpool businesses, helping you measure success and improve results.",
        "Liverpool companies boost ROI with custom analytics and reporting tailored for the city’s vibrant market.",
        "Increase your sales and leads in {city} with actionable analytics for Liverpool brands.",
        "Grow your Liverpool business with transparent, data-driven reporting."
      ],
      leeds: [
        "Gain insights and improve in {city} with our reporting services. We track key metrics for Leeds businesses, providing actionable analytics to help you grow and succeed.",
        "Leeds companies boost performance with custom analytics and reporting tailored for the city’s thriving market.",
        "Increase your ROI in {city} with detailed analytics for Leeds brands.",
        "Grow your Leeds business with transparent, actionable reporting."
      ],
      newcastle: [
        "Optimise your marketing in {city} with our analytics expertise. We provide clear insights for Newcastle businesses, helping you measure success and improve results.",
        "Newcastle companies boost ROI with custom analytics and reporting tailored for the city’s energetic market.",
        "Increase your sales and leads in {city} with actionable analytics for Newcastle brands.",
        "Grow your Newcastle business with transparent, data-driven reporting."
      ],
      sheffield: [
        "Grow your business in {city} with clear, actionable analytics and reporting. We track key metrics for Sheffield companies, providing insights to help you improve performance and results.",
        "Sheffield brands boost ROI with custom analytics and reporting tailored for the city’s creative and industrial sectors.",
        "Increase your sales and leads in {city} with detailed analytics for Sheffield businesses.",
        "Grow your Sheffield business with transparent, actionable reporting."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["analytics and reporting", "digital marketing analytics [city]"],
    templateSlug: "analytics-reporting"
  },
  {
    name: "IT Support",
    slug: "it-support",
    description: "Keep your business running smoothly with reliable IT support. We offer troubleshooting, system maintenance, and proactive solutions to minimise downtime and keep your technology working for you.",
    cityDescriptions: {
      manchester: [
        "Minimise downtime in {city} with our reliable IT support. We offer troubleshooting, system maintenance, and proactive solutions for Manchester businesses, keeping your technology running smoothly.",
        "Manchester companies stay productive with expert IT support tailored for the city’s competitive market.",
        "Keep your technology working in {city} with proactive IT solutions for Manchester brands.",
        "Grow your Manchester business with secure, efficient IT support and maintenance.",
        "Boost your Manchester brand’s reliability with fast, friendly IT support and ongoing maintenance in {city}."
      ],
      liverpool: [
        "Keep technology working in {city} with proactive IT solutions. We offer troubleshooting and system maintenance for Liverpool businesses, helping you run smoothly and minimise downtime.",
        "Liverpool companies stay productive with expert IT support tailored for the city’s vibrant market.",
        "Run smoothly in {city} with secure, efficient IT support for Liverpool brands.",
        "Grow your Liverpool business with proactive IT solutions and maintenance.",
        "Boost your Liverpool brand’s reliability with fast, friendly IT support and ongoing maintenance in {city}."
      ],
      leeds: [
        "Run smoothly in {city} with expert IT support. We offer troubleshooting, system maintenance, and proactive solutions for Leeds businesses, keeping your technology running efficiently.",
        "Leeds companies stay productive with secure, efficient IT support tailored for the city’s thriving market.",
        "Keep your technology working in {city} with proactive IT solutions for Leeds brands.",
        "Grow your Leeds business with reliable IT support and maintenance.",
        "Boost your Leeds brand’s reliability with fast, friendly IT support and ongoing maintenance in {city}."
      ],
      newcastle: [
        "Get troubleshooting and system maintenance in {city} with our expert IT support. We help Newcastle businesses run smoothly and minimise downtime.",
        "Newcastle companies stay productive with secure, efficient IT support tailored for the city’s energetic market.",
        "Run smoothly in {city} with proactive IT solutions for Newcastle brands.",
        "Grow your Newcastle business with reliable IT support and maintenance.",
        "Boost your Newcastle brand’s reliability with fast, friendly IT support and ongoing maintenance in {city}."
      ],
      sheffield: [
        "Rely on us for proactive IT support in {city}. We offer troubleshooting, system maintenance, and proactive solutions for Sheffield businesses, keeping your technology running smoothly.",
        "Sheffield companies stay productive with secure, efficient IT support tailored for the city’s creative and industrial sectors.",
        "Keep your technology working in {city} with proactive IT solutions for Sheffield brands.",
        "Grow your Sheffield business with reliable IT support and maintenance.",
        "Boost your Sheffield brand’s reliability with fast, friendly IT support and ongoing maintenance in {city}."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["it support", "business it support [city]"],
    templateSlug: "it-support"
  },
  {
    name: "Email Marketing",
    slug: "email-marketing",
    description: "Connect with your customers and grow your business through targeted email marketing. We design engaging campaigns, automate follow-ups, and track results to help you build lasting relationships and boost sales.",
    cityDescriptions: {
      manchester: [
        "{city} businesses nurture leads and boost sales with our email marketing.",
        "Build lasting relationships in {city} through targeted email campaigns."
      ],
      liverpool: [
        "{city} companies build lasting relationships through targeted email campaigns.",
        "Engage customers and grow in {city} with our email marketing solutions."
      ],
      leeds: [
        "{city} brands engage customers and grow with our email marketing solutions.",
        "Build lasting relationships in {city} through targeted email campaigns."
      ],
      newcastle: [
        "{city} businesses automate follow-ups and drive results with our email marketing.",
        "Engage customers and grow in {city} with our email marketing solutions."
      ],
      sheffield: [
        "{city} companies connect with their audience through effective email campaigns.",
        "Build lasting relationships in {city} through targeted email campaigns."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["email marketing", "email marketing campaigns", "targeted email marketing"],
    templateSlug: "email-marketing"
  },
  {
    name: "Video Production",
    slug: "video-production",
    description: "Tell your story with professional video production that captivates your audience. From promotional videos to tutorials, we create high-quality content that builds trust, increases engagement, and drives results for your brand.",
    cityDescriptions: {
      manchester: [
        "{city} brands captivate audiences with our professional video production.",
        "Build trust and engagement in {city} through high-quality video content."
      ],
      liverpool: [
        "{city} companies build trust and engagement through high-quality video content.",
        "Tell your story in {city} with creative video production."
      ],
      leeds: [
        "{city} businesses tell their story with creative video production.",
        "Build trust and engagement in {city} through high-quality video content."
      ],
      newcastle: [
        "{city} brands increase engagement with our expert video services.",
        "Tell your story in {city} with creative video production."
      ],
      sheffield: [
        "{city} companies drive results with compelling video production.",
        "Build trust and engagement in {city} through high-quality video content."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["video production"],
    templateSlug: "video-production"
  },
  {
    name: "Conversion Rate Optimisation",
    slug: "conversion-rate-optimisation",
    description: "Turn more visitors into customers with our conversion rate optimisation services. We analyse your site, test improvements, and implement proven strategies to boost your sales and grow your business online.",
    cityDescriptions: {
      manchester: [
        "{city} businesses boost sales with our conversion rate optimisation.",
        "Turn visitors into customers in {city} with proven CRO strategies."
      ],
      liverpool: [
        "{city} companies turn visitors into customers with proven CRO strategies.",
        "Grow online in {city} with expert conversion rate optimisation."
      ],
      leeds: [
        "{city} brands grow online with expert conversion rate optimisation.",
        "Turn visitors into customers in {city} with proven CRO strategies."
      ],
      newcastle: [
        "{city} businesses increase conversions with our tailored CRO solutions.",
        "Grow online in {city} with expert conversion rate optimisation."
      ],
      sheffield: [
        "{city} companies improve online performance with our CRO expertise.",
        "Turn visitors into customers in {city} with proven CRO strategies."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["conversion rate optimisation", "conversion rate optimisation experts [city]"],
    templateSlug: "conversion-rate-optimisation"
  },
  {
    name: "UX/UI Design",
    slug: "ux-ui-design",
    description: "Delight your users with intuitive, visually appealing UX/UI design. We focus on usability, accessibility, and brand consistency to create digital experiences that keep visitors coming back.",
    cityDescriptions: {
      manchester: [
        "{city} brands impress users with our intuitive UX/UI design.",
        "Create memorable digital experiences in {city} with our design expertise."
      ],
      liverpool: [
        "{city} companies create memorable digital experiences with our design expertise.",
        "Keep visitors coming back in {city} with beautiful UX/UI design."
      ],
      leeds: [
        "{city} businesses keep visitors coming back with beautiful UX/UI design.",
        "Create memorable digital experiences in {city} with our design expertise."
      ],
      newcastle: [
        "{city} brands focus on usability and accessibility with our design solutions.",
        "Keep visitors coming back in {city} with beautiful UX/UI design."
      ],
      sheffield: [
        "{city} companies build loyalty with visually appealing UX/UI design.",
        "Create memorable digital experiences in {city} with our design expertise."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["ux ui design"],
    templateSlug: "ux-ui-design"
  },
  {
    name: "Hosting & Maintenance",
    slug: "hosting-maintenance",
    description: "Keep your website running smoothly with reliable hosting and proactive maintenance. We handle updates, backups, and security so you can focus on your business, knowing your site is in safe hands.",
    cityDescriptions: {
      manchester: [
    "Keep your website secure and running smoothly in {city} with our expert hosting and maintenance. We provide reliable updates, backups, and support for Manchester businesses, ensuring peace of mind.",
    "Manchester companies enjoy proactive website maintenance and fast, secure hosting tailored for the city’s competitive market. Focus on growth while we handle the tech in {city}.",
    "Boost your Manchester brand’s online performance with managed hosting and regular updates. Our team keeps your site safe, optimised, and ready for success in {city}.",
    "Stay ahead in {city} with hosting and maintenance solutions designed for Manchester’s business landscape."
      ],
      liverpool: [
    "Keep your site secure and updated in {city} with our hosting and maintenance services. We provide reliable support and proactive updates for Liverpool businesses, ensuring smooth performance.",
    "Liverpool companies enjoy fast, secure hosting and regular maintenance tailored for the city’s vibrant market. Focus on your business while we handle the tech in {city}.",
    "Boost your Liverpool brand’s online presence with managed hosting and expert maintenance. Our team keeps your site safe, optimised, and ready for success in {city}.",
    "Stay ahead in {city} with hosting and maintenance solutions designed for Liverpool’s business landscape."
      ],
      leeds: [
    "Enjoy smooth website performance in {city} with our hosting and maintenance expertise. We provide fast, secure hosting and proactive updates for Leeds businesses, ensuring reliability.",
    "Leeds companies keep their sites secure and updated with managed hosting and regular maintenance tailored for the city’s thriving market. Focus on growth while we handle the tech in {city}.",
    "Boost your Leeds business’s online reliability with expert hosting and maintenance. Our team keeps your site safe, optimised, and ready for success in {city}.",
    "Stay ahead in {city} with hosting and maintenance solutions designed for Leeds companies."
      ],
      newcastle: [
    "Trust us for reliable hosting and proactive support in {city}. We provide fast, secure hosting and regular updates for Newcastle businesses, ensuring smooth performance.",
    "Newcastle companies enjoy managed hosting and expert maintenance tailored for the city’s energetic market. Focus on your business while we handle the tech in {city}.",
    "Boost your Newcastle brand’s online presence with hosting and maintenance that keeps your site safe, optimised, and ready for success in {city}.",
    "Stay ahead in {city} with hosting and maintenance solutions designed for Newcastle’s business landscape."
      ],
      sheffield: [
    "Focus on growth in {city} while we handle your website maintenance. We provide fast, secure hosting and proactive updates for Sheffield businesses, ensuring reliability.",
    "Sheffield companies keep their sites secure and updated with managed hosting and expert maintenance tailored for the city’s creative and industrial sectors. Focus on your business while we handle the tech in {city}.",
    "Boost your Sheffield brand’s online reliability with hosting and maintenance that keeps your site safe, optimised, and ready for success in {city}.",
    "Stay ahead in {city} with hosting and maintenance solutions designed for Sheffield’s business landscape."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["hosting and maintenance", "website maintenance and support [city]", "ongoing website maintenance"],
    templateSlug: "hosting-maintenance"
  },
  {
    name: "Ecommerce Solutions",
    slug: "ecommerce-solutions",
    description: "Sell online with confidence using our ecommerce solutions. We create custom, easy-to-manage online stores that convert visitors into loyal customers. From product listings to secure payments, we handle every detail so you can focus on growing your business.",
    cityDescriptions: {
      manchester: [
    "Succeed online in {city} with our ecommerce solutions. We build secure, user-friendly stores for Manchester’s competitive market, helping you reach more customers and grow sales.",
    "Boost your Manchester business with custom ecommerce platforms designed for local SEO and conversion. Our team helps you attract loyal customers in {city}.",
    "Sell smarter in {city} with our ecommerce expertise. We optimise your online shop for visibility and sales in Manchester.",
    "Expand your reach in {city} with scalable ecommerce solutions tailored for Manchester retailers."
      ],
      liverpool: [
    "Sell smarter in {city} with our ecommerce expertise. We create engaging online shops for Liverpool’s vibrant market, supporting growth from the city centre to the docks.",
    "Boost your Liverpool business with custom ecommerce platforms designed for local SEO and conversion. Our team helps you attract loyal customers in {city}.",
    "Expand online in {city} with our ecommerce platforms. We optimise your shop for visibility and sales in Liverpool.",
    "Grow your Liverpool brand with scalable ecommerce solutions tailored for local retailers."
      ],
      leeds: [
    "Expand online in {city} with our ecommerce platforms. We deliver custom solutions for Leeds retailers, driving conversions and customer loyalty.",
    "Boost your Leeds business with custom ecommerce platforms designed for local SEO and conversion. Our team helps you attract loyal customers in {city}.",
    "Sell smarter in {city} with our ecommerce expertise. We optimise your online shop for visibility and sales in Leeds.",
    "Grow your Leeds brand with scalable ecommerce solutions tailored for local retailers."
      ],
      newcastle: [
    "Online sellers in {city} thrive with our ecommerce solutions. We build scalable, secure stores for Newcastle’s diverse business community.",
    "Boost your Newcastle business with custom ecommerce platforms designed for local SEO and conversion. Our team helps you attract loyal customers in {city}.",
    "Expand online in {city} with our ecommerce platforms. We optimise your shop for visibility and sales in Newcastle.",
    "Grow your Newcastle brand with scalable ecommerce solutions tailored for local retailers."
      ],
      sheffield: [
    "Retailers in {city} grow with our ecommerce expertise. We create easy-to-manage online shops for Sheffield’s creative and industrial sectors.",
    "Boost your Sheffield business with custom ecommerce platforms designed for local SEO and conversion. Our team helps you attract loyal customers in {city}.",
    "Sell smarter in {city} with our ecommerce expertise. We optimise your online shop for visibility and sales in Sheffield.",
    "Expand your reach in {city} with scalable ecommerce solutions tailored for Sheffield retailers."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["ecommerce solutions", "custom ecommerce website development [city]"],
    templateSlug: "ecommerce-solutions"
  },
  {
    name: "App Development",
    slug: "app-development",
    description: "Engage your audience with powerful mobile and web apps built for your business. Our app development team delivers intuitive, feature-rich solutions that work seamlessly across devices. We make it easy to launch, update, and scale your app for long-term success.",
    cityDescriptions: {
      manchester: [
  "Launch innovative apps in {city} with our award-winning development team. We build mobile and web apps for Manchester’s tech, retail, and creative sectors, helping you reach new customers and drive growth.",
  "Engage your audience in {city} with custom app solutions designed for Manchester’s dynamic business scene. From startups to established brands, we deliver feature-rich apps that scale with your needs.",
  "Boost your Manchester business with intuitive, user-friendly apps. Our team creates mobile and web applications that improve customer experience and increase conversions in {city}.",
  "Stay ahead in {city} with scalable app development tailored for Manchester companies. We help you launch, update, and grow your app for long-term success."
      ],
      liverpool: [
  "Grow your Liverpool business with custom app development. We create mobile and web apps for local brands, helping you connect with customers from the waterfront to the city centre.",
  "Liverpool companies engage audiences with intuitive app solutions. Our team builds feature-rich applications that drive engagement and sales in {city}.",
  "Boost your Liverpool brand with scalable, user-friendly apps. We help you launch and grow your app for lasting success in {city}.",
  "Expand your reach in {city} with app development tailored for Liverpool’s vibrant market."
      ],
      leeds: [
  "Drive growth in {city} with custom app development for Leeds businesses. We build mobile and web apps that improve customer experience and boost conversions.",
  "Leeds companies engage audiences with intuitive, scalable apps. Our team delivers feature-rich solutions for the city’s thriving digital sector.",
  "Boost your Leeds brand with mobile and web applications designed for local success in {city}.",
  "Expand your business in {city} with app development tailored for Leeds companies."
      ],
      newcastle: [
  "Reach new audiences in {city} with expert app development. We create mobile and web apps for Newcastle’s energetic business community, helping you stand out and grow online.",
  "Newcastle companies boost engagement with custom app solutions. Our team builds scalable applications that drive results in {city}.",
  "Grow your Newcastle brand with intuitive, user-friendly apps designed for local success in {city}.",
  "Expand your business in {city} with app development tailored for Newcastle’s market."
      ],
      sheffield: [
  "Grow your Sheffield business with scalable app development. We create mobile and web apps for creative and industrial sectors, helping you reach new customers in {city}.",
  "Sheffield companies engage audiences with intuitive, feature-rich apps. Our team delivers solutions that drive engagement and sales in {city}.",
  "Boost your Sheffield brand with custom app solutions designed for local success in {city}.",
  "Expand your reach in {city} with app development tailored for Sheffield’s market."
      ],
      preston: [
  "Streamline operations in {city} with custom app development for Preston businesses. We build mobile and web apps that connect you with users and drive growth.",
  "Preston companies boost engagement with intuitive, scalable apps. Our team delivers feature-rich solutions for the city’s diverse market.",
  "Grow your Preston brand with mobile and web applications designed for local success in {city}.",
  "Expand your business in {city} with app development tailored for Preston companies."
      ],
      wigan: [
  "Boost engagement and growth in {city} with custom app development for Wigan companies. We create mobile and web apps that improve customer experience and drive results.",
  "Wigan businesses connect with users through intuitive, scalable apps. Our team delivers feature-rich solutions for the local market in {city}.",
  "Grow your Wigan brand with mobile and web applications designed for success in {city}.",
  "Expand your business in {city} with app development tailored for Wigan companies."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["app development", "mobile app development for businesses [city]"],
    templateSlug: "app-development"
  },
  {
    name: "PPC Advertising",
    slug: "ppc",
    description: "Drive instant traffic and leads with targeted PPC advertising campaigns. We manage your ads across Google, Bing, and social platforms, optimising for maximum ROI. Our transparent approach means you see results and understand every step of your campaign.",
    cityDescriptions: {
      manchester: [
  "Get instant results in {city} with our targeted PPC campaigns. We manage Google, Bing, and social ads for Manchester businesses, driving traffic and qualified leads.",
  "Boost your Manchester brand with expert PPC management. Our team optimises your ads for maximum ROI and conversion in {city}.",
  "Drive more sales in {city} with data-driven PPC strategies tailored for Manchester’s competitive market.",
  "Increase visibility and leads in {city} with transparent, effective PPC advertising for Manchester companies."
      ],
      liverpool: [
  "Drive traffic and leads in {city} with our PPC expertise. We manage Google, Bing, and social ads for Liverpool businesses, helping you reach new customers and grow sales.",
  "Liverpool companies maximise ROI with expert PPC management. Our team optimises your campaigns for conversion and visibility in {city}.",
  "Boost your Liverpool brand with transparent, results-driven PPC advertising tailored for the local market.",
  "Increase online sales in {city} with targeted PPC strategies for Liverpool companies."
      ],
      leeds: [
  "Maximise ROI in {city} with our expert PPC management. We run Google, Bing, and social ads for Leeds businesses, driving traffic and conversions.",
  "Leeds companies boost sales with targeted PPC advertising tailored for the city’s dynamic market.",
  "Increase visibility and leads in {city} with data-driven PPC strategies for Leeds brands.",
  "Grow your Leeds business online with transparent, effective PPC campaigns."
      ],
      newcastle: [
  "Grow online in {city} with our PPC strategies. We manage Google, Bing, and social ads for Newcastle businesses, helping you reach new customers and boost sales.",
  "Newcastle companies maximise ROI with expert PPC management tailored for the local market in {city}.",
  "Increase traffic and conversions in {city} with targeted PPC advertising for Newcastle brands.",
  "Boost your Newcastle business with transparent, results-driven PPC campaigns."
      ],
      sheffield: [
  "Reach new customers in {city} with our PPC expertise. We manage Google, Bing, and social ads for Sheffield businesses, driving traffic and qualified leads.",
  "Sheffield companies boost sales with targeted PPC advertising tailored for the city’s creative and industrial sectors.",
  "Increase visibility and conversions in {city} with expert PPC management for Sheffield brands.",
  "Grow your Sheffield business online with transparent, effective PPC campaigns."
      ],
      preston: [
  "Boost sales and visibility in {city} with our PPC solutions. We manage Google, Bing, and social ads for Preston businesses, helping you reach new customers and grow online.",
  "Preston companies maximise ROI with expert PPC management tailored for the local market in {city}.",
  "Increase traffic and conversions in {city} with targeted PPC advertising for Preston brands.",
  "Grow your Preston business online with transparent, results-driven PPC campaigns."
      ],
      wigan: [
  "Benefit from transparent, effective PPC campaigns in {city}. We manage Google, Bing, and social ads for Wigan companies, driving traffic and qualified leads.",
  "Wigan businesses boost sales with targeted PPC advertising tailored for the local market in {city}.",
  "Increase visibility and conversions in {city} with expert PPC management for Wigan brands.",
  "Grow your Wigan business online with data-driven PPC strategies."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["ppc advertising", "ppc management [city]", "expert ppc management [city]"],
    templateSlug: "ppc"
  },
  {
    name: "SEO",
    slug: "seo",
    description: "Boost your online visibility and attract more customers with our friendly, expert SEO services. We use proven strategies, local targeting, and technical know-how to help your business climb the search rankings and stand out in your area. Let Kreative Kommit optimise your website for lasting results and growth.",
  cityDescriptions: {
    manchester: [
    "Boost your online visibility in {city} with our award-winning SEO services. We leverage Manchester’s tech scene and local search trends to help you rank higher and attract more customers.",
    "Manchester businesses grow online with tailored SEO strategies. Our team optimises your site for local search, driving traffic and conversions in {city}.",
    "Stand out in {city} with technical SEO and content optimisation designed for Manchester’s competitive market.",
    "Increase your sales and leads in {city} with proven SEO techniques that deliver lasting results for Manchester companies."
    ],
    liverpool: [
    "Grow your Liverpool business online with expert SEO. We tailor our strategies to Liverpool’s vibrant market, helping you reach more customers from the waterfront to the city centre.",
    "Liverpool companies boost visibility and sales with local SEO. Our team optimises your site for search, driving traffic and conversions in {city}.",
    "Stand out in {city} with technical SEO and content optimisation designed for Liverpool brands.",
    "Increase your leads and online presence in {city} with proven SEO techniques for Liverpool businesses."
    ],
    leeds: [
    "Boost your Leeds business online with expert SEO. We help Leeds companies connect with local customers and stand out in the city’s thriving digital landscape.",
    "Leeds brands grow with tailored SEO strategies. Our team optimises your site for local search, driving traffic and conversions in {city}.",
    "Stand out in {city} with technical SEO and content optimisation designed for Leeds companies.",
    "Increase your leads and online presence in {city} with proven SEO techniques for Leeds businesses."
    ],
    newcastle: [
    "Grow your Newcastle business online with targeted SEO strategies. We help Newcastle brands reach more customers, from the Quayside to Jesmond, with local search optimisation.",
    "Newcastle companies boost visibility and sales with expert SEO. Our team optimises your site for search, driving traffic and conversions in {city}.",
    "Stand out in {city} with technical SEO and content optimisation designed for Newcastle’s market.",
    "Increase your leads and online presence in {city} with proven SEO techniques for Newcastle businesses."
    ],
    sheffield: [
    "Boost your Sheffield business online with expert SEO. We optimise your site to attract customers across the Steel City, from Kelham Island to Ecclesall Road.",
    "Sheffield companies grow with tailored SEO strategies. Our team optimises your site for local search, driving traffic and conversions in {city}.",
    "Stand out in {city} with technical SEO and content optimisation designed for Sheffield’s creative and industrial sectors.",
    "Increase your leads and online presence in {city} with proven SEO techniques for Sheffield businesses."
    ]
  },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["seo services", "local seo", "technical seo", "award-winning seo company [city]"],
    facts: ["SEO (Search Engine Optimization) increases website visibility and organic traffic.", "Effective SEO strategies can improve Google rankings for local businesses.", "SEO includes on-page, off-page, and technical optimizations."],
    templateSlug: "seo"
  },
  {
    name: "Web Design",
    slug: "web-design",
    description: "Create a stunning first impression with a custom website designed for your brand. Our web design team crafts beautiful, user-friendly sites that engage visitors and drive conversions. We focus on responsive layouts, fast performance, and SEO best practices to help your business shine online.",
    cityDescriptions: {
      manchester: [
    "Stand out in {city} with bespoke web design that reflects Manchester’s energy and innovation. We create visually striking, user-friendly sites that engage customers and drive conversions.",
    "Manchester businesses grow online with creative web design. Our team builds responsive, SEO-optimised websites for local brands in {city}.",
    "Boost your Manchester brand with custom web design tailored for the city’s competitive market. We help you attract and convert more visitors in {city}.",
    "Engage your audience in {city} with modern, high-performing web design that delivers results for Manchester companies."
      ],
      liverpool: [
    "Grow your Liverpool business with creative web design that captures the city’s spirit. We build engaging, responsive websites for local brands in {city}.",
    "Liverpool companies boost online presence with custom web design tailored for the city’s vibrant market. Our team helps you attract and convert more visitors in {city}.",
    "Stand out in {city} with modern, SEO-optimised web design for Liverpool businesses.",
    "Engage your audience in {city} with high-performing web design that delivers results for Liverpool companies."
      ],
      leeds: [
    "Boost your Leeds business with web design as dynamic as the city itself. We deliver modern, high-performing websites for local brands in {city}.",
    "Leeds companies grow online with custom web design tailored for the city’s thriving market. Our team helps you attract and convert more visitors in {city}.",
    "Stand out in {city} with responsive, SEO-optimised web design for Leeds businesses.",
    "Engage your audience in {city} with creative web design that delivers results for Leeds companies."
      ],
      newcastle: [
    "Grow your Newcastle business with web design that impresses. We craft custom websites for local brands in {city}, optimised for local audiences and digital growth.",
    "Newcastle companies boost online presence with modern, SEO-optimised web design tailored for the city’s vibrant market.",
    "Stand out in {city} with responsive, high-performing web design for Newcastle businesses.",
    "Engage your audience in {city} with creative web design that delivers results for Newcastle companies."
      ],
      sheffield: [
    "Boost your Sheffield business with tailored web design. We build fast, secure, and visually appealing sites for local brands in {city}.",
    "Sheffield companies grow online with custom web design for the city’s creative and industrial sectors. Our team helps you attract and convert more visitors in {city}.",
    "Stand out in {city} with modern, SEO-optimised web design for Sheffield businesses.",
    "Engage your audience in {city} with high-performing web design that delivers results for Sheffield companies."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["web design", "website design", "responsive website design specialists [city]", "web designer near me"],
    facts: ["Professional web design enhances user experience and builds brand trust.", "Responsive web design ensures your site looks great on all devices.", "Modern web design uses fast, secure, and SEO-friendly technologies."],
    templateSlug: "web-design"
  },
  {
    name: "Web Development",
    slug: "web-development",
    description: "Unlock your business potential with custom web development from Kreative Kommit. We build fast, secure, and scalable websites tailored to your goals. Our friendly team uses the latest technologies to deliver high-performance solutions that grow with your business and impress your customers.",
    cityDescriptions: {
      manchester: [
    "Grow your business in {city} with advanced web development. We deliver robust, scalable solutions for Manchester’s tech-driven market, helping you stay ahead online.",
    "Manchester companies unlock their potential with custom web development. Our team builds fast, secure, and scalable websites for local brands in {city}.",
    "Boost your Manchester brand with high-performance web development tailored for the city’s competitive market.",
    "Increase sales and leads in {city} with modern web development that delivers results for Manchester businesses."
      ],
      liverpool: [
    "Grow your Liverpool business with secure, high-performing web development. We support local brands with tailored digital solutions in {city}.",
    "Liverpool companies unlock their potential with custom web development for the city’s creative and commercial sectors.",
    "Boost your Liverpool brand with scalable web development designed for the local market in {city}.",
    "Increase sales and leads in {city} with modern web development that delivers results for Liverpool businesses."
      ],
      leeds: [
    "Boost your Leeds business with innovative web development. We build custom platforms for local brands in {city}, driving efficiency and online success.",
    "Leeds companies unlock their potential with scalable web development tailored for the city’s thriving market.",
    "Grow your Leeds brand with high-performance web development designed for local success in {city}.",
    "Increase sales and leads in {city} with modern web development that delivers results for Leeds businesses."
      ],
      newcastle: [
    "Grow your Newcastle business with reliable web development. We create scalable websites for local brands in {city}, supporting digital growth.",
    "Newcastle companies unlock their potential with custom web development tailored for the city’s evolving business landscape.",
    "Boost your Newcastle brand with high-performance web development designed for local success in {city}.",
    "Increase sales and leads in {city} with modern web development that delivers results for Newcastle businesses."
      ],
      sheffield: [
    "Boost your Sheffield business with secure, scalable web development. We support local brands with expert digital solutions in {city}.",
    "Sheffield companies unlock their potential with custom web development for the city’s creative and industrial sectors.",
    "Grow your Sheffield brand with high-performance web development designed for local success in {city}.",
    "Increase sales and leads in {city} with modern web development that delivers results for Sheffield businesses."
      ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["web development"],
    templateSlug: "web-development"
  },
  {
    name: "Ecommerce Solutions",
    slug: "ecommerce-solutions",
    description: "Sell online with confidence using our ecommerce solutions. We create custom, easy-to-manage online stores that convert visitors into loyal customers. From product listings to secure payments, we handle every detail so you can focus on growing your business.",
    cityDescriptions: {
      manchester: [
        "Succeed online in {city} with our ecommerce solutions. We build secure, user-friendly stores for Manchester’s competitive market, helping you reach more customers and grow sales.",
        "Boost your Manchester business with custom ecommerce platforms designed for local SEO and conversion. Our team helps you attract loyal customers in {city}.",
        "Sell smarter in {city} with our ecommerce expertise. We optimise your online shop for visibility and sales in Manchester.",
        "Expand your reach in {city} with scalable ecommerce solutions tailored for Manchester retailers."
      ],
      liverpool: [
        "Sell smarter in {city} with our ecommerce expertise. We create engaging online shops for Liverpool’s vibrant market, supporting growth from the city centre to the docks.",
        "Boost your Liverpool business with custom ecommerce platforms designed for local SEO and conversion. Our team helps you attract loyal customers in {city}.",
        "Expand online in {city} with our ecommerce platforms. We optimise your shop for visibility and sales in Liverpool.",
        "Grow your Liverpool brand with scalable ecommerce solutions tailored for local retailers."
      ],
      leeds: [
        "Expand online in {city} with our ecommerce platforms. We deliver custom solutions for Leeds retailers, driving conversions and customer loyalty.",
        "Boost your Leeds business with custom ecommerce platforms designed for local SEO and conversion. Our team helps you attract loyal customers in {city}.",
        "Sell smarter in {city} with our ecommerce expertise. We optimise your online shop for visibility and sales in Leeds.",
        "Grow your Leeds brand with scalable ecommerce solutions tailored for local retailers."
      ],
      newcastle: [
        "Online sellers in {city} thrive with our ecommerce solutions. We build scalable, secure stores for Newcastle’s diverse business community.",
        "Boost your Newcastle business with custom ecommerce platforms designed for local SEO and conversion. Our team helps you attract loyal customers in {city}.",
        "Expand online in {city} with our ecommerce platforms. We optimise your shop for visibility and sales in Newcastle.",
        "Grow your Newcastle brand with scalable ecommerce solutions tailored for local retailers."
      ],
      sheffield: [
        "Retailers in {city} grow with our ecommerce expertise. We create easy-to-manage online shops for Sheffield’s creative and industrial sectors.",
        "Boost your Sheffield business with custom ecommerce platforms designed for local SEO and conversion. Our team helps you attract loyal customers in {city}.",
        "Sell smarter in {city} with our ecommerce expertise. We optimise your online shop for visibility and sales in Sheffield.",
        "Expand your reach in {city} with scalable ecommerce solutions tailored for Sheffield retailers."
      ]
    },
    industries: industries.map(i => i.slug),
    keywords: ["ecommerce solutions", "custom ecommerce website development [city]"],
    templateSlug: "ecommerce-solutions"
  },
  {
    name: "App Development",
    slug: "app-development",
    description: "Engage your audience with powerful mobile and web apps built for your business. Our app development team delivers intuitive, feature-rich solutions that work seamlessly across devices. We make it easy to launch, update, and scale your app for long-term success.",
    cityDescriptions: {
      manchester: [
        "Launch innovative apps in {city} with our award-winning development team. We build mobile and web apps for Manchester’s tech, retail, and creative sectors, helping you reach new customers and drive growth.",
        "Engage your audience in {city} with custom app solutions designed for Manchester’s dynamic business scene. From startups to established brands, we deliver feature-rich apps that scale with your needs.",
        "Boost your Manchester business with intuitive, user-friendly apps. Our team creates mobile and web applications that improve customer experience and increase conversions in {city}.",
        "Stay ahead in {city} with scalable app development tailored for Manchester companies. We help you launch, update, and grow your app for long-term success."
      ],
      liverpool: [
        "Grow your Liverpool business with custom app development. We create mobile and web apps for local brands, helping you connect with customers from the waterfront to the city centre.",
        "Liverpool companies engage audiences with intuitive app solutions. Our team builds feature-rich applications that drive engagement and sales in {city}.",
        "Boost your Liverpool brand with scalable, user-friendly apps. We help you launch and grow your app for lasting success in {city}.",
        "Expand your reach in {city} with app development tailored for Liverpool’s vibrant market."
      ],
      leeds: [
        "Drive growth in {city} with custom app development for Leeds businesses. We build mobile and web apps that improve customer experience and boost conversions.",
        "Leeds companies engage audiences with intuitive, scalable apps. Our team delivers feature-rich solutions for the city’s thriving digital sector.",
        "Boost your Leeds brand with mobile and web applications designed for local success in {city}.",
        "Expand your business in {city} with app development tailored for Leeds companies."
      ],
      newcastle: [
        "Reach new audiences in {city} with expert app development. We create mobile and web apps for Newcastle’s energetic business community, helping you stand out and grow online.",
        "Newcastle companies boost engagement with custom app solutions. Our team builds scalable applications that drive results in {city}.",
        "Grow your Newcastle brand with intuitive, user-friendly apps designed for local success in {city}.",
        "Expand your business in {city} with app development tailored for Newcastle’s market."
      ],
      sheffield: [
        "Grow your Sheffield business with scalable app development. We create mobile and web apps for creative and industrial sectors, helping you reach new customers in {city}.",
        "Sheffield companies engage audiences with intuitive, feature-rich apps. Our team delivers solutions that drive engagement and sales in {city}.",
        "Boost your Sheffield brand with custom app solutions designed for local success in {city}.",
        "Expand your reach in {city} with app development tailored for Sheffield’s market."
      ],
      preston: [
        "Streamline operations in {city} with custom app development for Preston businesses. We build mobile and web apps that connect you with users and drive growth.",
        "Preston companies boost engagement with intuitive, scalable apps. Our team delivers feature-rich solutions for the city’s diverse market.",
        "Grow your Preston brand with mobile and web applications designed for local success in {city}.",
        "Expand your business in {city} with app development tailored for Preston companies."
      ],
      wigan: [
        "Boost engagement and growth in {city} with custom app development for Wigan companies. We create mobile and web apps that improve customer experience and drive results.",
        "Wigan businesses connect with users through intuitive, scalable apps. Our team delivers feature-rich solutions for the local market in {city}.",
        "Grow your Wigan brand with mobile and web applications designed for success in {city}.",
        "Expand your business in {city} with app development tailored for Wigan companies."
      ]
    },
    industries: industries.map(i => i.slug),
    keywords: ["app development", "mobile app development for businesses [city]"],
    templateSlug: "app-development"
  },
  {
    name: "PPC Advertising",
    slug: "ppc",
    description: "Drive instant traffic and leads with targeted PPC advertising campaigns. We manage your ads across Google, Bing, and social platforms, optimising for maximum ROI. Our transparent approach means you see results and understand every step of your campaign.",
    cityDescriptions: {
      manchester: [
        "Get instant results in {city} with our targeted PPC campaigns. We manage Google, Bing, and social ads for Manchester businesses, driving traffic and qualified leads.",
        "Boost your Manchester brand with expert PPC management. Our team optimises your ads for maximum ROI and conversion in {city}.",
        "Drive more sales in {city} with data-driven PPC strategies tailored for Manchester’s competitive market.",
        "Increase visibility and leads in {city} with transparent, effective PPC advertising for Manchester companies."
      ],
      liverpool: [
        "Drive traffic and leads in {city} with our PPC expertise. We manage Google, Bing, and social ads for Liverpool businesses, helping you reach new customers and grow sales.",
        "Liverpool companies maximise ROI with expert PPC management. Our team optimises your campaigns for conversion and visibility in {city}.",
        "Boost your Liverpool brand with transparent, results-driven PPC advertising tailored for the local market.",
        "Increase online sales in {city} with targeted PPC strategies for Liverpool companies."
      ],
      leeds: [
        "Maximise ROI in {city} with our expert PPC management. We run Google, Bing, and social ads for Leeds businesses, driving traffic and conversions.",
        "Leeds companies boost sales with targeted PPC advertising tailored for the city’s dynamic market.",
        "Increase visibility and leads in {city} with data-driven PPC strategies for Leeds brands.",
        "Grow your Leeds business online with transparent, effective PPC campaigns."
      ],
      newcastle: [
        "Grow online in {city} with our PPC strategies. We manage Google, Bing, and social ads for Newcastle businesses, helping you reach new customers and boost sales.",
        "Newcastle companies maximise ROI with expert PPC management tailored for the local market in {city}.",
        "Increase traffic and conversions in {city} with targeted PPC advertising for Newcastle brands.",
        "Boost your Newcastle business with transparent, results-driven PPC campaigns."
      ],
      sheffield: [
        "Reach new customers in {city} with our PPC expertise. We manage Google, Bing, and social ads for Sheffield businesses, driving traffic and qualified leads.",
        "Sheffield companies boost sales with targeted PPC advertising tailored for the city’s creative and industrial sectors.",
        "Increase visibility and conversions in {city} with expert PPC management for Sheffield brands.",
        "Grow your Sheffield business online with transparent, effective PPC campaigns."
      ],
      preston: [
        "Boost sales and visibility in {city} with our PPC solutions. We manage Google, Bing, and social ads for Preston businesses, helping you reach new customers and grow online.",
        "Preston companies maximise ROI with expert PPC management tailored for the local market in {city}.",
        "Increase traffic and conversions in {city} with targeted PPC advertising for Preston brands.",
        "Grow your Preston business online with transparent, results-driven PPC campaigns."
      ],
      wigan: [
        "Benefit from transparent, effective PPC campaigns in {city}. We manage Google, Bing, and social ads for Wigan companies, driving traffic and qualified leads.",
        "Wigan businesses boost sales with targeted PPC advertising tailored for the local market in {city}.",
        "Increase visibility and conversions in {city} with expert PPC management for Wigan brands.",
        "Grow your Wigan business online with data-driven PPC strategies."
      ]
    },
    industries: industries.map(i => i.slug),
    keywords: ["ppc advertising", "ppc management [city]", "expert ppc management [city]"],
    templateSlug: "ppc"
  },
  {
    name: "Email Marketing",
    slug: "email-marketing",
    description: "Connect with your customers and grow your business through targeted email marketing. We design engaging campaigns, automate follow-ups, and track results to help you build lasting relationships and boost sales.",
        cityDescriptions: {
          manchester: [
              "Nurture leads and boost sales in {city} with our targeted email marketing. We design engaging campaigns for Manchester businesses, helping you build lasting relationships and increase conversions.",
              "Manchester companies grow with personalised email marketing. Our team automates follow-ups and tracks results to maximise ROI in {city}.",
              "Build lasting relationships in {city} with email campaigns tailored for Manchester’s competitive market.",
              "Increase your sales and customer loyalty in {city} with expert email marketing for Manchester brands."
          ],
          liverpool: [
              "Build lasting relationships in {city} with targeted email marketing. We design engaging campaigns for Liverpool businesses, helping you grow sales and customer loyalty.",
              "Liverpool companies boost engagement with personalised email marketing tailored for the city’s vibrant market.",
              "Engage customers and grow in {city} with automated email campaigns for Liverpool brands.",
              "Increase your sales and ROI in {city} with expert email marketing for Liverpool companies."
          ],
          leeds: [
              "Engage customers and grow in {city} with our email marketing solutions. We design campaigns for Leeds businesses that build lasting relationships and drive conversions.",
              "Leeds companies boost sales with personalised email marketing tailored for the city’s thriving market.",
              "Build lasting relationships in {city} with automated email campaigns for Leeds brands.",
              "Increase your ROI and customer loyalty in {city} with expert email marketing for Leeds companies."
          ],
          newcastle: [
              "Automate follow-ups and drive results in {city} with our email marketing expertise. We design campaigns for Newcastle businesses that increase engagement and sales.",
              "Newcastle companies grow with personalised email marketing tailored for the city’s energetic market.",
              "Engage customers and grow in {city} with targeted email campaigns for Newcastle brands.",
              "Increase your ROI and customer loyalty in {city} with expert email marketing for Newcastle companies."
          ],
          sheffield: [
              "Connect with your audience in {city} through effective email campaigns. We design engaging campaigns for Sheffield businesses, helping you build lasting relationships and boost sales.",
              "Sheffield companies grow with personalised email marketing tailored for the city’s creative and industrial sectors.",
              "Build lasting relationships in {city} with automated email campaigns for Sheffield brands.",
              "Increase your ROI and customer loyalty in {city} with expert email marketing for Sheffield companies."
          ],
          preston: [
              "Increase engagement and sales in {city} with our targeted email marketing. We design campaigns for Preston businesses that build lasting relationships and drive conversions.",
              "Preston companies grow with personalised email marketing tailored for the city’s diverse market.",
              "Build lasting relationships in {city} with automated email campaigns for Preston brands.",
              "Increase your ROI and customer loyalty in {city} with expert email marketing for Preston companies."
          ],
          wigan: [
              "Benefit from personalised, results-driven email marketing in {city}. We design campaigns for Wigan companies that increase engagement and sales.",
              "Wigan businesses grow with targeted email marketing tailored for the local market.",
              "Build lasting relationships in {city} with automated email campaigns for Wigan brands.",
              "Increase your ROI and customer loyalty in {city} with expert email marketing for Wigan companies."
          ]
    },
    industries: industries.map(i => i.slug),
    keywords: ["email marketing", "email marketing campaigns", "targeted email marketing"],
    templateSlug: "email-marketing"
  },
  {
    name: "Video Production",
    slug: "video-production",
    description: "Tell your story with professional video production that captivates your audience. From promotional videos to tutorials, we create high-quality content that builds trust, increases engagement, and drives results for your brand.",
        cityDescriptions: {
          manchester: [
              "Boost your brand in {city} with award-winning video production for tech, retail, and creative businesses. Our Manchester team creates promotional, corporate, and social videos that drive engagement and sales.",
              "Stand out in {city} with cinematic video content tailored for Manchester’s vibrant business scene. From Deansgate startups to Northern Quarter agencies, we help you connect with your audience and increase conversions.",
              "Get noticed in {city} with professional video production services. We produce high-quality videos for Manchester companies, helping you build trust, improve SEO, and grow online.",
              "Drive more leads in {city} with compelling video content optimised for local search. Our Manchester experts help your business rank higher and attract new customers.",
              "Showcase your {city} business with creative video storytelling. We specialise in videos that boost brand awareness and drive measurable results in Manchester."
          ],
          liverpool: [
              "Grow your Liverpool business with creative video production. We craft engaging videos for local brands, from the waterfront to the city centre, boosting visibility and customer trust.",
              "Liverpool companies build lasting connections with our expert video production. Showcase your story with promotional and corporate videos designed for Merseyside audiences.",
              "Capture attention in {city} with stunning video content. Our Liverpool team helps businesses stand out and convert viewers into loyal customers.",
              "Increase your online reach in {city} with SEO-friendly video production. We help Liverpool brands attract more customers and improve search rankings.",
              "Tell your Liverpool story with professional video production that drives engagement and sales. Our team creates videos that resonate with local audiences."
          ],
          leeds: [
              "Elevate your Leeds brand with creative video production. We produce promotional, training, and social videos for Leeds businesses, helping you engage customers and grow online.",
              "Leeds companies tell their story with high-impact video content. Our team delivers professional videos for the city’s thriving digital and commercial sectors.",
              "Drive results in {city} with expert video production. We help Leeds businesses build trust and boost engagement.",
              "Boost your Leeds business with video content designed for local SEO and conversion. Our team helps you attract new customers and stand out online.",
              "Showcase your {city} brand with creative video production that increases visibility and drives measurable growth in Leeds."
          ],
          newcastle: [
              "Increase engagement in {city} with expert video production. We create promotional and corporate videos for Newcastle’s energetic business scene, from the Quayside to Jesmond.",
              "Newcastle brands connect with audiences through creative video content. Our team helps you stand out and grow online.",
              "Get professional video production in {city} for maximum impact and visibility.",
              "Boost your Newcastle business with video production that improves SEO and drives conversions. We help you reach more customers in {city}.",
              "Tell your story in {city} with high-quality video content tailored for Newcastle’s local market."
          ],
          sheffield: [
              "Drive results in {city} with compelling video production. We produce promotional, training, and event videos for Sheffield’s creative and industrial businesses.",
              "Sheffield companies build trust and engagement with high-quality video content. Our team helps you showcase your story and attract customers.",
              "Stand out in {city} with professional video production for local brands.",
              "Increase your Sheffield brand’s visibility with SEO-optimised video production. We help you reach new customers and grow online in {city}.",
              "Tell your Sheffield story with creative video content that drives engagement and sales."
          ],
          preston: [
              "Boost your Preston brand with professional video content. We create engaging videos for local businesses, helping you reach new customers and grow online.",
              "Preston companies connect with audiences through creative video production. Our team delivers promotional and corporate videos for the city’s diverse market.",
              "Get noticed in {city} with expert video production services.",
              "Increase your Preston business’s online presence with SEO-friendly video production. We help you attract more customers and improve search rankings in {city}.",
              "Showcase your Preston story with creative video content that drives engagement and sales."
          ],
          wigan: [
              "Connect with audiences in {city} through engaging video production. We help Wigan businesses tell their story and build trust with high-quality video content.",
              "Wigan companies grow online with professional video production. Our team creates promotional and social videos for local brands.",
              "Stand out in {city} with creative video content tailored for your business.",
              "Boost your Wigan business with video production that improves SEO and drives conversions. We help you reach more customers in {city}.",
              "Tell your Wigan story with professional video content that increases engagement and sales."
          ]
    },
    industries: industries.map(i => i.slug),
    keywords: ["video production"],
    templateSlug: "video-production"
  },
  {
    name: "Conversion Rate Optimisation",
    slug: "conversion-rate-optimisation",
    description: "Turn more visitors into customers with our conversion rate optimisation services. We analyse your site, test improvements, and implement proven strategies to boost your sales and grow your business online.",
        cityDescriptions: {
          manchester: [
              "Boost sales in {city} with expert conversion rate optimisation. We analyse your website, test improvements, and implement proven CRO strategies for Manchester’s competitive market.",
              "Turn more visitors into customers in {city} with data-driven CRO. Our Manchester team helps you increase conversions and grow online.",
              "Maximise your ROI in {city} with tailored conversion rate optimisation. We help Manchester businesses improve user experience and drive measurable results.",
              "Unlock growth in {city} with our CRO expertise. We optimise your site for higher conversions and better performance in Manchester."
          ],
          liverpool: [
              "Liverpool companies turn visitors into customers with proven CRO strategies. We optimise your site for conversions and help you grow online in {city}.",
              "Boost your Liverpool business with expert CRO. Our team analyses your website and implements changes that drive sales and leads.",
              "Increase your ROI in {city} with conversion rate optimisation tailored for Liverpool’s market. We help you attract and convert more customers.",
              "Grow online in {city} with our CRO solutions. We improve user experience and drive measurable results for Liverpool brands."
          ],
          leeds: [
              "Grow your Leeds business online with expert conversion rate optimisation. We analyse your site, test improvements, and implement strategies that boost conversions in {city}.",
              "Leeds companies maximise results with tailored CRO. Our team helps you improve user experience and increase sales.",
              "Drive more leads in {city} with our conversion rate optimisation expertise. We help Leeds brands attract and convert visitors.",
              "Unlock growth in {city} with data-driven CRO for Leeds businesses."
          ],
          newcastle: [
              "Increase conversions in {city} with our tailored CRO solutions. We help Newcastle businesses optimise their websites for better performance and higher sales.",
              "Boost your Newcastle brand with expert conversion rate optimisation. Our team analyses your site and implements changes that drive results.",
              "Grow online in {city} with CRO strategies designed for Newcastle’s market. We help you attract and convert more customers.",
              "Maximise your ROI in {city} with our conversion rate optimisation expertise."
          ],
          sheffield: [
              "Improve online performance in {city} with our CRO expertise. We help Sheffield companies optimise their sites for higher conversions and better user experience.",
              "Sheffield brands grow sales and leads with expert conversion rate optimisation. Our team implements proven strategies for measurable results in {city}.",
              "Drive more conversions in {city} with tailored CRO solutions for Sheffield businesses.",
              "Unlock growth in {city} with our conversion rate optimisation services."
          ],
          preston: [
              "Maximise results in {city} with our conversion rate optimisation. We help Preston businesses improve user experience and increase conversions.",
              "Boost your Preston brand with expert CRO strategies. Our team analyses your site and implements changes that drive sales.",
              "Grow online in {city} with tailored conversion rate optimisation for Preston’s market.",
              "Increase your ROI in {city} with our CRO expertise."
          ],
          wigan: [
              "Grow sales and leads in {city} with our CRO services. We help Wigan companies optimise their websites for higher conversions and better performance.",
              "Boost your Wigan business with expert conversion rate optimisation. Our team implements strategies that drive measurable results in {city}.",
              "Increase conversions in {city} with tailored CRO solutions for Wigan brands.",
              "Unlock growth in {city} with our conversion rate optimisation expertise."
          ]
    },
    industries: industries.map(i => i.slug),
    keywords: ["conversion rate optimisation", "conversion rate optimisation experts [city]"],
    templateSlug: "conversion-rate-optimisation"
  },
  {
    name: "UX/UI Design",
    slug: "ux-ui-design",
    description: "Delight your users with intuitive, visually appealing UX/UI design. We focus on usability, accessibility, and brand consistency to create digital experiences that keep visitors coming back.",
        cityDescriptions: {
          manchester: [
              "Impress users in {city} with intuitive, visually appealing UX/UI design. Our Manchester team creates digital experiences that boost engagement and conversions.",
              "Stand out in {city} with user-friendly, accessible design. We help Manchester businesses build loyalty and drive results through expert UX/UI.",
              "Boost your Manchester brand with modern UX/UI design that enhances usability and supports your business goals in {city}.",
              "Create memorable digital experiences in {city} with our design expertise tailored for Manchester’s market."
          ],
          liverpool: [
              "Liverpool companies create memorable digital experiences with our design expertise. We focus on usability, accessibility, and brand consistency for {city} businesses.",
              "Enhance your Liverpool brand with beautiful UX/UI design that keeps visitors coming back in {city}.",
              "Drive engagement and conversions in {city} with expert UX/UI design for Liverpool’s diverse market.",
              "Build loyalty in {city} with visually appealing, user-friendly design for Liverpool companies."
          ],
          leeds: [
              "Keep visitors coming back in {city} with beautiful UX/UI design. Our Leeds team creates digital experiences that drive engagement and growth.",
              "Leeds brands stand out with modern, accessible UX/UI design tailored for {city} businesses.",
              "Boost your Leeds business with user-friendly design that supports conversions and brand loyalty in {city}.",
              "Create memorable digital experiences in {city} with our UX/UI expertise for Leeds companies."
          ],
          newcastle: [
              "Focus on usability and accessibility in {city} with our expert UX/UI design. We help Newcastle brands create digital experiences that convert visitors into customers.",
              "Boost your Newcastle business with visually appealing, user-friendly design for {city}’s market.",
              "Drive engagement and loyalty in {city} with modern UX/UI design for Newcastle companies.",
              "Create memorable digital experiences in {city} with our design expertise tailored for Newcastle."
          ],
          sheffield: [
              "Build loyalty in {city} with visually appealing UX/UI design. Our Sheffield team creates digital experiences that drive engagement and conversions.",
              "Sheffield brands stand out with modern, accessible UX/UI design for {city} businesses.",
              "Boost your Sheffield business with user-friendly design that supports conversions and brand loyalty in {city}.",
              "Create memorable digital experiences in {city} with our UX/UI expertise for Sheffield companies."
          ],
          preston: [
              "Enhance user experience in {city} with our expert UX/UI design. We help Preston businesses create digital experiences that drive engagement and growth.",
              "Boost your Preston brand with visually appealing, user-friendly design for {city}’s market.",
              "Drive engagement and loyalty in {city} with modern UX/UI design for Preston companies.",
              "Create memorable digital experiences in {city} with our design expertise tailored for Preston."
          ],
          wigan: [
              "Delight users in {city} with consistent, accessible UX/UI design. Our Wigan team creates digital experiences that drive engagement and conversions.",
              "Wigan brands stand out with modern, user-friendly UX/UI design for {city} businesses.",
              "Boost your Wigan business with design that supports conversions and brand loyalty in {city}.",
              "Create memorable digital experiences in {city} with our UX/UI expertise for Wigan companies."
          ]
    },
    industries: industries.map(i => i.slug),
    keywords: ["ux ui design"],
    templateSlug: "ux-ui-design"
  },
  {
    name: "Hosting & Maintenance",
    slug: "hosting-maintenance",
    description: "Keep your website running smoothly with reliable hosting and proactive maintenance. We handle updates, backups, and security so you can focus on your business, knowing your site is in safe hands.",
    cityDescriptions: {
        manchester: [
          "Keep your website secure and running smoothly in {city} with our expert hosting and maintenance. We provide reliable updates, backups, and support for Manchester businesses, ensuring peace of mind.",
          "Manchester companies enjoy proactive website maintenance and fast, secure hosting tailored for the city’s competitive market. Focus on growth while we handle the tech in {city}.",
          "Boost your Manchester brand’s online performance with managed hosting and regular updates. Our team keeps your site safe, optimised, and ready for success in {city}.",
          "Stay ahead in {city} with hosting and maintenance solutions designed for Manchester’s business landscape."
        ],
        liverpool: [
          "Keep your site secure and updated in {city} with our hosting and maintenance services. We provide reliable support and proactive updates for Liverpool businesses, ensuring smooth performance.",
          "Liverpool companies enjoy fast, secure hosting and regular maintenance tailored for the city’s vibrant market. Focus on your business while we handle the tech in {city}.",
          "Boost your Liverpool brand’s online presence with managed hosting and expert maintenance. Our team keeps your site safe, optimised, and ready for success in {city}.",
          "Stay ahead in {city} with hosting and maintenance solutions designed for Liverpool’s business landscape."
        ],
        leeds: [
          "Enjoy smooth website performance in {city} with our hosting and maintenance expertise. We provide fast, secure hosting and proactive updates for Leeds businesses, ensuring reliability.",
          "Leeds companies keep their sites secure and updated with managed hosting and regular maintenance tailored for the city’s thriving market. Focus on growth while we handle the tech in {city}.",
          "Boost your Leeds business’s online reliability with expert hosting and maintenance. Our team keeps your site safe, optimised, and ready for success in {city}.",
          "Stay ahead in {city} with hosting and maintenance solutions designed for Leeds companies."
        ],
        newcastle: [
          "Trust us for reliable hosting and proactive support in {city}. We provide fast, secure hosting and regular updates for Newcastle businesses, ensuring smooth performance.",
          "Newcastle companies enjoy managed hosting and expert maintenance tailored for the city’s energetic market. Focus on your business while we handle the tech in {city}.",
          "Boost your Newcastle brand’s online presence with hosting and maintenance that keeps your site safe, optimised, and ready for success in {city}.",
          "Stay ahead in {city} with hosting and maintenance solutions designed for Newcastle’s business landscape."
        ],
        sheffield: [
          "Focus on growth in {city} while we handle your website maintenance. We provide fast, secure hosting and proactive updates for Sheffield businesses, ensuring reliability.",
          "Sheffield companies keep their sites secure and updated with managed hosting and expert maintenance tailored for the city’s creative and industrial sectors. Focus on your business while we handle the tech in {city}.",
          "Boost your Sheffield brand’s online reliability with hosting and maintenance that keeps your site safe, optimised, and ready for success in {city}.",
          "Stay ahead in {city} with hosting and maintenance solutions designed for Sheffield’s business landscape."
        ],
        preston: [
          "Benefit from secure, managed hosting in {city} with our expert maintenance solutions. We keep Preston businesses online and protected.",
          "Preston companies enjoy reliable hosting and proactive updates tailored for the city’s diverse market. Focus on growth while we handle the tech in {city}.",
          "Boost your Preston brand’s online reliability with hosting and maintenance that keeps your site safe, optimised, and ready for success in {city}.",
          "Stay ahead in {city} with hosting and maintenance solutions designed for Preston’s business landscape."
        ],
        wigan: [
          "Keep your site running smoothly in {city} with our maintenance and hosting services. We provide fast, secure hosting and proactive updates for Wigan businesses.",
          "Wigan companies enjoy reliable hosting and expert maintenance tailored for the local market. Focus on your business while we handle the tech in {city}.",
          "Boost your Wigan brand’s online reliability with hosting and maintenance that keeps your site safe, optimised, and ready for success in {city}.",
          "Stay ahead in {city} with hosting and maintenance solutions designed for Wigan’s business landscape."
        ]
    },
    industries: industries.map(i => i.slug),
    keywords: ["hosting and maintenance", "website maintenance and support [city]", "ongoing website maintenance"],
    templateSlug: "hosting-maintenance"
  },
  {
    name: "Analytics & Reporting",
    slug: "analytics-reporting",
    description: "Make smarter decisions with detailed analytics and reporting. We track your website’s performance, user behaviour, and marketing results, providing clear insights to help you grow and improve.",
    cityDescriptions: {
        manchester: [
      "Make data-driven decisions in {city} with our analytics and reporting services. We track key metrics for Manchester businesses, providing actionable insights to help you grow and improve.",
      "Manchester companies boost performance with detailed analytics and clear reporting tailored for the city’s competitive market.",
      "Increase your ROI in {city} with custom analytics solutions that measure success and drive results for Manchester brands.",
      "Grow your Manchester business with transparent, actionable analytics and reporting."
        ],
        liverpool: [
      "Track performance and growth in {city} with our analytics solutions. We provide clear insights for Liverpool businesses, helping you measure success and improve results.",
      "Liverpool companies boost ROI with custom analytics and reporting tailored for the city’s vibrant market.",
      "Increase your sales and leads in {city} with actionable analytics for Liverpool brands.",
      "Grow your Liverpool business with transparent, data-driven reporting."
        ],
        leeds: [
      "Gain insights and improve in {city} with our reporting services. We track key metrics for Leeds businesses, providing actionable analytics to help you grow and succeed.",
      "Leeds companies boost performance with custom analytics and reporting tailored for the city’s thriving market.",
      "Increase your ROI in {city} with detailed analytics for Leeds brands.",
      "Grow your Leeds business with transparent, actionable reporting."
        ],
        newcastle: [
      "Optimise your marketing in {city} with our analytics expertise. We provide clear insights for Newcastle businesses, helping you measure success and improve results.",
      "Newcastle companies boost ROI with custom analytics and reporting tailored for the city’s energetic market.",
      "Increase your sales and leads in {city} with actionable analytics for Newcastle brands.",
      "Grow your Newcastle business with transparent, data-driven reporting."
        ],
        sheffield: [
      "Grow your business in {city} with clear, actionable analytics and reporting. We track key metrics for Sheffield companies, providing insights to help you improve performance and results.",
      "Sheffield brands boost ROI with custom analytics and reporting tailored for the city’s creative and industrial sectors.",
      "Increase your sales and leads in {city} with detailed analytics for Sheffield businesses.",
      "Grow your Sheffield business with transparent, actionable reporting."
        ],
        preston: [
      "Understand your users and results in {city} with our analytics services. We provide clear insights for Preston businesses, helping you measure success and improve performance.",
      "Preston companies boost ROI with custom analytics and reporting tailored for the city’s diverse market.",
      "Increase your sales and leads in {city} with actionable analytics for Preston brands.",
      "Grow your Preston business with transparent, data-driven reporting."
        ],
        wigan: [
      "Improve performance in {city} with our detailed reporting solutions. We provide clear insights for Wigan companies, helping you measure success and grow online.",
      "Wigan businesses boost ROI with custom analytics and reporting tailored for the local market.",
      "Increase your sales and leads in {city} with actionable analytics for Wigan brands.",
      "Grow your Wigan business with transparent, data-driven reporting."
        ]
    },
    industries: industries.map(i => i.slug),
    keywords: ["analytics and reporting", "analytics and reporting for websites [city]"],
    templateSlug: "analytics-reporting"
  },
  {
    name: "Digital Strategy",
    slug: "digital-strategy",
    description: "Plan for success with a digital strategy tailored to your business goals. We help you choose the right channels, set measurable objectives, and execute campaigns that deliver real results.",
    cityDescriptions: {
        manchester: [
          "Succeed online in {city} with our digital strategy services. We analyse your market, set objectives, and create actionable plans for Manchester businesses.",
          "Achieve your goals in {city} with clear, measurable digital strategies tailored for Manchester’s competitive market.",
          "Boost your Manchester business with strategic planning and execution that drives results in {city}.",
          "Increase your ROI in {city} with digital strategies designed for Manchester companies."
        ],
        liverpool: [
          "Achieve your goals in {city} with clear digital strategies. We analyse your market and create actionable plans for Liverpool businesses.",
          "Grow your business in {city} with strategic planning and execution tailored for Liverpool’s vibrant market.",
          "Boost your Liverpool brand with measurable digital strategies that drive results in {city}.",
          "Increase your ROI in {city} with digital strategies designed for Liverpool companies."
        ],
        leeds: [
          "Set objectives and create actionable plans in {city} with our digital strategy services. We help Leeds businesses grow online with clear, measurable strategies.",
          "Achieve your goals in {city} with strategic planning and execution tailored for Leeds’ dynamic market.",
          "Boost your Leeds brand with digital strategies that drive results in {city}.",
          "Increase your ROI in {city} with digital strategies designed for Leeds companies."
        ],
        newcastle: [
          "Analyse your market for online success in {city} with our digital strategy services. We help Newcastle businesses set objectives and create actionable plans.",
          "Grow your business in {city} with strategic planning and execution tailored for Newcastle’s energetic market.",
          "Boost your Newcastle brand with digital strategies that drive results in {city}.",
          "Increase your ROI in {city} with digital strategies designed for Newcastle companies."
        ],
        sheffield: [
          "Achieve business goals in {city} with our digital strategy services. We help Sheffield companies set objectives and create actionable plans for growth.",
          "Achieve your goals in {city} with strategic planning and execution tailored for Sheffield’s creative and industrial sectors.",
          "Boost your Sheffield brand with digital strategies that drive results in {city}.",
          "Increase your ROI in {city} with digital strategies designed for Sheffield companies."
        ],
        preston: [
          "Plan for success in {city} with our digital strategy services. We analyse your market and create actionable plans for Preston businesses.",
          "Grow your Preston business with strategic planning and execution tailored for the city’s diverse market.",
          "Boost your Preston brand with measurable digital strategies that drive results in {city}.",
          "Increase your ROI in {city} with digital strategies designed for Preston companies."
        ],
        wigan: [
          "Execute campaigns that deliver real results in {city} with our digital strategy expertise. We help Wigan companies set objectives and create actionable plans for growth.",
          "Grow your Wigan business with strategic planning and execution tailored for the local market.",
          "Boost your Wigan brand with measurable digital strategies that drive results in {city}.",
          "Increase your ROI in {city} with digital strategies designed for Wigan companies."
        ]
    },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["digital strategy"],
    templateSlug: "digital-strategy"
  },
  {
    name: "Reputation Management",
    slug: "reputation-management",
    description: "Protect and enhance your brand’s reputation online. We monitor reviews, manage feedback, and implement strategies to build trust and credibility with your audience.",
      cityDescriptions: {
        manchester: [
          "Build trust and credibility in {city} with our reputation management services. We monitor reviews, manage feedback, and implement strategies for Manchester businesses.",
          "Protect your brand online in {city} with expert reputation management tailored for Manchester’s competitive market.",
          "Boost your Manchester business’s credibility and customer trust with proactive reputation management.",
          "Increase your online reputation in {city} with review monitoring and feedback management for Manchester companies."
        ],
        liverpool: [
          "Protect your brand online in {city} with our reputation management expertise. We monitor reviews and manage feedback for Liverpool businesses.",
          "Build trust and credibility in {city} with proactive reputation management tailored for Liverpool’s vibrant market.",
          "Boost your Liverpool business’s reputation and customer trust with expert strategies.",
          "Increase your online reputation in {city} with review monitoring and feedback management for Liverpool companies."
        ],
        leeds: [
          "Enhance credibility in {city} with proactive reputation management. We monitor reviews and manage feedback for Leeds businesses.",
          "Protect your brand online in {city} with expert reputation management tailored for Leeds’ dynamic market.",
          "Boost your Leeds business’s reputation and customer trust with proven strategies.",
          "Increase your online reputation in {city} with review monitoring and feedback management for Leeds companies."
        ],
        newcastle: [
          "Monitor reviews and manage feedback in {city} with our reputation management services. We help Newcastle businesses build trust and credibility online.",
          "Protect your brand online in {city} with expert reputation management tailored for Newcastle’s energetic market.",
          "Boost your Newcastle business’s reputation and customer trust with proactive strategies.",
          "Increase your online reputation in {city} with review monitoring and feedback management for Newcastle companies."
        ],
        sheffield: [
          "Build trust and credibility online in {city} with our reputation management services. We monitor reviews and manage feedback for Sheffield businesses.",
          "Protect your brand online in {city} with expert reputation management tailored for Sheffield’s creative and industrial sectors.",
          "Boost your Sheffield business’s reputation and customer trust with proven strategies.",
          "Increase your online reputation in {city} with review monitoring and feedback management for Sheffield companies."
        ],
        preston: [
          "Build credibility and trust in {city} with our reputation management services. We monitor reviews and manage feedback for Preston businesses.",
          "Protect your brand online in {city} with expert reputation management tailored for Preston’s diverse market.",
          "Boost your Preston business’s reputation and customer trust with proven strategies.",
          "Increase your online reputation in {city} with review monitoring and feedback management for Preston companies."
        ],
        wigan: [
          "Protect your brand online in {city} with our reputation management solutions. We monitor reviews and manage feedback for Wigan businesses.",
          "Build trust and credibility in {city} with proactive reputation management tailored for Wigan’s local market.",
          "Boost your Wigan business’s reputation and customer trust with expert strategies.",
          "Increase your online reputation in {city} with review monitoring and feedback management for Wigan companies."
        ]
      },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["reputation management", "online reputation management [city]"],
    templateSlug: "reputation-management"
  },
  {
    name: "Marketing Automation",
    slug: "marketing-automation",
    description: "Save time and boost results with marketing automation. We set up smart workflows, nurture leads, and personalise your communications to increase engagement and sales.",
      cityDescriptions: {
        manchester: [
          "{city} businesses save time and boost results with our marketing automation."
        ],
        liverpool: [
          "{city} companies nurture leads and personalise communications with our automation."
        ],
        leeds: [
          "{city} brands increase engagement and sales with our smart workflows."
        ],
        newcastle: [
          "{city} businesses automate marketing for better results."
        ],
        sheffield: [
          "{city} companies grow with personalised, automated marketing."
        ],
        preston: [
          "{city} businesses benefit from efficient marketing automation solutions."
        ],
        wigan: [
          "{city} companies boost engagement and sales with our automation expertise."
        ]
      },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["marketing automation"],
    templateSlug: "marketing-automation"
  },
  {
    name: "Influencer Marketing",
    slug: "influencer-marketing",
    description: "Grow your brand with authentic influencer marketing campaigns. We connect you with trusted voices in your industry to reach new audiences and build lasting relationships.",
      cityDescriptions: {
        manchester: [
          "{city} brands reach new audiences with our influencer marketing campaigns."
        ],
        liverpool: [
          "{city} companies build lasting relationships with trusted influencers."
        ],
        leeds: [
          "{city} businesses grow their brand with authentic influencer partnerships."
        ],
        newcastle: [
          "{city} companies connect with industry voices for greater reach."
        ],
        sheffield: [
          "{city} brands expand their audience with influencer marketing."
        ],
        preston: [
          "{city} businesses benefit from effective influencer campaigns."
        ],
        wigan: [
          "{city} companies grow with trusted influencer marketing solutions."
        ]
      },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["influencer marketing", "influencer marketing campaigns [city]"],
    templateSlug: "influencer-marketing"
  },
  {
    name: "Online PR",
    slug: "online-pr",
    description: "Increase your digital visibility and authority with online PR. We secure media coverage, manage press releases, and help your business get noticed by the right people.",
      cityDescriptions: {
        manchester: [
          "{city} businesses get noticed with our online PR and media coverage."
        ],
        liverpool: [
          "{city} companies increase visibility and authority with our PR expertise."
        ],
        leeds: [
          "{city} brands secure press and media coverage with our online PR solutions."
        ],
        newcastle: [
          "{city} businesses manage press releases and get noticed online."
        ],
        sheffield: [
          "{city} companies grow their authority with our online PR services."
        ],
        preston: [
          "{city} businesses benefit from increased digital visibility with our PR."
        ],
        wigan: [
          "{city} companies get noticed by the right people with our online PR."
        ]
      },
  // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["online pr"],
    templateSlug: "online-pr"
  },
  {
    name: "Affiliate Marketing",
    slug: "affiliate-marketing",
    description: "Drive growth with affiliate marketing solutions tailored to your business. We build partnerships, manage programs, and help you reach new customers through trusted affiliates.",
      cityDescriptions: {
        manchester: [
          "{city} businesses grow with our affiliate marketing solutions."
        ],
        liverpool: [
          "{city} companies reach new customers through trusted affiliates."
        ],
        leeds: [
          "{city} brands build partnerships and manage programs with our help."
        ],
        newcastle: [
          "{city} businesses drive growth with effective affiliate marketing."
        ],
        sheffield: [
          "{city} companies expand their reach with affiliate marketing."
        ],
        preston: [
          "{city} businesses benefit from tailored affiliate marketing solutions."
        ],
        wigan: [
          "{city} companies grow with trusted affiliate partnerships."
        ]
      },
    // suburbDescriptions removed; use getSuburbDescriptionsForService
    industries: industries.map(i => i.slug),
    keywords: ["affiliate marketing"],
    templateSlug: "affiliate-marketing"
  },
  // ...existing services...
];

// Utility to get suburb descriptions for a service and city
export function getSuburbDescriptionsForService(citySlug: string): Record<string, string> | undefined {
  return suburbDescriptionsByCity[citySlug];
}

// Utility to get full industry data for a service
export function getIndustryDataForService(service: Service): Industry[] {
  if (!service.industries) return [];
  return industries.filter(ind => service.industries?.includes(ind.slug));
}
export function getTargetedServices() {
  const targeted: Service[] = [];
  for (const service of services) {
    if (service.industries && service.templateSlug) {
      for (const industry of service.industries) {
        const industryName = industries.find(i => i.slug === industry)?.name || industry;
        // Use template functions for dynamic page generation
        targeted.push({
          ...service,
          name: getTitle(service.templateSlug, industryName),
          slug: `${service.slug}-${industry}`,
          description: getMetaDescription(service.templateSlug, industryName),
          industries: [industry],
          // Optionally add more template-driven fields here
        });
      }
    } else {
      targeted.push(service);
    }
  }
  return targeted;
}
