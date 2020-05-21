import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Carta_Muestra from "./carta-muestra";

const Bloque_Muestra = (props) => {
  return (
    <div className="row">
      
      <Tabs defaultActiveKey="main-dish" id="uncontrolled-tab-example">
        {
          props.muestras.map(({title, products})=>(
            <Tab eventKey={title} title={title}>
              <div className="row">
                {
                      products.map(({name,price, description})=>(
                        <Carta_Muestra title={name} description={description} price={price}/>
                      ))
                }
              </div>
            </Tab>
          ))

        }
      </Tabs>
      }
      </div>
  );
};
export default Bloque_Muestra;
