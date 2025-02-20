import { expect, test } from "vitest";
import { refineCategory } from "./refineCategory";

test("works for edge-cases categories", () => {
  expect(refineCategory("🧠 Pensée")).toBe("Pensée");
  expect(refineCategory("🖌 Illustration")).toBe("Illustration");
  expect(refineCategory("🎮 Jeux vidéos")).toBe("Jeux vidéos");
});
