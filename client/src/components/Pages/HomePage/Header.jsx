import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  return (
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>&#9776;</button>
        <Link to="/">Ark</Link>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">SignIn</a>
      </div>
    </header>
  );
};

export default Header;
