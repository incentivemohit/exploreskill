import React, { useState, useContext } from "react";
import "./Register.css";
import { UserContext } from "../Context/UserAuthContext";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== cPassword) {
      setError("Passwords do not match");
    } else {
      try {
        await register(email, password);
        setStatus("Registered Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } catch (err) {
        setError(err.message);
      }
    }
  };
  return (
    <>
      <div className="registration-form-background">
        {status && (
          <Alert variant="success" className="text-center">
            {status}
          </Alert>
        )}
        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}
        <form className=" registration-form my-5" onSubmit={handleSubmit}>
          <h2 className="registration-form-title text-center">Register Here</h2>

          <div class="form-group">
            <label className="label-title">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label className="label-title">Confirm-Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword2"
              placeholder="Confirm-password"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>

          <div className="register-bottom">
            <div className="register-submit-button">
              <button type="submit" class="btn btn-primary  ">
                Submit
              </button>
            </div>
            <div className="register-further-info">
              <p>
                <a
                  href="/"
                  style={{
                    fontSize: "18px",
                    color: "white",
                    backgroundColor: "brown",
                    borderRadius: "10px",
                    padding: "5px",
                    marginLeft: "10px",
                  }}
                  className="text-decoration-none"
                >
                  Go to Login Page
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
