import { useNavigate } from "react-router-dom";


const ProfessionalCareerGuidance = () => {
    const navigate=useNavigate()
  return (
    <div id="services/career-guidance" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Career Guidance Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-700/80 to-blue-900/80"></div>
        </div>
        
        {/* Curved Shape at Bottom */}
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-20 md:h-32">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div> */}
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-left">
            <div className="mb-8">
              
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-3xl">
              Professional Career Guidance
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Strategic career planning for global success. Let us help you build a future that aligns with your passions and market opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Pathway to Global Career Success
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              In today's competitive global market, strategic career planning is more crucial than ever. 
              Our professional career guidance service provides comprehensive support to help you navigate 
              international career opportunities and build a future aligned with your aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Section 1 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Comprehensive Career Assessment
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We begin with an in-depth analysis of your academic background, skills, interests, and 
                  personality traits using proven assessment tools. Our experts evaluate your strengths, 
                  weaknesses, and career inclinations to identify the most suitable career paths.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Detailed skills and aptitude analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Personality profiling and career compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Industry trend analysis and future predictions</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-2">Key Benefit:</h4>
                  <p className="text-blue-700">
                    Gain clarity on your career direction with data-driven insights and personalized recommendations.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Global Market Intelligence
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Access comprehensive data on international job markets, emerging industries, and skill 
                  demands across different countries. We provide insights into salary expectations, growth 
                  opportunities, and visa requirements for your target destinations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Country-specific career opportunity analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Industry growth projections and demand forecasts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Competitive salary benchmarking</span>
                  </li>
                </ul>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-2">Key Benefit:</h4>
                  <p className="text-green-700">
                    Make informed decisions with up-to-date global market intelligence and strategic insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Educational Pathway Planning
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We map out the ideal educational journey to achieve your career goals. From selecting 
                  the right courses and universities to planning internships and certifications, we create 
                  a step-by-step roadmap for academic and professional development.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">University and program selection guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Scholarship and financial aid strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Professional certification planning</span>
                  </li>
                </ul>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-purple-800 mb-2">Key Benefit:</h4>
                  <p className="text-purple-700">
                    Optimize your educational journey with a personalized roadmap that maximizes career opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Career Development Strategy
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Develop a comprehensive career development plan with actionable steps for skill enhancement, 
                  networking, and professional growth. We help you build a competitive profile and prepare for 
                  international job markets.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Resume and portfolio optimization for global standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Interview preparation and negotiation skills training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Professional networking and mentorship guidance</span>
                  </li>
                </ul>
                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-bold text-orange-800 mb-2">Key Benefit:</h4>
                  <p className="text-orange-700">
                    Accelerate your career growth with strategic planning and professional development support.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Our 4-Step Career Guidance Process
          </h2>
          
          <div className="relative"> */}
            {/* Timeline Line */}
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div> */}
            
            {/* Steps */}
            {/* <div className="space-y-12 lg:space-y-0">
              {[
                {
                  step: 1,
                  title: "Initial Assessment",
                  description: "Comprehensive evaluation of your background, skills, and aspirations",
                  icon: "📝"
                },
                {
                  step: 2,
                  title: "Strategy Development",
                  description: "Creating personalized career roadmap with clear milestones",
                  icon: "🗺️"
                },
                {
                  step: 3,
                  title: "Implementation Support",
                  description: "Guidance through educational and professional development steps",
                  icon: "⚡"
                },
                {
                  step: 4,
                  title: "Progress Tracking",
                  description: "Regular reviews and adjustments to ensure success",
                  icon: "📈"
                }
              ].map((item, index) => (
                <div key={item.step} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}> */}
                  {/* Left/Right Content */}
                  {/* <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <div className="flex items-center lg:justify-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                          <p className="text-gray-600 mt-2">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  
                  {/* Center Icon */}
                  {/* <div className="my-8 lg:my-0 lg:w-2/12 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-3xl">
                      {item.icon}
                    </div>
                  </div>
                   */}
                  {/* Empty Space */}
                  {/* <div className="lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            Take the first step towards a successful international career with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate("/contact")} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Book Free Career Consultation
            </button>
            {/* <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              Download Career Guide
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalCareerGuidance;