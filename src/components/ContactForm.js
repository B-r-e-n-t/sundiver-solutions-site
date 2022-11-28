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
      <form ref={form} onSubmit={sendEmail}>
        <h1>Contact Us</h1>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="form-button" type="submit" value="Send" />
      </form>
      <p>
        We would love to hear about your idea! 
        <br/>
        <br/>
        🔹 No commitment.
        <br/>
        🔹 No pressure. 
        <br/>
        <br/>
        Start a discussion with us today.
      </p>
    </div>
  );
}

export default ContactForm;
