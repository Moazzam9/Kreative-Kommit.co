// Data-driven branding/landing page content for cities and business types

export interface BrandingPageData {
  city: string; // e.g. 'birmingham'
  area?: string; // e.g. 'jewellery-quarter'
  industry: string; // e.g. 'jewelry', 'branding', etc.
  title: string;
  description: string;
  features: string[];
  whyChoose: string[];
  cta: {
    heading: string;
    text: string;
    button: string;
    link: string;
  };
}

// ...existing brandingPages data should be pasted here...

export const brandingPages: BrandingPageData[] = [
  // ...copy all objects from the previous brandingPages array here...
];
