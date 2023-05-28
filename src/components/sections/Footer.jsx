import React from "react";
import { Link } from "react-router-dom";
import footerimage from "../../assets/image/footer_logo.png";

export default function Footer() {
  return (
    <footer className=" mt-24 md:mt-16 py-6  bg-[#131E37] rounded-md text-slate-500 md:grid md:grid-cols-2 font-poppins lg:grid-cols-3">
      <div>
        <img className="w-[130px] h-auto mx-auto" src={footerimage} alt="" />
        
        <h3 className=" text-lg  text-center  sm:text-xl text-slate-400">
          Developed by Shipon islam
        </h3>
        <h3 className="mt-1 text-lg  text-center  sm:text-xl text-slate-400">
          {" "}
          © 2022 All rights reserved
        </h3>
      </div>
      <div className="hidden md:block md:justify-self-center">
        <h4 className="text-xl text-slate-400 capitalize border-b border-blue py-1">
          navigation
        </h4>
        <ul>
          <li className="text-lg capitalize pl-1 mt-2">
            <Link className="hover:text-blue" to="/">
              home
            </Link>
          </li>
          <li className="text-lg capitalize pl-1 mt-2">
            <Link className="hover:text-blue" to="/about">
              about me
            </Link>
          </li>
          <li className="text-lg capitalize pl-1 mt-2">
            <Link className="hover:text-blue" to="/services">
              services
            </Link>
          </li>
          <li className="text-lg capitalize pl-1 mt-2">
            <Link className="hover:text-blue" to="/reviews">
              clients review
            </Link>
          </li>
         
        </ul>
      </div>
      <div className="hidden lg:block md:justify-self-center">
        <h4 className="text-xl text-slate-400 capitalize border-b border-blue py-1">
          feature
        </h4>
        <ul>
          <li className="text-lg capitalize pl-1 mt-2 hover:text-blue cursor-pointer">
            ui design
          </li>
          <li className="text-lg capitalize pl-1 mt-2 hover:text-blue cursor-pointer">
            web development
          </li>
          <li className="text-lg capitalize pl-1 mt-2 hover:text-blue cursor-pointer">
            experience
          </li>
          
          
        </ul>
      </div>
    </footer>
  );
}
