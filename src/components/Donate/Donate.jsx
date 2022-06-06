import React, { useState, useContext } from "react";
import img from "../images/donate.jpg";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserAuthContext";
import Header from "../Header/Header";
import PaymentHeader from "../Payment/PaymentHeader";

function Donate() {
  const [cardOwner, setCardOwner] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCVV] = useState("");
  const [money, setMoney] = useState("");
  const [error, setError] = useState("");

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donateData = {
      cardOwner,
      cardNumber,
      day,
      year,
      cvv,
      money,
    };

    console.log("POST: ", donateData);

    try {
      if (user) {
        if (cardNumber !== "" && cvv !== "") {
          await axios.post("/donate", donateData).then((res) => {
            console.log(res.data);

            navigate("/donatestatus");
            setTimeout(() => {
              alert("Payment Successfull");
            }, 2000);
          });
        } else {
          setError("Error! Please check your card details!");
          setTimeout(() => {
            setError("");
          }, 5000);
        }
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <PaymentHeader />
      <div
        className="donate-body"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}

        <div className="container-fluid bg-dark text-white text-center">
          <h2 className=" py-1 ">Donate us</h2>
        </div>
        <div
          className="donate-card card bg-warning py-2 "
          style={{
            width: "35rem",
            borderBottomLeftRadius: "50px",
            borderTopRightRadius: "60px",
            backgroundColor: "yellow",
            marginLeft: "150px",
            marginTop: "30px",
          }}
        >
          <h4 className="text-center ">Fill Your Card Details Here</h4>

          <form className="p-3" method="POST" onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">
                <h6>Card Owner</h6>
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Mohit..."
                value={cardOwner}
                onChange={(e) => setCardOwner(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">
                <h6>Card Number</h6>
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="123456789456..."
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>

            <div
              className="expire-date"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="day w-25">
                <input
                  type="text"
                  className="w-75 h-100 mx-1"
                  placeholder="Day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
              </div>
              <div className="year mx-2">
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Year</option>
                  <option value="1">2022</option>
                  <option value="2">2023</option>
                  <option value="3">2024</option>
                  <option value="4">2025</option>
                </select>
              </div>
              <div className="cvv-no ">
                <input
                  type="password"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                  className="h-100"
                  placeholder="CVV"
                />
              </div>
            </div>
            <div class="form-group my-3">
              <label for="exampleInputEmail1">
                <h6>Add Money to be Donated</h6>
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Amount..."
                value={money}
                onChange={(e) => setMoney(e.target.value)}
              />
            </div>

            <button type="submit" class="btn btn-primary  mt-1 w-100">
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Donate;
