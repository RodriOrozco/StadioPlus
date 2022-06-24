import React from "react";

import FondoTarjetaAzul from "../../assets/fondoTarjetaAzul.png";
import TarjetaAzulIzq from "../../assets/tarjetaAzulIzq-remove.png";
import TarjetaAzulDer from "../../assets/tarjetaAzulDer.png";

const Banner2 = () => {
  return (
    <section className="bannerConteiner">
      <div className="imgText">
        <article className="textConteiner">
          <h1>
            CONOCE EL NUEVO MARKETPLACE NFT <label>STADIOPLUS</label>
          </h1>
          <p>
            Podrás conseguir cualquier NFT de deporte de la red ethereum y BSC
            con solo un 1% de comisión.
          </p>
          <button>MERCADO SECUNDARIO</button>
        </article>
        <article className="imageConteiner">
          <img src={TarjetaAzulDer} alt="" className="TarjetaAzulDer" />
          <img src={TarjetaAzulIzq} alt="" className="TarjetaAzulIzq" />
        </article>
      </div>
      <div className="imagenFondoBanner">
        <img src={FondoTarjetaAzul} alt="" />
      </div>
    </section>
  );
};

export default Banner2;
