import { useNavigate } from 'react-router-dom';

const UniversityApplication = () => {
    const navigate=useNavigate()
  return (
    <div id='services/university-application' className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="University Application" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-700/80 to-emerald-900/80"></div>
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
              University Application
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Comprehensive support for successful university applications to top institutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Gateway to Top Universities
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Navigate the complex university application process with expert guidance. From research 
              to submission, we ensure your application stands out and maximizes your chances of admission.
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
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  University Research & Shortlisting
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We conduct comprehensive research to identify universities that match your academic 
                  profile, career goals, and personal preferences. Our database includes detailed 
                  information on admission requirements, program structures, faculty expertise, and 
                  campus facilities across thousands of institutions worldwide.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Comprehensive university database with latest admission trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Admission probability analysis based on historical data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Strategic shortlisting with safety, match, and reach universities</span>
                  </li>
                </ul>
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h4 className="font-bold text-emerald-800 mb-2">Key Benefit:</h4>
                  <p className="text-emerald-700">
                    Create an optimal university list that maximizes admission chances while meeting your preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Application Documentation
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Our team provides comprehensive support in preparing and perfecting all application 
                  documents. From academic transcripts to recommendation letters, we ensure every 
                  document meets university standards and presents your profile in the best possible light.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Transcript evaluation and academic credential assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Statement of purpose development and multiple revisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Recommendation letter strategy and professor coordination</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-2">Key Benefit:</h4>
                  <p className="text-blue-700">
                    Present a compelling and professional application package that highlights your unique strengths.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Application Submission & Follow-up
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We manage the entire application submission process, ensuring all deadlines are met 
                  and applications are complete. Our systematic follow-up process keeps track of application 
                  status and communicates with universities on your behalf when necessary.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Application portal management and submission coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Deadline tracking and reminder system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Regular follow-up with admissions offices</span>
                  </li>
                </ul>
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-amber-800 mb-2">Key Benefit:</h4>
                  <p className="text-amber-700">
                    Ensure timely and complete submissions with professional management of the entire application process.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Post-Application Support
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Our support continues after submission, helping you navigate admission decisions, 
                  scholarship offers, and enrollment procedures. We provide guidance on selecting the 
                  best offer and preparing for the next steps in your academic journey.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Admission offer evaluation and comparison</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Scholarship negotiation and financial aid optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Enrollment confirmation and next-step guidance</span>
                  </li>
                </ul>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-purple-800 mb-2">Key Benefit:</h4>
                  <p className="text-purple-700">
                    Make informed decisions and secure the best possible outcome from your admission offers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            University Application Timeline
          </h2>
          
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 md:w-2 bg-gradient-to-b from-emerald-500 to-blue-500"></div>
            
            {[
              {
                month: "Aug - Sep",
                title: "Research & Shortlisting",
                description: "Identify target universities and programs",
                icon: "🔍",
                align: "md:text-left md:ml-8"
              },
              {
                month: "Oct - Nov",
                title: "Document Preparation",
                description: "Prepare SOP, LORs, and other documents",
                icon: "📝",
                align: "md:text-right md:mr-8"
              },
              {
                month: "Dec - Jan",
                title: "Application Submission",
                description: "Submit applications before deadlines",
                icon: "⚡",
                align: "md:text-left md:ml-8"
              },
              {
                month: "Feb - Mar",
                title: "Follow-up & Interviews",
                description: "Track applications and prepare for interviews",
                icon: "📞",
                align: "md:text-right md:mr-8"
              },
              {
                month: "Apr - May",
                title: "Decision & Enrollment",
                description: "Evaluate offers and confirm enrollment",
                icon: "🎓",
                align: "md:text-left md:ml-8"
              }
            ].map((step, index) => (
              <div key={index} className="flex items-center mb-12">
                <div className="hidden md:block md:w-6/12">
                  {index % 2 === 0 && (
                    <div className={`${step.align}`}>
                      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md">
                        <div className="flex items-center mb-3">
                          <div className="text-3xl mr-4">{step.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                            <p className="text-emerald-600 font-semibold">{step.month}</p>
                          </div>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex-shrink-0 w-12 h-12 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center relative z-10 mx-auto md:mx-0">
                  <span className="text-xl">{step.icon}</span>
                </div>
                
                <div className="hidden md:block md:w-6/12">
                  {index % 2 === 1 && (
                    <div className={`${step.align}`}>
                      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md">
                        <div className="flex items-center mb-3">
                          <div className="text-3xl mr-4">{step.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                            <p className="text-emerald-600 font-semibold">{step.month}</p>
                          </div>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Mobile View */}
                <div className="md:hidden ml-6 flex-1">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-2xl mr-4">{step.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                        <p className="text-emerald-600 font-semibold">{step.month}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your University Application Journey
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            Join thousands of successful students who gained admission to their dream universities with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate("/contact")} className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Begin Application Process
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniversityApplication;