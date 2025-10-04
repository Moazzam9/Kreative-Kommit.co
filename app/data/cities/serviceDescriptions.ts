// Generic fallback descriptions for each service
export const genericServiceDescriptions: { [serviceSlug: string]: string } = {
  'seo-optimisation': "Our SEO optimisation services help your business climb the search rankings, get found, and get results—no matter where you are!",
  'web-design': "We design beautiful, high-converting websites for businesses in every city. Get ready to impress your audience!",
  'content-marketing': "We craft content that’s so engaging, your audience will forget to scroll TikTok. Blogs, guides, and more, all designed to boost your brand and charm search engines!",
  'social-media-management': "We’ll make your socials sparkle, sizzle, and actually get noticed. From memes to meaningful moments, we grow your followers and keep your brand top-of-feed!",
  'ppc-advertising': "Our PPC campaigns are so targeted, they could find a needle in a haystack. Get instant clicks, measurable ROI, and ads that make your competitors cry (in a good way).",
  'branding-identity': "Stand out from the crowd! We create memorable logos, brand guidelines, and visual identities that make your business instantly recognisable and trusted!",
  'security-maintenance': "Sleep easy while we keep your website safe, secure, and running like a dream! Our security and maintenance services protect your site from hackers, downtime, and digital disasters—so you can focus on growing your business.",
  'email-marketing': "Turn subscribers into superfans! Our email marketing campaigns are crafted to boost your open rates, drive sales, and keep your brand top-of-inbox in every city.",
  'conversion-rate-optimisation': "Get more from every click! Our CRO services use data, A/B testing, and clever UX tweaks to turn your visitors into loyal customers—no magic wand required.",
  'analytics-reporting': "Know what’s working and what’s not! Our analytics and reporting services give you crystal-clear insights, so you can make smart, data-driven decisions and outsmart the competition.",
  'website-audits': "Is your website underperforming? Our deep-dive audits uncover hidden SEO issues, technical gremlins, and UX roadblocks—then give you a clear, actionable plan to boost your rankings and results!"
};

// ==================================================================================
// CITY SERVICE DESCRIPTIONS - Consolidated (22 major cities + generic fallbacks)
// ==================================================================================
// This file contains ALL service descriptions
// - 22 Major UK Cities: Unique, SEO-optimized descriptions (242 total)
// - Remaining 500+ Cities: Use genericServiceDescriptions (fallback)
// ==================================================================================

