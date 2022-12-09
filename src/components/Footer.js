import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-link-items">
        <Link to="/about-us" style={{ textDecoration: 'none', color: 'white'}}>About Us</Link>
        <Link to="/careers" style={{ textDecoration: 'none', color: 'white'}}>Careers</Link>
        <Link to="/portfolio" style={{ textDecoration: 'none', color: 'white'}}>Portfolio</Link>
        <Link to="/services" style={{ textDecoration: 'none', color: 'white'}}>Services</Link>
        <Link to="/terms-of-service" style={{ textDecoration: 'none', color: 'white'}}>Terms of Service</Link>
      </div>
    </div>
  );
}

export default Footer;
