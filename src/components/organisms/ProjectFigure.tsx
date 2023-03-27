import type { Project } from "@/types/Projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ProjectFigure = ({ id, image, title, description }: Project) => {
  return (
    <Link href={`/projects/${id}`}>
      <motion.figure
        className="flex h-full cursor-pointer flex-col"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="h-[150px] w-full object-cover object-top"
        />
        <figcaption className="flex grow flex-col overflow-hidden bg-[var(--code)] bg-opacity-90 p-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="font-semibold text-zinc-300">{description}</p>
        </figcaption>
      </motion.figure>
    </Link>
  );
};
