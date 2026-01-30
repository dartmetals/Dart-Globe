import { useNavigate } from 'react-router-dom';

const AbroadPartTimeJob = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-teal-900 via-teal-700 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Abroad Part-Time Job" 
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
              Abroad Part-Time Job
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Earn while you learn with part-time job opportunities in your study destination.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Balance Study with Professional Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Gain valuable work experience, earn extra income, and enhance your resume with part-time 
              job opportunities tailored to international students. We help you find jobs that complement 
              your studies and career goals.
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
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Work Rights & Legal Compliance
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Understanding and complying with work regulations is crucial for international students. 
                  We provide comprehensive guidance on work-hour limits, tax obligations, and legal 
                  requirements specific to your study destination.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Country-specific work hour regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Tax file number and social security guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Work permit and visa compliance assistance</span>
                  </li>
                </ul>
                <div className="bg-teal-50 rounded-xl p-6">
                  <h4 className="font-bold text-teal-800 mb-2">Key Benefit:</h4>
                  <p className="text-teal-700">
                    Work legally and confidently with complete understanding of your rights and obligations.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Job Search Strategy & Placement
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We connect you with part-time job opportunities that match your skills, schedule, 
                  and career interests. Our network includes employers across various sectors who 
                  understand and accommodate international student schedules.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Campus job opportunities and university partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Industry-specific part-time positions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Flexible schedule job matching</span>
                  </li>
                </ul>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-2">Key Benefit:</h4>
                  <p className="text-blue-700">
                    Find suitable part-time work that fits your academic schedule and career goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Application & Interview Preparation
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  We help you prepare professional job applications and succeed in interviews. 
                  From resume tailoring to interview techniques, we ensure you present yourself 
                  effectively to potential employers in your host country.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Country-specific resume/CV formatting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Cover letter development for local job market</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Mock interviews and cultural communication training</span>
                  </li>
                </ul>
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-amber-800 mb-2">Key Benefit:</h4>
                  <p className="text-amber-700">
                    Present yourself professionally and increase your chances of job placement.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Workplace Rights & Career Development
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-600 mb-6">
                  Beyond finding a job, we provide guidance on workplace rights, professional 
                  development, and turning part-time work into valuable career experience. 
                  Learn how to maximize your professional growth while studying.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Workplace rights and responsibilities education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Professional networking and reference building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Skill development and career progression planning</span>
                  </li>
                </ul>
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-2">Key Benefit:</h4>
                  <p className="text-green-700">
                    Transform part-time work into meaningful career development opportunities.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Job Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Popular Part-Time Job Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Campus Jobs",
                pay: "$12-$25/hour",
                description: "Library assistants, research aides, campus tour guides",
                icon: "🏫",
                color: "from-teal-400 to-teal-600",
                benefits: ["Flexible hours", "Study-friendly", "Career relevant"]
              },
              {
                category: "Hospitality",
                pay: "$10-$20/hour + tips",
                description: "Restaurant staff, baristas, hotel reception",
                icon: "☕",
                color: "from-amber-400 to-amber-600",
                benefits: ["Social environment", "Cash tips", "Shift flexibility"]
              },
              {
                category: "Retail",
                pay: "$11-$18/hour",
                description: "Sales associates, cashiers, customer service",
                icon: "🛒",
                color: "from-blue-400 to-blue-600",
                benefits: ["Employee discounts", "Regular hours", "Customer service skills"]
              },
              {
                category: "Tutoring",
                pay: "$15-$40/hour",
                description: "Subject tutoring, language teaching, test prep",
                icon: "📚",
                color: "from-purple-400 to-purple-600",
                benefits: ["High pay rates", "Flexible scheduling", "Academic relevance"]
              },
              {
                category: "Internships",
                pay: "$15-$30/hour",
                description: "Industry-specific part-time internships",
                icon: "💼",
                color: "from-green-400 to-green-600",
                benefits: ["Career development", "Networking", "Resume building"]
              },
              {
                category: "Freelance",
                pay: "$20-$50/hour",
                description: "Writing, design, programming, consulting",
                icon: "💻",
                color: "from-indigo-400 to-indigo-600",
                benefits: ["Work from anywhere", "Set own hours", "High earning potential"]
              }
            ].map((job, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transform hover:-translate-y-2 transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${job.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{job.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{job.category}</h3>
                      <p className="text-teal-600 font-semibold">{job.pay}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className={`w-full bg-gradient-to-r ${job.color} text-white py-2.5 rounded-xl font-bold hover:shadow-lg transition-all text-sm`}>
                    Explore Jobs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Earning While You Study
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            Find part-time job opportunities that complement your studies and boost your career prospects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate("/contact")} className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Search Part-Time Jobs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbroadPartTimeJob;