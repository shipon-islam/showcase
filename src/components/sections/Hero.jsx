import React from "react";
import { hero } from "../../apis/index";
import Images from "../Images";

export default function Hero() {
  return (
    <div className="mt-24 md:mt-32  mb-24 sm:mb-32 ">
      <article className="grid grid-cols-1 md:grid-cols-2  md:mt-24 px-6 ">
        <aside data-aos="fade-right" data-aos-duration="1000">
          <small className="font-poppins block font-bold text-left text-base text-blue md:text-left">
            {hero.first}
          </small>
          <h3
            className="text-4xl font-inter font-black capitalize text-left pt-3 pb-2 md:text-left
            md:text-[2.6rem] md:pt-4"
          >
            {hero.second}
          </h3>
          <h3
            className="text-4xl text-slate-300 font-inter font-black capitalize text-left
            mb-3
            md:text-left md:text-[2.6rem] md:py-2"
          >
            {hero.third}
          </h3>
          <p
            className="text-left font-inter text-[1.1rem] pt-3 pb-8 text-slate-400
            md:text-left lg:text-lg"
          >
            {hero.fouth}
          </p>
         
        </aside>
        <aside
          data-aos="fade-left"
          data-aos-duration="1000"
          className="hidden md:block justify-self-end"
        >
          <Images image={hero.color_image} />
        </aside>
      </article>
    </div>
  );
}
