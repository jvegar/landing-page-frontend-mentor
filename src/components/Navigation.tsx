import React from "react";
import githubIcon from "../assets/github-icon.svg";

const Navigation: React.FC = () => (
  <nav className="header__nav">
    <ul className="header__nav-list">
      <NavItem href="#" text="Learning paths" />
      <NavItem href="#" text="Challenges" />
      <NavItem href="#" text="Solutions" />
      <NavItem href="#" text="Articles" />
      <NavItem href="#" text="Unlock Pro" />
      <NavItem href="#" text="Log in with GitHub" isGithub />
    </ul>
  </nav>
);

interface NavItemProps {
  href: string;
  text: string;
  isGithub?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, isGithub }) => (
  <li className="header__nav-item">
    <a
      href={href}
      className={`header__nav-link ${
        isGithub ? "header__nav-link--github" : ""
      }`}
    >
      <span>{text}</span>
      {isGithub && (
        <img src={githubIcon} alt="GitHub icon" className="header__nav-icon" />
      )}
    </a>
  </li>
);

export default Navigation;
