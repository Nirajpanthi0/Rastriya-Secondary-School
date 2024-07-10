import React from "react";
import banner from '../../../public/images/banner.png'; 
const HeroSection = () => {
  return (
    <div className="relative h-full bg-cover bg-center relative top-12">
      <img src={banner} alt="Banner" className="w-full h-full object-cover" /> 
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white p-4 md:p-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Rastriya Secondary School
          </h1>
          <p className="text-xl md:text-2xl">Your success starts here</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
