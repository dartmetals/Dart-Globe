import React from "react";

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: "/university-icon1.png",
      count: "500+",
      title: "Universities Processed"
    },
    {
      icon: "/program-icon.png",
      count: "10K+",
      title: "Programs Available"
    },
    {
      icon: "/country-icon3.png", 
      count: "15+",
      title: "Countries"
    },
    {
      icon: "/students-icon.png", 
      count: "10K+",
      title: "Students"
    },
    {
      icon: "/visa-icon.png", 
      count: "100%",
      title: "Visa Success"
    },
    // {
    //   icon: "/feedback-icon.png", 
    //   count: "90%+",
    //   title: "Referrals"
    // },
    {
      icon: "/loan-icon.png", 
      count: "100%",
      title: "Loan Support"
    }
  ];

  return (
    <section className="w-full">
      <div className="max-w-full ">
        
        {/* Desktop: 7 columns */}
        <div className="hidden md:grid md:grid-cols-6">
          {stats.map((stat, index) => (
            <div key={index} className="last:border-r-0">
              {/* Grid with 3 rows */}
              <div className="grid grid-rows-3 h-20">
                {/* Row 1: Icon - Top aligned with NO top padding */}
                <div className="flex items-start justify-center">
                  <img 
                    src={stat.icon} 
                    alt={stat.title}
                    className="h-8 w-8 md:h-8 md:w-8 object-contain"
                  />
                </div>
                
                {/* Row 2: Count - Center aligned */}
                <div className="flex items-center justify-center">
                  <div className="text-sm font-bold text-black">
                    {stat.count}
                  </div>
                </div>
                
                {/* Row 3: Title - Top aligned (not bottom) with NO bottom padding */}
                <div className="flex items-start justify-center min-h-0">
                  <div className="text-sm font-medium text-black text-center px-2 leading-tight">
                    {stat.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 2 tables */}
        <div className="md:hidden">
          {/* Table 1 */}
          <div className="grid grid-cols-3 mb-4">
            {stats.slice(0, 3).map((stat, index) => (
              <div key={index} className="">
                {/* Grid with 3 rows */}
                <div className="grid grid-rows-3 h-20">
                  {/* Row 1: Icon - NO top padding */}
                  <div className="flex items-start justify-center">
                    <img 
                      src={stat.icon} 
                      alt={stat.title}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  
                  {/* Row 2: Count */}
                  <div className="flex items-center justify-center">
                    <div className="text-base font-bold text">
                      {stat.count}
                    </div>
                  </div>
                  
                  {/* Row 3: Title - Top aligned (not bottom) with NO bottom padding */}
                  <div className="flex items-start justify-center">
                    <div className="text-xs font-medium text-black text-center px-1 leading-tight">
                      {stat.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Table 2 */}
          <div className="grid grid-cols-3 mt-2">
            {stats.slice(3).map((stat, index) => (
              <div key={index + 4} className="">
                {/* Grid with 3 rows */}
                <div className="grid grid-rows-3 h-20">
                  {/* Row 1: Icon - NO top padding */}
                  <div className="flex items-start justify-center">
                    <img 
                      src={stat.icon} 
                      alt={stat.title}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  
                  {/* Row 2: Count */}
                  <div className="flex items-center justify-center">
                    <div className="text-base font-bold text">
                      {stat.count}
                    </div>
                  </div>
                  
                  {/* Row 3: Title - Top aligned (not bottom) with NO bottom padding */}
                  <div className="flex items-start justify-center">
                    <div className="text-xs font-medium text-black text-center px-1 leading-tight">
                      {stat.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Empty column */}
            {/* <div className="h-28"></div> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;