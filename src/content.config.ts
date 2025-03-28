import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/pages" }),
  schema: z.object({
    Description: z.nullable(z.string()),
    Name: z.string(),
    Url: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/posts" }),
  schema: z.object({
    slug: z.string(),
    Name: z.string(),
    "Type de contenu": z.string(),
    Description: z.nullable(z.string()),
    Tags: z.nullable(z.array(z.string())),
    "Créé le": z.nullable(z.date()),
    "Publié le": z.nullable(z.date()),
    "Édité le": z.nullable(z.date()),
  }),
});

export const collections = { pages, posts };
