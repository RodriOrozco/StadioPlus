import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";

const Menu = () => {
  return (
    <div className="subNav">
      <div className="containerDropsArt">
        <div className="dropdown">
          <button className="dropbtn">
            DROPS <RiArrowRightSFill className="flechita" />
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            ARTISTAS <RiArrowRightSFill className="flechita" />
          </button>
          <div class="dropdown-content">
            <a href="#">ARTISTA 1</a>
            <a href="#">ARTISTA 2</a>
            <a href="#">ARTISTA 3</a>
          </div>
        </div>
        <a href="#">PROMOCIONES</a>
      </div>
      <div class="dropdown">
        <button class="dropbtn">
          ES <RiArrowRightSFill className="flechita" />
        </button>
        <div class="dropdown-content">
          <a href="#">EN</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
