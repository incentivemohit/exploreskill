import React from "react";
import "./WomenCard.css";

function WomenCard(props) {
  return (
    <>
      <div className="women-card ">
        <img
          src={props.image}
          alt=""
          width={180}
          height={160}
          className="rounded-circle"
        />
        <div className="women-details">
          <div className="women-name">{props.name}</div>
          <div className="women-description">
            <h6>{props.heading}</h6>

            <p>{props.para1}</p>
            <p>{props.para2}</p>
          </div>
          <button className="btn btn-warning">Read More...</button>
        </div>
      </div>
    </>
  );
}

export default WomenCard;
