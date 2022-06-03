import React from "react";

function Navbar() {
  return (
    <>
      <div
        className="container-fluid"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="navLeft navbar">
          <div className="navLeftImage">hello</div>
          <div className="navLeftLogoName">ExploreSkills</div>
        </div>

        <div className="navCenter">
          <form action="" navbar>
            <input type="search" width={200} />
            <button>Search</button>
          </form>
        </div>

        <div className="navRight">
          <ul className="navRight-links-ul  ">
            <li className="navRight-links-li ">Login</li>
            <li className="navRight-links-li ">Register</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
