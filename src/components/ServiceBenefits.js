import React from "react";
import "./ServiceBenefits.css";

function ServiceBenefits() {
  return (
    <div className="benefits__cards">
      <h1>Service Benefits</h1>
      <div className="benefits__container">
        <ul className="benefits__items__wrapper">
          <div className="benefits__items">
            <h2>Optimized Development Costs</h2>
            <br />A thought-out strategy, a scalable architecture, and robust
            technology leadership save project budgets, making our CTO as a
            Service an investment with fast ROI
          </div>
          <div className="benefits__items">
            <h2>Rapid Growth</h2>
            <br />
            With business and technical issues clarified by an experienced
            virtual CTO, you could pave the way for faster product evolution and
            expansion
          </div>
          <div className="benefits__items">
            <h2>Satisfied Investors</h2>
            <br />
            With long-term financial planning and a clear vision of your
            business growth, you can be sure about getting support from
            investors and executives
          </div>
          <div className="benefits__items">
            <h2>Reduced Operational Risk</h2>
            <br />
            With a reliable strategy covering risk prevention and mitigation
            procedures, you can be confident about delivering a quality product
            even on a tight schedule
          </div>
        </ul>
      </div>
    </div>
  );
}

export default ServiceBenefits;
