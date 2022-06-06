import React, { useContext } from "react";
import ty from "../images/thank.jpg";
import { UserContext } from "../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const GoToDashBoard = () => {
    if (user) {
      navigate("/adminlogin");
    } else {
      navigate("/login");
    }
  };
  const GoToHomePage = () => {
    if (user) {
      navigate("/");
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
          <h3>Congratulations!! You are our new Seller</h3>
          <h3>Start Your Journey With Us!!</h3>
        </div>
        <button
          className="btn btn-warning  w-25 mt-2 pt-2 mx-1"
          onClick={GoToDashBoard}
        >
          <h5> Go to Admin Panel</h5>
        </button>
        <button
          className="btn btn-primary w-25 pt-2 mt-2"
          onClick={GoToHomePage}
        >
          <h5> Return to Home Page</h5>
        </button>
      </div>
    </>
  );
}

export default ThankYou;
