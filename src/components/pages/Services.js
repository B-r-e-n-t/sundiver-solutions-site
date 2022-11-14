import React from "react";
import "../../App.css";

import Cards from "../Cards";
import Footer from "../Footer";

function Services() {
  return (
    <>
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
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default Services;
