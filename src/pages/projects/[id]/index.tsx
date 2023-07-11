import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

import type { Project } from "@/types/project";
import { getPathsFromMD, getProjectData } from "@/utils/md";
import { MDPage } from "@/components/templates/md-page";
import { ROUTES } from "@/constants/routes";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getPathsFromMD(ROUTES.PROJECTS_MD);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { id } = params as { id: string };

  const { content, frontMatter } = getProjectData(
    `${ROUTES.PROJECTS_MD}/${id}.md`
  );

  return {
    props: {
      content,
      frontMatter,
    },
  };
};

type Props = {
  content: string;
  frontMatter: Project | null;
};

const Page: NextPage<Props> = ({ content, frontMatter }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <MDPage content={content} frontMatter={frontMatter} />;
};

export default Page;
