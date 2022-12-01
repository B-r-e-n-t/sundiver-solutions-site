import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function PortfolioCardsComponent() {
  return (
    <div className="cards">
      <h1>Please take a look at our past projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* cards to shows our services */}

            <CardItem
              src="/images/wave.png"
              text="Wave: Accounting Software"
              path=""
            />

            <CardItem
              src="/images/one.png"
              text="Full-Stack Software Development"
              path=""
            />

            <CardItem
              src="/images/espn.png"
              text="Website Design and Development"
              path=""
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCardsComponent;