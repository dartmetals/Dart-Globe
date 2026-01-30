import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, HelpCircle, 
} from 'lucide-react';

const FAQPage: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState('usa');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Countries data - Added Ireland
  const countries = [
    { id: 'usa', name: 'United States', flag: '🇺🇸', color: 'from-blue-500 to-red-500' },
    { id: 'uk', name: 'United Kingdom', flag: '🇬🇧', color: 'from-blue-600 to-red-600' },
    { id: 'canada', name: 'Canada', flag: '🇨🇦', color: 'from-red-500 to-white' },
    { id: 'australia', name: 'Australia', flag: '🇦🇺', color: 'from-blue-700 to-red-700' },
    { id: 'germany', name: 'Germany', flag: '🇩🇪', color: 'from-black to-red-500 to-yellow-500' },
    { id: 'newzealand', name: 'New Zealand', flag: '🇳🇿', color: 'from-blue-800 to-red-800' },
    { id: 'ireland', name: 'Ireland', flag: '🇮🇪', color: 'from-green-500 to-white to-orange-500' },
    { id: 'europe', name: 'Other European', flag: '🇪🇺', color: 'from-blue-900 to-yellow-500' },
  ];

  // FAQ data for each country - Added Ireland
  const faqData: Record<string, Array<{id: string, question: string, answer: string}>> = {
    usa: [
      {
        id: 'usa-1',
        question: 'Why study in the US?',
        answer: 'The U.S. provides a diverse academic environment, extensive research opportunities, and exposure to a dynamic culture, fostering holistic development. This helps the students in advancing their level of education with world-class facilities and global networking opportunities.'
      },
      {
        id: 'usa-2',
        question: 'What qualifications do I need for U.S. universities?',
        answer: 'While each university has unique requirements, a strong academic background, standardized test scores (SAT, ACT, GRE, GMAT), impactful extracurricular activities, letters of recommendation, and a compelling statement of purpose are often valued. Minimum GPA requirements typically range from 3.0-3.5 on a 4.0 scale.'
      },
      {
        id: 'usa-3',
        question: 'Are there unique scholarships for Indians in the US?',
        answer: 'Absolutely. The Fulbright Scholarship, Hubert H. Humphrey Fellowship, Inlaks Scholarships, Tata Scholarships, and various university-specific scholarships cater to diverse fields and backgrounds. Many universities also offer merit-based and need-based financial aid specifically for international students.'
      },
      {
        id: 'usa-4',
        question: 'Share insights into the U.S. student visa process?',
        answer: 'The process involves obtaining Form I-20 from your university, paying the SEVIS fee, completing the DS-160 application, scheduling a visa interview at the U.S. embassy, attending the interview, and demonstrating financial stability. The F-1 visa allows you to stay for the duration of your program plus optional practical training (OPT).'
      },
      {
        id: 'usa-5',
        question: 'Tell me more about work opportunities for international students in the US?',
        answer: 'International students can engage in on-campus employment (up to 20 hours/week during term, full-time during breaks). After one year, they may qualify for Curricular Practical Training (CPT) and Optional Practical Training (OPT) for practical work experience. STEM graduates can extend OPT for an additional 24 months.'
      }
    ],
    uk: [
      {
        id: 'uk-1',
        question: 'Why choose the UK for higher education?',
        answer: 'The UK offers world-renowned universities with shorter degree durations (3 years for Bachelor\'s, 1 year for Master\'s), research-intensive programs, strong industry connections, and post-study work opportunities through the Graduate Route visa allowing 2-3 years of work after graduation.'
      },
      {
        id: 'uk-2',
        question: 'What are the English language requirements?',
        answer: 'Most UK universities require IELTS (typically 6.0-7.0), TOEFL, or PTE Academic scores. Some may accept alternative qualifications or offer pre-sessional English courses for those who need to improve their language skills before starting their main program.'
      },
      {
        id: 'uk-3',
        question: 'Are there scholarships available for international students?',
        answer: 'Yes, scholarships include Chevening Scholarships, Commonwealth Scholarships, GREAT Scholarships, university-specific scholarships, and various funding options from external organizations and government bodies.'
      }
    ],
    canada: [
      {
        id: 'ca-1',
        question: 'Why study in Canada?',
        answer: 'Canada offers high-quality education, affordable tuition fees, multicultural environment, post-graduation work permit (PGWP) allowing up to 3 years of work experience, and pathways to permanent residency through programs like Express Entry.'
      },
      {
        id: 'ca-2',
        question: 'What is the cost of studying in Canada?',
        answer: 'Tuition fees range from CAD 15,000-35,000 per year for undergraduate programs and CAD 10,000-30,000 for graduate programs. Living expenses are approximately CAD 10,000-15,000 per year depending on the city and lifestyle.'
      }
    ],
    australia: [
      {
        id: 'au-1',
        question: 'Why study in Australia?',
        answer: 'Australia offers world-class education, a welcoming multicultural society, post-study work opportunities, a high standard of living, and universities consistently ranked among the top 100 globally.'
      },
      {
        id: 'au-2',
        question: 'What is the Temporary Graduate visa (subclass 485)?',
        answer: 'The Temporary Graduate visa allows international students who have recently graduated from an Australian institution to live, study, and work in Australia temporarily. The duration varies from 18 months to 4 years depending on the qualification.'
      }
    ],
    germany: [
      {
        id: 'de-1',
        question: 'Is education free in Germany?',
        answer: 'Most public universities in Germany charge minimal administrative fees (€150-€350 per semester), but tuition is generally free for both domestic and international students at undergraduate and consecutive Master\'s levels at public institutions.'
      },
      {
        id: 'de-2',
        question: 'Do I need to know German to study in Germany?',
        answer: 'While many Master\'s programs are offered in English, basic German knowledge is beneficial for daily life. Some programs may require German proficiency (TestDaF or DSH) while others require only English proficiency (IELTS/TOEFL).'
      }
    ],
    newzealand: [
      {
        id: 'nz-1',
        question: 'Why choose New Zealand for education?',
        answer: 'New Zealand offers globally recognized qualifications, a safe and peaceful environment, post-study work rights, opportunities for permanent residency, and universities consistently ranked among the world\'s best.'
      },
      {
        id: 'nz-2',
        question: 'What are the work rights for students?',
        answer: 'International students can work up to 20 hours per week during semester and full-time during scheduled breaks. After graduation, they can apply for a post-study work visa for 1-3 years depending on their qualification level.'
      }
    ],
    ireland: [
      {
        id: 'ie-1',
        question: 'Why study in Ireland?',
        answer: 'Ireland is known for its high-quality education system, English-speaking environment, post-study work opportunities (2 years after graduation), and being home to many multinational tech companies like Google, Facebook, and Apple.'
      },
      {
        id: 'ie-2',
        question: 'What are the popular courses in Ireland?',
        answer: 'Popular courses include Computer Science, Data Analytics, Business, Engineering, Pharmaceuticals, and Hospitality Management. Ireland is particularly strong in technology and pharmaceutical sectors.'
      },
      {
        id: 'ie-3',
        question: 'What is the cost of living in Ireland?',
        answer: 'Living costs in Ireland range from €7,000 to €12,000 per year, with Dublin being more expensive. Tuition fees vary from €9,000 to €25,000 per year depending on the course and institution.'
      }
    ],
    europe: [
      {
        id: 'eu-1',
        question: 'Which European countries offer English-taught programs?',
        answer: 'Many European countries including Netherlands, Sweden, Denmark, Finland, Norway, France, Spain, Italy, and Switzerland offer a wide range of English-taught programs, particularly at Master\'s and PhD levels.'
      },
      {
        id: 'eu-2',
        question: 'What is the Bologna Process?',
        answer: 'The Bologna Process ensures comparability in the standards and quality of higher education qualifications across 48 European countries, making it easier for students to move between countries and have their qualifications recognized.'
      }
    ]
  };

  // Additional questions for each country
  const additionalQuestions = [
    {
      id: 'general-1',
      question: 'When should I start my application process?',
      answer: 'Start 12-18 months before your intended start date. This allows time for research, test preparation, document gathering, and meeting application deadlines which are typically 6-12 months before the program starts.'
    },
    {
      id: 'general-2',
      question: 'What documents are typically required?',
      answer: 'Common requirements include academic transcripts, standardized test scores, English proficiency test results, letters of recommendation, statement of purpose, resume/CV, passport copy, and financial documentation.'
    },
    {
      id: 'general-3',
      question: 'How do I choose the right university?',
      answer: 'Consider factors like program ranking, faculty expertise, research opportunities, location, cost, scholarship availability, alumni network, career services, and cultural fit. Our counselors can help you create a balanced list of reach, match, and safety schools.'
    }
  ];

  const toggleQuestion = (id: string) => {
    setExpandedQuestions(prev =>
      prev.includes(id)
        ? prev.filter(qId => qId !== id)
        : [...prev, id]
    );
  };

  const currentFAQs = [...(faqData[activeCountry] || []), ...additionalQuestions];
  const filteredFAQs = searchTerm
    ? currentFAQs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : currentFAQs;

  return (
    <div id='faq' className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24  bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-12">
              Frequently Asked Questions
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
              Got questions? Find answers here about studying abroad, application processes, 
              visa requirements, scholarships, and more.
            </p>
            
            {/* Search Bar */}
            {/* <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for questions..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Countries (30%) */}
          <div className="lg:w-3/12">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-300">
                Select Country
              </h2>
              <div className="space-y-1">
                {countries.map((country, index) => (
                  <React.Fragment key={country.id}>
                    <button
                      onClick={() => setActiveCountry(country.id)}
                      className={`w-full flex items-center p-4 transition-all duration-200 ${
                        activeCountry === country.id
                          ? `bg-gradient-to-r ${country.color} text-white`
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="text-2xl mr-4">{country.flag}</div>
                      <div className="text-left">
                        <div className="font-semibold">{country.name}</div>
                        {/* <div className="text-sm opacity-90 mt-1">
                          {faqData[country.id]?.length || 0} questions
                        </div> */}
                      </div>
                    </button>
                    {index < countries.length - 1 && (
                      <div className="border-t border-gray-300"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Questions (70%) */}
          <div className="lg:w-9/12">
            {/* Active Country Header */}
            <div className="mb-8 pb-6 border-b border-gray-300">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">
                  {countries.find(c => c.id === activeCountry)?.flag}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {countries.find(c => c.id === activeCountry)?.name}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Common questions about studying in {countries.find(c => c.id === activeCountry)?.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-1">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => {
                  const isExpanded = expandedQuestions.includes(faq.id);
                  return (
                    <React.Fragment key={faq.id}>
                      <div className="bg-white">
                        <button
                          onClick={() => toggleQuestion(faq.id)}
                          className="w-full text-left flex justify-between items-center p-6 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                              <HelpCircle className="h-5 w-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">{faq.question}</h3>
                              {/* <div className="flex items-center text-gray-500 text-sm">
                                <Globe className="h-3 w-3 mr-1" />
                                {countries.find(c => c.id === activeCountry)?.name}
                              </div> */}
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5 text-blue-600" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        </button>
                        
                        {isExpanded && (
                          <div className="px-6 pb-6 pt-2">
                            <div className="flex">
                              <div className="w-10 flex-shrink-0"></div>
                              <div className="flex-1">
                                <p className="text-gray-700">{faq.answer}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium">
                                    Study Abroad
                                  </span>
                                  <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium">
                                    {countries.find(c => c.id === activeCountry)?.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {index < filteredFAQs.length - 1 && (
                        <div className="border-t border-gray-300"></div>
                      )}
                    </React.Fragment>
                  );
                })
              ) : (
                <div className="text-center py-12 bg-white">
                  <div className="text-6xl mb-6">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No questions found</h3>
                  <p className="text-gray-600 mb-8">
                    Try searching with different keywords or browse questions by selecting a country.
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;