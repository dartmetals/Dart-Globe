import { useNavigate } from 'react-router-dom';

const AccommodationAssistance = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Accommodation Assistance" 
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
        </div>
         */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-left">
            <div className="mb-8">
            </div>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-3xl">
              Accommodation Assistance
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Find safe, comfortable, and affordable housing solutions for your study abroad journey.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Home Away From Home
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Finding suitable accommodation in a new country can be challenging. Our comprehensive 
              accommodation assistance ensures you secure safe, comfortable, and well-located housing 
              that fits your budget and preferences.
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
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Comprehensive Housing Search
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We conduct extensive research to identify accommodation options that match your 
                  specific requirements. Our database includes verified properties across various 
                  categories, from university dormitories to private apartments, ensuring you find 
                  the perfect place to call home.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Extensive database of verified accommodation options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Neighborhood analysis and location recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Virtual tours and detailed property inspections</span>
                  </li>
                </ul>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="font-bold text-indigo-800 mb-2">Key Benefit:</h4>
                  <p className="text-indigo-700">
                    Access a wide range of verified accommodation options tailored to your preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Booking & Legal Support
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Navigating rental agreements and legal requirements in a foreign country can be 
                  complex. Our experts provide comprehensive support with contract review, 
                  documentation, and ensuring all legal formalities are properly completed.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Rental agreement review and explanation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Security deposit and payment coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Utility setup and service connection assistance</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-2">Key Benefit:</h4>
                  <p className="text-blue-700">
                    Secure your accommodation with proper legal documentation and financial protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Roommate Matching & Community Building
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  For students preferring shared accommodation, we provide intelligent roommate 
                  matching based on lifestyle preferences, study habits, and cultural backgrounds. 
                  We also help you connect with local communities and student groups.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Compatibility-based roommate matching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Shared accommodation cost optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Local community and student group connections</span>
                  </li>
                </ul>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-2">Key Benefit:</h4>
                  <p className="text-green-700">
                    Find compatible roommates and build a supportive community in your new city.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Post-Booking Support & Issue Resolution
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Our support continues after you move in. We assist with any accommodation-related 
                  issues, maintenance requests, and provide guidance on navigating landlord-tenant 
                  relationships in your host country.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Move-in assistance and property inspection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Maintenance and repair coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Dispute resolution and legal support</span>
                  </li>
                </ul>
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-amber-800 mb-2">Key Benefit:</h4>
                  <p className="text-amber-700">
                    Enjoy peace of mind with ongoing support for any accommodation-related concerns.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Types of Accommodation We Help Secure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                type: "University Dorms",
                price: "$800-$1,500/month",
                features: ["On-campus", "All inclusive", "Social environment"],
                icon: "🏫",
                color: "from-indigo-400 to-indigo-600"
              },
              {
                type: "Shared Apartments",
                price: "$600-$1,200/month",
                features: ["Fully furnished", "Shared facilities", "Cost-effective"],
                icon: "🏢",
                color: "from-blue-400 to-blue-600"
              },
              {
                type: "Private Studios",
                price: "$1,000-$2,000/month",
                features: ["Private kitchen", "Independent living", "Flexible lease"],
                icon: "🏡",
                color: "from-green-400 to-green-600"
              },
              {
                type: "Homestays",
                price: "$700-$1,400/month",
                features: ["Local family", "Cultural immersion", "Meals included"],
                icon: "👨‍👩‍👧‍👦",
                color: "from-amber-400 to-amber-600"
              }
            ].map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transform hover:-translate-y-2 transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${option.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{option.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800">{option.type}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-indigo-600 font-bold text-lg">{option.price}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-gray-300 rounded-full mr-3"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full bg-gradient-to-r ${option.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all`}>
                    Explore Options
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
            Find Your Perfect Home Abroad
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            Let us help you secure comfortable, safe, and affordable accommodation for your study abroad experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate("/contact")} className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Search Accommodation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccommodationAssistance;