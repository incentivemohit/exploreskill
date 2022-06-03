import React, { useContext } from "react";
import "./AdminPanelSidebar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminPanelSidebar() {
  const { logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();

    try {
      await logOut();
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div
        class="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "250px" }}
      >
        <Link
          to="/adminpanel"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          {/* <img src={email.profile} alt="" className="admin-profile" /> */}
          <span class="fs-4 dashboard">Mohit kumar</span>
        </Link>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link
              to="/adminpanel"
              class="nav-link text-light"
              aria-current="page"
            >
              <i class="fa fa-home"></i>
              <span class="ms-2">
                <button className="bg-dark text-white btn-outline-warning">
                  Latest Posts
                </button>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/newpost" class="nav-link text-white">
              <i class="fa fa-edit"></i>
              <span class="ms-2">
                <button className="bg-dark text-white btn-outline-warning">
                  New Post
                </button>
              </span>
            </Link>
          </li>
          {/* <li>
            <Link to="/feedback" class="nav-link text-white">
              <i class="fa fa-comments-o"></i>
              <span class="ms-2"> FeebBack</span>
            </Link>
          </li> */}

          <li>
            <Link to="/dashboard" class="nav-link text-white">
              <i class="fa fa-eye"></i>
              <span class="ms-2">
                <button className="bg-dark text-white btn-outline-warning">
                  View Site
                </button>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/login" class="nav-link text-white">
              <i class="fa fa-sign-out"></i>
              <span class="ms-2">
                <button
                  className="bg-dark text-white btn-outline-warning"
                  onClick={handleLogOut}
                >
                  LogOut
                </button>
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
