import "./ContactForm.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s0r826q",
        "template_cimfefk",
        form.current,
        "l01QI9bcyRnKwX-MP"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container">
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name"/>
          <input type="email" name="user_email" placeholder="Email"/>
          <textarea name="message" placeholder="Tell us about your idea"/>
          <input className="form-button" type="submit" value="Submit"/>
        </form>
      </div>
      <div className="form-right">
            <p className="top-of-form">
            Schedule a <span className="gold">free consultation</span> and start a discussion with us today. We will
            get back in touch with you within 24 hours.
            </p>
            <div className="bottom-of-form">
              <p>
                🔹 No cost
                <br/>
                🔹 No commitment
                <br/>
                🔹 No pressure
                <br/>
              </p>
              <img src="/images/JamesSolo.png" className="contact-image"/>
            </div>
      </div>
      
    </div>
  )}

export default ContactForm;
