import { CV, LOGO, RESUME_CLASSES } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export const Nav = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header
      className={`sticky top-0 left-0 right-0 z-10 flex flex-col bg-[var(--primary)] sm:block ${
        open ? "bottom-0" : ""
      }`}
    >
      <nav
        className="relative flex items-center justify-between p-4 sm:container sm:mx-auto"
        tabIndex={0}
      >
        <Link href="/">
          <Image alt="Logo" src={LOGO} width={48} height={48} />
        </Link>
        <Hambuger onClick={onClick} open={open} />
        <Ul className="hidden sm:flex sm:items-center sm:gap-x-3" />
      </nav>
      {open && (
        <Ul
          className={`flex flex-grow flex-col justify-around gap-y-6 p-4 uppercase sm:hidden [&>:last-child]:flex [&>:last-child]:flex-grow [&>:last-child]:items-end [&>:not(:last-child)]:border-b [&>:not(:last-child)]:border-b-white [&>:not(:last-child)]:font-normal [&>li]:w-full [&>li]:py-2`}
        />
      )}
    </header>
  );
};

type UlProps = {
  className: string;
};

const Ul: React.FC<UlProps> = ({ className }) => {
  return (
    <ul className={`${className} font-semibold`} role="menubar">
      <li role="menuitem" aria-label="Projects">
        <Link href="/projects">Projects</Link>
      </li>
      <li role="menuitem" aria-label="Study">
        <Link href="/study">Study</Link>
      </li>
      <li role="menuitem" aria-label="Contributions">
        <Link href="/contributions">Contributions</Link>
      </li>
      <li role="menuitem" aria-label="Resume">
        <a className={RESUME_CLASSES} href={CV} download>
          Resume
        </a>
      </li>
    </ul>
  );
};

type HambugerProps = {
  onClick: () => void;
  open: boolean;
};

const Hambuger: React.FC<HambugerProps> = ({ onClick, open }) => {
  const generalClasses = "h-1 w-full bg-white transition-all duration-300";

  return (
    <>
      <button
        className={`static flex h-6 w-6 flex-col ${
          open ? "justify-center" : "justify-around"
        } sm:hidden`}
        aria-label="Open menu"
        type="button"
        onClick={onClick}
      >
        <span
          className={`${generalClasses} ${
            open ? "translate-y-[50%] rotate-45" : ""
          }`}
        />
        <span
          className={`${generalClasses} ${
            open ? "translate-y-[-50%] -rotate-45" : ""
          }`}
        />
        <span className={`${generalClasses} ${open ? "hidden" : ""}`} />
      </button>
    </>
  );
};
