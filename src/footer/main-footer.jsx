import React from "react";
import About_Us from "./about-us-footer";
import Recent_Blog from "./recent-blog-footer";
import Services from "./service-footer";
import Info_Footer from "./info-footer";

const Footer = () => {
  return (
    <div className="contenedor-footer">
      <div className="footer">
        <About_Us />
        <Recent_Blog />
        <Services />
        <Info_Footer />
      </div>
    </div>
  );
};
export default Footer;
