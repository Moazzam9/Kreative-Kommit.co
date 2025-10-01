const { allCities } = require('./temp/cities/targets.js');
const { cityServiceDescriptions: customDescriptions, genericServiceDescriptions } = require('./temp/cities/serviceDescriptions.js');

const serviceSlugs = Object.keys(genericServiceDescriptions);

const newCityServiceDescriptions = {};

for (const city of allCities) {
  const slug = city.slug;
  const custom = customDescriptions[slug] || {};
  newCityServiceDescriptions[slug] = {};
  for (const service of serviceSlugs) {
    newCityServiceDescriptions[slug][service] =
      custom[service] || genericServiceDescriptions[service];
  }
}

console.log(
  'export const cityServiceDescriptions = ' +
    JSON.stringify(newCityServiceDescriptions, null, 2) +
    ';'
);
