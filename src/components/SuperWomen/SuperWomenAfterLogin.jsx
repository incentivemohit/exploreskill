import React from "react";
import "./SuperWomen.css";
import lady1 from "../images/1.png";
import lady2 from "../images/2.jpg";
import lady3 from "../images/womenImages/w3.jpg";
import lady4 from "../images/womenImages/w4.jpg";
import WomenCard from "../Women/WomenCard";
import Footer from "../Footer/Footer";
import LoginHeader from "../Header/LoginHeader";

function SuperWomenAfterLogin() {
  return (
    <>
      <div className="superwomen">
        <LoginHeader />
        <div className="top-heading">
          <div className="top-left">
            <h2>
              <b className="text-light">Some of our Super Women</b>
            </h2>
          </div>
          <div className="top-right">
            <a href="/dashboard/membership">
              <button className="btn btn-warning ">
                Be a part of ExploreSkills
              </button>
            </a>
          </div>
        </div>

        <div className="row text-center mx-5 my-4">
          <div className="col">
            <WomenCard
              image={lady1}
              name="Kalindini Devi"
              heading="I am a Mithila Painter From Madhubani, Bihar, India and my speciality is Mithila Painting and I make made posters and mithila painted sarees for weddings and occasions."
              para1=" I am 57 years old and a part of ExploreSkills since 4 years.In
              Bihar Mithila painting posters are one of the major part of weddin
              occasions .My products are been sold outside india too.
              PrimeMiniter Narendra Modi himself has praised the maithili
              artculture and has encouraged many other ladies. Some of the girls
              of our NGO are learning this art from mee"
              para2=" Support of our customers have encouraged us to work on this
              mission to make ExploreSkills an identity for all those ladies who have
              talents but havent got the platform to showcase it.It will be our
              heartiest request to share this website so that we can reach all
              women over india. phone: 93498374939"
            />
          </div>
          <div className="col">
            <WomenCard
              image={lady2}
              name="Asha kumari"
              heading="I am a Handicraft Worker From Jabalpur, India and my speciality is Wooden Craft and I make bags , stands, wooden hangers and variety of other products."
              para1="I am 63 years old and a part of ExploreSkills since 6 years.My hand wooden crafts are most unique products and is among top rated products .Here we all ladies sit together and makes several products for our customers. There are a lot of activities arranged here for ladies of all age groups"
              para2="Support of our customers have encouraged us to work on this mission to make ExploreSkills an identity for all those ladies who have talents but havent got the platform to showcase it.It will be our heartiest request to share this website so that we can reach all women over india ."
            />
          </div>
          <div className="col">
            <WomenCard
              image={lady3}
              name="Anita Devi"
              heading="I am a Mithila Painter From Madhubani, Bihar, India and my speciality is Mithila Painting and I make made posters and mithila painted sarees for weddings and occasions."
              para1=" I am 47 years old and a part of ExploreSkills since 4 years.In
              Bihar Mithila painting posters are one of the major part of weddin
              occasions .My products are been sold outside india too.
              PrimeMiniter Narendra Modi himself has praised the maithili
              artculture and has encouraged many other ladies. Some of the girls
              of our NGO are learning this art from mee"
              para2=" Support of our customers have encouraged us to work on this
              mission to make ExploreSkills an identity for all those ladies who have
              talents but havent got the platform to showcase it.It will be our
              heartiest request to share this website so that we can reach all
              women over india. phone: 93498374939"
            />
          </div>
          <div className="col">
            <WomenCard
              image={lady4}
              name="Mamta Pal"
              heading="I am a Handicraft Worker From Jabalpur, India and my speciality is Wooden Craft and I make bags , stands, wooden hangers and variety of other products."
              para1="I am 80 years old and a part of ExploreSkills since 6 years.My hand wooden crafts are most unique products and is among top rated products .Here we all ladies sit together and makes several products for our customers. There are a lot of activities arranged here for ladies of all age groups"
              para2="Support of our customers have encouraged us to work on this mission to make ExploreSkills an identity for all those ladies who have talents but havent got the platform to showcase it.It will be our heartiest request to share this website so that we can reach all women over india ."
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SuperWomenAfterLogin;
