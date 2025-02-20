export function refineCategory(category: string): string {
  const [_, ...remain] = category.split(" ");
  return remain.join(" ");
}
