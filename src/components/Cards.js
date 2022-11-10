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
              // src="images/img-9.jpg"
              text="Full-Stack Architectural Design and Implementation"
              path="/architectural"
            />

            <CardItem
              // src="images/img-9.jpg"
              text="Full-Stack Software Development"
              path="/software"
            />

            <CardItem
              // src="images/img-9.jpg"
              text="Website Design and Development"
              path="/website"
            />

            {/* <CardItem
              // src="images/img-9.jpg"
              text=""
              label="CTO"
              path="/services"
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
