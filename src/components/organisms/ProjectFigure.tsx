import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  description: string;
  id: string;
};
export const ProjectFigure = ({ id, image, title, description }: Props) => {
  return (
    <Link href={`/projects/${id}`}>
      <motion.figure
        className="cursor-pointer"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image src={image} alt={title} width={300} height={200} />
        <figcaption className="flex flex-col justify-between overflow-hidden bg-zinc-900 bg-opacity-90 p-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="font-semibold text-zinc-300">{description}</p>
        </figcaption>
      </motion.figure>
    </Link>
  );
};
