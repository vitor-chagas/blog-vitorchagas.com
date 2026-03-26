import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		description: z.string(),
		tags: z.array(z.string()).optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		coverImage: z.string(),
		images: z.array(z.string()).optional(),
		year: z.number(),
		stack: z.array(z.string()).optional(),
		contributions: z.array(z.string()).optional(),
		githubUrl: z.string().url().optional(),
		liveUrl: z.string().url().optional(),
		tags: z.array(z.string()).optional(),
		status: z.enum(['active', 'archived', 'wip']).optional().default('active'),
	}),
});

export const collections = { blog, projects };
