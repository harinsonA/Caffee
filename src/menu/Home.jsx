import React, { Component } from "react";
import Banner from "../banner/Banner";
import Slider from "../slider/Home-Slider";
import NavInfo from "../navInfo/navinfo";
import Menu from "./components/menu";

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
      </>
    );
  }
}
export default Home;
