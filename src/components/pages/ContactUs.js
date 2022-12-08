import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ContactForm from "../ContactForm";

function ContactUs() {
  return (
    <>
  <img
        className="video-hero"
        src="images/background.jpg"
        // autoPlay
        // loop
        // muted
      />


      <h2 className="form-intro">
        Talk to us and get your project started!
      </h2>
      <ContactForm />
      <Footer />
    </>
  );
}

export default ContactUs;
