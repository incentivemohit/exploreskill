import React from "react";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import lady1 from "../images/w4.jpg";
import lady2 from "../images/w3.jpg";
import lady3 from "../images/img4.jpg";
import lady4 from "../images/img5.jpg";
import lady5 from "../images/w1.jpg";

import HomeWomenCard from "../HomeWomenCard/HomeWomenCard";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Content />
          <h3 className="text-center">Our Super Women</h3>
          <HomeWomenCard
            image={lady1}
            title="Rekha devi"
            heading=" I am a Mithila Painter From Madhubani, Bihar, India and my
            speciality is Mithila Painting and I make made posters and mithila
            painted sarees for weddings and occasions."
            para1="I am 57 years old and a part of Pehchaan since 4 years.In Bihar
            Mithila painting posters are one of the major part of weddin
            occasions .My products are been sold outside india too. PrimeMiniter
            Narendra Modi himself has praised the maithili artculture and has
            encouraged many other ladies. Some of the girls of our NGO are
            learning this art from me."
            para2="  Support of our customers have encouraged us to work on this mission
            to make Pehchaan an identity for all those ladies who have talents
            but havent got the platform to showcase it.It will be our heartiest
            request to share this website so that we can reach all women over
            india. phone:93498374939"
          />
          <HomeWomenCard
            image={lady2}
            title="Medha Devi"
            heading="I am a Handicraft Worker From Jabalpur, India and my speciality is Wooden Craft and I make bags , stands, wooden hangers and variety of other products."
            para1="I am 57 years old and a part of Pehchaan since 6 years.My hand wooden crafts are most unique products and is among top rated products .Here we all ladies sit together and makes several products for our customers. There are a lot of activities arranged here for ladies of all age groups. "
            para2="Support of our customers have encouraged us to work on this mission to make Pehchaan an identity for all those ladies who have talents but havent got the platform to showcase it.It will be our heartiest request to share this website so that we can reach all women over india ."
          />
          <HomeWomenCard
            image={lady3}
            title="Dariya Bhat"
            heading="I am a Handicraft Worker From Jaipur, Rajashthan and my speciality is Porcelain Art and Craft and I make flower vase , baskets, holders and variety of other products and customise it to make better."
            para1="I am 49 years old and a part of Pehchaan since 3 years.My father was a porcelain artist hence i have recived this artistry in hereditry. My products are one of the most sold products on our website.People call me clay lady here and love my products.I try to bring new cretivity in my product and "
            para2="Support of our customers have encouraged us to work on this mission to make Pehchaan an identity for all those ladies who have talents but havent got the platform to showcase it.It will be our heartiest request to share this website so that we can reach all women over india .
            phone: 9998374939"
          />

          <HomeWomenCard
            image={lady4}
            title="Apurva Mittal"
            heading="I am a Handicraft Worker From Nagpur, India and my speciality is Woollen Craft and I make woollen sweaters , mats, child clothing and variety of other products"
            para1="I am 63 years old and a part of Pehchaan since 6 years.My hand knitted woolen crafts are one of the best sellors here.Here we all ladies sit together and makes several products for our customers. There are a lot of activities arranged here for ladies of all age groups.  "
            para2="Support of our customers have encouraged us to work on this mission to make Pehchaan an identity for all those ladies who have talents but havent got the platform to showcase it.It will be our heartiest request to share this website so that we can reach all women over india .
            phone: 9998374939"
          />
          <HomeWomenCard
            image={lady5}
            title="Nidhi Khanna"
            heading="I am from Ujjain, Madhya Pradesh and I like do craft work. Craft of any kind"
            para1="Batik Print is popular craft existent in Ujjain and many bed sheets, sarees, wall panels, portraits, dress materials, etc. contain the rich batik prints. At my age i want to inspire other women who want to work and earn by utilizing their talent "
            para2="Support of our customers have encouraged us to work on this mission to make Pehchaan an identity for all those ladies who have talents but havent got the platform to showcase it.It will be our heartiest request to share this website so that we can reach all women over india. phone: 7883453292"
          />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
