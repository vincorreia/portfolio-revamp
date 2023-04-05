import { Figure } from "@/components/molecules/Figure";
import type { Project } from "@/types/Projects";
import Link from "next/link";

export const ContributionFigure = ({ id, ...rest }: Project) => {
  return (
    <Link href={`/contributions/${id}`}>
      <Figure {...rest} />
    </Link>
  );
};
