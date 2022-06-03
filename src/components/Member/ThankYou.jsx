import React, { useContext } from "react";
import LoginHeader from "../Header/LoginHeader";
import ty from "../images/thank.jpg";
import { UserContext } from "../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const GoToDashBoard = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div
        className="description text-center "
        style={{
          backgroundImage: `url(${ty})`,
          backgroundSize: "cover",
          height: "100vh",
          padding: "140px",
        }}
      >
        <div className="card  w-50 text-center m-auto bg-white  ">
          <h3>Thank You for willing to join us !!</h3>
          <h3>Out team will be contacting you soon.</h3>
        </div>
        <button className="btn btn-primary w-25 mt-2" onClick={GoToDashBoard}>
          Return to Home Page
        </button>
      </div>
    </>
  );
}

export default ThankYou;
