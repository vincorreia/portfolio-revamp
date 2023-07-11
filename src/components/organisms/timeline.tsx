import { TimelineEntry } from "@/components/molecules/timeline-entry";
import type { TimelineObj } from "@/types/timeline";

type Props = {
  data: TimelineObj[];
};

export const Timeline: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex sm:col-span-2 lg:col-span-3">
      {data.map((entry) => (
        <TimelineEntry
          label={entry.label}
          active={entry.active}
          key={entry.toString()}
        />
      ))}
    </div>
  );
};
