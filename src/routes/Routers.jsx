import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/sections/Footer";
import About from "../pages/About";
import Home from "../pages/Home";
import Showcase from "../pages/Showcase";

function Routers() {
  return (
    <Router>
      <Navbar />
      <div className="box-middle sm:mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/showcase" element={<Showcase />} />
         
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default Routers;
