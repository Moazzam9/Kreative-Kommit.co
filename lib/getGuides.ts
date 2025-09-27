import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type GuideMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  draft?: boolean;
  pinned?: boolean;
};

export function getGuides(): GuideMeta[] {
  const guidesDir = path.join(process.cwd(), 'content/guide');
  function getAllMarkdownFiles(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach((file: string) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(getAllMarkdownFiles(filePath));
      } else if (file.endsWith('.md')) {
        results.push(filePath);
      }
    });
    return results;
  }

  const files = getAllMarkdownFiles(guidesDir);
  const guides: GuideMeta[] = files.map(filePath => {
    const slug = filePath
      .replace(guidesDir + path.sep, '')
      .replace(/\\/g, '/')
      .replace(/\.md$/, '')
      .replace(/\//g, '-'); // e.g. 2025-08-first-guide
    const file = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(file);
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      draft: data.draft || false,
      pinned: data.pinned || false,
    };
  });
  // Only published guides, pinned first, then sorted by date desc
  return guides
    .filter(guide => !guide.draft)
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return b.date.localeCompare(a.date);
    });
}
