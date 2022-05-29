import React from "react";
import "./Member.css";
import member from "../images/supergirl.jpg";
import Header from "../Header/Header";

function Member() {
  return (
    <>
      <Header />
      <div className="member-body">
        <h3 className="mx-5 text-white py-3 ">
          Fill this to be a part of ExploreSkills
        </h3>

        <div
          className="form card p-5  mx-5 bg-warning"
          style={{ width: "40rem" }}
        >
          <form>
            <div class="form-group top-form ">
              <div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="First Name..."
                />
              </div>

              <div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Last Name..."
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
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Phone no..."
              />
            </div>
            <div class="form-group">
              <textarea
                className="px-2"
                name=""
                id=""
                cols="70"
                rows="5"
                placeholder="Write about yourself here..."
              ></textarea>
              <form>
                <div class="form-group">
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
              </form>
            </div>

            <button type="submit" class="btn btn-primary w-100">
              <a
                href="/thankyou"
                className="text-decoration-none text-white h5"
              >
                Join Us
              </a>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Member;
