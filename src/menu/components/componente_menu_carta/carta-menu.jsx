import React, { Component } from "react";
import Platillo from "./platillo";

class Carta extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
          <div className="container-carta">
            <h3>{this.props.title}</h3>
            {this.props.products.map(({ name, price, description }) => (
              <Platillo name={name} price={price} description={description} />
            ))}
          </div>
        
    );
  }
}
export default Carta;
