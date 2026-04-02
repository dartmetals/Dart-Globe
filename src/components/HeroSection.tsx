// import React from "react";
// // import StatsSection from "./StatsSection";
// import { useNavigate } from "react-router-dom";

// const HeroSection: React.FC = () => {
//   const navigate = useNavigate();
  
//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* Background Image with overlay - Height determined by image */}
//       <div className="relative z-0 w-full pt-48 md:pt-44">
//         <img 
//           src="/hero-bgimg.png" 
//           alt="Hero Background" 
//           className="w-full h-auto object-cover object-top"
//         />
//         {/* White overlay at the top */}
//         {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent"></div> */}
//       </div>
      
//       {/* Content Container - Centered at top, absolute positioned over image */}
//       <div className="absolute top-0 left-0 right-0 z-10 w-full pt-24 md:pt-20 lg:pt-30">
//         <div className="max-w-3xl mx-auto px-6 text-center">
//           {/* Title */}
//           <h1 className="text-2xl sm:text-5xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
//             Build Your Global Future <span className="block text-blue-600">With Confidence</span>
//           </h1>

//           {/* Description */}
//           <p className="mt- text-xs md:text-base text-gray-700 max-w-3xl mx-auto">
//             Your international career starts with the right guidance. Join hundreds of students at top-ranked universities with our expert admissions and visa support.
//           </p>

//           {/* Buttons - Centered */}
//           <div className="mt-2 flex gap-4 justify-center">
//             {/* Filled Button */}
//             <button onClick={()=>navigate("/contact-us")} className="px-2 md:px-6 md:py-3 py-1 ml-6  border border-2  md:border-[#FF0000] border-purple-700 text-black font-semibold rounded-4xl shadow  md:hover:bg-[#FF0000] hover:bg-purple-800 active:bg-purple-800 active:scale-105 active:-translate-y-1 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 transition cursor-pointer">
//               Get Started
//             </button>

//             {/* Outline Button */}
//             {/* <button 
//               onClick={() => navigate("/about-us")}
//               className="px-8 py-3 border-2 border-[#FF0000] text-[#FF0000] font-semibold rounded-full hover:bg-[#FF0000] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
//             >
//               Learn More
//             </button> */}
//           </div>
//         </div>
//       </div>

//       {/* Stats Section - Positioned below content */}
//       {/* <div className="relative z-10 mt-12 md:mt-16">
//         <StatsSection />
//       </div> */}
//     </section>
//   );
// };

// export default HeroSection;


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
            <button onClick={()=>navigate("/contact-us")} className="px-6 py-3  border border-2 bg-[#EBF1FA] md:border-[#FF0000] border-purple-700 text-black font-semibold rounded-4xl shadow  md:hover:bg-[#FF0000] hover:bg-purple-800 active:bg-purple-800 active:scale-105 active:-translate-y-1 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 transition cursor-pointer">
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