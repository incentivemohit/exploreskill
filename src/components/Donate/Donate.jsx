import React from "react";
import Header from "../Header/Header";
import img from "../images/donate.jpg";

function Donate() {
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
        <div className="container-fluid bg-dark text-white text-center">
          <h2 className=" py-3 ">Donate us</h2>
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
          <div
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
          </div>

          <form className="p-3">
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
                />
              </div>
              <div className="year mx-2">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Year</option>
                  <option value="1">2022</option>
                  <option value="2">2023</option>
                  <option value="3">2024</option>
                  <option value="4">2025</option>
                </select>
              </div>
              <div className="cvv-no ">
                <input type="password" className="h-100" placeholder="CVV" />
              </div>
            </div>
            <button type="submit" class="btn btn-primary mt-3 w-100">
              <a href="/thankyou" className="text-decoration-none text-white">
                Donate Now
              </a>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Donate;
