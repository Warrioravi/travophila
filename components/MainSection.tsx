'use client'

import { useState } from "react";
import SearchArea from "./SearchArea";


const MainSection = () => {
   let bgImg=randomIntFromInterval(1,5);

  function randomIntFromInterval(min: number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
    
    return (
      <div className="relative w-full h-[50vh] bg-cover bg-center flex justify-center items-center  text-white" style={{ backgroundImage: `url('/images/background-${bgImg}.jpg')` }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight my-6 rajdhani-bold">Your Gateway to  Himalayan Adventures</h1>
         
          <SearchArea/>
        </div>
      </div>
    );
  };
  
  export default MainSection;
  