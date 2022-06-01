import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import shilpa from "../../images/developers/shilpa.jpg";
import { slide as Menu } from "react-burger-menu";
import "./Side.css";
function Sidebar() {
  return (
    <>
      <Menu>
        <div className="profile-section">
          <div className="profile-img">
            <img src={shilpa} className="dp" alt="" />
          </div>
          <p className="profile-name">Jenny Williams</p>
        </div>

        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link href="#" class="nav-link text-white" aria-current="page">
              <i className="fa fa-home"></i> Dashboard
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link text-white">
              <i className=" fa fa-shopping-cart"></i> Orders
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link text-white">
              <i className="fa fa-product-hunt"></i> Products
            </Link>
          </li>

          <li class="nav-item">
            <Link href="#" class="nav-link text-white">
              <i className="fa fa-sign-out"></i> Logout
            </Link>
          </li>
        </ul>
      </Menu>
    </>
  );
}

export default Sidebar;
