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
          {/* <label>Name</label> */}
          <input type="text" name="user_name" placeholder="Name"/>
          {/* <label>Email</label> */}
          <input type="email" name="user_email" placeholder="Email"/>
          {/* <label>Message</label> */}
          <textarea name="message" placeholder="Tell us about your idea"/>
          <input className="form-button" type="submit" value="Send"/>
        </form>
      </div>
      <p>
        We would love to hear about your idea! 
        <br/>
        🔹 No commitment.
        <br/>
        🔹 No pressure. 
        <br/>
        Start a discussion with us today.
        <img src="/images/officeContact.png" className="contact-image"/>
      </p>
    </div>
  );
}

export default ContactForm;
