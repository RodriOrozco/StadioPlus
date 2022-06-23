import React from "react";

import LogoNavDark from "../../assets/logoNav.png";

const Nav = ({ setTheme }) => {
  return (
    <nav className="menu">
      <img src={LogoNavDark} className="logo-dark-nav" alt="" />
      <form>
        <input type="text" placeholder="busca tu drop aqui" />
        <input type="submit" value="Buscar" />
      </form>
      <ul>
        <li>
          <a href="#">Mis colecciones</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
      <button>registrarse</button>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        switch
      </button>
    </nav>
  );
};

export default Nav;
