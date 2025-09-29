import fs from 'fs/promises';
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

export async function getGuides(): Promise<GuideMeta[]> {
  const guidesDir = path.join(process.cwd(), 'content/guide');
  async function getAllMarkdownFiles(dir: string): Promise<string[]> {
    let results: string[] = [];
    const list = await fs.readdir(dir);
    for (const file of list) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);
      if (stat && stat.isDirectory()) {
        const nested = await getAllMarkdownFiles(filePath);
        results = results.concat(nested);
      } else if (file.endsWith('.md')) {
        results.push(filePath);
      }
    }
    return results;
  }

  const files = await getAllMarkdownFiles(guidesDir);
  const guides: GuideMeta[] = [];
  for (const filePath of files) {
    const slug = filePath
      .replace(guidesDir + path.sep, '')
      .replace(/\\/g, '/')
      .replace(/\.md$/, '')
      .replace(/\//g, '-'); // e.g. 2025-08-first-guide
    const file = await fs.readFile(filePath, 'utf8');
    const { data } = matter(file);
    guides.push({
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      draft: data.draft || false,
      pinned: data.pinned || false,
    });
  }
  // Only published guides, pinned first, then sorted by date desc
  return guides
    .filter(guide => !guide.draft)
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return b.date.localeCompare(a.date);
    });
}
