import React from "react";
import "../../App.css";

import Cards from "../Cards";
import Footer from "../Footer";

function Services() {
  return (
    <>
      <div className="services-wrap">
        <p>
          It all begins with an idea. Maybe you want to launch a business. Maybe
          you want to turn a hobby into something more. Or maybe you have a
          creative project to share with the world. Whatever it is, the way you
          tell your story online can make all the difference.
        </p>
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default Services;
