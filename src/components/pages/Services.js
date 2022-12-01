import React from "react";
import "../../App.css";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import Cards from "../Cards";


function Services() {
  return (
    <>
        <img
          className="video-hero"
          src="images/background.jpg"
        />

        <Cards />
        <ContactForm />
        <Footer />

    </>
  );
}

export default Services;
