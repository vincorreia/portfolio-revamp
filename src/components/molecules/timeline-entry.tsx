import { Dot } from "@/components/atoms/dot";

type Props = {
  active?: boolean;
  label: string;
};

export const TimelineEntry: React.FC<Props> = ({ active, label }) => {
  const timelineClasses = ["befored", "aftered", "flex", "items-center"];

  if (active) {
    timelineClasses.push("active");
  }

  return (
    <div className="flex grow flex-col gap-y-2">
      <h3 className="text-center">{label}</h3>
      <span className={timelineClasses.join(" ")}>
        <Dot />
      </span>
    </div>
  );
};
