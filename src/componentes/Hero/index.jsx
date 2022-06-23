import React from "react";

import BasquetPlayer from "../../assets/basquetPlayer.png";
import FondoBasquetPlayer from "../../assets/fondoBasquetPlayer.png";

const Hero = () => {
  return (
    <section className="heroContainer">
      <article className="articleIzq">
        <div className="text">
          <h1>
            DESCUBRE, COLECCIONA Y COMPRA INCREÍBLES
            <br />
            <label>NFTs</label>
          </h1>
          <p>
            StadioPlus es el primer mercado NFT de la comunidad del deporte.
            Descubre la oportunidad de poseer, vender y comercializar NFT .{" "}
            <br />
            Explora el mercado para empezar.
          </p>
        </div>
        <div className="btnContainer">
          <button className="btn-azul">CREA TU NFT</button>
          <button className="btn-naranja">EXPLORAR</button>
        </div>
      </article>
      <article className="articleDer">
        <div className="cardPlayer">
          <img src={BasquetPlayer} alt="" className="player" />
          <img src={FondoBasquetPlayer} alt="" className="fondoPlayer" />
        </div>
      </article>
    </section>
  );
};

export default Hero;
