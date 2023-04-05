import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/Projects";

type Props = Omit<Project, "id">;

const CLASSES = {
  icon: "object-contain object-center",
  default: "object-cover object-top",
};

export const Figure: React.FC<Props> = ({
  image,
  title,
  description,
  imageType = "default",
}) => {
  return (
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
        className={`h-[150px] w-full ${CLASSES[imageType]}`}
      />
      <figcaption className="flex grow flex-col overflow-hidden bg-[var(--code)] bg-opacity-90 p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="font-semibold text-zinc-300">{description}</p>
      </figcaption>
    </motion.figure>
  );
};
