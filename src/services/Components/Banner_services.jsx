import React from "react";
import Card_Services from "./Card-Services";

const Banner_Services = (props) => {
  return (
    <div className="contenedor-sevices">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="services">
              {
                props.info_card.map(({icon,titulo,descripcion})=>(
                  <Card_Services icon={icon} titulo={titulo} descripcion={descripcion} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner_Services;
