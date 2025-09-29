const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/data/cities/facts.ts');
const fileContent = fs.readFileSync(filePath, 'utf8');

const slugRegex = /slug:\s*["']([^"']+)["']/g;
const slugs = [];
let match;

while ((match = slugRegex.exec(fileContent)) !== null) {
  slugs.push(match[1]);
}

const duplicates = slugs.filter((slug, idx) => slugs.indexOf(slug) !== idx);
const uniqueDuplicates = [...new Set(duplicates)];

if (uniqueDuplicates.length) {
  console.log('Duplicate slugs found:', uniqueDuplicates);
} else {
  console.log('No duplicate slugs found.');
}
