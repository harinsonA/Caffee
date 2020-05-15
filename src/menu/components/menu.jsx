import React, { Component } from "react";
import Carta from "./carta-menu";

class Menu extends Component {
  constructor() {
    super();
    this.menu = [
      {
        name: "Cornish - Mackerel",
        price: "20.00",
        description:
          "A small river named Duden flows by their place and supplies",
      },
      {
        name: "Roasted Steak",
        price: "29.00",
        description:
          "A small river named Duden flows by their place and supplies",
      },
      {
        name: "Seasonal Soup",
        price: "20.00",
        description:
          "A small river named Duden flows by their place and supplies",
      },
      {
        name: "Chicken Curry",
        price: "20.00",
        description:
          "A small river named Duden flows by their place and supplies",
      },
    ];
  }
  render() {
    return (
      <div className="container-menu">
        <div className="container">
          <div className="row">
            <div className="menu1">
              <h3>Starter</h3>
              {this.menu.map((m) => (
                <Carta
                  title="Starter"
                  name={m.name}
                  price={m.price}
                  description={m.description}
                />
              ))}
            </div>
            <div className="menu1">
              <h3>Starter</h3>
              <Carta title="Main Dish" />
            </div>
            <div className="menu1">
              <h3>Starter</h3>
              <Carta title="Desserts" />
            </div>
            <div className="menu1">
              <h3>Starter</h3>
              <Carta title="Drinks" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
