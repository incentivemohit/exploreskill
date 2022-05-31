import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from "../images/productCarouselImages/p1.jpg";
import p2 from "../images/productCarouselImages/p2.png";
import p3 from "../images/productCarouselImages/p3.png";
import p4 from "../images/productCarouselImages/p4.jpg";
import p5 from "../images/productCarouselImages/p5.png";
import p6 from "../images/productCarouselImages/p6.png";
import pr1 from "../images/products/pro1.png";
import pr2 from "../images/products/pro2.webp";
import pr3 from "../images/products/pro3.jpg";
import pr4 from "../images/products/pro4.jpg";
import pr5 from "../images/products/pro5.jpg";
import pr6 from "../images/products/pro6.jpg";
import pr7 from "../images/products/pro7.jpg";
import pr8 from "../images/products/pro8.jpg";

function HomeCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive} className="my-2">
        <div>
          <img src={p1} alt="" width={380} height={200} />
        </div>
        <div>
          <img src={p2} alt="" width={380} height={200} />
        </div>
        <div>
          <img src={p3} alt="" width={380} height={200} />
        </div>
        <div>
          <img src={p4} alt="" width={380} height={200} />
        </div>
        <div>
          <img src={p5} alt="" width={380} height={200} />
        </div>
        <div>
          <img src={p6} alt="" width={380} height={200} />
        </div>
        <div>
          <img src={p1} alt="" width={380} height={200} />
        </div>
        <div>
          <img src={pr1} alt="" width={380} height={200} />
        </div>
        <div>
          <img src={pr2} alt="" width={380} height={250} />
        </div>
        <div>
          <img src={pr3} alt="" width={380} height={250} />
        </div>
        <div>
          <img src={pr4} alt="" width={380} height={250} />
        </div>
        <div>
          <img src={pr5} alt="" width={380} height={250} />
        </div>
        <div>
          <img src={pr6} alt="" width={380} height={250} />
        </div>
        <div>
          <img src={pr7} alt="" width={380} height={250} />
        </div>
        <div>
          <img src={pr8} alt="" width={380} height={250} />
        </div>
        <div>
          <img src={pr8} alt="" width={380} height={250} />
        </div>
      </Carousel>
      ;
    </>
  );
}

export default HomeCarousel;
