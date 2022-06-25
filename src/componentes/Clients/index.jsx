import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import Logo1 from "../../assets/logo1.png";
import Logo2 from "../../assets/logo2.png";
import Logo3 from "../../assets/logo3.png";
import Logo4 from "../../assets/logo4.png";
import Logo5 from "../../assets/logo5.png";
import Logo1L from "../../assets/Logo (1).png";
import Logo2L from "../../assets/Logo (2).png";
import Logo3L from "../../assets/Logo (3).png";
import Logo4L from "../../assets/Logo (4).png";
import Logo5L from "../../assets/Logo (5).png";

const Clients = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section className="clientsContainer">
      <div className="titulo-logos">
        <h5>Descubre nuestros</h5>
        <h3>PARTNERS</h3>
      </div>
      <div className="logosContainer">
        <img src={theme == "dark" ? Logo1 : Logo1L} alt="" />
        <img src={theme == "dark" ? Logo2 : Logo2L} alt="" />
        <img src={theme == "dark" ? Logo3 : Logo3L} alt="" />
        <img src={theme == "dark" ? Logo4 : Logo4L} alt="" />
        <img src={theme == "dark" ? Logo5 : Logo5L} alt="" />
      </div>
    </section>
  );
};

export default Clients;
