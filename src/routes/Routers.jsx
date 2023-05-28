import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/sections/Footer";
import About from "../pages/About";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Showcase from "../pages/Showcase";
import Testimonial from "../pages/Testimonial";

function Routers() {
  return (
    <Router>
      <Navbar />
      <div className="box-middle sm:mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/services" element={<Services />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/reviews" element={<Testimonial />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default Routers;
