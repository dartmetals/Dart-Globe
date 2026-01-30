import React from 'react';

const CompanyOverview: React.FC = () => {
  return (
    <section className="py-20 w-full bg-white">
      <div className="w-[90%] ml-[10%]">
        {/* Main Content Grid - Image Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="relative">
            <img 
              src="/about-hero.jpg" 
              alt="Landmark Creations Construction Excellence" 
              className="w-[280px] h-[280px] ml-6 md:ml-0 md:w-[460px] md:h-[450px] items-center object-cover rounded-2xl shadow-2xl"
            />
            
            {/* Experience Badge - Replaced with rectangular box */}
            <div className="absolute top-2 -left-8 md:top-4 md:-left-20">
              {/* Rectangular Box with Dashed Border */}
              <div className="relative">
                {/* Main Box */}
                <div className="relative bg-gradient-to-br from-red-300 to-red-300 rounded-xl p-2 md:p-4 shadow-2xl border border-red-100 backdrop-blur-sm">
                    {/* Dashed Border Effect */}
                <div className="absolute inset-1 border border-dashed border-white rounded-xl"></div>
                
                  {/* Content */}
                  <div className="flex items-center space-x-2">
                    {/* Trust Icon */}
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    
                    {/* Experience Text */}
                    <div>
                      <div className="text-sm md:text-lg font-bold text-blue-600">10+ Years</div>
                      <div className="text-xs md:text-sm font-medium text-gray-700">Of Trusted Experience</div>
                      {/* <div className="text-xs text-gray-500 mt-1">Industry Excellence</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 md:-ml-16 mr-8">
            {/* Section Header */}
            <div className="space-y-4">
              <div>
                <h2 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight">
                  Crafting Landmarks That <span className="text-blue-600">Stand the Test of Time</span>
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  Where visionary design meets exceptional craftsmanship. We transform ambitious blueprints 
                  into enduring structures that redefine skylines and create lasting value for generations 
                  to come.
                </p>
              </div>

              {/* Trust Line */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-2 border-l-4 border-blue-600">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Trusted by 500+ Visionary Clients</h3>
                    <p className="text-sm text-gray-600">Industry-recognized excellence in construction innovation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2x2 Grid Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 -mt-4">
              <div className="flex items-start space-x-2 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-medium">Innovative Design Solutions</h4>
                  <p className="text-gray-600 text-sm mt-1">Cutting-edge architectural designs that blend aesthetics with functionality</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-medium">Premium Quality Materials</h4>
                  <p className="text-gray-600 text-sm mt-1">Only the finest materials ensuring durability and long-lasting structures</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-medium">Timely Project Completion</h4>
                  <p className="text-gray-600 text-sm mt-1">98% on-time delivery with precision project management</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-medium">Modern Construction Technology</h4>
                  <p className="text-gray-600 text-sm mt-1">Advanced techniques and sustainable building practices</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="-mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg shadow-lg hover:shadow-xl">
                Discover Our Construction Excellence
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;