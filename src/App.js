import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import Architectural from "./components/pages/Architectural";
import Software from "./components/pages/Software";
import Website from "./components/pages/Website";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/architectural" element={<Architectural />} />
          <Route path="/software" element={<Software />} />
          <Route path="/website" element={<Website />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
