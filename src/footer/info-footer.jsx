import React from "react";

const Info_Footer = () => {
  return (
    <div className="info-footer col-3">
      <h2>Have a Questions?</h2>
      <ul>
        <li>
          <i className="fas fa-map-marker-alt"></i>
          <span className="text">
            203 Fake St. Mountain View, San Francisco, California, USA
          </span>
        </li>
        <li>
          <i className="fas fa-phone-alt"></i>
          <span className="text">+2 392 3929 210</span>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <span className="text">info@yourdomain.com</span>
        </li>
      </ul>
    </div>
  );
};
export default Info_Footer;
