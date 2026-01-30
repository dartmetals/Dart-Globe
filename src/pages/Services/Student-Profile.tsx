import { 
  Search, FileText, Award, University, 
  Send, Globe, Plane, CheckCircle,
  Calendar, BookOpen, Phone,
  Target, Briefcase, Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ApplicationProcessPage: React.FC = () => {
    const navigate=useNavigate()
  // Process steps data
  const processSteps = [
    {
      id: 1,
      title: 'Initial Shortlisting',
      description: 'The journey begins with a thorough initial shortlisting process, where experienced counselors at Masters Visa Overseas Education Consultants help students identify programs and universities that align with their academic goals, career aspirations, and personal preferences.',
      icon: <Search className="h-8 w-8" />,
      features: [
        'One-on-one counseling sessions',
        'Academic profile assessment',
        'Career objective alignment',
        'Personal preference consideration'
      ]
    },
    {
      id: 2,
      title: 'Standardized Test Preparation',
      description: 'Masters Visa offers comprehensive test preparation assistance, including access to study materials, practice tests, and expert guidance to help students achieve competitive scores.',
      icon: <BookOpen className="h-8 w-8" />,
      features: [
        'GRE/GMAT/SAT/IELTS preparation',
        'Personalized study plans',
        'Practice test materials',
        'Expert test-taking strategies'
      ]
    },
    {
      id: 3,
      title: 'Documents Preparation',
      description: 'Provides invaluable support in preparing all necessary documents, including academic transcripts, letters of recommendation, statement of purpose, and a well-crafted resume.',
      icon: <FileText className="h-8 w-8" />,
      features: [
        'Academic transcript preparation',
        'LOR & SOP crafting',
        'Resume optimization',
        'Application package review'
      ]
    },
    {
      id: 4,
      title: 'Scholarship Assistance',
      description: 'Guides students in identifying and applying for relevant scholarships, grants, and financial assistance programs with insights into eligibility criteria and application strategies.',
      icon: <Award className="h-8 w-8" />,
      features: [
        'Scholarship identification',
        'Financial aid guidance',
        'Application strategy',
        'Eligibility assessment'
      ]
    },
    {
      id: 5,
      title: 'University Selection',
      description: 'Assists students in making informed decisions by providing detailed information about universities worldwide, considering factors such as faculty expertise, research opportunities, and campus culture.',
      icon: <University className="h-8 w-8" />,
      features: [
        'Global university database',
        'Program matching',
        'Campus culture assessment',
        'Location consideration'
      ]
    },
    {
      id: 6,
      title: 'Application Submission',
      description: 'Ensures every detail is meticulously attended to, from refining personal statements to optimizing resumes, and guides students through the online application submission process.',
      icon: <Send className="h-8 w-8" />,
      features: [
        'Application review',
        'Document optimization',
        'Deadline management',
        'Submission guidance'
      ]
    },
    {
      id: 7,
      title: 'Visa Assistance',
      description: 'Provides comprehensive visa assistance, guiding students through the application process, preparing necessary documentation, and offering insights into visa interviews.',
      icon: <Globe className="h-8 w-8" />,
      features: [
        'Visa application guidance',
        'Document preparation',
        'Interview preparation',
        'Immigration compliance'
      ]
    },
    {
      id: 8,
      title: 'Post-Admission Support',
      description: 'Continues to support students with post-admission services, including pre-departure orientation, accommodation assistance, and guidance on adapting to a new academic and cultural environment.',
      icon: <Plane className="h-8 w-8" />,
      features: [
        'Pre-departure orientation',
        'Accommodation assistance',
        'Cultural adaptation guidance',
        'Ongoing support'
      ]
    }
  ];

  // Services offered
  const services = [
    {
      title: 'Student Profile Analysis',
      description: 'Comprehensive assessment of academic background, test scores, extracurricular activities, and career objectives to create a personalized roadmap.',
      icon: <Target className="h-10 w-10" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Career Counseling',
      description: 'Expert guidance on career paths, industry trends, and skill development to align educational choices with long-term professional goals.',
      icon: <Briefcase className="h-10 w-10" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Admission Strategy',
      description: 'Strategic planning for university applications, including timeline management, school selection, and application optimization.',
      icon: <Calendar className="h-10 w-10" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Visa Success Assurance',
      description: 'End-to-end visa application support with high success rates, including documentation, interview preparation, and compliance.',
      icon: <Shield className="h-10 w-10" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Rahul Sharma',
      program: 'MS in Computer Science, USA',
      quote: 'Masters Visa transformed my application journey. Their personalized guidance helped me secure admission to my dream university with a scholarship.',
      avatar: 'RS'
    },
    {
      name: 'Priya Patel',
      program: 'MBA, Canada',
      quote: 'The document preparation and visa assistance were exceptional. They handled every detail professionally, making the complex process stress-free.',
      avatar: 'PP'
    },
    {
      name: 'Arjun Mehta',
      program: 'PhD in Engineering, UK',
      quote: 'Their scholarship assistance helped me secure full funding. The counselors went above and beyond to ensure my success.',
      avatar: 'AM'
    }
  ];

  return (
    <div id='/services/student-profile' className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-8xl">🎓</div>
          <div className="absolute bottom-20 right-10 text-8xl">🌍</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Application Process with DartGlobe
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
              Embarking on a journey towards higher education abroad is an exciting yet complex process. 
              With DartGlobe Overseas Education Consultants, streamline your efforts and enhance your chances 
              of securing admission to your dream universities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={()=>navigate("/contact")} className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center">
                <Phone className="mr-3 h-5 w-5" />
                Get Free Counseling
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From profile analysis to post-admission support, we provide end-to-end guidance for your 
              international education journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-2xl transition-all">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Student Profile Analysis - Detailed Section */}
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/3">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Student Profile Analysis
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Our expert counselors conduct a comprehensive assessment of your academic background, 
                  standardized test scores, extracurricular achievements, and career objectives. Through 
                  detailed one-on-one sessions, we analyze every aspect of your profile to identify strengths 
                  and areas for improvement.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Academic Transcript Evaluation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Test Score Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Extracurricular Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Career Goal Alignment</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all">
                  Get Your Profile Analyzed
                </button>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                  <div className="text-6xl text-center mb-6">📊</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Analysis Includes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">1</span>
                      </div>
                      <span>Academic Performance Review</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">2</span>
                      </div>
                      <span>Test Score Benchmarking</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">3</span>
                      </div>
                      <span>Skill Gap Analysis</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">4</span>
                      </div>
                      <span>Personalized Roadmap</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Steps */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our 8-Step Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigating through the myriad of tasks involved in the application process can be overwhelming, 
              but with our systematic approach, we make it seamless and successful.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={step.id} className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center gap-12`}>
                <div className="lg:w-1/3">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto lg:mx-0">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.id}
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 mb-8 text-lg">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Success Stories
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Hear from students who transformed their dreams into reality with Masters Visa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{testimonial.name}</h4>
                    <p className="text-blue-200">{testimonial.program}</p>
                  </div>
                </div>
                <p className="text-gray-200 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-center text-white">
            <h2 className="text-xl md:text-4xl font-bold mb-6">
              Join Us Now!
            </h2>
            <p className="text-sm md:text-xl mb-4 max-w-2xl mx-auto">
              Join us at Masters Visa Overseas Education Consultancy for unparalleled guidance in the 
              application process for studying abroad. Our expert team offers comprehensive support for 
              all countries, ensuring a seamless journey toward your educational aspirations.
            </p>
            <p className="text-sm md:text-lg mb-12 max-w-3xl mx-auto opacity-90">
              From meticulous application preparation to navigating the intricacies of the visa process, 
              we provide personalized assistance tailored to your unique needs. Your educational journey 
              begins with us – where expertise meets aspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={()=>navigate("/contact")} className="bg-white text-blue-900 px-12 py-5 rounded-xl font-bold text-sm md:text-xl hover:shadow-2xl transition-all flex items-center justify-center">
                <Phone className="mr-3 h-6 w-6" />
                Get Free Assistance
              </button>
              
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ApplicationProcessPage;