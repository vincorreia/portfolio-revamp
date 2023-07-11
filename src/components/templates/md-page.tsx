import { SideNav } from "@/components/molecules/side-nav";
import type { Project } from "@/types/project";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeHighlight from "rehype-highlight/lib";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

type Props = {
  content: string;
  frontMatter: Project | null;
};

export const MDPage: React.FC<Props> = ({ content, frontMatter }) => {
  return (
    <>
      <Head>
        <title>{frontMatter?.title}</title>
      </Head>

      <SideNav>
        {typeof frontMatter?.github === "string" && (
          <SideNav.GithubBTN href={frontMatter.github} />
        )}
        {typeof frontMatter?.link === "string" && (
          <SideNav.LinkBTN href={frontMatter.link} />
        )}
      </SideNav>
      <div className="markdown">
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight, rehypeSlug]}
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
};
