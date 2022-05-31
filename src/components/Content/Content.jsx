import React from "react";
import Carousel from "react-bootstrap/Carousel";
import w1 from "../images/womenImages/w1.jpg";
import w2 from "../images/img3.jpg";
import w3 from "../images/img4.jpg";
import w4 from "../images/img5.jpg";
import w5 from "../images/img6.jpg";

function Content() {
  return (
    <>
      <div className="content">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={w2} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={w1} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={w3} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={w4} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={w5} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Content;
