import React from "react";

const Platillo = ({ name, price, description }) => {
  return (
    <div className="carta">
      <div className="img-carta"></div>
      <div className="detalle-carta">
        <div className="title-carta d-flex ">
          <h3>{name}</h3>
          <span>${price}</span>
        </div>
        <div className="description-carta">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Platillo;
