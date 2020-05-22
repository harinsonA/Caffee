import React from "react";

const Footer = () => {
  return (
    <div className="contenedor-footer">
      <div className="footer">
        <div className="footer-about-us col-3">
          <h2>About Us</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul className="group mt-5">
            <li className="group-item">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="group-item">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="group-item">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
