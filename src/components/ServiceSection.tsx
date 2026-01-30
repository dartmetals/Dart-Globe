import React, { useState, useEffect } from "react";
import { 
  Users, Award, BookOpen, Briefcase, Home, DollarSign, 
  GraduationCap, Globe, Target, HeartHandshake, ClipboardList,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate=useNavigate()

  // Check if mobile on mount and resize - Only true for small mobile screens
  useEffect(() => {
    const checkMobile = () => {
      // Only hide description on small mobile screens (phones)
      // Tablets (640px and above) will show description
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Stats highlighting free services (8 stats only + PNG image icons)
  // const stats = [
  //   {
  //     icon: "/services-icon.png",
  //     count: "12+",
  //     title: "Services Support",
  //     description: "Core assistance for every student"
  //   },
  //   {
  //     icon: "/application-icon.png",
  //     count: "25,000+",
  //     title: "Applications Processed",
  //     description: "Successfully submitted student applications globally."
  //   },
  //   {
  //     icon: "/visa-interview-icon.png",
  //     count: "100%",
  //     title: "Visa Interview Success ",
  //     description: "Expert coaching to help students clear visa interviews confidently."
  //   },
  //   {
  //     icon: "/admission-icon.png",
  //     count: "100%",
  //     title: "Admission & Visa Success",
  //     description: "High success rate with expert guidance"
  //   },
  //   {
  //     icon: "/loan-support-icon.png",
  //     count: "100%",
  //     title: "Loan Approvals Support",
  //     description: "Through partnered banks & NBFCs"
  //   },
  //   {
  //     icon: "/exam-icon.png",
  //     count: "10,000+",
  //     title: "IELTS Training + Applications",
  //     description: "Test prep & university submissions"
  //   },
  //   {
  //     icon: "/accomodation-icon.png",
  //     count: "3000+",
  //     title: "Accommodation Support",
  //     description: "Hostels, PGs & apartments"
  //   },
  //   {
  //     icon: "/scholarship-icon.png",
  //     count: "5000+",
  //     title: "Scholarships Guided",
  //     description: "University & government grants"
  //   }
  // ];

  const services = [
    {
      id: "profile-analysis",
      image: "/student-profile.png",
      title: "Comprehensive Student Profile Analysis",
      description: "Quick review of academics and goals to create your study plan.",
      icon: <Target className="h-8 w-8 text-blue-500" />,
      imagePosition: "object-center",
      popupContent: {
        title: "Comprehensive Student Profile Analysis",
        description: "Our expert counselors conduct a thorough evaluation of your academic background, test scores, work experience, and career aspirations. We analyze your strengths and areas for improvement to create a personalized roadmap for your study abroad journey. This includes identifying suitable universities, programs, and countries that align with your profile and goals.",
        image: "/student-profile.png",
      }
    },
    {
      id: "career-guidance",
      image: "/career-img2.png",
      title: "Professional Study & Career Guidance",
      description: "Guidance to choose the right program and long-term career path.",
      icon: <Target className="h-8 w-8 text-teal-500" />,
      imagePosition: "object-top",
      popupContent: {
        title: "Professional Study & Career Guidance",
        description: "Our career experts help you align your educational choices with long-term career goals. We provide insights into global job markets, industry trends, and future career prospects across different countries. Our guidance ensures you select programs that not only match your interests but also offer excellent employment opportunities and career growth potential after graduation.",
        image: "/career-img2.png",
      }
    },
    {
      id: "expert-counselling",
      image: "/counselling-img.png",
      title: "One-on-One Expert Counselling",
      description: "Personal sessions to guide your entire study abroad process.",
      icon: <HeartHandshake className="h-8 w-8 text-rose-500" />,
      imagePosition: "object-top",
      popupContent: {
        title: "One-on-One Expert Counselling",
        description: "Get personalized guidance from experienced counselors who provide dedicated attention throughout your study abroad journey. Our experts help you navigate every step - from selecting universities and programs to application strategies and visa preparation. We offer ongoing support, answer all your queries, and ensure you make informed decisions at every stage of your international education journey.",
        image: "/counselling-img.png",
      }
    },
    {
      id: "ielts-preparation",
      image: "/exam-img-3.png",
      title: "IELTS/TOEFL/PTE Preparation",
      description: "Focused training with mock tests and materials for exam success.",
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      imagePosition: "object-top",
      popupContent: {
        title: "IELTS/TOEFL/PTE Preparation",
        description: "We provide comprehensive test preparation programs for English proficiency exams like IELTS, TOEFL, and PTE. Our training includes personalized study plans, mock tests, practice materials, and expert feedback to help you achieve your target scores. We focus on improving all four language skills - reading, writing, listening, and speaking - with strategies to maximize your performance in the actual exams.",
        image: "/exam-img-3.png",
      }
    },
    {
      id: "university-application",
      image: "/university1.png",
      title: "University Application Support",
      description: "Support for SOP, LOR, documents, and complete applications.",
      icon: <ClipboardList className="h-8 w-8 text-pink-500" />,
      imagePosition: "object-top",
      popupContent: {
        title: "University Application Support",
        description: "Our team provides end-to-end support for university applications including document preparation, Statement of Purpose (SOP) writing, Letter of Recommendation (LOR) guidance, and application form completion. We ensure all your applications are submitted correctly and on time, with attention to detail that maximizes your chances of acceptance at your preferred universities.",
        image: "/university1.png",
      }
    },
    {
      id: "scholarship-assistance",
      image: "/scholar-img1.png",
      title: "Scholarship & Financial Aid Assistance",
      description: "Help in identifying scholarships and preparing strong applications.",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      imagePosition: "object-top",
      popupContent: {
        title: "Scholarship & Financial Aid Assistance",
        description: "We help you identify suitable scholarships, grants, and financial aid opportunities based on your profile and chosen programs. Our experts assist in preparing compelling scholarship applications, highlighting your achievements and potential. We guide you through the entire process - from research to application submission - to increase your chances of securing financial support for your studies abroad.",
        image: "/scholar-img1.png",
      }
    },
    {
      id: "loan-processing",
      image: "/loan-img1.png",
      title: "Education Loan Processing Support",
      description: "End-to-end support for bank loans and financial approval steps.",
      icon: <DollarSign className="h-8 w-8 text-emerald-500" />,
      imagePosition: "object-right-top",
      popupContent: {
        title: "Education Loan Processing Support",
        description: "We provide complete assistance in securing education loans through our network of partnered banks and financial institutions. Our services include loan eligibility assessment, documentation support, application processing, and follow-up with banks. We help you understand loan terms, interest rates, and repayment options to make informed financial decisions for your international education.",
        image: "/loan-img1.png",
      }
    },
    {
      id: "visa-interviews",
      image: "/mock-img2.png",
      title: "Mock Visa Interviews Support",
      description: "Practice interviews with tips to confidently clear visa rounds.",
      icon: <Users className="h-10 w-10 text-purple-500" />,
      imagePosition: "object-top",
      popupContent: {
        title: "Mock Visa Interviews Support",
        description: "Prepare for your visa interviews with realistic mock sessions conducted by experienced counselors. We simulate actual interview scenarios, provide feedback on your responses, and offer tips to improve your confidence and communication. Our guidance covers common visa interview questions, document presentation, and strategies to address potential concerns raised by visa officers.",
        image: "/mock-img2.png",
      }
    },
    {
      id: "pre-departure",
      image: "/onboarding-img1.png",
      title: "Pre-Departure & Onboarding Support",
      description: "Help with flights, arrival guidance, and complete travel support.",
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      imagePosition: "object-top",
      popupContent: {
        title: "Pre-Departure & Onboarding Support",
        description: "We ensure a smooth transition to your study destination with comprehensive pre-departure guidance. Our services include flight booking assistance, airport pickup arrangements, accommodation coordination, and orientation about your new city and campus. We provide essential information about local customs, banking, SIM cards, and other practical aspects to help you settle in comfortably.",
        image: "/onboarding-img1.png",
      }
    },
    {
      id: "accommodation",
      image: "/accomodation1.png",
      title: "Student Accommodation Assistance",
      description: "Guidance to find safe and affordable stays near your campus.",
      icon: <Home className="h-8 w-8 text-orange-500" />,
      imagePosition: "object-top",
      popupContent: {
        title: "Student Accommodation Assistance",
        description: "We help you find safe, comfortable, and affordable accommodation options near your university campus. Our services include searching for suitable hostels, apartments, or homestays, understanding rental agreements, and connecting with reliable accommodation providers. We consider factors like budget, location, safety, and amenities to ensure you have a comfortable living arrangement during your studies.",
        image: "/accomodation1.png",
      }
    },
    {
      id: "part-time-jobs",
      image: "/parttime-img.png",
      title: "Abroad Part-Time Job Support",
      description: "Help with resumes, job search, and interview preparation abroad.",
      icon: <Briefcase className="h-8 w-8 text-indigo-500" />,
      imagePosition: "object-top",
      popupContent: {
        title: "Abroad Part-Time Job Support",
        description: "We assist international students in finding suitable part-time job opportunities while studying abroad. Our support includes resume/CV preparation according to local standards, job search strategies, interview preparation, and understanding work regulations for international students. We help you balance work and studies while gaining valuable work experience in your host country.",
        image: "/parttime-img.png",
      }
    },
    {
      id: "internship-placement",
      image: "/internship-img1.png",
      title: "Post-Masters Internship Placement",
      description: "Connections and guidance to secure internships after graduation.",
      icon: <GraduationCap className="h-8 w-8 text-red-500" />,
      imagePosition: "object-top",
      popupContent: {
        title: "Post-Masters Internship Placement",
        description: "We provide guidance and connections to help you secure valuable internships after completing your master's degree. Our services include identifying suitable internship opportunities, preparing application materials, interview coaching, and networking with potential employers. We help you gain practical work experience that enhances your resume and increases your employability in the global job market.",
        image: "/internship-img1.png",
      }
    }
  ];

  // Close modal function
  const closeModal = () => {
    setSelectedService(null);
  };

  // Handle escape key press
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    if (selectedService) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [selectedService]);

  // Find the selected service data
  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <>
      <section id="services" className="w-full bg-gradient-to-b from-gray-50 to-white">
        {/* Rest of the Services Section */}
        <div className="w-full py-6">
          {/* Section Header */}
          <div className="w-[90%] mx-auto text-left md:text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Guidance. Zero Cost.
            </h2>
            <p className="w-full mx-auto -ml-0  text-lg text-gray-600">
              From your first application to your first day on campus - our expert support is 100% free.
            </p>
          </div>

          {/* Services Grid - Using 80% width with 10% margin on both sides */}
          <div className="w-[90%] md:w-[80%] mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-700 md:border-[#FF0000] hover:border-[#FF0000] hover:border-purple-800 md:hover:border-[#FF0000] active:border-purple-800 active:scale-105 group transform hover:scale-105 h-full flex flex-col"
                >
                  {/* Row 1: Image - Fixed height */}
                  <div className="w-full h-24 sm:h-36 md:h-36 relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${service.imagePosition || 'object-center'}`}
                    />
                  </div>

                  {/* Content Container - Flex column with space between */}
                  <div className="flex flex-col flex-grow p-2">
                    {/* Row 2: Title - Aligned to top, consistent height */}
                    <div className="mb-2 md:min-h-[42px] flex items-start">
                      <h3 className="md:text-base text-sm font-bold text-gray-900 leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Row 3: Description - Hide only on small mobile screens (phones) */}
                    {!isMobile && (
                      <div className="mb-2 flex-grow">
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    )}

                    {/* Row 4: Button - Aligned to bottom */}
                    <div className="mt-auto">
                      <button 
                        onClick={() => service.id && setSelectedService(service.id)}
                        className="w-full text-lg py-0.5 sm:py-2 md:py-3  border border-2 border-purple-700 md:border-[#FF0000] bg-white text-black  font-semibold rounded-3xl md:group-hover:bg-[#FF0000] md:group-hover:bg-[#FF0000] group-hover:bg-purple-800 active:bg-purple-800 active:text-white active:bg-scale-105 active:-translate-y-1 hover:-translate-y-1  group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {selectedService && selectedServiceData?.popupContent && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl animate-slideUp">
            {/* Modal Container */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              
              {/* Header with Close Button */}
              <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 pr-4">
                  {selectedServiceData.popupContent.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X size={20} className="sm:w-6 sm:h-6 text-gray-600" />
                </button>
              </div>

              {/* Content - Image on left, text on right with aligned tops */}
              <div className="p-3 sm:p-4 md:p-6">
                <div className="flex flex-col lg:flex-row items-start gap-3 sm:gap-4 md:gap-6">
                  {/* Left Content - Image */}
                  <div className="lg:w-1/2 w-full">
                    <div className="overflow-hidden h-full rounded-lg md:rounded-xl">
                      <img
                        src={selectedServiceData.popupContent.image || selectedServiceData.image}
                        alt={selectedServiceData.popupContent.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Right Content - Text */}
                  <div className="lg:w-1/2 w-full">
                    <div className="mb-3 sm:mb-4">
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
                        {selectedServiceData.popupContent.description}
                      </p>
                    </div>

                    {/* Call to Action Button */}
                    <div className="mt-3 sm:mt-4">
                      <button onClick={()=>navigate("/contact")} className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-2 border-purple-700 md:border-[#FF0000] text-black font-semibold rounded-3xl hover:bg-purple-800 md:hover:bg-[#FF0000] hover:text-white active:bg-purple-800 active:text-white active:-translate-y-1 active:bg-scale-105 transition-all duration-300 transform hover:-translate-y-1  text-sm sm:text-base">
                        Book Free Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Backdrop Click to Close */}
            <div 
              className="fixed inset-0 -z-10 sm:hidden"
              onClick={closeModal}
            />
          </div>
        </div>
      )}

      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }
        
        /* Hide scrollbar for modal content */
        .overflow-y-auto {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default ServicesSection;