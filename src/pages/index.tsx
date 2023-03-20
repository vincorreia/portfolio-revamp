import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="grid h-full place-items-center">
        <article className="flex max-w-4xl flex-col justify-center gap-y-2 sm:gap-y-4">
          <p className="text-gray-300 sm:text-lg">Hey there! I&apos;m</p>
          <h1 className="text-3xl font-bold text-white sm:text-7xl">
            Vinnicius Correia
          </h1>
          <h2 className="text-2xl font-semibold text-green-500 opacity-80 sm:text-4xl lg:text-5xl">
            I create exceptional web experiences.
          </h2>
          <p className="max-w-lg text-green-700 sm:text-lg">
            As a Frontend Developer, I am dedicated to delivering exceptional
            user experiences. I am passionate about building accessible,
            inclusive and performant web applications.
          </p>
          <div className="flex flex-wrap gap-4 font-bold">
            <Link
              href="/projects"
              className="flex basis-full items-center justify-center rounded-lg bg-green-800 p-3 hover:bg-green-700 active:bg-green-600 sm:basis-auto"
            >
              Find out more about my work!
            </Link>
            <a
              className="flex basis-full items-center justify-center gap-x-2 rounded-lg border-2 border-white p-3 hover:bg-zinc-900 active:bg-zinc-800 sm:basis-auto"
              href="/CV Vinnicius 2023 - English.pdf"
              download
            >
              <FontAwesomeIcon icon={faFileArrowDown} />
              Resume
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
