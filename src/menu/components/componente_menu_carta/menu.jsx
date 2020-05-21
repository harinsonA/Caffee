import React, { Component } from "react";
import Carta from "./carta-menu";

class Menu extends Component {
  constructor() {
    super();
    this.menus = [
      {
        title: "Starter",
        products: [
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
        ],
      },
      {
        title: "Main Dish",
        products: [
          {
            name: "Sea Trout",
            price: "49.91",
            description:
              "A small river named Duden flows by their place and supplies",
          },
          {
            name: "Roasted Beef",
            price: "20.00",
            description:
              "A small river named Duden flows by their place and supplies",
          },
          {
            name: "Butter Fried Chicken",
            price: "20.00",
            description:
              "A small river named Duden flows by their place and supplies",
          },
          {
            name: "Chiken Filet",
            price: "20.00",
            description:
              "A small river named Duden flows by their place and supplies",
          },
        ],
      },
      {
        title: "Desserts",
        products: [
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
        ],
      },
      {
        title: "Drinks",
        products: [
          {
            name: "Sea Trout",
            price: "49.91",
            description:
              "A small river named Duden flows by their place and supplies",
          },
          {
            name: "Roasted Beef",
            price: "20.00",
            description:
              "A small river named Duden flows by their place and supplies",
          },
          {
            name: "Butter Fried Chicken",
            price: "20.00",
            description:
              "A small river named Duden flows by their place and supplies",
          },
          {
            name: "Chiken Filet",
            price: "20.00",
            description:
              "A small river named Duden flows by their place and supplies",
          },
        ],
      },
    ];
  }
  render() {
    return (
      
        <div className="container-menu">
          <div className="menu1">
            
            {
            this.menus.map(({ title, products }) => (
              <Carta title={title} products={products} />
              
            ))
            }
          </div>
        </div>
    );
  }
}
export default Menu;
