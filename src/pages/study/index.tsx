import { GridPage } from "@/components/templates/grid-page";
import type { NextPage } from "next";
import Image from "next/image";

import estacio from "@/assets/images/estacio.png";
import { Timeline } from "@/components/organisms/timeline";
import type { TimelineObj } from "@/types/timeline";

const buildTimeline = (startYear: number, endYear: number) => {
  const timeline: TimelineObj[] = [];

  const thisYear = new Date().getFullYear();

  for (let i = startYear; i <= endYear; i++) {
    timeline.push({
      label: `${i}`,
      active: i <= thisYear,
    });
  }

  return timeline;
};

export const getStaticProps = () => {
  const university = buildTimeline(2021, 2025);

  return {
    props: {
      data: {
        university,
        test: new Date().toISOString(),
      },
    },
    revalidate: 60, // 24 hours
  };
};

type Params = {
  data: {
    university: TimelineObj[];
    test: number;
  };
};
const Main: NextPage<Params> = ({ data }) => {
  console.log(data.test);

  return (
    <GridPage title="Study" description="My study">
      <h2 className="text-4xl">University Education</h2>

      <div className="flex items-center gap-x-8 sm:col-span-2 lg:col-span-3">
        <Image src={estacio} alt="Estácio de Sá University" width={132} />
        <h3 className="text-2xl">Computer Science</h3>
      </div>
      <Timeline data={data.university} />
    </GridPage>
  );
};

export default Main;
