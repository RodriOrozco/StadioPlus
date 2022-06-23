import React from "react";

import { FaSearch } from "react-icons/fa";
import LogoNavDark from "../../assets/logoNav.png";

const Nav = ({ setTheme, theme }) => {
  return (
    <nav className="nav">
      <img src={LogoNavDark} className="logo-dark-nav" alt="" />
      <div className="searchBarLine">
        <form className="searchBar">
          <input
            type="text"
            className="input"
            placeholder="busca tu drop aqui..."
          />
          <button type="submit" className="lupa">
            <FaSearch />
          </button>
        </form>
      </div>
      <ul className="lista">
        <li className="item">
          <a href="#">Mis colecciones</a>
        </li>
        <li className="item">
          <a href="#">Login</a>
        </li>
      </ul>
      <button className="buttonRegister">REGISTRARSE</button>
      <label className="switchMode">
        <input
          type="checkbox"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        ></input>
        <span className="sliderMode"></span>
      </label>
    </nav>
  );
};

export default Nav;
