import React from "react";

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      number: "01",
      title: "100% Free Services",
      description: "Complete guidance without any hidden charges or consultancy fees."
    },
    {
      number: "02",
      title: "End-to-End Support",
      description: "From profile assessment to post-arrival assistance in destination."
    },
    {
      number: "03",
      title: "High Success Rate",
      description: "Proven track record with 100% university admission success."
    },
    {
      number: "04",
      title: "10,000+ Students Guided",
      description: "Trusted by thousands of students across India with proven results."
    },
    {
      number: "05",
      title: "Financial Assistance",
      description: "Expert help with scholarships, education loans, and financial aid."
    },
    {
      number: "06",
      title: "25+ Countries Expertise",
      description: "Specialized guidance for top study destinations worldwide."
    },
    {
      number: "07",
      title: "Visa Success Support",
      description: "Comprehensive visa assistance with mock interviews and document filing."
    },
    {
      number: "08",
      title: "Accommodation & Job Support",
      description: "Help with housing, part-time jobs, and post-study internships."
    },
    {
      number: "09",
      title: "Personalized Counselling",
      description: "One-on-one expert sessions for customized study abroad plans."
    }
  ];

  return (
    <section id="why-choose-us" className="w-full py-16 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center">
            <div className="w-20 h-1 bg-blue-200"></div>
            <span className="mx-4 text-blue-600 font-semibold">WHY CHOOSE US</span>
            <div className="w-20 h-1 bg-blue-200"></div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 rounded-xl shadow-md p-4">
          {reasons.map((reason, index) => (
            <div key={index} className="p-2 hover:shadow-md hover:rounded-xl transition-all duration-300">
              
              {/* Desktop View: Number, Horizontal Line, and Title */}
              <div className="hidden md:flex items-start gap-2 mb-4">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-[#FF0000] font-bold text-xl">
                    {reason.number}
                  </span>
                </div>
                
                {/* Horizontal Line - Fixed width */}
                <div className="flex-shrink-0 mt-3">
                  <div className="h-1 w-8 md:w-10 bg-gradient-to-r from-red-400 to-red-200 rounded-full"></div>
                </div>
                
                {/* Title */}
                <div className="flex-shrink-0">
                  <h3 className="text-med md:text-lg font-bold text-gray-900">
                    {reason.title}
                  </h3>
                </div>
              </div>

              {/* Mobile & Tablet View: Blue > Arrow and Title */}
              <div className="md:hidden flex items-start gap-3 sm:gap-5 mb-1">
                {/* Blue > Arrow */}
                <div className="flex-shrink-0">
                  <span className="text-indigo-400 font-bold text-xl">&gt;</span>
                </div>
                
                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {reason.title}
                  </h3>
                </div>
              </div>

              {/* Paragraph - Responsive margin */}
              <div className="md:ml-[calc(3rem+2.5rem)] ml-8"> {/* ml-8 for mobile to align with arrow, md:ml-... for desktop */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;