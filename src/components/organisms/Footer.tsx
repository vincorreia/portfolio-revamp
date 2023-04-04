import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faDiscord,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <footer className="flex flex-col gap-y-8 bg-[var(--primary)] py-4">
      <ul className="befored aftered flex items-center gap-x-8" role="menu">
        <li role="menuitem" aria-label="Github">
          <a
            rel="noreferrer"
            href="https://github.com/vincorreia"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </li>
        <li role="menuitem" aria-label="Linkedin">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/vinnicius-correia/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </a>
        </li>
        <li role="menuitem" aria-label="Discord">
          <a
            rel="noreferrer"
            href="https://www.discordapp.com/users/151124382578769920"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDiscord} size="xl" />
          </a>
        </li>
        <li role="menuitem" aria-label="Whatsapp">
          <a rel="noreferrer" href="https://wa.me/34642991309" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} size="xl" />
          </a>
        </li>
      </ul>
      <p className="text-center text-white">© 2023 Vinnicius Correia</p>
    </footer>
  );
};
