import type { Project } from "@/types/Projects";
import { getDataFromMD, getFrontmatter } from "@/utils/parsers";
import fs from "fs";
import path from "path";

export const getPathsFromMD = (mdFolder: string) => {
  const files = fs.readdirSync(path.resolve(mdFolder));

  const paths = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      params: { id: file.replace(".md", "") },
    }));

  return paths;
};

export const getProjectData = (mdPath: string) => {
  const file = fs.readFileSync(path.resolve(mdPath), "utf-8");

  return getDataFromMD(file);
};

export const getProjectsFrontMatter = (mdPath: string) => {
  const files = fs.readdirSync(path.resolve(mdPath));

  const projects = files
    .map((filename): Project | null => {
      if (filename.endsWith(".md")) {
        const markdownWithMeta = fs.readFileSync(
          path.resolve(mdPath, filename),
          "utf-8"
        );

        return getFrontmatter(markdownWithMeta);
      }

      return null;
    })
    .filter((item): item is Project => Boolean(item));

  return projects;
};
