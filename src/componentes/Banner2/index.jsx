import React from "react";

import FondoJugadorAmarillo from "../../assets/fondoJugadorAmarillo.png";
import JugadorNaranja from "../../assets/jugadorNaranja.png";
import JugadorAmarillo from "../../assets/jugadorAmarillo.png";
import JugadorNaranja2 from "../../assets/jugadorNaranja.png";

const Banner2 = () => {
  return (
    <section className="banner2Conteiner">
      <div className="imgText">
        <article className="textConteiner">
          <h1>
            YA ESTA AQUI EL NUEVO TOKEN DE <label>STADIOPLUS</label>
          </h1>
          <p>
            El token que revolucionará el modelo de monetización del mundo del
            deporte y los eSports gracias a los NFTs.
          </p>
          <div className="correoDiv">
            <input
              placeholder="correo@mail.com.."
              type="text"
              className="correoInput"
            />
            <button>Join the waitlist.</button>
          </div>
          <div className="checkboxDiv">
            <input type="checkbox" />
            <p>I understand I can unsubscribe at any time. Privacy Policy</p>
          </div>
        </article>
        <article className="imageConteiner">
          <img src={JugadorNaranja} alt="" className="JugadorNaranja" />
          <img src={JugadorAmarillo} alt="" className="JugadorAmarillo" />
          <img src={JugadorNaranja2} alt="" className="JugadorNaranja2" />
        </article>
      </div>
      <div className="imagenFondoBanner">
        <img src={FondoJugadorAmarillo} alt="" />
      </div>
    </section>
  );
};

export default Banner2;
