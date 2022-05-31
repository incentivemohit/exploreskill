import React from "react";
import LoginHeader from "../Header/LoginHeader";
import ty from "../images/thank.jpg";

function ThankYou() {
  return (
    <>
      <LoginHeader />
      <div
        className="description text-center "
        style={{
          backgroundImage: `url(${ty})`,
          backgroundSize: "cover",
          height: "90vh",
          padding: "140px",
        }}
      >
        <div className="card  w-50 text-center m-auto bg-white  ">
          <h3>Thank You for willing to join us !!</h3>
          <h3>Out team will be contacting you soon.</h3>
        </div>
        <button className="btn btn-primary w-25 mt-2">
          <a href="/" className="text-decoration-none text-white">
            Return to Home Page
          </a>
        </button>
      </div>
    </>
  );
}

export default ThankYou;
