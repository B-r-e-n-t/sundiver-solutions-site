import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
    <img
        className="video-hero"
        src="images/background.jpg"
      />
    <div className="hero-container">
      {/* <img
        className="video-hero"
        src="images/background.jpg"
      /> */}
      

      <div className="hero-right">
        <h1>Software Development & Architecture</h1>
        <h3>🔹 Passionate About Creating</h3>
        <h3>🔹 Decicated To Making You Happy</h3>
        <h3>🔹 Motivated To See Your Ideas Come To Life</h3>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Tell us what you need
        </Button>
      </div>

      <div className="hero-left">
        <img src="/images/office.png" className="logo-big"/>
      </div>
    </div>
    </>
  );
}

export default HeroSection;
