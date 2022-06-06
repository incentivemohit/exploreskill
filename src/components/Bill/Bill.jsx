import React from "react";
import img from "../images/aurat.png";

function Bill() {
  return (
    <>
      <div className="bill-body">
        <form className="w-75 m-auto mt-3 mb-3 card p-4">
          <h2 className="text-center">
            <img src={img} alt="" width={150} height={70} />
            <p style={{ marginLeft: "-10px" }}>HomeyCrafts</p>
          </h2>
          <h4 className="text-center">
            Dear Mohit kumar, ThankYou for your order!
          </h4>
          <h5 className="text-center pb-2">See Your Bill Details Here </h5>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Address :
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                placeholder="Product Id..."
                value="B-123, janakpuri,delhi"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Product Id :
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                placeholder="Product Id..."
                value={345}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Product Name :
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                placeholder="Product Id..."
                value="T-shirt"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Product Seller :
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                placeholder="Product Id..."
                value="Mohit Kumar"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Product Price :
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                placeholder="Product Id..."
                value={105}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Delivery Charge :
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                placeholder="Product Id..."
                value={50}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Total Amount :
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                placeholder="Product Id..."
                value={155}
              />
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary w-50 m-auto"
            onClick={() => {
              window.print();
            }}
          >
            Print Your Order Details
          </button>
        </form>
      </div>
    </>
  );
}

export default Bill;
