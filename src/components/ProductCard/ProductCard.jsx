import React, { useContext } from "react";
import "./ProductCard.css";

import { Rating } from "react-simple-star-rating";
import DialogBox from "../ProductList/DialogBox";
import { UserContext } from "../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleAction = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/dashboard/payment");
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
          {/* <a href="/dashboard/payment" className="text-decoration-none h5">
         
            </a> */}
          <button className="btn btn-warning buy-button" onClick={handleAction}>
            Get Now
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
