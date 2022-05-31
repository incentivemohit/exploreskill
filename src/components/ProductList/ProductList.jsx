import React from "react";
import "./ProductList.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductCard from "../ProductCard/ProductCard";
import HomeCarousel from "../Home/HomeCarousel";
import pr1 from "../images/products/pro1.png";
import pr2 from "../images/products/pro2.webp";
import pr3 from "../images/products/pro3.jpg";
import pr4 from "../images/products/pro4.jpg";
import pr5 from "../images/products/pro5.jpg";
import pr6 from "../images/products/pro6.jpg";
import pr7 from "../images/products/pro7.jpg";
import pr8 from "../images/products/pro8.jpg";
import pr9 from "../images/products/pro9.jpg";
import pr10 from "../images/products/pro10.jpg";
import pr11 from "../images/products/pro11.jpg";
import pr12 from "../images/products/pro12.jpg";
import pr13 from "../images/products/pro13.jpg";
import pr14 from "../images/products/pro14.jpg";
import pr15 from "../images/products/pro15.jpeg";

function ProductList() {
  return (
    <>
      <Header />
      <div className="Products ">
        <h2 className="text-center my-2 ">Our Products</h2>
        <div className="allProducts mx-4">
          <div className="row">
            <div className="col my-3">
              <ProductCard
                image={pr1}
                name="Sandhya Jain"
                productName="New Born Clothing"
                price="150"
              />
            </div>
            <div className="col my-3">
              <ProductCard
                image={pr2}
                name="Anita Devi"
                productName="Procleain Mugs"
                price="75"
              />
            </div>
            <div className="col my-3">
              <ProductCard
                image={pr3}
                name="Redha Devi"
                productName="Carry Bags"
                price="100"
              />
            </div>

            <div className="col my-3">
              <ProductCard
                image={pr4}
                name="Sunita Yadav"
                productName="Lamp Shades"
                price="130"
              />
            </div>
            <div className="col my-3">
              <ProductCard
                image={pr6}
                name="Rani Singh"
                productName="White Wollen Top"
                price="400"
              />
            </div>
            <div className="col my-3">
              <ProductCard
                image={pr5}
                name="Dipti Singh"
                productName="Wodden Dolls"
                price="200"
              />
            </div>
            <div className="col my-3">
              <ProductCard
                image={pr14}
                name="Sunita Singh"
                productName="Woolen Cap"
                price="80"
              />
            </div>
            <div className="col my-3">
              <ProductCard
                image={pr7}
                name="Avni Singh"
                productName="Beads Bracelet"
                price="30"
              />
            </div>
            <div className="col my-3">
              <ProductCard
                image={pr8}
                name="Seema Kumari"
                productName="Pillows"
                price="200"
              />
            </div>
            <div className="col my-3">
              <ProductCard
                image={pr9}
                name="Moni Kumari"
                productName="Babygirl Wodden Frock"
                price="200"
              />
            </div>

            <div className="col my-3">
              <ProductCard
                image={pr10}
                name="Redha Devi"
                productName="Decorative Basket"
                price="200"
              />
            </div>
            <div className="col my-3">
              <ProductCard
                image={pr11}
                name="Neha Singh"
                productName="Cotton bedsheet"
                price="500"
              />
            </div>
            <div className="col my-3">
              <ProductCard
                image={pr12}
                name="Anisha Kumari"
                productName="Baby boy kurtas"
                price="250"
              />
            </div>
            <div className="col my-3">
              <ProductCard
                image={pr13}
                name="Sona Singh"
                productName="Silk thread Earrings"
                price="150"
              />
            </div>
            <div className="col my-3">
              <ProductCard
                image={pr15}
                name="Smita Devi"
                productName="Necklace"
                price="200"
              />
            </div>
          </div>
        </div>
      </div>
      <section>
        <h2 className="text-center my-2">See More Products...</h2>
        <HomeCarousel />
      </section>

      <Footer />
    </>
  );
}

export default ProductList;
