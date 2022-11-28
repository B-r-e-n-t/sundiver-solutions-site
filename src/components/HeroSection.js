import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img
        className="video-hero"
        src="images/background.jpg"
        // autoPlay
        // loop
        // muted
      />
      <div className="hero-left">
        <img src="/images/logo.png" className="logo-big"/>
      </div>
      
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
    </div>
  );
}

export default HeroSection;
