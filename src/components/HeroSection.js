

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
      <div className="hero-left">
        <h1>Custom Software Development & Architecture</h1>
        <h4><span className="gold">Motivated</span> To See Your Ideas Come To Life </h4>
        <h4><span className="gold">Passionate</span> About Designing and Creating</h4>
        {/* <h3>🔹 Motivated To See Your Ideas Come To Life </h3>
        <h3>🔹 Dedicated To Making Our Clients Happy</h3>
        <h3>🔹 Passionate About Designing and Creating</h3> */}
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Share your idea with us!
        </Button>
      </div>

      {/* <div className="hero-right">
        <h4>🔹 <span className="gold">Motivated</span> To See Your Ideas Come To Life </h4>
        <h4>🔹 <span className="gold">Passionate</span> About Designing and Creating</h4>
        <img src="/images/HeroImage.png" className="logo-big"/>
      </div> */}
    </div>
    <div className="gif-container">
    </div>
    </>
  );
}

export default HeroSection;
