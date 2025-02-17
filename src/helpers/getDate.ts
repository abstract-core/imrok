import type { InferEntrySchema } from "astro:content";

export function getDate({ data }: { data: InferEntrySchema<"posts"> }) {
  return data["Édité le"] || data["Publié le"] || data["Créé le"];
}
