import type { CollectionEntry } from "astro:content";

export function getCategoriesFromPosts(posts: CollectionEntry<"posts">[]) {
  return posts.reduce((categories, post) => {
    const {
      data: { "Type de contenu": category },
    } = post;
    if (!categories[category]) categories[category] = [post];
    else categories[category].push(post);
    return categories;
  }, {} as { [category: string]: CollectionEntry<"posts">[] });
}
