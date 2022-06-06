import React, { useContext, useState, useEffect } from "react";
import "./ProductCard.css";
import axios from "axios";

import { Rating } from "react-simple-star-rating";
import DialogBox from "../ProductList/DialogBox";
import { UserContext } from "../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [GetData, setData] = useState([]);

  useEffect(() => {
    getPosts();
  }, [0]);

  const getPosts = async () => {
    await axios
      .get("/getposts")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleAction = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/payment");
    }
  };
  return (
    <>
      {GetData.map((data) => {})}
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
          <button
            className="btn btn-info  buy-button"
            style={{ fontSize: "18px" }}
            onClick={handleAction}
          >
            Get Now
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
