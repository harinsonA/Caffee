import React, { Component } from "react";
import Banner from "../banner/Banner";
import Slider from "../slider/Home-Slider";
import NavInfo from "../navInfo/navinfo";
import Menu from "./components/componente_menu_carta/menu";
import Muestra_Menu from "./components/componente_muestra_menu/muestra-menu";

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Banner />
        <Slider />
        <NavInfo />
        <Menu />
        <Muestra_Menu />
      </>
    );
  }
}
export default Home;
