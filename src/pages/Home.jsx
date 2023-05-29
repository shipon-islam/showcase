import React from "react";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Showcase from "../components/sections/Showcase";

function Home() {
  return (
    <>
      <Hero />
      <div className="mb-6 md:mb-32">
        <About />
      </div>
      <Showcase />
      
    </>
  );
}

export default Home;
