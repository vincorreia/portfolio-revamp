import { validateFrontmatter } from "@/utils/validations";

export const parseFrontmatter = (content?: string) => {
  const frontmatter = content?.split("\n").reduce((acc, item) => {
    const [key, ...value] = item.replace(/"/g, "").split(":");

    if (!key || !value) {
      return acc;
    }

    if (!key.trim() || !value.join(":").trim()) {
      return acc;
    }

    acc[key.trim()] = value.join(":").trim();
    return acc;
  }, {} as Record<string, string>);

  if (validateFrontmatter(frontmatter)) {
    return frontmatter;
  }

  return null;
};

export const getFrontmatter = (md: string) => {
  if (md.startsWith("---")) {
    const [, frontmatter] = md.split("---");

    return parseFrontmatter(frontmatter) ?? null;
  }

  return null;
};

export const getDataFromMD = (
  md: string
) => {
  if (md.startsWith("---")) {
    const [, frontMatter, ...body] = md.split("---");

    return {
      frontMatter: parseFrontmatter(frontMatter),
      content: body.join("---"),
    };
  }

  return {
    frontMatter: null,
    content: md,
  };
};
