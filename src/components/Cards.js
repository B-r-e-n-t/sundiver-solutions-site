import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>What can we do for you?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* cards to shows our services */}

            <CardItem
              src="images/Architect.jpg"
              text="Full-Stack Architectural Design & Implementation"
              path="/architectural"
            />

            <CardItem
              src="images/Software.jpg"
              text="Full-Stack Feature Software Development"
              path="/software"
            />

            <CardItem
              src="images/website.jpg"
              text="Website Design, Development, & Hosting"
              path="/website"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
