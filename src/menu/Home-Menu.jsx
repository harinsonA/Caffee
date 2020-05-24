import React, { Component } from "react";
import Banner from "../componentes-generales/banner/Banner";
import NavInfo from "../componentes-generales/navInfo/navinfo";
import Menu from "./components/componente_menu_carta/menu";
import Muestra_Menu from "./components/componente_muestra_menu/muestra-menu";
import Footer from "../componentes-generales/footer/main-footer";
import Slider from "../componentes-generales/slider/slider";

class Home_menu extends Component {
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
        <Footer />
      </>
    );
  }
}
export default Home_menu;
