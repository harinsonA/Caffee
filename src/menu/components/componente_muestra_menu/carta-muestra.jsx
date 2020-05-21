import React from "react";

const Carta_Muestra = (props) => {
  return (
    <div className="col-4 mt-5 text-center">
      <div className="card">
        <div className="card-img-top" alt="Card image cap"></div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>

          <span>${props.price}</span>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-muestra">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};
export default Carta_Muestra;
