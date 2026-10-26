import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// News articles live in src/content/news (one Markdown file per article; the file name is the web address).
// The article text is written in English; the Dutch site shows the same text with a short note.
const news = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // used for sorting (newest first)
    published: z.string().optional(), // no longer shown; the page shows the date only
    type: z.string().default('Press release'),
    excerpt: z.string(),
    excerpt_nl: z.string().optional(),
    // Card and header image: a photo with a soft fade, and the partner logo on the right.
    media: z.object({
      photo: z.string().optional(),
      position: z.string().default('50% 50%'),
      logo: z.string().optional(),
      logoAlt: z.string().default(''),
      logoWidth: z.number().default(44),
    }),
    bullets: z.array(z.string()).default([]),
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
