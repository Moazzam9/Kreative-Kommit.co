import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

export async function getGuideContent(slug: string) {
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
  // Slug format: 2025-08-first-guide
  const match = files.find(filePath => {
    const rel = filePath.replace(guidesDir + path.sep, '').replace(/\\/g, '/').replace(/\.md$/, '').replace(/\//g, '-');
    return rel === slug;
  });
  if (!match) throw new Error('Guide not found');
  const file = await fs.readFile(match, 'utf8');
  const { data, content } = matter(file);
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();
  return { ...data, contentHtml };
}
