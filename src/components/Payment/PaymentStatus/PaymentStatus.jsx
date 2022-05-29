import React from "react";
import tick from "../../images/successTick.jpg";
import "./PaymentStatus.css";

function PaymentStatus() {
  return (
    <>
      <div className="payment-status-body text-center">
        <div className="container-fluid bg-danger  p-4 text-white">
          <h3 className="text-center">Payment Status</h3>
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

        <button className="btn btn-success w-25 ">
          <a href="/products" className="text-decoration-none text-white">
            Shop Again
          </a>
        </button>
      </div>
    </>
  );
}

export default PaymentStatus;
