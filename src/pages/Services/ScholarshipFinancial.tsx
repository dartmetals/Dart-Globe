import { useNavigate } from "react-router-dom";


const ScholarshipFinancial = () => {
    const navigate=useNavigate()
  return (
    <div id="services/scholarship-financial-aid-assistance" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Scholarship and Financial Aid" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-700/80 to-amber-900/80"></div>
        </div>
        
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-20 md:h-32">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
         */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-left">
            <div className="mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-3xl">
              Scholarship & Financial Aid Assistance
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Maximize your funding opportunities with expert guidance on scholarships, grants, and financial aid.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Unlock Financial Support for Your Education
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Navigating the complex landscape of scholarships and financial aid can be overwhelming. 
              Our experts help you identify, apply for, and secure funding to make your study abroad dreams financially feasible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Section 1 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Scholarship Discovery & Matching
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We maintain an extensive database of scholarships from universities, governments, 
                  private organizations, and foundations worldwide. Using sophisticated matching algorithms, 
                  we identify scholarships that align perfectly with your academic profile, field of study, 
                  and personal background.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Comprehensive scholarship database with real-time updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Profile-based matching for maximum relevance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Deadline tracking and application priority system</span>
                  </li>
                </ul>
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-amber-800 mb-2">Key Benefit:</h4>
                  <p className="text-amber-700">
                    Access hidden scholarship opportunities and increase your funding chances with targeted recommendations.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Application Strategy & Documentation
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Crafting compelling scholarship applications requires strategic planning and exceptional 
                  documentation. Our experts help you develop persuasive essays, prepare supporting documents, 
                  and create application packages that stand out to selection committees.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Scholarship essay development and multiple revisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Document preparation and verification assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Interview preparation and mock sessions</span>
                  </li>
                </ul>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-2">Key Benefit:</h4>
                  <p className="text-green-700">
                    Submit polished applications that effectively showcase your achievements and potential.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Financial Aid Package Negotiation
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  When you receive multiple scholarship offers or need to negotiate better terms, 
                  our experts provide strategic guidance. We help you compare financial aid packages, 
                  understand terms and conditions, and negotiate for improved funding arrangements.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Financial aid package comparison and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Negotiation strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Communication with financial aid offices</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-2">Key Benefit:</h4>
                  <p className="text-blue-700">
                    Secure the best possible financial support through expert negotiation and strategic planning.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Post-Award Management & Compliance
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Managing scholarship funds and meeting compliance requirements is crucial for maintaining 
                  your financial support. We guide you through reporting requirements, renewal procedures, 
                  and financial planning to ensure continued funding throughout your studies.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Scholarship renewal guidance and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Academic performance monitoring for compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Financial planning and budget management</span>
                  </li>
                </ul>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-purple-800 mb-2">Key Benefit:</h4>
                  <p className="text-purple-700">
                    Maintain your scholarship funding through proper management and compliance with award terms.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Types of Financial Support We Help Secure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                type: "Merit-Based Scholarships",
                amount: "Up to 100% tuition",
                description: "Based on academic excellence",
                icon: "🏆",
                color: "from-amber-400 to-amber-600"
              },
              {
                type: "Need-Based Aid",
                amount: "Variable amounts",
                description: "Based on financial circumstances",
                icon: "🤝",
                color: "from-green-400 to-green-600"
              },
              {
                type: "Research Grants",
                amount: "$5,000 - $50,000",
                description: "For research projects",
                icon: "🔬",
                color: "from-blue-400 to-blue-600"
              },
              {
                type: "Country-Specific Scholarships",
                amount: "Varies by country",
                description: "Government and cultural programs",
                icon: "🌍",
                color: "from-purple-400 to-purple-600"
              }
            ].map((scholarship, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transform hover:-translate-y-2 transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${scholarship.color}`}></div>
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{scholarship.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{scholarship.type}</h3>
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <p className="text-amber-600 font-bold">{scholarship.amount}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{scholarship.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fund Your Education Dreams
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            Let us help you secure the financial support you need for your international education journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate("/contact")} className="bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Free Scholarship Assessment
            </button> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScholarshipFinancial;