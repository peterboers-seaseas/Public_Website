import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// News items live in src/content/news/en and src/content/news/nl (one Markdown file per item, per language).
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // used for sorting (newest first)
    dateLabel: z.string().optional(), // optional text shown instead of the formatted date
    type: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    linkLabel: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Team members live in src/content/team (one file per person, roles in both languages).
const team = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role_en: z.string(),
    role_nl: z.string(),
    photo: z.string().optional(),
    linkedin: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { news, team };
