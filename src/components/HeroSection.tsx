import React from "react";
import StatsSection from "./StatsSection";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate=useNavigate()
  return (
    <section className="w-full bg-[#EBF1FA] text-black py-12 md:py-2 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-2 items-center">
        
        {/* LEFT CONTENT - 70% (7 columns out of 10) */}
        <div className="md:col-span-7 mt-20 md:mt-28 text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-left">
            Build Your Global Future <span className="block">With Confidence</span>
          </h1>

          <p className="mt-4 sm:text-lg md:text-lg opacity-90 text-left max-w-3xl">
            Your international career starts with the right guidance. Join hundreds of students at top-ranked universities with our expert admissions and visa support.</p>

          {/* Buttons - Left aligned */}
          <div className="mt-6 flex gap-4 justify-start">
            
            {/* Filled Button */}
            <button onClick={()=>navigate("/contact")} className="px-6 py-3  border border-2 bg-[#EBF1FA] md:border-[#FF0000] border-purple-700 text-black font-semibold rounded-4xl shadow  md:hover:bg-[#FF0000] hover:bg-purple-800 active:bg-purple-800 active:scale-105 active:-translate-y-1 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 transition cursor-pointer">
              Get Started
            </button>

            {/* Border Button */}
            {/* <button className="px-6 py-3 border border-purple-700 md:border-[#FB8234] text-purple-700 md:text-[#FB8234] font-semibold rounded-3xl hover:bg-purple-700 hover:scale-105 md:hover:bg-[#FF6603] hover:text-white transition">
              Contact Us
            </button> */}
          </div>
        </div>

        {/* RIGHT IMAGE - 30% (3 columns out of 10) */}
        <div className="md:col-span-3 flex justify-center md:justify-end mt-12 md:mt-30 relative">
          <div className="relative">
  <img
    src="/herosection4.png"
    alt="Students"
    className="w-full h-[320px] max-w-sm relative z-10 "
  />
</div>
        </div>
        
      </div>

      {/* Stats Section - Full width and left aligned */}
      <div className="mt-4 ">
        <StatsSection/>
      </div>
    </section>
  );
};

export default HeroSection;