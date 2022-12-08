import React from "react";
import "../../App.css";
import PortfolioCardsComponent from "../PortfolioCardsComp";
import ContactForm from "../ContactForm";
import Footer from "../Footer"

export default function Portfolio() {
  return (
  <>
    <img
          className="video-hero"
          src="images/background.jpg"
    />
    <h1 className="portfolio">Portfolio</h1>;

    <PortfolioCardsComponent />
    <ContactForm />
    <Footer />
  </>
  )
}
