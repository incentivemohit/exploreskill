import React from "react";
import "./Header.css";
import img1 from "../images/aurat.png";

function Header() {
  return (
    <>
      <div className="container-fluid topBar">
        <div className="topBar-left ">
          <ul className="topLeft-ul ">
            <li className="topLeft-links">
              <a href="/" className="text-decoration-none">
                Home
              </a>
            </li>
            <li className="topLeft-links">
              <a href="/products" className="text-decoration-none">
                BuyNow
              </a>
            </li>
            <li className="topLeft-links">
              <a href="/superwomen" className="text-decoration-none">
                Super Women
              </a>
            </li>
            <li className="topLeft-links">
              <a href="/about" className="text-decoration-none">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="topBar-center">
          <div className="logo">
            <a href="/">
              <img
                src={img1}
                alt=""
                className="rounded-circle"
                style={{
                  width: "70px",
                  height: "50px",
                }}
              />
            </a>
          </div>
          <div className="site-name">
            <a href="/" className="text-decoration-none ">
              ExploreSkills
            </a>
          </div>
        </div>

        <div className="topRight ">
          <ul className="topRight-ul">
            <li className="topRight-links">
              <a href="/donate">
                <button className="btn btn-info">Donate</button>
              </a>
            </li>
            <li className="topRight-links">
              <a href="/login">
                <button className="btn btn-success">Login</button>
              </a>
            </li>

            <li className="topRight-links">
              <a href="/register">
                <button className="btn btn-warning">Register</button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="topBar ">
        <div className="topLeft  ">
          <ul className="topLeft-ul">
            <li className="topLeft-links">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </li>
            <li className="topLeft-links">
              <Link to="/buynow" className="text-decoration-none">
                BuyNow
              </Link>
            </li>
            <li className="topLeft-links">
              <Link to="/about" className="text-decoration-none">
                About
              </Link>
            </li>
          </ul>
        </div>
        <img
          src={img1}
          alt=""
          className="rounded-circle"
          style={{
            width: "90px",
            height: "70px",
            padding: "5px",
            marginTop: "2px",
          }}
        />
        <div className="topCenter ">ExploreSkills</div>
        <div className="topRight ">
          <ul className="topRight-ul">
            <Link to="/login">
              <li className="topRight-links">
                <button className="btn btn-success">Login</button>
              </li>
            </Link>

            <Link to="/register">
              <li className="topRight-links">
                <button className="btn btn-warning">Register</button>
              </li>
            </Link>
          </ul>
        </div>
      </div> */}
    </>
  );
}

export default Header;
