import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import ServiceBenefits from "../ServiceBenefits";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ServiceBenefits />
      <Footer />
    </>
  );
}

export default Home;
