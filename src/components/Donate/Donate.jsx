import React, { useState } from "react";
import LoginHeader from "../Header/LoginHeader";
import img from "../images/donate.jpg";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Donate() {
  const [cardOwner, setCardOwner] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCVV] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donateData = {
      cardOwner,
      cardNumber,
      day,
      year,
      cvv,
    };

    console.log("POST: ", donateData);

    try {
      if (cardNumber !== "" && cvv !== "") {
        await axios.post("/donate", donateData).then((res) => {
          console.log(res.data);
          setCardOwner("");
          setCardNumber("");
          setDay("");
          setYear("");
          setCVV("");
          navigate("/donatestatus");
          setTimeout(() => {
            alert("Payment Successfull");
          }, 5000);
        });
      } else {
        setError("Error! Please check your card details!");
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
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
        <LoginHeader />
        <div className="container-fluid bg-dark text-white text-center">
          <h2 className=" py-1 ">Donate us</h2>
        </div>
        <div
          className="donate-card card bg-warning  "
          style={{
            width: "35rem",
            borderBottomLeftRadius: "50px",
            borderTopRightRadius: "60px",
            backgroundColor: "yellow",
            marginLeft: "150px",
            marginTop: "30px",
          }}
        >
          <h5 className="text-center py-2 ">Fill Your Card Details Here</h5>
          {/* <div
            className="card"
            style={{
              width: "24rem",
              margin: "0 auto",
              padding: "5px",
              marginTop: "10px",
            }}
          >
            <p>Please! Pay through card</p>
            <button className="btn btn-primary">
              <i class=" fa fa-credit-card"></i>
              <t></t> Credit/Debit Card
            </button>
          </div> */}

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
                placeholder="Mohit"
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
                placeholder="123456789456"
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
            <button type="submit" class="btn btn-primary mt-3 w-100">
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Donate;
