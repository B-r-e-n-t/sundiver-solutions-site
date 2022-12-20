import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-link-items-one">
        <h3>Navigation</h3>
        <Link to="/about-us" className="footer-links">About Us</Link>
        <Link to="/careers" className="footer-links">Careers</Link>
        <Link to="/portfolio" className="footer-links">Portfolio</Link>
        <Link to="/services" className="footer-links">Services</Link>
        <Link to="/terms-of-service" className="footer-links">Terms of Service</Link>
      </div>
      <div className="footer-link-items-two">
        <h3>Services</h3>
        <Link to="/software" className="footer-links">Full-Stack Software Development</Link>
        <Link to="/architectural" className="footer-links">Architectural Design</Link>
        <Link to="/website" className="footer-links">Web Design & Development</Link>
      </div>
      <div className="footer-link-items-three">
        <img src="/images/logo.png" className="logo"></img>
        <p>info@sundiversolutions.com</p>
        <p>555-555-5555</p>
      </div>
    </div>
  );
}

export default Footer;
