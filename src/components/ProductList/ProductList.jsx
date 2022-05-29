import React from "react";
import "./ProductList.css";
import Content from "../Content/Content";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
function ProductList() {
  return (
    <>
      <Header />
      <div className="Products ">
        <h2 className="text-center my-2 ">Our Products</h2>
        <div className="allProducts mx-4">
          <div className="row">
            <div className="col my-3">
              <ProductCard />
            </div>
            <div className="col my-3">
              <ProductCard />
            </div>
            <div className="col my-3">
              <ProductCard />
            </div>

            <div className="col my-3">
              <ProductCard />
            </div>
            <div className="col my-3">
              <ProductCard />
            </div>
            <div className="col my-3">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
