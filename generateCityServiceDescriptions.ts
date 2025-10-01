import { allCities } from './app/data/cities/targets';
import { cityServiceDescriptions as customDescriptions, genericServiceDescriptions } from './app/data/cities/serviceDescriptions';

// List all service slugs you want to cover
const serviceSlugs = Object.keys(genericServiceDescriptions);

const newCityServiceDescriptions: Record<string, Record<string, string>> = {};

for (const city of allCities) {
  const slug = city.slug;
  // Use existing custom descriptions if present, else fallback
  const custom = customDescriptions[slug] || {};
  newCityServiceDescriptions[slug] = {};
  for (const service of serviceSlugs) {
    newCityServiceDescriptions[slug][service] =
      custom[service] || genericServiceDescriptions[service];
  }
}

// Output as TypeScript
console.log(
  'export const cityServiceDescriptions = ' +
    JSON.stringify(newCityServiceDescriptions, null, 2) +
    ';'
);
