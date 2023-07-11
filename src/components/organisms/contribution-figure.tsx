import { Figure } from "@/components/molecules/figure";
import type { Project } from "@/types/project";
import Link from "next/link";

export const ContributionFigure = ({ id, ...rest }: Project) => {
  return (
    <Link href={`/contributions/${id}`}>
      <Figure {...rest} />
    </Link>
  );
};
