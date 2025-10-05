// List of all niches for top-level pages
export interface Niche {
  name: string; // Display name
  slug: string; // URL slug
  description: string; // Short description
}

export const niches: Niche[] = [
  // Trades
  { name: "Plumbers", slug: "plumbers", description: "Web design and branding for plumbing and heating engineers" },
  { name: "Electricians", slug: "electricians", description: "Digital solutions for electrical contractors" },
  { name: "Roofers", slug: "roofers", description: "Websites and branding for roofing contractors" },
  { name: "Painters & Decorators", slug: "painters", description: "Online presence for painting and decorating businesses" },
  { name: "Flooring Specialists", slug: "flooring", description: "Digital marketing for flooring installation companies" },
  { name: "Window Cleaners", slug: "windowcleaners", description: "Websites for window cleaning services" },
  { name: "Construction", slug: "construction", description: "Digital solutions for construction companies" },
  { name: "Trades", slug: "trades", description: "General trade services branding and websites" },
  
  // Professional Services
  { name: "Vets", slug: "vets", description: "Veterinary practice websites and branding" },
  { name: "Dentists", slug: "dental", description: "Modern websites for dental practices" },
  { name: "Medical", slug: "medical", description: "Healthcare practice websites and patient portals" },
  { name: "Legal Services", slug: "legal", description: "Law firm websites and legal marketing" },
  { name: "Financial Services", slug: "financial", description: "Financial advisor and accountant websites" },
  
  // Business Services
  { name: "Real Estate", slug: "realestate", description: "Estate agent websites with property listings" },
  { name: "Recruitment", slug: "recruitment", description: "Job board and recruitment agency websites" },
  { name: "Security Services", slug: "security", description: "Security company websites and branding" },
  { name: "Cleaning Services", slug: "cleaning", description: "Commercial and domestic cleaning websites" },
  
  // Retail & Hospitality
  { name: "Restaurants", slug: "restaurant", description: "Restaurant websites with online ordering" },
  { name: "Food & Drink", slug: "fooddrink", description: "Food business websites and e-commerce" },
  { name: "Hospitality", slug: "hospitality", description: "Hotel and B&B booking websites" },
  { name: "Beauty & Spa", slug: "beauty", description: "Beauty salon websites with online booking" },
  
  // Lifestyle & Wellness
  { name: "Fitness & Gyms", slug: "fitness", description: "Gym and fitness studio websites" },
  { name: "Health & Wellness", slug: "healthwellness", description: "Wellness center and therapy websites" },
  { name: "Pet Services", slug: "petservices", description: "Pet grooming and boarding websites" },
  { name: "Childcare", slug: "childcare", description: "Nursery and childcare provider websites" },
  
  // Creative & Events
  { name: "Photography", slug: "photography", description: "Photographer portfolio and booking websites" },
  { name: "Events & Weddings", slug: "events", description: "Event planning and wedding websites" },
  { name: "Arts & Culture", slug: "artsculture", description: "Gallery and cultural organization websites" },
  { name: "Sports", slug: "sports", description: "Sports club and coaching websites" },
  
  // Tech & Education
  { name: "Technology & IT", slug: "tech", description: "IT services and tech startup websites" },
  { name: "Education", slug: "education", description: "School and tutoring websites" },
  
  // Specialist
  { name: "Automotive", slug: "automotive", description: "Car dealership and garage websites" },
  { name: "Travel & Tourism", slug: "traveltourism", description: "Travel agency and tour operator websites" },
  { name: "Home & Garden", slug: "homegarden", description: "Home improvement and garden center websites" },
  { name: "Charity", slug: "charity", description: "Nonprofit and charity websites" },
  { name: "Branding", slug: "branding", description: "Professional branding and identity services" },
];
