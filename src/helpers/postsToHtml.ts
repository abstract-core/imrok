import type { InferEntrySchema } from "astro:content";
import { stringToUrl } from "nebula-atoms-astro/stringToUrl";
import { dateToString } from "nebula-atoms-astro/dateToString";
import { getDate } from "./getDate";

export function postsToHtml(posts: { data: InferEntrySchema<"posts"> }[]) {
  return `<ul class="articles">${posts
    .slice(0, 10)
    .map(
      ({ data: { Name, "Type de contenu": category, slug, ...post } }) =>
        `<li><a href="
          /${category.slice(3).toLowerCase().replace(/é/g, "e")}/${
          slug || stringToUrl(Name)
        }
        "> <span><span>${category.replace(
          " ",
          "&nbsp;"
        )}</span><span>${dateToString(
          getDate({
            data: post as InferEntrySchema<"posts">,
          })!
        )}</span></span><span>${Name}</span></a></li>`
    )
    .join("")}</ul>`;
}
