import React from "react";
import logo from "../assets/logo-desktop.svg";

const Logo: React.FC = () => (
  <h1 className="header__logo">
    <img src={logo} alt="logo" />
  </h1>
);

export default Logo;
