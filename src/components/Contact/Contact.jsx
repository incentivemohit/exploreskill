import React from "react";
import Header from "../Header/Header";

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-page">
        <h3 className="text-center bg-dark text-white">Contact Us</h3>
        <div className="contact-details mt-5 bg-warning  card w-75 m-auto p-3">
          <h3 className="text-center">
            If you have any query related to our site. <br /> You can contact us
            on given email id's: below:
          </h3>
          <hr />
          <h5>Mohit Kumar: mohitkumar.e21@nsut.ac.in</h5>
          <h5>Shilpa Panwar: shilpapanwar.e21@nsut.ac.in</h5>
          <h5>Sakhi Naudiyal: sakshinaudiyal.e21@nsut.ac.in</h5>
        </div>
      </div>
    </>
  );
}

export default Contact;
