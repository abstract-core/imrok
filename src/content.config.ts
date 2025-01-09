import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/pages" }),
  schema: z.object({
    Description: z.nullable(z.string()),
    Name: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/posts" }),
  schema: z.object({
    slug: z.string(),
    Name: z.string(),
    "Type de contenu": z.string(),
    Description: z.nullable(z.string()),
    Tags: z.array(z.string()),
  }),
});

export const collections = { pages, posts };
