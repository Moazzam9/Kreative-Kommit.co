import fs from 'fs';
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

function getAllMarkdownFiles(dir: string): string[] {
	let results: string[] = [];
	const list = fs.readdirSync(dir);
	list.forEach((file) => {
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

export function getBlogPosts(): BlogPostMeta[] {
	const files = getAllMarkdownFiles(BLOG_DIR);
	const posts: BlogPostMeta[] = files.map((filePath) => {
		const fileContents = fs.readFileSync(filePath, 'utf8');
		const { data } = matter(fileContents);
		// Slug: remove BLOG_DIR and .md extension, replace backslashes
			const slug = filePath
				.replace(BLOG_DIR + path.sep, '')
				.replace(/\\/g, '/')
				.replace(/\.md$/, '')
				.replace(/\//g, '-');
		return {
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
		};
	});
	// Sort: pinned first, then by date descending
	return posts.sort((a, b) => {
		if (a.pinned && !b.pinned) return -1;
		if (!a.pinned && b.pinned) return 1;
		return (b.date || '').localeCompare(a.date || '');
	});
}
