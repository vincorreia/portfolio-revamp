import { Grid } from "@/components/organisms/Grid";
import { ProjectFigure } from "@/components/organisms/ProjectFigure";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Vinnicius Correia</title>
        <meta
          name="description"
          content="Vinnicius Correia's Frontend Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex h-full flex-col gap-y-4">
        <h1 className="text-4xl font-bold text-green-500 sm:text-7xl">
          Projects
        </h1>
        <p className="max-w-lg text-lg font-semibold text-zinc-300 sm:text-xl">
          Here you can find a couple of projects made by me, they are ordered by
          relevance so take a good look at them!
        </p>
        <Grid>
          {Array.from({ length: 16 }, (_item, i) => (
            <ProjectFigure
              id={i.toString()}
              key={i}
              image="https://via.placeholder.com/300x200"
              title="Project Name"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quod, quia, voluptates quas voluptatibus quae voluptatem
          quibusdam quidem nesciunt."
            />
          ))}
        </Grid>
      </section>
    </>
  );
};

export default Index;
