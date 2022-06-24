import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import NFL from "../../assets/NFL.png";
import Game from "../../assets/game.png";
import FacePlayer from "../../assets/facePlayer.png";

const Noticias = () => {
  return (
    <section className="noticiasConteiner">
      <article className="titulo-noticias">
        <h5>Descubre nuestros</h5>
        <h3>NUEVOS LANZAMIENTOS</h3>
      </article>
      <article className="noticias-cards">
        <div className="individualCard">
          <div className="cardBody">
            <div className="conteinerCardElements">
              <div className="flechaEnlace">
                <BsArrowUpRight />
              </div>
              <img src={NFL} alt="" />
              <h4>LOREM IPSUM DOLOR SIT</h4>
              <h5>12.02.2022</h5>
              <div className="prices">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="individualCard">
          <div className="cardBody">
            <div className="conteinerCardElements">
              <div className="flechaEnlace">
                <BsArrowUpRight />
              </div>
              <img src={Game} alt="" />
              <h4>LOREM IPSUM DOLOR SIT</h4>
              <h5>12.02.2022</h5>
              <div className="prices">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="individualCard">
          <div className="cardBody">
            <div className="conteinerCardElements">
              <div className="flechaEnlace">
                <BsArrowUpRight />
              </div>
              <img src={FacePlayer} alt="" />
              <h4>LOREM IPSUM DOLOR SIT</h4>
              <h5>12.02.2022</h5>
              <div className="prices">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="btn-conteiner">
        <button className="btn-noticias">LEER MÁS</button>
      </article>
    </section>
  );
};

export default Noticias;
