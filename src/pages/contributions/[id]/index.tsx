import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import type { Project } from "@/types/project";
import { getPathsFromMD, getProjectData } from "@/utils/md";
import { MDPage } from "@/components/templates/md-page";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getPathsFromMD("src/data/contributionsMD");

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { id } = params as { id: string };

  const { content, frontMatter } = getProjectData(
    `src/data/contributionsMD/${id}.md`
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
