import React, { Component } from "react";

class Carta extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className='container-carta'>
        <div className="carta">
          <div className="img-carta"></div>
          <div className="detalle-carta">
            <div className="title-carta d-flex ">
              <h3>{this.props.name}</h3>
              <span>${this.props.price}</span>
            </div>
            <div className="description-carta">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Carta;
