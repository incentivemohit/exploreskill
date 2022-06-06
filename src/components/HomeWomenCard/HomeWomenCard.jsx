import React from "react";
import "./HomeWomenCard.css";

function HomeWomenCard(props) {
  return (
    <>
      <div className="home-women-card">
        <div className="home-women-img p-3 m-5">
          <img
            src={props.image}
            alt=""
            className="rounded-circle"
            width={200}
            height={300}
          />
        </div>
        <div className="home-women-details p-5 text-center ">
          <h2>{props.title}</h2>
          <h5>{props.heading}</h5>
          <p>{props.para1}</p>
          <br />
          <p>{props.para2}</p>
        </div>
      </div>
    </>
  );
}

export default HomeWomenCard;
