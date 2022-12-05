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
        <h1>Custom Software Development & Architecture</h1>
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