export const cityServiceDescriptions: Record<string, Record<string, string>> = {
  "london": {
    "seo-optimisation": "Dominate London's competitive digital landscape! Our SEO experts understand the capital's unique market from Shoreditch startups to City finance firms. Get found by over 9 million Londoners and international customers searching for your services.",
    "web-design": "Websites as iconic as the London skyline! We design premium, high-converting sites for London businesses competing in the world's most demanding market. From Canary Wharf corporates to Camden creatives, we deliver digital excellence.",
    "content-marketing": "From Fleet Street to modern content marketing—London sets global standards! We create compelling stories that resonate with sophisticated London audiences while dominating search rankings across the capital and beyond.",
    "social-media-management": "Make your London brand unmissable! Our social media strategies cut through the capital's noise, building engaged communities from Soho to Stratford. Perfect for businesses targeting London's diverse, digitally-savvy audience.",
    "ppc-advertising": "Maximize ROI in London's premium market! Our PPC campaigns deliver instant results across the capital's competitive landscape. Target high-value London customers with precision and watch your business grow.",
    "branding-identity": "Create a brand as memorable as London itself! From startups in Shoreditch to established firms in Mayfair, we craft visual identities that command attention and trust in the world's leading business capital.",
    "security-maintenance": "Protect your London business 24/7! Our enterprise-grade security keeps your site safe from cyber threats targeting UK capital businesses. Focus on growth while we handle technical excellence.",
    "email-marketing": "Turn London subscribers into loyal customers! Our email campaigns deliver exceptional results for capital businesses, from retail in Oxford Street to professional services in The City.",
    "conversion-rate-optimisation": "Boost London conversions with data-driven CRO! In the capital's competitive market, every click counts. We optimize your site to convert sophisticated London visitors into paying customers.",
    "analytics-reporting": "Make smarter decisions with London-focused analytics! Understand your capital customers, track ROI, and stay ahead of competition with insights tailored for London's dynamic market.",
    "website-audits": "Is your London website underperforming? Our comprehensive audits identify exactly what's holding you back in the capital's competitive search rankings, with actionable plans for improvement."
  },

  "birmingham": {
    "seo-optimisation": "Lead Birmingham's digital revolution! Our SEO services help you dominate local search from the Bullring to Brindleyplace. As the UK's second city grows, make sure 1.1 million Brummies find your business first.",
    "web-design": "Websites as dynamic as Birmingham's transformation! We design high-converting sites for Midlands businesses leading in manufacturing, tech, finance and retail. Modern design for a modern city.",
    "content-marketing": "From the Industrial Revolution to digital content—Birmingham innovates! We create powerful content that engages Midlands audiences and ranks top in search, helping your business stand out across Britain's second city.",
    "social-media-management": "Make Birmingham talk about your brand! Our social media expertise grows your following across the city's vibrant communities, from Digbeth's creative quarter to Edgbaston's professionals.",
    "ppc-advertising": "Drive instant results across Birmingham! Our PPC campaigns target the Midlands' thriving market with precision, delivering more clicks, calls and customers to your business fast.",
    "branding-identity": "Give your Birmingham business a brand that stands out! Bold, memorable visual identities that resonate with Midlands customers and reflect the city's innovative spirit.",
    "security-maintenance": "Keep your Birmingham website secure and powerful! Our maintenance services protect Midlands businesses from digital threats while ensuring peak performance 24/7.",
    "email-marketing": "Turn Birmingham subscribers into superfans! Our email campaigns boost engagement and drive sales for Midlands businesses, keeping your brand top-of-inbox across the second city.",
    "conversion-rate-optimisation": "Maximize Birmingham conversions! Our CRO services use data and UX expertise to turn more visitors into customers, perfect for businesses competing in the Midlands market.",
    "analytics-reporting": "Master Birmingham's market with clear insights! Our analytics help you understand local customers, track performance, and make data-driven decisions for Midlands success.",
    "website-audits": "Boost your Birmingham rankings! Our detailed audits uncover technical issues and SEO opportunities, giving you a clear roadmap to dominate Midlands search results."
  },

  "manchester": {
    "seo-optimisation": "Take your Manchester business to the top of Google! Our SEO experts know the Northern Quarter from Deansgate—get found by more Mancunians and beyond. Dominate local search in the UK's third city.",
    "web-design": "Websites as bold as Manchester's skyline! We build stunning, high-converting sites for Northern businesses that want to stand out in the heart of innovation and culture.",
    "content-marketing": "From music legends to modern brands—Manchester knows content! We'll craft stories and guides that charm your audience and search engines alike, perfect for the North's creative capital.",
    "social-media-management": "Make your Manchester brand the talk of the town! Our social media magic gets you noticed, shared, and followed by the right crowd across Greater Manchester.",
    "ppc-advertising": "Get instant results with PPC campaigns tailored for Manchester's competitive market. More clicks, more calls, more customers—fast! Target the North's most dynamic audience.",
    "branding-identity": "Give your Manchester business a brand as iconic as the city itself. Memorable logos, bold visuals, and a look Mancunians trust! Stand out in the Northern Powerhouse.",
    "security-maintenance": "Keep your Manchester website safe and sound! Our security and maintenance services protect your site from digital threats while you focus on growing your Northern business.",
    "email-marketing": "Turn Manchester subscribers into superfans! Our email campaigns boost your open rates and keep your brand top-of-inbox across the city's thriving communities.",
    "conversion-rate-optimisation": "Get more from every click in Manchester! Our CRO services use data, A/B testing, and clever UX tweaks to turn visitors into loyal customers in the competitive Northern market.",
    "analytics-reporting": "Know what's working in Manchester! Our analytics and reporting services give you crystal-clear insights to outsmart the competition in the Northern Powerhouse.",
    "website-audits": "Is your Manchester website underperforming? Our deep-dive audits uncover hidden SEO issues and give you a clear plan to boost your rankings across the North!"
  },

  "leeds": {
    "seo-optimisation": "Conquer Leeds' digital marketplace! Our SEO services help your business dominate local search across Yorkshire's thriving capital. Get found by 800,000+ Leeds residents and beyond.",
    "web-design": "Websites as impressive as Leeds' modern architecture! We design high-converting sites for Yorkshire businesses, from financial services to creative agencies. Professional design for a professional city.",
    "content-marketing": "From Victorian mills to digital excellence—Leeds leads! We create engaging content that ranks top in search and resonates with Yorkshire audiences, establishing your brand as a local authority.",
    "social-media-management": "Make Leeds talk about your brand! Our social media strategies build engaged communities from Headingley to Holbeck, perfect for businesses targeting Yorkshire's largest city.",
    "ppc-advertising": "Drive instant results across Leeds! Our PPC campaigns deliver targeted traffic to Yorkshire businesses, maximizing ROI in one of the North's most competitive markets.",
    "branding-identity": "Create a brand as memorable as Leeds itself! Strong visual identities that connect with Yorkshire customers and reflect the city's blend of heritage and innovation.",
    "security-maintenance": "Protect your Leeds business online! Our security and maintenance services keep Yorkshire sites safe, secure, and performing at peak levels 24/7.",
    "email-marketing": "Turn Leeds subscribers into loyal customers! Our email campaigns drive engagement and sales for Yorkshire businesses, keeping your brand front-of-mind across the region.",
    "conversion-rate-optimisation": "Boost Leeds conversions with expert CRO! We optimize every element to turn more Yorkshire visitors into paying customers, maximizing your digital investment.",
    "analytics-reporting": "Master Leeds' market with data-driven insights! Our analytics help you understand Yorkshire customers and make smarter business decisions for sustained growth.",
    "website-audits": "Improve your Leeds rankings! Our comprehensive audits identify exactly what's holding back your Yorkshire site, with clear steps to dominate local search."
  },

  "bristol": {
    "seo-optimisation": "Elevate your Bristol business to the top of search! Our SEO expertise helps you dominate local results from Clifton to Cabot Circus. Get found by 450,000+ Bristolians and West Country customers.",
    "web-design": "Websites as creative as Bristol's street art! We design stunning, high-converting sites for South West businesses. From tech startups to established firms, we deliver digital excellence.",
    "content-marketing": "From Brunel to digital brilliance—Bristol innovates! We craft compelling content that engages West Country audiences and ranks top in search, perfect for Bristol's creative spirit.",
    "social-media-management": "Make Bristol buzz about your brand! Our social media strategies grow your following across the South West's creative communities, from Harbourside to Stokes Croft.",
    "ppc-advertising": "Drive instant results across Bristol! Our PPC campaigns target the South West's thriving market with precision, delivering quality traffic and conversions fast.",
    "branding-identity": "Give your Bristol business a standout brand! Creative visual identities that resonate with West Country customers and reflect the city's innovative, independent spirit.",
    "security-maintenance": "Keep your Bristol website secure and performing! Our maintenance services protect South West businesses from cyber threats while ensuring optimal site performance.",
    "email-marketing": "Turn Bristol subscribers into superfans! Our email campaigns boost engagement for West Country businesses, keeping your brand top-of-inbox across the region.",
    "conversion-rate-optimisation": "Maximize Bristol conversions! Our CRO services use data and UX expertise to turn more South West visitors into customers, perfect for Bristol's competitive market.",
    "analytics-reporting": "Understand Bristol's market with clear analytics! Our reporting helps you track performance and make data-driven decisions for West Country success.",
    "website-audits": "Boost your Bristol search rankings! Our detailed audits uncover SEO opportunities and technical issues, giving you a roadmap to dominate South West search."
  },

  "sheffield": {
    "seo-optimisation": "Dominate Sheffield's digital landscape! Our SEO services help your business climb to the top of local search across South Yorkshire. Get found by 580,000+ Sheffield residents and beyond.",
    "web-design": "Websites as strong as Sheffield's steel heritage! We design robust, high-converting sites for Yorkshire businesses. Modern functionality meets timeless quality.",
    "content-marketing": "From steel city to content city—Sheffield adapts! We create powerful content that ranks top in search and engages South Yorkshire audiences, establishing your local authority.",
    "social-media-management": "Make Sheffield talk about your brand! Our social media expertise grows your following from Kelham Island to Ecclesall, perfect for engaging Yorkshire's creative communities.",
    "ppc-advertising": "Drive instant Sheffield results! Our PPC campaigns target South Yorkshire's market with precision, delivering more clicks, calls and customers to your business.",
    "branding-identity": "Give your Sheffield business a memorable brand! Strong visual identities that connect with Yorkshire customers and reflect the city's industrial heritage and modern innovation.",
    "security-maintenance": "Protect your Sheffield website 24/7! Our security services keep South Yorkshire businesses safe from digital threats while maintaining peak performance.",
    "email-marketing": "Turn Sheffield subscribers into loyal customers! Our email campaigns drive engagement across South Yorkshire, keeping your brand front-of-mind in the Steel City.",
    "conversion-rate-optimisation": "Boost Sheffield conversions with expert CRO! We optimize your site to turn more Yorkshire visitors into paying customers, maximizing every click.",
    "analytics-reporting": "Master Sheffield's market with data! Our analytics provide clear insights to help you understand South Yorkshire customers and grow strategically.",
    "website-audits": "Improve your Sheffield search rankings! Our comprehensive audits identify opportunities to boost your South Yorkshire site's performance and visibility."
  },

  "newcastle": {
    "seo-optimisation": "Lead Newcastle's digital charge! Our SEO services help you dominate Tyneside search results. Get found by 300,000+ Geordies and customers across the North East.",
    "web-design": "Websites as dynamic as Newcastle's Quayside! We design high-converting sites for North East businesses. Modern, functional, and built to perform in competitive markets.",
    "content-marketing": "From shipbuilding to storytelling—Newcastle delivers! We craft engaging content that ranks top in search and resonates with Geordie audiences, perfect for North East brands.",
    "social-media-management": "Make Newcastle buzz about your brand! Our social media strategies grow your following across Tyneside's vibrant communities, from the city center to the coast.",
    "ppc-advertising": "Drive instant results across Newcastle! Our PPC campaigns target the North East market with precision, delivering quality traffic and conversions for Tyneside businesses.",
    "branding-identity": "Give your Newcastle business a standout brand! Bold visual identities that connect with Geordie customers and reflect the region's proud heritage and modern ambition.",
    "security-maintenance": "Keep your Newcastle website secure! Our maintenance services protect North East businesses from cyber threats while ensuring your site runs smoothly 24/7.",
    "email-marketing": "Turn Newcastle subscribers into superfans! Our email campaigns boost engagement across Tyneside, keeping your brand top-of-inbox throughout the North East.",
    "conversion-rate-optimisation": "Maximize Newcastle conversions! Our CRO services optimize every element to turn more Geordie visitors into paying customers.",
    "analytics-reporting": "Understand Newcastle's market with clear data! Our analytics help you track performance and make smart decisions for North East growth.",
    "website-audits": "Boost your Newcastle rankings! Our detailed audits uncover opportunities to improve your Tyneside site's performance and dominate local search."
  },

  "nottingham": {
    "seo-optimisation": "Rule Nottingham's digital realm! Our SEO services help you dominate East Midlands search results. Get found by 330,000+ Nottingham residents and customers across the region.",
    "web-design": "Websites as legendary as Nottingham's history! We design high-converting sites for Midlands businesses. From creative agencies to retail, we deliver digital excellence.",
    "content-marketing": "From Robin Hood to content heroes—Nottingham tells stories! We create compelling content that ranks top and engages East Midlands audiences perfectly.",
    "social-media-management": "Make Nottingham talk about your brand! Our social media strategies grow your following from Hockley to West Bridgford, connecting with the city's diverse communities.",
    "ppc-advertising": "Drive instant Nottingham results! Our PPC campaigns target the East Midlands market precisely, delivering more traffic and conversions to your business.",
    "branding-identity": "Give your Nottingham business a heroic brand! Memorable visual identities that resonate with Midlands customers and reflect the city's legendary spirit.",
    "security-maintenance": "Protect your Nottingham website round the clock! Our security services keep East Midlands businesses safe from digital threats and running smoothly.",
    "email-marketing": "Turn Nottingham subscribers into loyal fans! Our email campaigns boost engagement across the East Midlands, keeping your brand top-of-inbox.",
    "conversion-rate-optimisation": "Boost Nottingham conversions with data-driven CRO! We optimize your site to turn more East Midlands visitors into customers.",
    "analytics-reporting": "Master Nottingham's market with clear insights! Our analytics help you understand Midlands customers and make data-driven decisions for growth.",
    "website-audits": "Improve your Nottingham rankings! Our comprehensive audits identify opportunities to boost your East Midlands site's search performance."
  },

  "leicester": {
    "seo-optimisation": "Conquer Leicester's digital market! Our SEO services help you dominate East Midlands search results. Get found by 350,000+ Leicester residents and regional customers.",
    "web-design": "Websites as diverse as Leicester itself! We design high-converting sites for Midlands businesses serving one of the UK's most multicultural cities. Modern, accessible, effective.",
    "content-marketing": "From textile heritage to digital content—Leicester evolves! We create powerful content that ranks top and resonates with the city's diverse, engaged audience.",
    "social-media-management": "Make Leicester talk about your brand! Our social media strategies grow your following across the city's vibrant communities, perfect for multicultural marketing.",
    "ppc-advertising": "Drive instant Leicester results! Our PPC campaigns target the East Midlands market with precision, delivering quality traffic to your business fast.",
    "branding-identity": "Give your Leicester business a distinctive brand! Visual identities that connect with diverse Midlands customers and reflect the city's inclusive character.",
    "security-maintenance": "Keep your Leicester website secure and fast! Our maintenance services protect East Midlands businesses while ensuring optimal performance 24/7.",
    "email-marketing": "Turn Leicester subscribers into superfans! Our email campaigns boost engagement across the East Midlands, driving sales for local businesses.",
    "conversion-rate-optimisation": "Maximize Leicester conversions! Our CRO services use data and UX expertise to turn more Midlands visitors into paying customers.",
    "analytics-reporting": "Understand Leicester's market with data! Our analytics provide insights to help you connect with diverse East Midlands customers effectively.",
    "website-audits": "Boost your Leicester search rankings! Our audits uncover exactly what's needed to improve your East Midlands site's performance and visibility."
  },

  "southampton": {
    "seo-optimisation": "Navigate to the top of Southampton search! Our SEO services help you dominate local results from the port to the city center. Get found by 250,000+ Southampton residents.",
    "web-design": "Websites as impressive as Southampton's maritime heritage! We design high-converting sites for South Coast businesses. Professional, modern, and built to perform.",
    "content-marketing": "From historic port to content hub—Southampton connects! We craft engaging content that ranks top and resonates with South Coast audiences.",
    "social-media-management": "Make Southampton buzz about your brand! Our social media strategies grow your following across the South Coast's dynamic communities.",
    "ppc-advertising": "Drive instant Southampton results! Our PPC campaigns target the South Coast market with precision, delivering quality traffic and conversions.",
    "branding-identity": "Give your Southampton business a standout brand! Strong visual identities that connect with South Coast customers and reflect maritime excellence.",
    "security-maintenance": "Keep your Southampton website secure! Our maintenance services protect South Coast businesses from cyber threats while maintaining peak performance.",
    "email-marketing": "Turn Southampton subscribers into loyal customers! Our email campaigns boost engagement across the South Coast region.",
    "conversion-rate-optimisation": "Maximize Southampton conversions! Our CRO services optimize your site to turn more South Coast visitors into paying customers.",
    "analytics-reporting": "Master Southampton's market with data! Our analytics help you understand South Coast customers and make strategic decisions.",
    "website-audits": "Improve your Southampton rankings! Our audits identify opportunities to boost your South Coast site's search performance."
  },

  "brighton": {
    "seo-optimisation": "Shine bright in Brighton's digital scene! Our SEO services help you dominate South Coast search from the Lanes to the seafront. Get found by 280,000+ Brighton residents.",
    "web-design": "Websites as creative as Brighton itself! We design stunning, high-converting sites for South Coast's most innovative businesses. Bold, beautiful, effective.",
    "content-marketing": "From bohemian charm to brilliant content—Brighton inspires! We create engaging content that ranks top and resonates with the city's creative, diverse audience.",
    "social-media-management": "Make Brighton buzz about your brand! Our social media expertise grows your following across the South Coast's most connected community.",
    "ppc-advertising": "Drive instant Brighton results! Our PPC campaigns target the South Coast's creative market with precision, delivering quality traffic fast.",
    "branding-identity": "Give your Brighton business a unique brand! Creative visual identities that stand out in one of the UK's most distinctive cities.",
    "security-maintenance": "Keep your Brighton website secure and sparkling! Our maintenance services protect South Coast businesses while ensuring peak performance.",
    "email-marketing": "Turn Brighton subscribers into superfans! Our email campaigns boost engagement across the South Coast's most creative audience.",
    "conversion-rate-optimisation": "Maximize Brighton conversions! Our CRO services turn more creative, discerning visitors into loyal customers.",
    "analytics-reporting": "Understand Brighton's unique market! Our analytics provide insights to help you connect with the South Coast's creative communities.",
    "website-audits": "Boost your Brighton rankings! Our audits uncover opportunities to improve your South Coast site's search performance."
  },

  "york": {
    "seo-optimisation": "Dominate York's historic digital marketplace! Our SEO services help you rank top across North Yorkshire. Get found by tourists and 200,000+ York residents alike.",
    "web-design": "Websites blending York's heritage with modern design! We create high-converting sites for North Yorkshire businesses balancing tradition and innovation.",
    "content-marketing": "From Roman ruins to modern content—York storytells! We craft content that ranks top and engages both local and tourist audiences perfectly.",
    "social-media-management": "Make York talk about your brand! Our social media strategies grow your following in one of England's most historic and visited cities.",
    "ppc-advertising": "Drive instant York results! Our PPC campaigns target North Yorkshire's unique market, perfect for tourism, retail and professional services.",
    "branding-identity": "Give your York business a timeless brand! Visual identities that honor heritage while appealing to modern North Yorkshire customers.",
    "security-maintenance": "Keep your York website secure and performing! Our maintenance services protect North Yorkshire businesses while ensuring reliability.",
    "email-marketing": "Turn York subscribers into loyal customers! Our email campaigns drive engagement across North Yorkshire's discerning audience.",
    "conversion-rate-optimisation": "Boost York conversions with expert CRO! We optimize your site to convert both local residents and tourist traffic effectively.",
    "analytics-reporting": "Master York's unique market with data! Our analytics help you understand North Yorkshire's blend of local and visitor customers.",
    "website-audits": "Improve your York rankings! Our audits identify opportunities to boost your North Yorkshire site's search visibility."
  },

  "bradford": {
    "seo-optimisation": "Lead Bradford's digital transformation! Our SEO services help you dominate West Yorkshire search results. Get found by 540,000+ Bradford residents and beyond.",
    "web-design": "Websites as dynamic as Bradford's evolution! We design high-converting sites for West Yorkshire businesses. Modern design for a city on the rise.",
    "content-marketing": "From textile heritage to digital content—Bradford adapts! We create powerful content that ranks top and engages diverse West Yorkshire audiences.",
    "social-media-management": "Make Bradford talk about your brand! Our social media strategies grow your following across one of Yorkshire's most diverse cities.",
    "ppc-advertising": "Drive instant Bradford results! Our PPC campaigns target West Yorkshire's growing market with precision and cultural awareness.",
    "branding-identity": "Give your Bradford business a memorable brand! Visual identities that connect with diverse West Yorkshire customers and reflect modern Bradford.",
    "security-maintenance": "Protect your Bradford website 24/7! Our security services keep West Yorkshire businesses safe from digital threats.",
    "email-marketing": "Turn Bradford subscribers into loyal customers! Our email campaigns boost engagement across West Yorkshire's diverse communities.",
    "conversion-rate-optimisation": "Maximize Bradford conversions! Our CRO services optimize your site for West Yorkshire's multicultural market.",
    "analytics-reporting": "Understand Bradford's market with data! Our analytics help you connect with diverse West Yorkshire customers effectively.",
    "website-audits": "Boost your Bradford rankings! Our audits identify opportunities to improve your West Yorkshire site's search performance."
  },

  "coventry": {
    "seo-optimisation": "Rise to the top of Coventry search! Our SEO services help you dominate West Midlands results. Get found by 370,000+ Coventry residents and regional customers.",
    "web-design": "Websites as innovative as Coventry's rebirth! We design high-converting sites for Midlands businesses in one of the UK's fastest-growing cities.",
    "content-marketing": "From phoenix city to content powerhouse—Coventry transforms! We create engaging content that ranks top and resonates with West Midlands audiences.",
    "social-media-management": "Make Coventry talk about your brand! Our social media strategies grow your following across the West Midlands' rising star city.",
    "ppc-advertising": "Drive instant Coventry results! Our PPC campaigns target the West Midlands market with precision, perfect for the city's growing economy.",
    "branding-identity": "Give your Coventry business a forward-thinking brand! Visual identities that reflect the West Midlands' innovation and ambition.",
    "security-maintenance": "Keep your Coventry website secure and performing! Our maintenance services protect West Midlands businesses round the clock.",
    "email-marketing": "Turn Coventry subscribers into superfans! Our email campaigns boost engagement across the West Midlands' dynamic market.",
    "conversion-rate-optimisation": "Maximize Coventry conversions! Our CRO services optimize your site for one of the Midlands' most competitive markets.",
    "analytics-reporting": "Master Coventry's growing market! Our analytics help you understand West Midlands customers and capitalize on the city's growth.",
    "website-audits": "Boost your Coventry rankings! Our audits uncover opportunities to dominate West Midlands search results."
  },

  "plymouth": {
    "seo-optimisation": "Command Plymouth's digital waters! Our SEO services help you dominate South West search from the Hoe to the harbor. Get found by 265,000+ Plymouth residents.",
    "web-design": "Websites as bold as Plymouth's maritime heritage! We design high-converting sites for South West businesses with naval precision and modern flair.",
    "content-marketing": "From naval history to digital content—Plymouth navigates! We craft compelling content that ranks top and engages Devon and Cornwall audiences.",
    "social-media-management": "Make Plymouth talk about your brand! Our social media strategies grow your following across the South West's ocean city.",
    "ppc-advertising": "Drive instant Plymouth results! Our PPC campaigns target the South West market with precision, perfect for coastal and city businesses.",
    "branding-identity": "Give your Plymouth business a commanding brand! Visual identities that reflect maritime heritage and modern South West ambition.",
    "security-maintenance": "Keep your Plymouth website secure as a naval base! Our maintenance services protect South West businesses from digital threats.",
    "email-marketing": "Turn Plymouth subscribers into loyal customers! Our email campaigns boost engagement across Devon and the wider South West.",
    "conversion-rate-optimisation": "Maximize Plymouth conversions with strategic CRO! We optimize your site to turn South West visitors into paying customers.",
    "analytics-reporting": "Navigate Plymouth's market with data! Our analytics help you understand South West customers and chart a course for growth.",
    "website-audits": "Boost your Plymouth rankings! Our audits identify opportunities to improve your South West site's search performance."
  },

  "wolverhampton": {
    "seo-optimisation": "Lead Wolverhampton's digital pack! Our SEO services help you dominate West Midlands search results. Get found by 265,000+ Wolverhampton residents.",
    "web-design": "Websites as strong as Wolverhampton's industrial legacy! We design high-converting sites for West Midlands businesses with power and precision.",
    "content-marketing": "From manufacturing might to content excellence—Wolverhampton delivers! We create powerful content that ranks top across the West Midlands.",
    "social-media-management": "Make Wolverhampton buzz about your brand! Our social media strategies grow your following across the Black Country's thriving communities.",
    "ppc-advertising": "Drive instant Wolverhampton results! Our PPC campaigns target the West Midlands market with precision and local knowledge.",
    "branding-identity": "Give your Wolverhampton business a powerful brand! Visual identities that connect with Black Country customers and reflect local pride.",
    "security-maintenance": "Protect your Wolverhampton website with strength! Our security services keep West Midlands businesses safe and performing optimally.",
    "email-marketing": "Turn Wolverhampton subscribers into loyal fans! Our email campaigns boost engagement across the Black Country region.",
    "conversion-rate-optimisation": "Maximize Wolverhampton conversions! Our CRO services optimize your site for the competitive West Midlands market.",
    "analytics-reporting": "Master Wolverhampton's market with data! Our analytics help you understand Black Country customers and grow strategically.",
    "website-audits": "Boost your Wolverhampton rankings! Our audits identify opportunities to dominate West Midlands search results."
  },

  "portsmouth": {
    "seo-optimisation": "Anchor your Portsmouth business at the top of search! Our SEO services help you dominate South Coast results. Get found by 240,000+ Portsmouth residents.",
    "web-design": "Websites as commanding as Portsmouth's naval heritage! We design high-converting sites for South Coast businesses with precision and power.",
    "content-marketing": "From historic dockyard to digital content—Portsmouth delivers! We craft engaging content that ranks top and resonates with South Coast audiences.",
    "social-media-management": "Make Portsmouth buzz about your brand! Our social media strategies grow your following across the South Coast's historic port city.",
    "ppc-advertising": "Drive instant Portsmouth results! Our PPC campaigns target the South Coast market with naval precision and local expertise.",
    "branding-identity": "Give your Portsmouth business a commanding brand! Visual identities that reflect maritime excellence and modern South Coast ambition.",
    "security-maintenance": "Keep your Portsmouth website secure as the fleet! Our maintenance services protect South Coast businesses round the clock.",
    "email-marketing": "Turn Portsmouth subscribers into loyal customers! Our email campaigns boost engagement across the South Coast region.",
    "conversion-rate-optimisation": "Maximize Portsmouth conversions with strategic CRO! We optimize your site to turn South Coast visitors into paying customers.",
    "analytics-reporting": "Navigate Portsmouth's market with data! Our analytics help you understand South Coast customers and chart successful growth.",
    "website-audits": "Boost your Portsmouth rankings! Our audits identify opportunities to improve your South Coast site's search dominance."
  },

  "warrington": {
    "seo-optimisation": "Put your Warrington business on the digital map! Our SEO services help you climb the search rankings and get found by more locals across Cheshire.",
    "web-design": "Websites as dynamic as Warrington's growth! We design high-converting sites that make your Cheshire business shine online.",
    "content-marketing": "From the Golden Square to the parks—Warrington loves a good story! We'll create content that engages your audience and delights search engines.",
    "social-media-management": "Get Warrington talking! Our social media management grows your followers and keeps your brand top-of-feed across Cheshire.",
    "ppc-advertising": "Drive instant results in Warrington with targeted PPC campaigns. More clicks, more calls, more customers—fast across the North West!",
    "branding-identity": "Give your Warrington business a brand as memorable as the city itself. Bold logos, strong visuals, and a look locals trust!",
    "security-maintenance": "Keep your Warrington website secure and running smoothly! Our maintenance plans protect you from digital hiccups and downtime.",
    "email-marketing": "Turn Warrington subscribers into loyal fans! Our email marketing keeps your audience engaged and your brand top-of-inbox.",
    "conversion-rate-optimisation": "Boost your Warrington conversions! Our CRO services turn more visitors into customers with smart UX and data-driven tweaks.",
    "analytics-reporting": "See what's working in Warrington! Our analytics and reporting help you make smart, data-driven decisions across Cheshire.",
    "website-audits": "Is your Warrington website underperforming? Our audits uncover hidden issues and give you a clear plan to improve your rankings!"
  },

  "glasgow": {
    "seo-optimisation": "Dominate Glasgow's digital landscape! Our SEO services help you rank top across Scotland's largest city. Get found by 635,000+ Glaswegians and customers across the Central Belt.",
    "web-design": "Websites as bold as Glasgow's style! We design high-converting sites for Scottish businesses. Creative, functional, and built for Scotland's commercial capital.",
    "content-marketing": "From shipyards to digital content—Glasgow delivers! We craft compelling content that ranks top and resonates with Scottish audiences perfectly.",
    "social-media-management": "Make Glasgow talk about your brand! Our social media strategies grow your following across Scotland's most vibrant and connected city.",
    "ppc-advertising": "Drive instant Glasgow results! Our PPC campaigns target Scotland's largest market with precision, delivering quality traffic and conversions.",
    "branding-identity": "Give your Glasgow business a distinctive brand! Bold visual identities that connect with Scottish customers and reflect the city's creative spirit.",
    "security-maintenance": "Keep your Glasgow website secure round the clock! Our maintenance services protect Scottish businesses from cyber threats.",
    "email-marketing": "Turn Glasgow subscribers into superfans! Our email campaigns boost engagement across Scotland's commercial capital.",
    "conversion-rate-optimisation": "Maximize Glasgow conversions! Our CRO services optimize your site to turn more Scottish visitors into paying customers.",
    "analytics-reporting": "Master Glasgow's market with data! Our analytics help you understand Scottish customers and dominate the Central Belt.",
    "website-audits": "Boost your Glasgow rankings! Our comprehensive audits identify opportunities to dominate Scottish search results."
  },

  "edinburgh": {
    "seo-optimisation": "Rule Edinburgh's digital realm! Our SEO services help you dominate Scotland's capital search results. Get found by 530,000+ Edinburgh residents and tourists.",
    "web-design": "Websites as elegant as Edinburgh's architecture! We design high-converting sites for Scottish businesses. Professional, cultured, effective.",
    "content-marketing": "From festival city to content excellence—Edinburgh inspires! We create sophisticated content that ranks top and engages Scotland's most educated audience.",
    "social-media-management": "Make Edinburgh buzz about your brand! Our social media strategies grow your following in Scotland's capital and cultural center.",
    "ppc-advertising": "Drive instant Edinburgh results! Our PPC campaigns target Scotland's capital market with precision, perfect for professional services and tourism.",
    "branding-identity": "Give your Edinburgh business a distinguished brand! Visual identities that reflect Scottish capital sophistication and heritage.",
    "security-maintenance": "Protect your Edinburgh website with Scottish reliability! Our maintenance services keep capital businesses secure and performing optimally.",
    "email-marketing": "Turn Edinburgh subscribers into loyal customers! Our email campaigns boost engagement across Scotland's most professional audience.",
    "conversion-rate-optimisation": "Maximize Edinburgh conversions with expert CRO! We optimize your site for Scotland's capital's discerning visitors.",
    "analytics-reporting": "Master Edinburgh's unique market! Our analytics help you understand Scotland's capital customers and festival visitors alike.",
    "website-audits": "Improve your Edinburgh rankings! Our audits identify opportunities to dominate Scottish capital search results."
  },

  "cardiff": {
    "seo-optimisation": "Lead Cardiff's digital charge! Our SEO services help you dominate Wales' capital search results. Get found by 365,000+ Cardiff residents and visitors.",
    "web-design": "Websites as dynamic as Cardiff's transformation! We design high-converting sites for Welsh businesses. Modern, bilingual-ready, effective.",
    "content-marketing": "From coal to digital content—Cardiff evolves! We craft engaging content that ranks top and resonates with Welsh audiences perfectly.",
    "social-media-management": "Make Cardiff talk about your brand! Our social media strategies grow your following across Wales' vibrant capital city.",
    "ppc-advertising": "Drive instant Cardiff results! Our PPC campaigns target Wales' capital market with precision and cultural awareness.",
    "branding-identity": "Give your Cardiff business a standout brand! Visual identities that connect with Welsh customers and reflect modern Cardiff.",
    "security-maintenance": "Keep your Cardiff website secure and performing! Our maintenance services protect Welsh businesses round the clock.",
    "email-marketing": "Turn Cardiff subscribers into superfans! Our email campaigns boost engagement across Wales' capital region.",
    "conversion-rate-optimisation": "Maximize Cardiff conversions! Our CRO services optimize your site for Wales' most competitive market.",
    "analytics-reporting": "Master Cardiff's market with data! Our analytics help you understand Welsh capital customers and regional visitors.",
    "website-audits": "Boost your Cardiff rankings! Our audits identify opportunities to dominate Welsh search results."
  }
};
