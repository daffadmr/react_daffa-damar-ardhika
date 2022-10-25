import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import jumbotron1 from "../asset/img/jumbotron1.jpg"
import jumbotron2 from "../asset/img/jumbotron2.jpg"

const CarouselSlide = () => {
  return (
    <Carousel>
      <Carousel.Item style={{backgroundImage: `url(${jumbotron1})`, height: "80vh"}}> 
      </Carousel.Item>
      <Carousel.Item style={{backgroundImage: `url(${jumbotron2})`, height: "80vh"}}>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;