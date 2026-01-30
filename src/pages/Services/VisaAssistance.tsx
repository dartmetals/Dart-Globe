import { useNavigate } from 'react-router-dom';

const VisaAssistance = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-red-900 via-red-700 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Visa Assistance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-700/80 to-red-900/80"></div>
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
              Visa Assistance
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Expert guidance and support for successful student visa applications to countries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Gateway to International Education
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Navigating visa applications can be complex and daunting. Our experienced visa specialists 
              provide comprehensive assistance to ensure your student visa application is successful, 
              accurate, and submitted on time.
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
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Visa Eligibility Assessment
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We conduct a thorough assessment of your profile against the visa requirements of your 
                  destination country. Our analysis identifies potential challenges and provides strategies 
                  to strengthen your application before submission.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Comprehensive eligibility criteria review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Financial requirements analysis and planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Genuine Temporary Entrant (GTE) assessment</span>
                  </li>
                </ul>
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-red-800 mb-2">Key Benefit:</h4>
                  <p className="text-red-700">
                    Identify and address potential visa application issues before submission.
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
                  Documentation & Application Preparation
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Our experts guide you through the complete documentation process, ensuring all required 
                  papers are properly prepared, verified, and organized according to embassy specifications. 
                  We handle everything from financial documents to academic records.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Complete document checklist preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Financial document verification and organization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Application form filling and review</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-2">Key Benefit:</h4>
                  <p className="text-blue-700">
                    Submit a complete and professionally prepared visa application package.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Interview Preparation & Coaching
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Visa interviews can be nerve-wracking. We provide comprehensive interview preparation 
                  including mock sessions, question practice, and guidance on presentation and communication 
                  skills to help you confidently face the visa officer.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Mock visa interview sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Common question practice and answer formulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Body language and communication skills training</span>
                  </li>
                </ul>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-2">Key Benefit:</h4>
                  <p className="text-green-700">
                    Approach your visa interview with confidence and preparation.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Application Submission & Follow-up
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We manage the complete submission process, including appointment scheduling, 
                  biometrics coordination, and follow-up with embassies. Our team tracks your 
                  application status and provides updates throughout the processing period.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Visa application submission coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Biometrics and medical appointment scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Regular status updates and embassy follow-up</span>
                  </li>
                </ul>
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-amber-800 mb-2">Key Benefit:</h4>
                  <p className="text-amber-700">
                    Ensure timely processing and stay informed about your application status.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Country-Specific Visa Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Country-Specific Visa Requirements
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                  <th className="py-4 px-6 text-left">Country</th>
                  <th className="py-4 px-6 text-left">Visa Type</th>
                  <th className="py-4 px-6 text-left">Processing Time</th>
                  <th className="py-4 px-6 text-left">Financial Proof</th>
                  <th className="py-4 px-6 text-left">Success Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    country: "USA",
                    visa: "F-1 Student Visa",
                    time: "3-5 weeks",
                    proof: "1 year tuition + living",
                    rate: "92%",
                    flag: "🇺🇸"
                  },
                  {
                    country: "UK",
                    visa: "Tier 4 Student Visa",
                    time: "3 weeks",
                    proof: "9 months living + tuition",
                    rate: "94%",
                    flag: "🇬🇧"
                  },
                  {
                    country: "Canada",
                    visa: "Study Permit",
                    time: "4-6 weeks",
                    proof: "1 year tuition + living",
                    rate: "91%",
                    flag: "🇨🇦"
                  },
                  {
                    country: "Australia",
                    visa: "Student Visa (Subclass 500)",
                    time: "4-8 weeks",
                    proof: "1 year tuition + living",
                    rate: "93%",
                    flag: "🇦🇺"
                  },
                  {
                    country: "Germany",
                    visa: "National Visa for Studies",
                    time: "4-12 weeks",
                    proof: "€11,208/year",
                    rate: "95%",
                    flag: "🇩🇪"
                  }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{row.flag}</span>
                        <span className="font-medium text-gray-800">{row.country}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700">{row.visa}</td>
                    <td className="py-4 px-6">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {row.time}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-700">{row.proof}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <span className="text-green-600 font-bold mr-2">{row.rate}</span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                            style={{ width: row.rate }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Visa Application Journey
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            Get expert assistance for a successful student visa application to your dream study destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate("/contact")} className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Free Visa Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaAssistance;