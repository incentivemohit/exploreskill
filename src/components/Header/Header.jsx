import React from "react";
import "./Header.css";
import img1 from "../images/aurat.png";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <>
      <div className="container-fluid topBar">
        <div className="topBar-left ">
          <ul className="topLeft-ul ">
            <li className="topLeft-links">
              <a href="/" className="text-decoration-none text-white">
                Home
              </a>
            </li>
            <li className="topLeft-links">
              <a href="/products" className="text-decoration-none text-white">
                Products
              </a>
            </li>
            <li className="topLeft-links">
              <a href="/superwomen" className="text-decoration-none text-white">
                Super Women
              </a>
            </li>
            <li className="topLeft-links">
              <a href="/about" className="text-decoration-none text-white">
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
            <a href="/" className="text-decoration-none text-white">
              ExploreSkills
            </a>
          </div>
        </div>

        <div className="topRight ">
          <ul className="topRight-ul">
            {/* <li className="topRight-links">
              <a href="/donate">
                <button className="btn btn-info  text-white">Donate</button>
              </a>
            </li> */}
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
    </>
  );
}

export default Header;
