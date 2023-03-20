import type { Project } from "@/types/Projects";

const validateIsKeyString = <T extends object, Y extends string>(
  key: Y,
  value: T
): value is T & Record<Y, string> => {
  const isKey = (key: Y, value: T): value is T & Record<Y, unknown> =>
    key in value;

  if (isKey(key, value)) {
    return typeof value[key] === "string";
  }

  return false;
};
export const validateFrontmatter = (
  frontmatter: unknown
): frontmatter is Project => {
  if (typeof frontmatter !== "object" || frontmatter === null) {
    throw new Error("Frontmatter must be an object");
  }

  if (Object.keys(frontmatter).length !== 4) {
    throw new Error("Frontmatter must have 4 keys");
  }

  if (!(validateIsKeyString("id", frontmatter))) {
    throw new Error("Id is required");
  }

  if (!(validateIsKeyString("title", frontmatter))) {
    throw new Error("Title is required");
  }

  if (!(validateIsKeyString("description", frontmatter))) {
    throw new Error("Description is required");
  }

  if (!(validateIsKeyString("image", frontmatter))) {
    throw new Error("Image is required");
  }

  return true;
};
