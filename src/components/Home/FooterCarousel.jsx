import React from "react";
import Carousel from "react-bootstrap/Carousel";
import b1 from "../images/carousel-1.jpg";
import b2 from "../images/carousel-2.jpg";
import b3 from "../images/carousel-3.jpg";

function FooterCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 "
            height={450}
            src={b1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 "
            height={450}
            src={b2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 " src={b3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default FooterCarousel;
