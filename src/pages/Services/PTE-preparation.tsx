import { useNavigate } from "react-router-dom";

const PTEPreparation = () => {
    const navigate=useNavigate()
  return (
    <div id="services/IELTS/TOEFL/PTE-preparation" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Language Test Preparation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-700/80 to-blue-900/80"></div>
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
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-3xl">
              IELTS/TOEFL/PTE Preparation
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Master English language proficiency tests with expert guidance and proven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Comprehensive Language Test Preparation
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Achieve your target scores in IELTS, TOEFL, or PTE with our structured preparation programs. 
              Our expert trainers provide personalized coaching to help you excel in all test components.
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
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Personalized Test Strategy
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We begin with a comprehensive diagnostic assessment to identify your strengths and weaknesses 
                  across all test modules. Based on your initial performance, we create a customized study plan 
                  that targets areas needing improvement while reinforcing your existing skills.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Diagnostic assessment to establish baseline score</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Customized study schedule based on learning style</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Test-taking strategy development for each module</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-2">Key Benefit:</h4>
                  <p className="text-blue-700">
                    Maximize your preparation efficiency with a tailored approach that addresses your specific needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">👂</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Module-Specific Coaching
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Our expert trainers provide intensive coaching for each test module: Listening, Reading, 
                  Writing, and Speaking. We focus on developing the specific skills required for each section, 
                  using authentic test materials and proven teaching methodologies.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Writing task analysis and structure development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Speaking practice with accent reduction techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Listening comprehension and note-taking strategies</span>
                  </li>
                </ul>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-2">Key Benefit:</h4>
                  <p className="text-green-700">
                    Develop strong foundations in all test areas with expert guidance and practical exercises.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Mock Tests & Performance Analysis
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Regular full-length mock tests simulate actual exam conditions, helping you build stamina 
                  and manage time effectively. Detailed performance analysis after each test identifies areas 
                  for improvement and tracks your progress toward target scores.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Full-length simulated tests under timed conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Detailed scoring and feedback for each section</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Comparative analysis to track improvement over time</span>
                  </li>
                </ul>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-purple-800 mb-2">Key Benefit:</h4>
                  <p className="text-purple-700">
                    Build confidence and improve scores through regular practice and detailed feedback.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Score Improvement Guarantee
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Our proven methodology and experienced trainers ensure significant score improvement. 
                  We provide additional support sessions, updated study materials, and test-taking tips 
                  that have helped thousands of students achieve their desired scores.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Access to updated question banks and practice materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Tips and tricks for maximizing scores in each section</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Flexible scheduling for additional practice sessions</span>
                  </li>
                </ul>
                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-bold text-orange-800 mb-2">Key Benefit:</h4>
                  <p className="text-orange-700">
                    Achieve your target score with our comprehensive support system and proven teaching methods.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Test Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Which Test Is Right For You?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                test: "IELTS",
                color: "from-blue-500 to-blue-600",
                icon: "🇬🇧",
                features: [
                  "Accepted by 11,000+ institutions worldwide",
                  "Both Academic and General Training versions",
                  "Face-to-face speaking test",
                  "Results in 13 days"
                ]
              },
              {
                test: "TOEFL",
                color: "from-red-500 to-red-600",
                icon: "🇺🇸",
                features: [
                  "Preferred by US and Canadian universities",
                  "Fully computer-based test",
                  "Integrated speaking and writing tasks",
                  "Results in 6-10 days"
                ]
              },
              {
                test: "PTE Academic",
                color: "from-purple-500 to-purple-600",
                icon: "🇦🇺",
                features: [
                  "Computer-based with AI scoring",
                  "Fast results (within 2 days)",
                  "Accepted by universities worldwide",
                  "Flexible test dates"
                ]
              }
            ].map((test, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 transform hover:-translate-y-2 transition-all duration-300">
                <div className={`h-3 bg-gradient-to-r ${test.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-5xl">{test.icon}</div>
                    <h3 className="text-3xl font-bold text-gray-800 ml-4">{test.test}</h3>
                  </div>
                  <ul className="space-y-3">
                    {test.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gray-300 rounded-full mt-2 mr-3"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-8 bg-gradient-to-r ${test.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Test Preparation Today!
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            Join thousands of successful students who achieved their target scores with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate("/contact")} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Book Free Demo Class
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PTEPreparation;