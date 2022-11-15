import React from "react";
import "../../App.css";
import Footer from "../Footer";
import ContactForm from "../ContactForm";

function ContactUs() {
  return (
    <>
      <p className="form-intro">
        Before we begin working with a new client, we want to make sure we are a
        good fit for you. In our free 30 minute discovery session, we get an
        understanding of the stage of your business, and the technology goals
        and outcomes you expect from our engagement. Based on this call, we will
        follow up with proposed next steps, or we will refer you to another
        provider who is a better fit. Request a discovery session today!
      </p>
      <ContactForm />
      <Footer />
    </>
  );
}

export default ContactUs;
