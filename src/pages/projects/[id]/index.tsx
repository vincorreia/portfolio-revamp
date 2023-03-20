import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import { getBody, getFrontmatter } from "@/utils/parsers";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import Head from "next/head";
import { Project } from "@/types/Projects";

export const getStaticPaths: GetStaticPaths = () => {
  const files = fs.readdirSync(path.resolve("src/data/projectsMD"));

  const paths = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      params: { id: file.replace(".md", "") },
    }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { id } = params as { id: string };

  const file = fs.readFileSync(
    path.resolve(`src/data/projectsMD/${id}.md`),
    "utf-8"
  );

  const content = getBody(file);

  const frontMatter = getFrontmatter(file);

  return {
    props: {
      content,
      frontMatter,
    },
  };
};

type Props = {
  content: string;
  frontMatter: Project;
};

const Project: NextPage<Props> = ({ content, frontMatter }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{frontMatter?.title}</title>
      </Head>
      <div className="markdown">
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Project;
