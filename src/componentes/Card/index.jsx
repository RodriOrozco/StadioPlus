import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataNft } from "./data";

const Card = ({ tituloCards }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="sliderContainer">
      <div className="fondoTitulo">
        <h3 className="tituloCards">{tituloCards}</h3>
      </div>
      <Slider {...settings} className="slider">
        {dataNft.map((item) => (
          <div className="individualCard">
            <div className="cardBody">
              <div className="conteinerCardElements">
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <div className="prices">
                  <h5>{item.priceBN}</h5>
                  <h6>{item.priceCash}</h6>
                </div>
              </div>
            </div>
            {tituloCards == "Obras Destacadas" ? (
              <button className="btn-naranja">COMPRAR</button>
            ) : (
              <button className="btn-azul">EXPLORAR</button>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
