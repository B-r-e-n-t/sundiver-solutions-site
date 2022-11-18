import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ArchitecturalComponent from "../ArchitecturalComponent";
import ContactForm from "../ContactForm";

export default function Architectural() {
  return (
    <>
      <h1 className="architectural">
        Architectural Design and Implementation - Fractional CTO
      </h1>

      <ArchitecturalComponent />

      <ContactForm />

      <Footer />
    </>
  );
}
