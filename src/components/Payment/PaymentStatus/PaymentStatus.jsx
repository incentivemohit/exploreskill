import React from "react";
import { Link } from "react-router-dom";
import tick from "../../images/successTick.jpg";
import PaymentHeader from "../PaymentHeader";
import "./PaymentStatus.css";

function PaymentStatus() {
  return (
    <>
      <div className="payment-status-body text-center">
        <PaymentHeader />
        <div className="container-fluid nav navbar bg-danger p-1 text-white">
          <div className="payment-status-title m-auto">
            <h3 style={{ marginLeft: "190px" }}>Payment Status</h3>
          </div>
          <div className="print-details">
            <Link to="/bill">
              <button className="btn btn-warning mx-5">
                Go to Order Details
              </button>
            </Link>
          </div>
        </div>

        <div className="payment-status">
          <img src={tick} alt="" height={300} />
          <h2>Thank You For Your Order!</h2>
          <p>
            Thank you for buying our products ! Orders are generally delivered
            within 6-7 working days.
          </p>
        </div>

        <div className="payment-date ">
          <h5>Estimated Delivery Date</h5>
          <p>Dec 28th,2022</p>
        </div>

        <a href="/products" className="text-decoration-none text-white">
          <button className="btn btn-success w-25 ">Shop Again</button>{" "}
        </a>
      </div>
    </>
  );
}

export default PaymentStatus;
