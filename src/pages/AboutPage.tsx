import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUsPage: React.FC = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Curved Bottom (Image Only) */}
<section className="relative h-[48vh] md:h-[100vh] text-white overflow-hidden bg-white">
  
  {/* Background Image Wrapper */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-bottom"
    style={{
      backgroundImage: "url('/about-bg3.png')",
      backgroundSize: "100% auto" // ✅ shows full image
    }}
  >
    {/* Optional Overlay */}
    {/* <div className="absolute inset-0 bg-black/30"></div> */}

    {/* Bottom Curve (part of hero bg) */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      viewBox="0 0 900 100"
      preserveAspectRatio="none"
      className="relative block w-full h-[100px]"
    >
      <path
        d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
        className="fill-white"
      ></path>
    </svg>
  </div>
  </div>

  {/* Content */}
  <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
  <div className="max-w-xl text-center md:text-left">
    <h1 className="text-3xl md:text-6xl font-bold mb-2">
      About Us
    </h1>
    <p className="text-lg md:text-2xl opacity-90">
      Your Trusted Partner in Global Education
    </p>
  </div>
</div>
</section>

      {/* About Us Content Section */}
      {/* <section className="py-16 md:py-24 -mt-1 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Abroad Education Consultants
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At DartGlobe Consultancy, we are dedicated to transforming your dreams of studying abroad into reality. With years of expertise and a proven track record, we provide comprehensive guidance to help you navigate the complex journey of international education.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Choose DartGlobe Consultation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <div className="overflow-hidden ">
                <img 
                  src="/about4.png" 
                  alt="DartGlobe Consultation" 
                  className="w-full h-[76vh] object-contain"
                />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                More Than Just Consultants - We Are Your Architects
              </h2>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6">
               DartGlobe stands out because we treat your career goals as our own.
                We skip the "one-size-fits-all" approach and provide a personalized roadmap
                 based on your unique academic background and budget. Our strong network of partner
                 institutions ensures your profile reaches the right decision-makers.
               </p>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Our support doesn't end with an admission letter. We offer complete lifecycle 
                support from editing your SOPs to guiding you through visa interviews and helping 
                you settle abroad. We are proud to be launchpad for your global education journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Benefits & Application Guide Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Image Section - 40% */}
            <div className="lg:w-2/5">
              <div className="sticky top-24">
                <div className="rounded-xl overflow-hidden ">
                  <img 
                    src="/Advantages.png" 
                    alt="Benefits & Application Process" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Content Section - 60% */}
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-left">
                Comprehensive Support for Your Journey
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Benefits Column */}
                <div>
                  <div className="mb-2 md:mb-8">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                      <span className="mr-3">✨</span>
                      Our Benefits
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Free Global processing",
                        "Expert Test Prep(IELTS/PTE)",
                        "Scholarship Sourcing",
                        "Education Loan Support",
                        "Application Fee Waivers",
                        "Mock Visa Interview",
                        "Post-Study Career Support",
                        "Dependent Visa Guidance",
                        "Student Housing Support",
                        "Part-Time Job Assistance"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-3 group-hover:bg-blue-500 transition-colors">
                            <svg className="w-3 h-3 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Application Guide Column */}
                <div>
                  <div className="md:mb-8">
                    <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                      <span className="mr-3">📋</span>
                      Application Guide
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Strategic Roadmap",
                        "Live Status Tracking",
                        "Academic Profile Audit",
                        "SOP Review & Editing",
                        "LOR Drafting Support",
                        "Global Resume Building",
                        "Document Verification",
                        "Finance Documentation",
                        "Compliant Visa Filing",
                        "Pre-Departure Briefing"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3 group-hover:bg-green-500 transition-colors">
                            <span className="text-xs font-bold text-green-600 group-hover:text-white">{index + 1}</span>
                          </div>
                          <span className="text-gray-700 group-hover:text-green-600 transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>

    {/* White Cards with Hover & Click Effects */}
<section className="md:py-16 bg-white">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-300 rounded-2xl p-3">
      {[
        {
          title: "Your All-in-One Partner",
          description: "We handle the stress so you don't have to. From university shortlisting to your first day on campus, we guide you through every single step.",
          icon: "🎯"
        },
        {
          title: "Meet Us Anywhere",
          description: "Hybrid counseling that fits your life. Visit our hubs in Hyderabad & Bangalore, or enjoy full-service expert counseling virtually from the comfort of your home.",
          icon: "🏢"
        },
        {
          title: "Stress-Free Visa Success",
          description: "Maximize your chances with zero panic. We use a data-driven approach for documentation and mock interviews to ensure your visa is approved seamlessly.",
          icon: "📈"
        },
        {
          title: "Always By Your Side",
          description: "Support that doesn't sleep. Whether you are online or on campus, our dedicated team is available 24/7 to answer your questions instantly.",
          icon: "🕒"
        }
      ].map((point, index) => {
        // Create a state for each card to track click on mobile
        const [isClicked, setIsClicked] = React.useState(false);
        
        return (
          <div 
            key={index} 
            className={`border-2 border-gray-100 rounded-2xl p-6 shadow-lg transition-all duration-300 transform
              hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-600
              ${isClicked ? 'bg-gradient-to-r from-blue-300 to-blue-600 shadow-2xl' : ''}
              md:group`}
            onClick={() => {
              // Toggle click state on mobile only
              if (window.innerWidth < 768) {
                setIsClicked(!isClicked);
              }
            }}
          >
            <div className="relative">
              <div className={` text-lg md:text-3xl text-center mb-3 transition-transform duration-300
                ${isClicked ? 'text-white scale-110' : 'group-hover:text-white group-hover:scale-110'}`}>
                {point.icon}
              </div>
              <h3 className={`text-xl md:text-2xl text-center font-bold mb-3 transition-colors duration-300
                ${isClicked ? 'text-white' : 'text-gray-800 group-hover:text-white'}`}>
                {point.title}
              </h3>
              <p className={`text-sm text-gray-600 text-center transition-colors duration-300
                ${isClicked ? 'text-white' : 'group-hover:text-white'}`}>
                {point.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* CTA Section */}
<section className="bg-white py-8 md:py-0">
  <div className="container mx-auto px-6">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl shadow-xl overflow-hidden min-h-[200px]">
        {/* Image Section - 30% */}
        <div className="lg:w-3/12 w-full">
          <div className="h-full">
            <img 
              src="/about-contact.png" 
              alt="Abroad Education Consultation" 
              className="w-full h-64 lg:h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content Section - 70% */}
        <div className="lg:w-9/12 w-full p-6 md:p-8 lg:p-12 flex flex-col justify-center min-h-[200px]">
          <h2 className="text-xs md:text-sm font-semibold text-gray-800 mb-2 md:mb-3 text-left">
            NOT SURE WHERE TO START?
          </h2>
          <h2 className="text-lg md:text-2xl font-bold text-blue-800 mb-2 md:mb-4 text-left">
            Want to know more about Abroad Education?
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
            Our expert consultants are here to guide you through every step of your international education journey.
          </p>
          <div className="mt-auto">
            <button onClick={()=>navigate("/contact")} className="border border-2 border-blue-600 hover:bg-blue-700 hover:text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-all duration-300 transform hover:-translate-y-1  transform active:bg-purple-800 active:text-white active:-translate-y-1 active:bg-scale-105 hover:scale-105 w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default AboutUsPage;