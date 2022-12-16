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
        <h3>🔹 Motivated To See Your Ideas Come To Life </h3>
        <h3>🔹 Dedicated To Making Our Clients Happy</h3>
        <h3>🔹 Passionate About Designing and Creating</h3>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Tell us what you need
        </Button>
      </div>

      <div className="hero-right">
        <img src="/images/office2.png" className="logo-big"/>
      </div>
    </div>
    </>
  );
}

export default HeroSection;
