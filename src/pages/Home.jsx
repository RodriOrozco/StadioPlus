import React from "react";

import AcercaDe from "../componentes/AcercaDe";
import Noticias from "../componentes/Noticias";
import Card from "../componentes/Card";
import Clients from "../componentes/Clients";
import Draft from "../componentes/Draft";
import Hero from "../componentes/Hero";
import Banner1 from "../componentes/Banner1";
import Banner2 from "../componentes/Banner2";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="titulo-cards">
        <h5>Descubre nuestros</h5>
        <h3>NUEVOS LANZAMIENTOS</h3>
      </div>
      <Card tituloCards={"Obras Destacadas"} />
      <Card tituloCards={"Colecciones"} />
      <div className="botonesHome">
        <div className="btn-line">
          <button className="btn-token">TOKEN</button>
        </div>
        <div className="btn-line">
          <button className="btn-token">IR AL BLOG</button>
        </div>
      </div>
      <Banner1 />
      <Clients />
      <AcercaDe />
      <Noticias />
      <Draft />
      <Banner2 />
    </>
  );
};

export default Home;
