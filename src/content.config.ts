import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/[^_]*.md' }),
  schema: ({ image }) =>
    z.object({
      client: z.string(),
      industry: z.string(),
      service: z.enum(['marketing', 'automation', 'security']),
      headline: z.string(),
      summary: z.string(),
      /** What the client got, for example Social media management, Paid ads */
      included: z.array(z.string()),
      tone: z.enum(['white', 'ink', 'night', 'deep', 'violet', 'teal', 'sky']),
      /** Placeholders stay drafts: no page and not listed until the real story replaces them */
      draft: z.boolean().default(false),
      order: z.number(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { caseStudies };
