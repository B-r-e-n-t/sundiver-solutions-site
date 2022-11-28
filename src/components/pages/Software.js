import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import SoftwareComponent from "../SoftwareComponent";

export default function Software() {
  return (
    <>
  <img
        className="video-hero"
        src="images/background.jpg"
        // autoPlay
        // loop
        // muted
      />
      <h1>Full-Stack Software Development</h1>

      {/* <h1 className="software">
        Software Development
      </h1>
      <p>
        Do you have an idea that needs developeing? Do you need help creating
        software to make your business run smoother? The experienced team at
        Sundive Solutions to help with any and all software development
        projects.
      </p> */}

      <SoftwareComponent />


      <ContactForm />

      <Footer />
    </>
  );
}
