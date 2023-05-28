import React from "react";

export default function PotfolioCard(props) {
  const { id, image, name, github, deploy_url, technology } = props;
  return (
    <div
      className='relative before:content-[""] before:absolute before:w-full before:h-full before:bg-blue/20 
    before:inset-0 before:z-30 before:rounded-md font-poppins overflow-hidden'
    >
      <img className=" rounded-md w-full h-full" src={image} alt="potfolio" />
      
    </div>
  );
}
