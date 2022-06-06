import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserAuthContext";
import img1 from "../images/aurat.png";

function PaymentHeader() {
  const { user, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleHome = (e) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  const handleDonate = (e) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/donate");
    }
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
    } else {
      await logOut();
      navigate("/");
    }
  };
  return (
    <>
      <header class="py-2 border-bottom  text-white ">
        <div class="container d-flex flex-wrap justify-content-center px-4 bg-warning ">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            <img
              src={img1}
              alt=""
              className="rounded-circle"
              width={90}
              height={60}
            />
            <span class="fs-4 px-2">
              <a href="/" className="text-decoration-none">
                <h2 className="text-dark ">HomeyCrafts</h2>
              </a>
            </span>
          </a>

          <ul className="nav ">
            <li className="nav-item">
              <button
                className="btn btn-danger mt-2 text-white mx-2"
                onClick={handleHome}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-info mt-2 text-white mx-2"
                onClick={handleDonate}
              >
                Donate
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-success mt-2" onClick={handleLogOut}>
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default PaymentHeader;
