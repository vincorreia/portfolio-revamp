import type { Project } from "@/types/project";
import type { GetStaticProps, NextPage } from "next";

import { ContributionFigure } from "@/components/organisms/contribution-figure";
import { getProjectsFrontMatter } from "@/utils/md";
import { GridPage } from "@/components/templates/grid-page";

export const getStaticProps: GetStaticProps = () => {
  const projects = getProjectsFrontMatter("src/data/contributionsMD");

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
      title="Contributions"
      description="Here you can find a couple of projects I&#39;ve contributed to, they
        are ordered by relevance so take a good look at them!"
    >
      {projects.map((project) => (
        <ContributionFigure key={project.id} {...project} />
      ))}
    </GridPage>
  );
};

export default Index;
