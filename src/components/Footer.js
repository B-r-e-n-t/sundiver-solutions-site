import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-contact-us"></section>
      <div className="footer-links">
        <div className="footer-link-wrapper"> */}
      <div className="footer-link-items">
        <Link to="/about-us">About Us</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/services">Services</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
      </div>
    </div>
    //   </div>
    // </div>
  );
}

export default Footer;
