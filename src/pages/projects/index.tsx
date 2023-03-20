import { Grid } from "@/components/organisms/Grid";
import { ProjectFigure } from "@/components/organisms/ProjectFigure";
import type { Project } from "@/types/Projects";
import type { GetStaticProps, NextPage } from "next";

import fs from "fs";
import path from "path";
import { getFrontmatter } from "@/utils/parsers";

export const getStaticProps: GetStaticProps = () => {
  const files = fs.readdirSync(path.resolve("src/data/projectsMD"));

  const projects = files
    .map((filename): Project | null => {
      if (filename.endsWith(".md")) {
        const markdownWithMeta = fs.readFileSync(
          path.resolve("src/data/projectsMD", filename),
          "utf-8"
        );

        return getFrontmatter(markdownWithMeta);
      }

      return null;
    })
    .filter((item): item is Project => Boolean(item));

  return {
    props: {
      projects,
    },
  };
};

type Props = {
  projects: Project[];
};

const Index: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <section className="flex h-full flex-col gap-y-4">
        <h1 className="text-4xl font-bold text-green-500 sm:text-7xl">
          Projects
        </h1>
        <p className="max-w-lg text-lg font-semibold text-zinc-300 sm:text-xl">
          Here you can find a couple of projects made by me, they are ordered by
          relevance so take a good look at them!
        </p>
        <Grid>
          {projects.map((project) => (
            <ProjectFigure key={project.id} {...project} />
          ))}
        </Grid>
      </section>
    </>
  );
};

export default Index;
