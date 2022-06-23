import React from "react";
import LogoFooterDark from "../../assets/logoFooter.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={LogoFooterDark} alt="" />
      <h6>ya esta aqui el nuevo token de StadioPlus</h6>
      <div className="socialIcons">
        <FaFacebookF className="icono" />
        <FaTwitter className="icono" />
        <FaInstagram className="icono" />
      </div>
    </footer>
  );
};

export default Footer;
