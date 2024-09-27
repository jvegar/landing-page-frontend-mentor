import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header: React.FC = () => (
  <header className="header">
    <Logo />
    <Navigation />
  </header>
);

export default Header;
