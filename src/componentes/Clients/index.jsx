import React from "react";

import Logo1 from "../../assets/logo1.png";
import Logo2 from "../../assets/logo2.png";
import Logo3 from "../../assets/logo3.png";
import Logo4 from "../../assets/logo4.png";
import Logo5 from "../../assets/logo5.png";

const Clients = () => {
  return (
    <section className="clientsContainer">
      <div className="titulo-logos">
        <h5>Descubre nuestros</h5>
        <h3>PARTNERS</h3>
      </div>
      <div className="logosContainer">
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
        <img src={Logo5} alt="" />
      </div>
    </section>
  );
};

export default Clients;
