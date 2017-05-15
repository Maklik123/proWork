import React from "react"
var Carousel = require('nuka-carousel')

export default()=>(
  <Carousel slidesToShow={6} cellAlign="center">
        <img src="static/img/slide-1.jpg"/>
        <img src="static/img/slide-2.jpg"/>
        <img src="static/img/slide-3.jpg"/>
        <img src="static/img/slide-1.jpg"/>
        <img src="static/img/slide-2.jpg"/>
        <img src="static/img/slide-3.jpg"/>
      </Carousel>
)
