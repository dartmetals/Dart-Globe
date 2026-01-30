import { useNavigate } from 'react-router-dom';

const PostMastersInternship = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Post-Masters Internship" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-700/80 to-purple-900/80"></div>
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
              {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <div className="text-4xl">🎓</div>
              </div> */}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-3xl">
              Post-Masters Internship
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Bridge academic knowledge with professional experience through structured internship programs.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              From Classroom to Career
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Transform your academic achievements into practical career success. Our post-masters 
              internship programs connect you with industry-leading organizations for valuable 
              professional experience that complements your advanced degree.
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
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Strategic Internship Matching
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We analyze your academic background, career aspirations, and skill set to match 
                  you with internship opportunities that align with your master's specialization. 
                  Our network includes top companies across various industries seeking post-graduate talent.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Industry-specific internship identification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Company reputation and growth potential analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Long-term career progression alignment</span>
                  </li>
                </ul>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-purple-800 mb-2">Key Benefit:</h4>
                  <p className="text-purple-700">
                    Secure internships that directly contribute to your long-term career goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Application & Placement Process
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We provide comprehensive support throughout the internship application process, 
                  from developing compelling application materials to interview preparation and 
                  offer negotiation. Our expertise ensures you present your master's qualifications 
                  effectively to potential employers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Professional resume and portfolio development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Technical interview preparation and case study practice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Offer evaluation and negotiation strategy</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-2">Key Benefit:</h4>
                  <p className="text-blue-700">
                    Navigate the competitive internship application process with professional guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Work Authorization & Legal Support
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Understanding and securing proper work authorization for post-study internships 
                  is crucial. We provide guidance on visa options, work permit requirements, and 
                  ensure compliance with local employment regulations in your host country.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Post-study work visa options and eligibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Employer sponsorship and work permit processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Tax and social security guidance for interns</span>
                  </li>
                </ul>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-2">Key Benefit:</h4>
                  <p className="text-green-700">
                    Ensure legal compliance and proper work authorization for your internship.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Career Transition Support
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We help you maximize your internship experience and transition successfully into 
                  full-time employment. From performance optimization to networking strategies, 
                  we ensure your internship becomes a stepping stone to your professional career.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Internship performance optimization strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Company networking and relationship building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Full-time employment conversion guidance</span>
                  </li>
                </ul>
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-amber-800 mb-2">Key Benefit:</h4>
                  <p className="text-amber-700">
                    Transform your internship into a pathway to permanent employment and career success.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Industry Partnerships & Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "Technology",
                placements: "Google, Microsoft, Amazon",
                success: "85% conversion rate",
                icon: "💻",
                color: "from-purple-400 to-purple-600",
                highlights: ["Software development", "Data analytics", "Product management"]
              },
              {
                company: "Finance & Consulting",
                placements: "Goldman Sachs, McKinsey, Deloitte",
                success: "78% conversion rate",
                icon: "💰",
                color: "from-blue-400 to-blue-600",
                highlights: ["Financial analysis", "Strategy consulting", "Risk management"]
              },
              {
                company: "Healthcare & Research",
                placements: "Johnson & Johnson, Pfizer, Mayo Clinic",
                success: "82% conversion rate",
                icon: "🏥",
                color: "from-green-400 to-green-600",
                highlights: ["Clinical research", "Pharma development", "Healthcare analytics"]
              },
              {
                company: "Engineering",
                placements: "Tesla, Boeing, Siemens",
                success: "80% conversion rate",
                icon: "⚙️",
                color: "from-amber-400 to-amber-600",
                highlights: ["Mechanical engineering", "Electrical systems", "Project management"]
              },
              {
                company: "Marketing & Media",
                placements: "Facebook, Disney, Ogilvy",
                success: "75% conversion rate",
                icon: "📢",
                color: "from-pink-400 to-pink-600",
                highlights: ["Digital marketing", "Brand management", "Content strategy"]
              },
              {
                company: "Public Sector",
                placements: "UN, World Bank, Government",
                success: "70% conversion rate",
                icon: "🏛️",
                color: "from-teal-400 to-teal-600",
                highlights: ["Policy analysis", "International development", "Public administration"]
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transform hover:-translate-y-2 transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{industry.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{industry.company}</h3>
                      <p className="text-purple-600 font-semibold">{industry.success}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 font-medium">{industry.placements}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Popular Roles:</h4>
                    <ul className="space-y-1">
                      {industry.highlights.map((role, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                          <span className="text-gray-600 text-sm">{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className={`w-full bg-gradient-to-r ${industry.color} text-white py-2.5 rounded-xl font-bold hover:shadow-lg transition-all text-sm`}>
                    View Opportunities
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Launch Your Professional Career
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            Secure valuable post-masters internship opportunities that pave the way for your professional success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate("/contact")} className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Explore Internship Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostMastersInternship;