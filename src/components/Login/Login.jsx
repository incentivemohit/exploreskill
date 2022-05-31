import React, { useState, useContext } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserAuthContext";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(event);
    try {
      const member = await login(email, password);
      if (member) {
        navigate("/dashboard");
      } else {
        navigate("/register");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // const forgetPasswordHandler = (event) => {
  //   const email = event.target.email;
  //   if (email) forgetPassword(email).then(() => (event.target.email = ""));
  // };

  return (
    <div className="Login-form-background">
      {error && <Alert variant="danger">{error}</Alert>}
      <form className="Login-form" onSubmit={handleSubmit}>
        <h2 className="Login-form-title text-center">Login Here</h2>
        <div class="form-group">
          <label className="label-title">Email</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter username..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label className="label-title">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-bottom">
          <div className="login-submit-button">
            <button type="submit" class="btn btn-primary ">
              Submit
            </button>
          </div>
          <div className="login-further-info">
            <p>
              Don't have account ?
              <a href="/register" style={{ fontSize: "20px", color: "yellow" }}>
                Register Here
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
