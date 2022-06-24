import React from "react";

import Monkey1 from "../../assets/monkey1.png";
import Monkey2 from "../../assets/monkey2.png";
import Monkey3 from "../../assets/monkey3.png";
import Monkey4 from "../../assets/monkey4.png";

const Draft = () => {
  return (
    <div className="draftConteiner">
      <div className="artistasBox">
        <ul className="listaArtistas">
          <li>Artista</li>
          <li>Artista</li>
          <li>Artista</li>
          <li>Artista</li>
          <li>Artista</li>
          <li>Artista</li>
          <li>Artista</li>
          <li>Artista</li>
          <li>Artista</li>
        </ul>
      </div>
      <div className="conteinerMonkeys">
        <div className="monkeys">
          <img src={Monkey1} alt="" className="monkey" />
          <img src={Monkey2} alt="" className="monkey" />
          <img src={Monkey3} alt="" className="monkey" />
          <img src={Monkey4} alt="" className="monkey" />
        </div>
        <div className="titulo-draft">
          <h5>Descubre nuestros</h5>
          <h3>NUEVOS LANZAMIENTOS</h3>
        </div>
        <div className="buttonConteiner">
          <button className="btn-monkeys">INSCRIBETE</button>
        </div>
      </div>
    </div>
  );
};

export default Draft;
