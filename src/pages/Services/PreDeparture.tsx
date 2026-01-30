import { useNavigate } from 'react-router-dom';

const PreDeparture = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Pre-Departure Support" 
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
              
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-3xl">
              Pre-Departure Support
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Comprehensive preparation and guidance for a smooth transition to your study destination.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Smooth Transition to Study Abroad
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Preparing for international study involves more than just packing bags. Our comprehensive 
              pre-departure support ensures you're fully prepared for academic, cultural, and practical 
              aspects of life in a new country.
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
                  <span className="text-2xl">🧳</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Travel & Documentation Preparation
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We ensure all your travel documents are in order and provide guidance on essential 
                  preparations. From flight bookings to understanding customs regulations, we cover 
                  every aspect of your journey preparation.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Travel itinerary planning and flight booking assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Document checklist and verification (passport, visa, tickets)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Customs and immigration procedure guidance</span>
                  </li>
                </ul>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-purple-800 mb-2">Key Benefit:</h4>
                  <p className="text-purple-700">
                    Travel with confidence knowing all your documents and arrangements are properly organized.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Accommodation & Settling In
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Finding suitable accommodation and settling into a new environment can be challenging. 
                  We provide comprehensive support for housing arrangements and initial settlement in your destination country.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">On-campus and off-campus housing options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Accommodation booking and contract review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Local transportation and essential services setup</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-2">Key Benefit:</h4>
                  <p className="text-blue-700">
                    Arrive at your destination with secure accommodation and a plan for smooth settlement.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Financial & Banking Setup
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Managing finances in a new country requires careful planning. We guide you through 
                  setting up bank accounts, understanding currency exchange, and managing expenses 
                  effectively during your initial period abroad.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">International bank account opening guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Currency exchange and money transfer solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Budget planning for initial settlement period</span>
                  </li>
                </ul>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-2">Key Benefit:</h4>
                  <p className="text-green-700">
                    Ensure smooth financial management from day one in your new country.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Cultural & Academic Orientation
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Understanding cultural norms and academic expectations is crucial for success. 
                  We provide orientation sessions covering everything from classroom etiquette to 
                  social customs in your destination country.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Country-specific cultural orientation sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Academic system and classroom culture briefing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Local laws, healthcare, and emergency procedures</span>
                  </li>
                </ul>
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-amber-800 mb-2">Key Benefit:</h4>
                  <p className="text-amber-700">
                    Adapt quickly to your new environment with confidence and cultural awareness.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pre-Departure Checklist */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Essential Pre-Departure Checklist
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Documents",
                items: ["Passport & Visa", "University Acceptance Letter", "Financial Proof", "Health Insurance"],
                icon: "📄",
                color: "border-purple-200 bg-purple-50"
              },
              {
                category: "Academic",
                items: ["Transcripts & Certificates", "Course Materials", "Laptop & Electronics", "Reference Books"],
                icon: "🎓",
                color: "border-blue-200 bg-blue-50"
              },
              {
                category: "Personal",
                items: ["Clothing & Essentials", "Medications", "Local Currency", "Emergency Contacts"],
                icon: "🧳",
                color: "border-green-200 bg-green-50"
              },
              {
                category: "Travel",
                items: ["Flight Tickets", "Accommodation Details", "Transport Arrangements", "Travel Insurance"],
                icon: "✈️",
                color: "border-amber-200 bg-amber-50"
              },
              {
                category: "Financial",
                items: ["Bank Accounts", "Credit/Debit Cards", "Money Transfer Setup", "Budget Planning"],
                icon: "💳",
                color: "border-teal-200 bg-teal-50"
              },
              {
                category: "Health",
                items: ["Vaccinations", "Medical Records", "Prescription Copies", "Health Insurance Card"],
                icon: "🏥",
                color: "border-pink-200 bg-pink-50"
              }
            ].map((item, index) => (
              <div key={index} className={`rounded-2xl border-2 ${item.color} p-6 transform hover:scale-105 transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{item.category}</h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      <span className="text-gray-700">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Ready for Your Study Abroad Journey
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            Ensure a smooth transition to your new academic life with our comprehensive pre-departure support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate("/contact")} className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Schedule Pre-Departure Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreDeparture;