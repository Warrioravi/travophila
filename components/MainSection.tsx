'use client'

import { useState } from "react";
import SearchArea from "./SearchArea";


const MainSection = () => {
   let bgImg=randomIntFromInterval(1,5);

  function randomIntFromInterval(min: number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
    
    return (
      <div className="relative w-full h-[80vh] bg-cover bg-center flex justify-center items-center transition duration-150 ease-in-out text-white" style={{ backgroundImage: `url('/images/background-${bgImg}.jpg')` }}>
        <div className="bg-black bg-opacity-60 p-10 rounded-lg text-center">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight my-6 font-mono">Your Gateway to  Himalayan Adventures</h1>
         
          <SearchArea/>
        </div>
      </div>
    );
  };
  
  export default MainSection;
  