import React, { useState } from "react";
import { ChevronDown, ChevronUp, Mail, Phone } from "lucide-react";

const FAQSection: React.FC = () => {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({
    "doc-1": true,
    "doc-2": false,
    "adm-1": false,
    "adm-2": false,
    "adm-3": false,
    "fin-1": false,
    "fin-2": false,
  });

  const faqData = [
    {
      id: "documents",
      title: "Documents & Requirements",
      questions: [
        {
          id: "doc-1",
          question: "What documents do I need for studying abroad?",
          answer: "Typically, you'll need: academic transcripts, passport, standardized test scores (IELTS/TOEFL/GRE/GMAT), letters of recommendation, statement of purpose, resume/CV, proof of funds, and passport-sized photographs. Specific requirements vary by country and university."
        },
        {
          id: "doc-2",
          question: "How long does it take to get a student visa?",
          answer: "Processing times vary by country: USA (3-8 weeks), UK (3-6 weeks), Canada (4-12 weeks), Australia (4-8 weeks), Germany (4-10 weeks). We recommend applying at least 3 months before your course start date."
        }
      ]
    },
    {
      id: "admission",
      title: "Admission Process",
      questions: [
        {
          id: "adm-1",
          question: "When should I start my application process?",
          answer: "Start 12-18 months before your intended intake. This gives you enough time for test preparation, university research, document collection, and application submission before deadlines."
        },
        {
          id: "adm-2",
          question: "What are the intakes available?",
          answer: "Main intakes: Fall (August-September), Spring (January-February). Some universities also offer Summer (May-June) intake. Deadlines are usually 6-8 months before the intake begins."
        },
        {
          id: "adm-3",
          question: "How do I choose the right university?",
          answer: "Consider factors like: course curriculum, university ranking, location, tuition fees, scholarship opportunities, post-study work options, and alumni network. Our counselors provide personalized university shortlisting based on your profile."
        }
      ]
    },
    {
      id: "finance",
      title: "Finances & Scholarships",
      questions: [
        {
          id: "fin-1",
          question: "How much does it cost to study abroad?",
          answer: "Annual costs vary: USA ($20,000-$50,000), UK (£15,000-£35,000), Canada (CAD$15,000-CAD$35,000), Australia (AUD$20,000-AUD$45,000), Germany (€0-€20,000). This includes tuition + living expenses."
        },
        {
          id: "fin-2",
          question: "What scholarships are available for international students?",
          answer: "Merit-based scholarships, need-based grants, country-specific scholarships (like DAAD for Germany, Commonwealth for UK), university-specific awards, and external funding. We help identify and apply for suitable scholarships."
        }
      ]
    }
  ];

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <section className="w-full py-16 ">
      {/* Hero Section - UNCHANGED */}
      <div className="max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title & Description */}
          <div>
            <div className="inline-flex items-center mb-2 ">
              <div className="w-12 h-1 bg-orange-200"></div>
              <span className="mx-4 text-orange-600 font-semibold">GET ANSWERS</span>
              <div className="w-12 h-1 bg-orange-200"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Frequently Asked
              <span className="text-orange-600 block">Questions</span>
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Find answers to common questions about studying abroad. 
              From admission processes to visa requirements, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-orange-50 rounded-lg px-4 py-3">
                <Phone className="h-5 w-5 text-orange-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Call Us</p>
                  <p className="font-semibold text-gray-900">+91 91333 29955</p>
                </div>
              </div>
              <div className="flex items-center bg-orange-50 rounded-lg px-4 py-3">
                <Mail className="h-5 w-5 text-orange-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Email Us</p>
                  <p className="font-semibold text-gray-900">info@dartglobe.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
<div className="relative">
  <div className="relative overflow-hidden ">

    {/* IMAGE FROM PUBLIC FOLDER */}
    <img
      src="/faq-hero.png"          // <-- replace with your actual image file
      alt="About section visual"
      className="w-full h-72 object-contain"
    />
  </div>
</div>
        </div>
      </div>

      {/* Wave shape ABOVE the FAQ content - Using orange color for visibility */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 overflow-hidden -translate-y-1">
          <svg 
            className="w-full h-16 text-white" 
            viewBox="0 0 900 200" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      {/* FAQ Content - WITH MULTIPLE BORDER RADIUS CONTAINERS */}
      <div className="bg-gray-100 pt-16 pb-12">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          {/* 80% width container */}
          <div className="w-full px-4 space-y-0">
            
            {/* FIRST FAQ SECTION - Documents & Requirements */}
            <div className="bg-gray-100 overflow-hidden mb-0">
              {/* Main container with 2 columns */}
              <div className="flex flex-col lg:flex-row">
                
                {/* LEFT COLUMN - 30% width */}
                <div className="lg:w-3/12">
                  <div className="p-4 h-full flex flex-col">
                    {/* Left side title - Documents */}
                    <div className="flex flex-col space-y-0">
                      <div className="flex items-start flex-grow">
                        <div className="bg-gray-100 p-5 transition-colors duration-200 w-full h-full flex flex-col border-2 border-transparent ">
                          <h3 className="text-lg font-bold text-gray-900">
                            {faqData[0].title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN - 70% width */}
                <div className="lg:w-9/12 border-l border-gray-100">
                  {/* Main container for right side */}
                  <div className="p-4">
                    {/* Questions for Documents category */}
                    <div className="flex flex-col space-y-0">
                      {faqData[0].questions.map((item) => (
                        <React.Fragment key={item.id}>
                          {/* Question container with borders */}
                          <div 
                            className="border-2 border-transparent hover:border-gray-100 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                          >
                            <button
                              className="w-full text-left p-5 flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={() => toggleQuestion(item.id)}
                            >
                              <h4 className="font-semibold text-gray-900 pr-4 text-base">
                                {item.question}
                              </h4>
                              {openQuestions[item.id] ? (
                                <ChevronUp className="h-5 w-5 text-orange-600 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                              )}
                            </button>
                            
                            {openQuestions[item.id] && (
                              <div className="px-5 pb-5 animate-fadeIn border-t border-gray-100 pt-4">
                                <p className="text-gray-600 leading-relaxed text-sm">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                          
                          {/* Horizontal line after EVERY question (including last one) */}
                          <div className="h-px bg-gray-200 mt-0 mb-0.5"></div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECOND FAQ SECTION - Admission Process */}
            <div className="bg-gray-100 overflow-hidden -mt-4 mb-0">
              {/* Main container with 2 columns */}
              <div className="flex flex-col lg:flex-row">
                
                {/* LEFT COLUMN - 30% width */}
                <div className="lg:w-3/12">
                  <div className="p-4 h-full flex flex-col">
                    {/* Left side title - Admission */}
                    <div className="flex flex-col space-y-0">
                      <div className="flex items-start flex-grow">
                        <div className="bg-gray-100 rounded-lg p-5 transition-colors duration-200 w-full h-full flex flex-col border-2 border-transparent ">
                          <h3 className="text-lg font-bold text-gray-900">
                            {faqData[1].title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN - 70% width */}
                <div className="lg:w-9/12 border-l border-gray-100">
                  {/* Main container for right side */}
                  <div className="p-4">
                    {/* Questions for Admission category */}
                    <div className="flex flex-col space-y-0">
                      {faqData[1].questions.map((item) => (
                        <React.Fragment key={item.id}>
                          {/* Question container with borders */}
                          <div 
                            className="border-2 border-transparent hover:border-gray-100 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                          >
                            <button
                              className="w-full text-left p-5 flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={() => toggleQuestion(item.id)}
                            >
                              <h4 className="font-semibold text-gray-900 pr-4 text-base">
                                {item.question}
                              </h4>
                              {openQuestions[item.id] ? (
                                <ChevronUp className="h-5 w-5 text-orange-600 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                              )}
                            </button>
                            
                            {openQuestions[item.id] && (
                              <div className="px-5 pb-5 animate-fadeIn border-t border-gray-100 pt-4">
                                <p className="text-gray-600 leading-relaxed text-sm">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                          
                          {/* Horizontal line after EVERY question (including last one) */}
                          <div className="h-px bg-gray-200 mt-0 mb-0.5"></div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* THIRD FAQ SECTION - Finances & Scholarships */}
            <div className="bg-gray-100 overflow-hidden -mt-4">
              {/* Main container with 2 columns */}
              <div className="flex flex-col lg:flex-row">
                
                {/* LEFT COLUMN - 30% width */}
                <div className="lg:w-3/12">
                  <div className="p-4 h-full flex flex-col">
                    {/* Left side title - Finance */}
                    <div className="flex flex-col space-y-0">
                      <div className="flex items-start flex-grow">
                        <div className="bg-gray-100 rounded-lg p-5 transition-colors duration-200 w-full h-full flex flex-col border-2 border-transparent ">
                          <h3 className="text-lg font-bold text-gray-900">
                            {faqData[2].title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN - 70% width */}
                <div className="lg:w-9/12 border-l border-gray-50">
                  {/* Main container for right side */}
                  <div className="p-4">
                    {/* Questions for Finance category */}
                    <div className="flex flex-col space-y-0">
                      {faqData[2].questions.map((item) => (
                        <React.Fragment key={item.id}>
                          {/* Question container with borders */}
                          <div 
                            className="border-2 border-transparent hover:border-gray-100 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                          >
                            <button
                              className="w-full text-left p-5 flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={() => toggleQuestion(item.id)}
                            >
                              <h4 className="font-semibold text-gray-900 pr-4 text-base">
                                {item.question}
                              </h4>
                              {openQuestions[item.id] ? (
                                <ChevronUp className="h-5 w-5 text-orange-600 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                              )}
                            </button>
                            
                            {openQuestions[item.id] && (
                              <div className="px-5 pb-5 animate-fadeIn border-t border-gray-100 pt-4">
                                <p className="text-gray-600 leading-relaxed text-sm">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                          
                          {/* Horizontal line after EVERY question (including last one) */}
                          <div className="h-px bg-gray-300 mt-0 mb-0.5"></div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Add custom animation
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
  }
`;

// Add styles to document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default FAQSection;