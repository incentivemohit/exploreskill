import React from "react";
import Header from "../Header/Header";
import "./About.css";
import mk from "../images/developlers/mkk.jpg";
import shilpa from "../images/developlers/shilpa.jpg";
import sakshi from "../images/developlers/sakshi.jpeg";

function About() {
  return (
    <>
      <Header />
      <div className="about-body  ">
        <div className="about card w-75 p-3">
          <p className="text-center h2 bg-dark text-white">About us</p>

          <h6>
            Our goal is to form a Website for providing identity to all those
            unprivileged women who have the talent and skills to earn on their
            own anywhere from India by empowering them and providing a platform
            for showcasing their products to the world. Buyers can visit our
            website and can read about some of our changemakers and can buy
            their handmade products. They can rate our products as well as
            support us by donating to grow bigger and reach much more
            underprivileged women.
          </h6>
          <p className="text-center  h2 bg-dark text-white ">Developers</p>

          <div class="container marketing px-5 mx-5 my-1">
            <div class="row">
              <div class="col-lg-4">
                <img
                  class="rounded-circle"
                  src={mk}
                  alt="Generic placeholder image"
                  width="140"
                  height="140"
                />
                <h2>Mohit Kumar</h2>
                <p>ECE-2 (01010107319)</p>
                <p>NSUT(EAST CAMPUS)</p>
              </div>
              <div class="col-lg-4">
                <img
                  class="rounded-circle"
                  src={shilpa}
                  alt="Generic placeholder image"
                  width="140"
                  height="140"
                />
                <h2>Shilpa Panwar</h2>
                <p>ECE-2 (08110102818) </p>
                <p>NSUT(EAST CAMPUS)</p>
              </div>
              <div class="col-lg-4">
                <img
                  class="rounded-circle"
                  src={sakshi}
                  alt="Generic placeholder image"
                  width="140"
                  height="140"
                />
                <h2>Sakhi Naudiyal</h2>
                <p>ECE-2 (07510102818)</p>
                <p>NSUT(EAST CAMPUS)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
