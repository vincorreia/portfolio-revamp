import { Figure } from "@/components/molecules/figure";
import type { Project } from "@/types/project";
import Link from "next/link";

export const ProjectFigure = ({ id, ...rest }: Project) => {
  return (
    <Link href={`/projects/${id}`}>
      <Figure {...rest} />
    </Link>
  );
};
