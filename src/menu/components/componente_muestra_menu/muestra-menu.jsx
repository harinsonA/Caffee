import React from 'react';
import Titulo from '../../../titulo/titulo';
import Bloque_Muestra from './bloque_muestra';


const Muestra_Menu = ()=>{
   const muestras = [
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
    return(
        <div className='contenedor-muestra-menu'>
            <div className="container">                                      
                <Bloque_Muestra muestras={muestras}/>         
            </div>
        </div>        
    )
}
export default Muestra_Menu;