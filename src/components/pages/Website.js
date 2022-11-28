import React from "react";
import "../../App.css";
import Footer from "../Footer";
import WebsiteDevComponent from "../WebsiteDevComponent";
import ContactForm from "../ContactForm";

export default function WebsiteDev() {
  return (
    <>
  <img
        className="video-hero"
        src="images/background.jpg"
        // autoPlay
        // loop
        // muted
      />

      <h1 className="website">
        Website Development
      </h1>

      <WebsiteDevComponent />

      <ContactForm />

      <Footer />
    </>
  );
}
