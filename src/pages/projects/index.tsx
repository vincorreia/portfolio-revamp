import { ProjectFigure } from "@/components/organisms/ProjectFigure";
import type { Project } from "@/types/Projects";
import type { GetStaticProps, NextPage } from "next";

import { getProjectsFrontMatter } from "@/utils/md";
import { GridPage } from "@/components/templates/GridPage";

export const getStaticProps: GetStaticProps = () => {
  const projects = getProjectsFrontMatter("src/data/projectsMD");

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
    <GridPage
      title="Projects"
      description="Here you can find a couple of projects made by me, they are ordered by
          relevance so take a good look at them!"
    >
      {projects.map((project) => (
        <ProjectFigure key={project.id} {...project} />
      ))}
    </GridPage>
  );
};

export default Index;
