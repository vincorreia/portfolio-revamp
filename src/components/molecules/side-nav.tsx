import { SIDE_NAV_BTN_CLASSES } from "@/constants";
import {
  type IconDefinition,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BaseSideNavProps = {
  href: string;
};

type SideNavBTNProps = BaseSideNavProps & {
  icon: IconDefinition;
  children: string;
};

const SideNavBTN: React.FC<SideNavBTNProps> = ({ href, icon, children }) => {
  return (
    <li role="menuitem" aria-label={children} className="w-full">
      <a
        rel="noreferrer"
        href={href}
        target="_blank"
        className={SIDE_NAV_BTN_CLASSES}
      >
        <span>{children}</span>
        <FontAwesomeIcon icon={icon} size="lg" />
      </a>
    </li>
  );
};

const GithubBTN: React.FC<BaseSideNavProps> = ({ href }) => {
  return (
    <SideNavBTN href={href} icon={faGithub}>
      Github
    </SideNavBTN>
  );
};

const LinkBTN: React.FC<BaseSideNavProps> = ({ href }) => {
  return (
    <SideNavBTN href={href} icon={faLink}>
      Direct Link
    </SideNavBTN>
  );
};

type Props = {
  children: React.ReactNode;
};

export const SideNav = ({ children }: Props) => {
  return (
    <div className="lg:fixed lg:top-1/4 lg:mr-auto">
      <ul className="flex flex-col items-center gap-y-8" role="menu">
        {children}
      </ul>
    </div>
  );
};

SideNav.GithubBTN = GithubBTN;
SideNav.LinkBTN = LinkBTN;
