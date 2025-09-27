import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

export async function getGuideContent(slug: string) {
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
  // Slug format: 2025-08-first-guide
  const match = files.find(filePath => {
    const rel = filePath.replace(guidesDir + path.sep, '').replace(/\\/g, '/').replace(/\.md$/, '').replace(/\//g, '-');
    return rel === slug;
  });
  if (!match) throw new Error('Guide not found');
  const file = fs.readFileSync(match, 'utf8');
  const { data, content } = matter(file);
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();
  return { ...data, contentHtml };
}
