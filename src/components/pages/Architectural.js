import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ArchitecturalComponent from "../ArchitecturalComponent";
import ContactForm from "../ContactForm";

export default function Architectural() {
  return (
    <>
  <img
        className="video-hero"
        src="images/background.jpg"
        // autoPlay
        // loop
        // muted
      />

      <h1 className="architectural">
        Architectural Design and Implementation - Fractional CTO
      </h1>

      <ArchitecturalComponent />

      <ContactForm />

      <Footer />
    </>
  );
}
