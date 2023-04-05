import { Figure } from "@/components/molecules/Figure";
import type { Project } from "@/types/Projects";
import Link from "next/link";

export const ProjectFigure = ({ id, ...rest }: Project) => {
  return (
    <Link href={`/projects/${id}`}>
      <Figure {...rest} />
    </Link>
  );
};
