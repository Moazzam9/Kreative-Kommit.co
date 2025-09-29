import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
export interface BlogPostContent {
  [key: string]: unknown;
  contentHtml: string;
}

export async function getBlogPostContent(slug: string): Promise<BlogPostContent> {
  const postsDir = path.join(process.cwd(), 'content/blog');
  function getAllMarkdownFiles(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
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

  const files = getAllMarkdownFiles(postsDir);
  // Slug format: 2025-08-first-post
  const match = files.find(filePath => {
    const rel = filePath.replace(postsDir + path.sep, '').replace(/\\/g, '/').replace(/\.md$/, '').replace(/\//g, '-');
    return rel === slug;
  });
  if (!match) throw new Error('Blog post not found');
  const file = fs.readFileSync(match, 'utf8');
  const { data, content } = matter(file);
  // Remove first markdown heading (e.g. '# Title')
  const contentWithoutH1 = content.replace(/^# .+\n+/, '');
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(contentWithoutH1);
  const contentHtml = processedContent.toString();
  return { ...data, contentHtml };
}
