import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import ServiceBenefits from "../ServiceBenefits";
import ContactForm from "../ContactForm";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ServiceBenefits />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
