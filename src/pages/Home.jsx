import React from "react";
import Card from "../componentes/Card";

import Hero from "../componentes/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Card tituloCards={"Obras Destacadas"} />
      <Card tituloCards={"Colecciones"} />
    </>
  );
};

export default Home;
