import React from "react";
import logo from "../images/aurat.png";

function AdminLogin() {
  return (
    <>
      <form className="form-signin text-center w-25 m-auto mt-5">
        <img className="mb-2" src={logo} alt="" width="150" height="72" />
        <h1 className=" mb-3 font-weight-normal">HomeyCrafts </h1>
        <h4 className=" mb-3 font-weight-normal">Admin Panel </h4>
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control mb-1"
          placeholder="Email address"
          required=""
          autofocus=""
        />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
        />

        <button
          className="btn btn-lg btn-primary btn-block mt-1 w-100"
          type="submit"
        >
          Sign in
        </button>
        <p className="mt-2 mb-3 text-muted">© 2022-2023</p>
      </form>
    </>
  );
}

export default AdminLogin;
