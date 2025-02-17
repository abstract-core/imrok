import type { InferEntrySchema } from "astro:content";
import { getDate } from "./getDate";

export function sortPostsByDecreasingDate(
  posts: { data: InferEntrySchema<"posts"> }[]
): { data: InferEntrySchema<"posts"> }[] {
  return posts.sort(
    (a, b) => (getDate(b)?.getTime() || 0) - (getDate(a)?.getTime() || 0)
  );
}
