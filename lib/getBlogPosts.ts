import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPostMeta {
	slug: string;
	title: string;
	date: string;
	excerpt?: string;
	description?: string;
	keywords?: string[];
	author?: string;
	image?: string;
	canonical?: string;
	tags?: string[];
	ogTitle?: string;
	ogDescription?: string;
	ogImage?: string;
	twitterTitle?: string;
	twitterDescription?: string;
	twitterImage?: string;
	pinned?: boolean;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

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

export async function getBlogPosts(): Promise<BlogPostMeta[]> {
	const files = await getAllMarkdownFiles(BLOG_DIR);
	const posts: BlogPostMeta[] = [];
	for (const filePath of files) {
		const fileContents = await fs.readFile(filePath, 'utf8');
		const { data } = matter(fileContents);
		const slug = filePath
			.replace(BLOG_DIR + path.sep, '')
			.replace(/\\/g, '/')
			.replace(/\.md$/, '')
			.replace(/\//g, '-');
		posts.push({
			slug,
			title: data.title || slug,
			date: data.date || '',
			excerpt: data.excerpt,
			description: data.description,
			keywords: data.keywords,
			author: data.author,
			image: data.image,
			canonical: data.canonical,
			tags: data.tags,
			ogTitle: data.ogTitle,
			ogDescription: data.ogDescription,
			ogImage: data.ogImage,
			twitterTitle: data.twitterTitle,
			twitterDescription: data.twitterDescription,
			twitterImage: data.twitterImage,
			pinned: !!data.pinned,
		});
	}
	// Sort: pinned first, then by date descending
	return posts.sort((a, b) => {
		if (a.pinned && !b.pinned) return -1;
		if (!a.pinned && b.pinned) return 1;
		return (b.date || '').localeCompare(a.date || '');
	});
}
