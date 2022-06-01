import React, { useState } from "react";
import "./Member.css";
import Header from "../Header/Header";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Member() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const memberData = {
      firstName,
      lastName,
      email,
      phoneNo,
      description,
    };

    console.log("POST: ", memberData);

    try {
      if (
        firstName !== "" &&
        lastName !== "" &&
        email !== "" &&
        phoneNo !== ""
      ) {
        await axios.post("/member", memberData).then((res) => {
          console.log(res.data);
          navigate("/thankyou");
          setTimeout(() => {
            alert("Registered Successfully");
          }, 1000);
        });
      } else {
        setError("Error! Please check your  details!");
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
      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}
      <Header />
      <div className="member-body">
        <h3 className="mx-5 text-white py-3 ">
          Fill this to be a part of ExploreSkills
        </h3>

        <div
          className="form card p-5  mx-5 bg-warning"
          style={{ width: "40rem" }}
        >
          <form
            method="POST"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div class="form-group top-form ">
              <div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="First Name..."
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Last Name..."
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
              </div>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email..."
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Phone no..."
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div class="form-group">
              <textarea
                className="px-2"
                name="description"
                id=""
                cols="70"
                rows="5"
                placeholder="Write about yourself here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              {/* <form>
                <div class="form-group">
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                    name="file"
                    onChange={saveFile}
                  />
                </div>
              </form> */}
            </div>

            <button type="submit" class="btn btn-primary w-100">
              Join Us
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Member;
