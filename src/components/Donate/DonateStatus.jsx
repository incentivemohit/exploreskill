import React from "react";
import tick from "../images/successTick.jpg";
import "../Payment/PaymentStatus/PaymentStatus.css";

function DonateStatus() {
  return (
    <>
      <div className="payment-status-body text-center">
        <div className="container-fluid bg-danger p-3 text-white">
          <h4 className="text-center">Donate Payment Status</h4>
        </div>

        <div className="payment-status">
          <img src={tick} alt="" height={300} />
          <h2>Thank You For Your Donation!</h2>
        </div>

        <button className="btn btn-success w-25 ">
          <a href="/" className="text-decoration-none text-white">
            Go to Home Page
          </a>
        </button>
      </div>
    </>
  );
}

export default DonateStatus;
