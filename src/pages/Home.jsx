import React from "react";
import Card from "../componentes/Card";
import Clients from "../componentes/Clients";
import Draft from "../componentes/Draft";

import Hero from "../componentes/Hero";

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
        <button className="btn-token">TOKEN</button>
        <button className="btn-token">IR AL BLOG</button>
      </div>
      <Clients />
      <Draft />
    </>
  );
};

export default Home;
