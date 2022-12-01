import React from "react";
import "../../App.css";
import PortfolioCardsComponent from "../PortfolioCardsComp";

export default function Portfolio() {
  return (
  <>
    <img
          className="video-hero"
          src="images/background.jpg"
    />
    <h1 className="portfolio">Portfolio</h1>;

    <PortfolioCardsComponent />
  </>
  )
}
