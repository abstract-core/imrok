import type { InferEntrySchema } from "astro:content";
import { stringToUrl } from "nebula-atoms/stringToUrl";
import { dateToString } from "nebula-atoms/dateToString";
import { getDate } from "./getDate";
import { refineCategory } from "./refineCategory";

export function postsToHtml(
  posts: { data: InferEntrySchema<"posts"> }[],
  displayCategory: boolean = true
) {
  return `<ul class="articles">${posts
    .map(({ data: { Name, "Type de contenu": category, slug, ...post } }) => {
      const date = getDate({
        data: post as InferEntrySchema<"posts">,
      });
      return `<li><a href="
          /${stringToUrl(refineCategory(category))}/${slug || stringToUrl(Name)}
        "> <span>${
          displayCategory
            ? `<span>${category.replace(/\s/g, "&nbsp;")}</span>`
            : ""
        }${
        date ? `<span>${dateToString(date)}</span>` : ""
      }</span><span>${Name}</span></a></li>`;
    })
    .join("")}</ul>`;
}
