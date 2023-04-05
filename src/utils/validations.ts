import { projectSchema } from "@/schemas";
import type { Project } from "@/types/Projects";

export const validateFrontmatter = (
  frontmatter: unknown
): frontmatter is Project => {
  if (typeof frontmatter !== "object" || frontmatter === null) {
    throw new Error("Frontmatter must be an object");
  }

  if (Object.keys(frontmatter).length > 6) {
    throw new Error("Frontmatter must have a maximum of 6 keys");
  }

  projectSchema.parse(frontmatter);

  return true;
};
