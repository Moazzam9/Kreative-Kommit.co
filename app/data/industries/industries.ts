// Centralised industries data
export interface Industry {
  name: string;
  slug: string;
  keywords?: string[];
  description?: string;
  facts?: string[];
  schema?: Record<string, unknown>;
}

export const industries: Industry[] = [
  { name: "Construction", slug: "construction", description: "Expert digital solutions for construction companies, contractors, and trades. We build high-performance websites, local SEO, and marketing campaigns to help you win more projects and grow your reputation." },
  { name: "Real Estate & Estate Agents", slug: "realestate", description: "Unlock property potential! We help estate agents and real estate pros showcase listings, attract buyers, and close deals with stunning websites and targeted SEO." },
  { name: "Healthcare & Medical Clinics", slug: "healthcare", description: "Healthy online presence! We support clinics and healthcare providers with accessible, trustworthy websites and local SEO that brings in new patients." },
  { name: "Education & Tutoring", slug: "education", description: "Make learning visible! We help schools, tutors, and educators connect with students and parents through engaging websites and smart search strategies." },
  { name: "E-commerce & Online Retail", slug: "ecommerce", description: "Sell more online! We build fast, secure, and conversion-focused e-commerce sites with SEO that brings shoppers straight to your store." },
  { name: "Hospitality (Hotels, B&Bs)", slug: "hospitality", description: "Fill more rooms! We help hotels and B&Bs get booked with beautiful sites, online booking, and local SEO that attracts travelers." },
  { name: "Automotive", slug: "automotive", description: "Drive more business! We tune up your online presence for dealerships, garages, and car washes with sleek sites and local search power." },
  { name: "Financial Services", slug: "financial", description: "Build trust and grow! We help accountants, insurance brokers, and financial advisors win clients with professional websites and SEO." },
  { name: "Trades", slug: "trades", description: "Get found for your skills! Plumbers, electricians, carpenters, and more—our sites and SEO help you win more local jobs." },
  { name: "Events & Wedding Planners", slug: "events", description: "Make every event unforgettable! We help planners showcase services, galleries, and reviews to attract more bookings." },
  { name: "Fitness & Wellness", slug: "fitness", description: "Grow your gym or studio! We build sites for fitness pros, yoga studios, and trainers that motivate signups and boost local visibility." },
  { name: "Technology & IT Services", slug: "technology", description: "Showcase your tech! We help IT firms and tech startups stand out with modern sites and SEO that attracts business clients." },
  { name: "Legal", slug: "legal", description: "Win your case online! Solicitors, barristers, and legal pros get trust-building sites and SEO that brings in new clients." },
  { name: "Childcare & Nurseries", slug: "childcare", description: "Care that shows! We help nurseries and childcare providers connect with parents through friendly, informative websites and local SEO." },
  { name: "Cleaning Services", slug: "cleaning", description: "Sparkle online! We help cleaning companies shine with sites that showcase services, reviews, and drive local leads." },
  { name: "Pet Services", slug: "pet", description: "Pawsitively great results! Groomers, kennels, and pet sitters get cute, trust-building sites and SEO that fetches new clients." },
  { name: "Photography & Videography", slug: "photography", description: "Picture-perfect online! We help photographers and videographers showcase portfolios and attract bookings with beautiful sites and SEO." },
  { name: "Transportation & Logistics", slug: "transport", description: "Move your business forward! We help logistics and transport firms get found with professional sites and targeted search strategies." },
  { name: "Nonprofits & Charities", slug: "nonprofit", description: "Make an impact! We help charities and nonprofits inspire support with engaging sites and SEO that grows your cause." },
  { name: "Food & Beverage", slug: "food", description: "Serve up more orders! Restaurants, caterers, and bakeries get delicious sites and local SEO that fills tables and order books." },
  { name: "Beauty & Spa", slug: "beauty", description: "Look good online! Salons, spas, and therapists get stylish sites and SEO that brings in new clients and repeat bookings." }
];
