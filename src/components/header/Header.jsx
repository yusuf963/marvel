import React from "react";
import "./style.css";
import logo from "../../assets/images/marvel_logo.png";
// Todo: Add more header links and e.g( home, about, Favorite).
const Header = () => {
  return (
    <div className="center">
      <img className="logo" src={logo} alt="marvel logo" />
    </div>
  );
};

export default Header;
