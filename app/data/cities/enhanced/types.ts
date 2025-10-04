/**
 * Enhanced City Data Types
 * Used for rich, unique content on major UK city pages
 */

export interface CityDemographics {
  businesses: number; // Number of active businesses
  avgIncome?: number; // Average household income (£)
  economicGrowth?: string; // e.g., "+5.2% YoY"
}

export interface EnhancedCity {
  slug: string;
  name: string;
  population: number;
  keyIndustries: string[]; // Top 3-5 industries in the city
  landmarks: string[]; // Notable landmarks/areas
  demographics: CityDemographics;
  businessHub: string; // Description of business district/hub
  uniqueFacts: string[]; // 3-5 unique, interesting facts
  seoDescription?: string; // Custom description for SEO
}

export interface EnhancedCityData {
  [citySlug: string]: EnhancedCity;
}
