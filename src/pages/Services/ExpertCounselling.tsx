import { useNavigate } from "react-router-dom";


const ExpertCounselling = () => {
    const navigate=useNavigate()
  return (
    <div id="services/one-on-one-expert-counselling" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="One-on-One Counselling" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-indigo-700/80 to-indigo-900/80"></div>
        </div>
        
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-20 md:h-32">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div> */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-left">
            <div className="mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-3xl">
              One-on-One Expert Counselling
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Personalized guidance from experienced education consultants for your unique study abroad journey.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Personal Education Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Get dedicated attention from experienced education consultants who understand your unique 
              aspirations and challenges. Our one-on-one counselling ensures personalized strategies 
              for your study abroad success.
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
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Personalized Education Roadmap
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Our expert counsellors work closely with you to understand your academic background, 
                  career goals, and personal preferences. We create a comprehensive education roadmap 
                  that outlines every step of your study abroad journey, from course selection to post-study opportunities.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">In-depth assessment of academic profile and career aspirations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Customized university and program recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Timeline planning for applications and preparations</span>
                  </li>
                </ul>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="font-bold text-indigo-800 mb-2">Key Benefit:</h4>
                  <p className="text-indigo-700">
                    Get a clear, personalized path to your study abroad goals with expert guidance at every step.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏫</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  University & Program Selection
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  With access to extensive databases and industry connections, we help you identify 
                  universities and programs that match your profile and aspirations. We consider factors 
                  like curriculum, faculty, campus life, location, and career outcomes to make informed recommendations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Comprehensive university research and comparison</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Program suitability analysis based on career goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Admission probability assessment and strategy</span>
                  </li>
                </ul>
                <div className="bg-teal-50 rounded-xl p-6">
                  <h4 className="font-bold text-teal-800 mb-2">Key Benefit:</h4>
                  <p className="text-teal-700">
                    Make informed decisions with expert insights into university rankings, programs, and admission trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Application Strategy & Documentation
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Our counsellors provide hands-on support with every aspect of your application. 
                  From crafting compelling personal statements to preparing strong recommendation letters, 
                  we ensure your application stands out in the competitive admission process.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Personal statement development and editing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Recommendation letter guidance and review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Application timeline management and follow-up</span>
                  </li>
                </ul>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-purple-800 mb-2">Key Benefit:</h4>
                  <p className="text-purple-700">
                    Present your best self to admission committees with professionally crafted application materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Post-Admission Support
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Our support continues even after you receive admission offers. We help you navigate 
                  acceptance decisions, scholarship negotiations, visa applications, and pre-departure 
                  preparations to ensure a smooth transition to your new academic environment.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Admission offer evaluation and decision guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Visa application preparation and interview coaching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Pre-departure briefing and accommodation assistance</span>
                  </li>
                </ul>
                <div className="bg-pink-50 rounded-xl p-6">
                  <h4 className="font-bold text-pink-800 mb-2">Key Benefit:</h4>
                  <p className="text-pink-700">
                    Enjoy continuous support throughout your entire study abroad journey, from acceptance to arrival.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Counsellor Profiles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Meet Our Expert Counsellors
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "USA & Canada Specialist",
                experience: "15+ years",
                expertise: "MBA Admissions, Ivy League Universities",
                icon: "👩‍🏫"
              },
              {
                name: "Robert Chen",
                role: "UK & Europe Expert",
                experience: "12+ years",
                expertise: "Russell Group Universities, STEM Programs",
                icon: "👨‍🎓"
              },
              {
                name: "Priya Sharma",
                role: "Australia & NZ Coordinator",
                experience: "10+ years",
                expertise: "Post-Study Work Rights, Scholarship Guidance",
                icon: "👩‍💼"
              }
            ].map((counsellor, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 transform hover:-translate-y-2 transition-all duration-300">
                <div className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="text-6xl mb-4">{counsellor.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800">{counsellor.name}</h3>
                    <p className="text-indigo-600 font-semibold mt-2">{counsellor.role}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-gray-700 font-medium mr-3">Experience:</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {counsellor.experience}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium">Specialization:</span>
                      <p className="text-gray-600 mt-1">{counsellor.expertise}</p>
                    </div>
                  </div>
                  <button className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Schedule Your Personal Counselling Session
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            Get dedicated attention from our expert counsellors and take the first step toward your study abroad dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate("/contact")} className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertCounselling;