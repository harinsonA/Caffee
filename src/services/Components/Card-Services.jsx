import React from "react";

const Card_Services = (props) => {
  return (
    <div className="col-4 card-services">
      <div className="icon-services">
        <span>
          <i className={props.icon}></i>
        </span>
      </div>
      <div className="text">
        <h2>{props.titulo}</h2>
        <p>{props.descripcion}</p>
      </div>
    </div>
  );
};
export default Card_Services;
