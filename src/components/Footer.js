import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-contact-us">
        <p className="footer-contact-us-heading">Request a call back today!</p>
        <form>
          <input
            type="name"
            name="name"
            placeholder="Your Name"
            className="footer-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="footer-input"
          />
          <input
            type="number"
            name="number"
            placeholder="Your phone number"
            className="footer-input"
          />
          <Button buttonStyle="btn--outline">Send</Button>
        </form>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/about-us">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/services">Services</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
