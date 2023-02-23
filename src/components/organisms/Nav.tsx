import { useState } from "react";
export const Nav = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header
      className={`flex flex-col sm:static sm:block ${
        open ? "fixed top-0 bottom-0 z-10 w-full bg-gray-900" : ""
      }`}
    >
      <nav
        className="relative flex items-center justify-between px-4 py-2 sm:container sm:mx-auto"
        tabIndex={0}
      >
        <a className="text-2xl font-bold" href="#">
          Vinnicius Correia
        </a>
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
        <a href="#">Projects</a>
      </li>
      <li role="menuitem" aria-label="Study">
        <a href="#">Study</a>
      </li>
      <li role="menuitem" aria-label="Contributions">
        <a href="#">Contributions</a>
      </li>
      <li role="menuitem" aria-label="Resume">
        <button className="w-full rounded border border-white p-2 hover:bg-gray-800 active:bg-gray-700">
          Resume
        </button>
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
