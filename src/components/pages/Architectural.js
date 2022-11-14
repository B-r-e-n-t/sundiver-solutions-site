import React from "react";
import "../../App.css";
import Footer from "../Footer";

export default function Architectural() {
  return (
    <>
      <h1 className="architectural">
        Architectural Design and Implementation - Fractional CTO
      </h1>
      <div className="architectural-wrapper">
        <p>
          The Research and MVP development stages of a startup business are the
          most important aspects that lead to a successful product launch.
          Sundiver Solutions CTO as a Service, or Fractional CTO, model provides
          you with an agile team that is already used to collaborating and has
          countless years of experience in launching, scaling and pivoting web
          and mobile products.
        </p>
        <br />
        <p>
          Our team will support you in addressing tech-related situations while
          aiming to achieve business performance growth by eliminating
          unnecessary risks and ensuring the budget is spent efficiently. By
          overseeing the latest trends in the industry, just like a full time
          CTO, Sundiver Solutions will also guide your company towards staying
          relevant and constantly delivering value to its customers.
        </p>
        <video src="/images/HeroVideo.mp4" />
      </div>
      <Footer />
    </>
  );
}
