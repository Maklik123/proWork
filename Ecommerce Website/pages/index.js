import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Head from "../component/Head";
import Slider from "../component/Slider"
import MainSlider from "../component/MainSlider"
export default class extends React.Component{
  render(){
    return(
      <div>
        <Head></Head>
        <Header></Header>
        {/* <Slider /> */}
        <MainSlider />
        <Footer></Footer>
      </div>
    )
  }
}
