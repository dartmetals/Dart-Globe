import { useNavigate } from 'react-router-dom';

const EducationLoanProcessing = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-teal-900 via-teal-700 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Education Loan Processing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-700/80 to-teal-900/80"></div>
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
              Education Loan Processing
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Comprehensive assistance for securing education loans from leading banks and financial institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Simplified Loan Processing for International Education
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Navigating education loan applications can be complex. Our experts simplify the process, 
              helping you secure the best loan terms from trusted financial institutions for your study abroad journey.
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
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Loan Eligibility Assessment
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We conduct a comprehensive evaluation of your financial profile, academic credentials, 
                  and chosen program to determine your loan eligibility. Our assessment helps identify 
                  the most suitable lenders and loan products for your specific situation.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Comprehensive financial profile analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Credit score evaluation and improvement guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Loan amount calculation based on actual expenses</span>
                  </li>
                </ul>
                <div className="bg-teal-50 rounded-xl p-6">
                  <h4 className="font-bold text-teal-800 mb-2">Key Benefit:</h4>
                  <p className="text-teal-700">
                    Understand your borrowing capacity and identify the best loan options for your needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Lender Selection & Comparison
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  With access to partnerships with multiple banks and financial institutions, 
                  we help you compare loan products based on interest rates, repayment terms, 
                  processing fees, and other key factors to find the most favorable option.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Comparative analysis of loan products from multiple lenders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Interest rate negotiation and special offers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Processing fee reduction and waiver assistance</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-2">Key Benefit:</h4>
                  <p className="text-blue-700">
                    Secure the most favorable loan terms through expert comparison and negotiation.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Documentation & Application Processing
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We manage the complete documentation process, ensuring all required papers are 
                  properly prepared and submitted. Our team coordinates with lenders and handles 
                  follow-ups to expedite loan approval and disbursement.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Complete document checklist and preparation guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Application form filling and submission assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Liaison with bank officials and follow-up coordination</span>
                  </li>
                </ul>
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-amber-800 mb-2">Key Benefit:</h4>
                  <p className="text-amber-700">
                    Ensure smooth and timely loan processing with professional document management.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Post-Sanction Support & Disbursement
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Our support continues after loan approval. We assist with disbursement procedures, 
                  help you understand repayment terms, and provide guidance on managing loan obligations 
                  throughout your study period and beyond.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Disbursement procedure guidance and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Repayment term explanation and planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Loan restructuring and refinancing assistance</span>
                  </li>
                </ul>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-2">Key Benefit:</h4>
                  <p className="text-green-700">
                    Manage your education loan effectively with ongoing support and financial planning.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Loan Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Education Loan Features We Help Secure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">📈</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Competitive Interest Rates</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Floating and fixed rate options</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Interest concessions for top universities</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Moratorium period during study</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">⚖️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Flexible Repayment Terms</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Extended repayment periods (up to 15 years)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Grace period after course completion</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Part-prepayment options without penalties</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🛡️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Comprehensive Coverage</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">100% tuition fee coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Living expenses and travel costs</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Insurance and security deposit coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Education Financing Today
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            Get expert assistance in securing the education loan you need for your international studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate("/contact")} className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Free Loan Eligibility Check
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationLoanProcessing;