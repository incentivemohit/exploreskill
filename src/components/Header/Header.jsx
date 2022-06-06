import React, { useContext } from "react";
import "./Header.css";
import img1 from "../images/aurat.png";
import Navbar from "../Navbar/Navbar";
function Header() {
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
          {/* {!user ? (
            <></>
          ) : (
            <form class="col-12 col-lg-auto mb-2 mt-2 mb-lg-0">
              <input
                type="search"
                class="form-control"
                style={{ width: "350px" }}
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
          )} */}
        </div>
      </header>
      <Navbar />
    </>
  );
}

export default Header;
