import React, { useContext } from "react";
import "./ProductCard.css";

import img1 from "../images/img5.jpg";
import { Rating } from "react-simple-star-rating";
import DialogBox from "../ProductList/DialogBox";
import { UserContext } from "../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRoute = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
    } else {
      navigate("/payment");
    }
  };
  return (
    <>
      <div className="outer-card-body" style={{ width: "25rem" }}>
        <div className="product-card" style={{ width: "25rem" }}>
          <img src={props.image} alt="" width={400} height={270} />
          <div className="product-info">
            <ul style={{ listStyle: "none" }} className="text-center">
              <li className="product-card-title">{props.name}</li>
              <li className="product-seller-name">{props.productName}</li>
              <li className="text-primary ">
                <h4>MRP: Rs.{props.price}/unit</h4>
              </li>
              <li>
                <Rating />
              </li>
              <li className="text-info mt-2">
                <DialogBox />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-warning buy-button">
            <a
              href="/payment"
              className="text-decoration-none h5"
              onClick={handleRoute}
            >
              Buy Now
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
