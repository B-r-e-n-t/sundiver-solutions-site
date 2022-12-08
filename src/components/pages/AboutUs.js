import React from "react";
import "../../App.css";
import ContactForm from "../ContactForm";
import Footer from "../Footer"

export default function AboutUs() {
  return (
    <>
    <img
          className="video-hero"
          src="images/background.jpg"
        />
    <h1 className="about-us">About Us</h1>;
    <div className="profile-one">
          <p>The piano sat silently in the corner of the room. Nobody 
          could remember the last time it had been played. The little 
          girl walked up to it and hit a few of the keys. The sound of 
          the piano rang throughout the house for the first time in 
          years. In the upstairs room, confined to her bed, the owner 
          of the house had tears in her eyes.</p>
          <img className="profile-1-img" src="images/profile1.jpg"/>
      </div>
              <hr/>

      <div className="profile-two">
        <img className="profile-2-img" src="images/profile2.jpg"/>
        <p>The piano sat silently in the corner of the room. Nobody 
        could remember the last time it had been played. The little 
        girl walked up to it and hit a few of the keys. The sound of 
        the piano rang throughout the house for the first time in 
        years. In the upstairs room, confined to her bed, the owner 
        of the house had tears in her eyes.</p>
      </div>
      <ContactForm />
      <Footer />
    </>
    )
}
