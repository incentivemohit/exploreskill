import React, { useContext } from "react";
import { UserContext } from "../Context/UserAuthContext";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    if (user) {
      logOut();
      navigate("/");
    }
  };
  return (
    <>
      <nav className="   border-bottom">
        <div className="container d-flex flex-wrap ">
          <ul className="nav me-auto h5  px-3 pt-1">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link link-dark px-2 active change  "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link link-dark px-2 change ">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/superwomen"
                className="nav-link link-dark px-2 change "
              >
                SuperWomen
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link link-dark px-2 change ">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link link-dark px-2 change ">
                Contact
              </Link>
            </li>
          </ul>
          {!user ? (
            <ul className="nav ">
              <li className="nav-item">
                <Link to="/login" className="nav-link link-dark px-2 ">
                  <button className="btn btn-warning ">Login</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link link-dark px-2">
                  <button className="btn btn-success">Register</button>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="nav ">
              <li className="nav-item">
                <Link to="/donate" className="nav-link link-dark px-2">
                  <button className="btn btn-warning">Donate</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link link-dark px-2">
                  <button className="btn btn-success" onClick={handleLogOut}>
                    LogOut
                  </button>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
