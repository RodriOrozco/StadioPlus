import React from "react";

import Player from "../../assets/futbolCard.png";
import Fondo1 from "../../assets/fondo1FutbolCar.png";
import Fondo2 from "../../assets/fondo2FutbolCard.png";

const AcercaDe = () => {
  return (
    <section className="nosConteiner">
      <article className="divIzq">
        <div className="cardFutbol">
          <img src={Player} alt="" className="futbol" />
          <img src={Fondo1} alt="" className="fondo1" />
          <img src={Fondo2} alt="" className="fondo2" />
        </div>
      </article>
      <article className="divDer">
        <div className="titulo-nosotros">
          <h5>Descubre nuestros</h5>
          <h3>NUEVOS LANZAMIENTOS</h3>
        </div>
        <p>
          StadioPlus es una empresa web3 que tiende un puente entre el mundo del
          deporte y los NFTs, democratizaremos el acceso a los aficionados al
          deporte permitiendo que todos descubran, recopilen, compren y vendan
          NFT de deporte.
        </p>
      </article>
    </section>
  );
};

export default AcercaDe;
