import { Grid } from "@/components/organisms/Grid";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export const GridPage: React.FC<Props> = ({ title, description, children }) => {
  return (
    <section className="flex h-full flex-col gap-y-4">
      <h1 className="text-4xl font-bold text-green-500 sm:text-7xl">{title}</h1>
      <p className="max-w-lg text-lg font-semibold text-zinc-300 sm:text-xl">
        {description}
      </p>
      <Grid>{children}</Grid>
    </section>
  );
};
