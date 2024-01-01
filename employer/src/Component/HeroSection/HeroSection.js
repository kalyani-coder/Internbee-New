// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <header className="bg-amber-300 text-white h-64 flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4"> Opportunities</h1>
        <p className="text-lg mb-8">Where Passion Meets Profession</p>
        <a href="#" className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full">Post New Job</a>
      </div>
    </header>
  );
};

export default HeroSection;
