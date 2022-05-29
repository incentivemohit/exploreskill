import React from "react";
import "./ProductCard.css";

import img1 from "../images/img5.jpg";
import { Rating } from "react-simple-star-rating";

function ProductCard() {
  return (
    <>
      <div className="outer-card-body" style={{ width: "25rem" }}>
        <div className="product-card" style={{ width: "25rem" }}>
          <img src={img1} alt="" width={400} />
          <div className="product-info">
            <ul style={{ listStyle: "none" }} className="text-center">
              <li className="product-card-title">Shilpa ki dalia</li>
              <li className="product-seller-name">Shilpa Shetty</li>
              <li className="text-primary ">
                <h4>MRP: Rs.100</h4>
              </li>
              <li>
                <Rating />
              </li>
              <li className="text-info">
                <h5>Add Review</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-warning buy-button">
            <a href="/login" className="text-decoration-none">
              Buy Now
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
