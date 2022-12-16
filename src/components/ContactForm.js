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
          <input className="form-button" type="submit" value="Send"/>
        </form>
        {/* <h4 className="thank-you">Thank you for contacting us! We will be in touch with you soon.</h4> */}
      </div>
      <p>
      Start a discussion with us today.
        <br/>
        <br/>
        🔹 No commitment.
        <br/>
        🔹 No pressure. 
        <img src="/images/officeContact.png" className="contact-image"/>
      </p>
    </div>
  );
}

export default ContactForm;
