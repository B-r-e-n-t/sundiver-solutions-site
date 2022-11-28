import React from "react";
import "../../App.css";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

function Services() {
  return (
    <>
  <img
        className="video-hero"
        src="images/background.jpg"
        // autoPlay
        // loop
        // muted
      />

      <div className="services-wrap">
        <h1>Services and Solutions</h1>
        <p>
          It all begins with an idea. Maybe you want to launch a business. Maybe
          you want to turn a hobby into something more. Or maybe you have a
          creative project to share with the world. Whatever it is, the way you
          tell your story online can make all the difference.
        </p>
        <p>
          As a business founder, you want to collaborate with teams that believe
          in your product as much as you do and consider it as their own. By
          partnering with Sundiver Solutions in the initial stages or more
          mature stages of your business, you get all the benefits of
          collaborating with an external homogeneous team to guide the product
          development process from the idea stage and all the way to product
          launch without the expense and commitment of hiring a full-time CTO or
          development team.
        </p>
          <div className="CTA-services">
              <p>He stared out the window at the snowy field. He'd been stuck 
                in the house for close to a month and his only view of the outside 
                world was through the window. There wasn't much to see. It was 
                mostly just the field with an occasional bird or small animal who 
                ventured into the field. As he continued to stare out the window, 
                he wondered how much longer he'd be shackled to the steel bar inside the house.</p>
                <img className="services-img" src="images/Architect.jpg"/>
          </div>
          <div className="CTA-services">
              <img className="services-img" src="images/Software.jpg"/>
              <p>He stared out the window at the snowy field. He'd been stuck 
                in the house for close to a month and his only view of the outside 
                world was through the window. There wasn't much to see. It was 
                mostly just the field with an occasional bird or small animal who 
                ventured into the field. As he continued to stare out the window, 
                he wondered how much longer he'd be shackled to the steel bar inside the house.</p>
                
          </div>
          <div className="CTA-services">
              <p>He stared out the window at the snowy field. He'd been stuck 
                in the house for close to a month and his only view of the outside 
                world was through the window. There wasn't much to see. It was 
                mostly just the field with an occasional bird or small animal who 
                ventured into the field. As he continued to stare out the window, 
                he wondered how much longer he'd be shackled to the steel bar inside the house.</p>
                <img className="services-img" src="images/Website.jpg"/>
          </div>
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default Services;
