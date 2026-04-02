import React, { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, Loader2, CheckCircle, Sparkles } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type QueryType = 'document' | 'visa' | 'accommodation' | 'loan' | 'other';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  queryType: QueryType;
  message: string;
  agreeTerms: boolean;
}

interface ContactFormProps {
  isModal?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isModal = false }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    queryType: 'document',
    message: '',
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      phone: value,
    }));
  };

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxKvgNEJ4idu4E0Ki48hVHlfZfPS1GLfrr8Z743j9P3NfVqpifCiQsOj9YFiSlGxMNf/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: `+${formData.phone}`,
      email: formData.email,
      queryType: formData.queryType,
      message: formData.message
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      setSubmitStatus("success");
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        queryType: 'document',
        message: '',
        agreeTerms: false,
      });

    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      queryType: 'document',
      message: '',
      agreeTerms: false,
    });
    setSubmitStatus('idle');
  };

  const queryTypes: { value: QueryType; label: string }[] = [
    { value: 'document', label: 'University Admissions' },
    { value: 'visa', label: 'Visa Assistance' },
    { value: 'other', label: 'Other Queries' },
  ];

  const offices = [
    {
      name: 'United Kingdom Office',
      flag: '🌍',
      address: '297, Suite 2, High Street North, London, E12 6SL',
      phone: '+44 7385 649648',
    },
    {
      name: 'Hyderabad Office',
      flag: '🇮🇳',
      address: '#918, 8th Floor, Vasavi MPM Grand, Beside Ameerpet Metro, Pillar 1062 & 1063, Ameerpet, Hyderabad - 500073',
      phone: '+91 91333 29955',
    },
    {
      name: 'Bangalore Office',
      flag: '🇮🇳',
      address: 'No. 90/3, 2nd Floor, Outer Ring Road, Opp. Innovative Multiplex, Marathahalli, Bangalore - 560037',
      phone: '+91 97395 52345',
    },
    {
      name: 'Vijayawada Office',
      flag: '🇮🇳',
      address: '2B, 59A-3-3, Guru Nanak Colony Road, Teacher\'s Colony, Auto Nagar, Vijayawada - 520007, Andhra Pradesh',
      phone: '+91 91333 29955',
    },
  ];

  return (
    <div 
      id='/contact' 
      className={`
        bg-gradient-to-br from-indigo-50 via-white to-purple-50 
        ${isModal ? 'py-4 px-4 sm:px-6 lg:px-8' : 'py-30 px-4 sm:px-6 lg:px-8'}
      `}
    >
      <div className={isModal ? '' : 'max-w-7xl mx-auto'}>
        <div className={`
          ${isModal ? 'lg:grid lg:grid-cols-10 lg:gap-6 lg:items-start' : 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'}
        `}>
          {/* Left Side - Hero Section */}
          <div className={`
            space-y-6
            ${isModal ? 'lg:col-span-4' : ''}
            ${isModal ? 'mb-8 lg:mb-0' : ''}
          `}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-purple-700 md:text-red-600" />
              <span className="text-sm font-semibold text-purple-700 md:text-[#FF0000]">Contact Us Today</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Let's Start
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-600 md:bg-gradient-to-r from-red-600 to-red-600">
                A Conversation
              </span>
            </h1>
            
            <p className="text-sm text-gray-600">
              Have questions or need assistance? We're here to help! Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Email Response</p>
                  <p className="text-sm text-gray-500">info@dartglobe.com</p>
                  <p className="text-xs text-gray-400">Typically within 2-4 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Phone Support</p>
                  <p className="text-sm text-gray-500">Mon-Sun, 09:00 AM - 06:00 PM IST</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-pink-100 p-3 rounded-xl">
                  <MessageSquare className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Quick Response</p>
                  <p className="text-sm text-gray-500">We prioritize every inquiry</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={`
            relative
            ${isModal ? 'lg:col-span-6' : ''}
          `}>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl blur-xl opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tr from-pink-200 to-rose-200 rounded-3xl blur-xl opacity-50"></div>
            
            {/* Form Container */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Send us a Message
                </h2>
                <p className="text-gray-500">
                  Fill out the form below and we'll get back to you
                </p>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl animate-fadeIn">
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-800">Message Sent Successfully!</h3>
                      <p className="text-emerald-600 text-sm">Thank you for contacting us. We'll respond within 24 hours.</p>
                    </div>
                  </div>
                  <button
                    onClick={resetForm}
                    className="mt-3 px-4 py-1.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-gradient-to-r from-rose-50 to-red-50 border border-rose-100 rounded-2xl animate-fadeIn">
                  <div className="flex items-center space-x-3">
                    <div className="bg-rose-100 p-2 rounded-full">
                      <svg className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-rose-800">Submission Failed</h3>
                      <p className="text-rose-600 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First Name & Last Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                      First Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting || submitStatus === 'success'}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 bg-white/50 backdrop-blur-sm disabled:bg-gray-100 disabled:cursor-not-allowed placeholder:text-sm"
                        placeholder="Enter your First Name"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                      Last Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting || submitStatus === 'success'}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 bg-white/50 backdrop-blur-sm disabled:bg-gray-100 disabled:cursor-not-allowed placeholder:text-sm"
                        placeholder="Enter your Last Name"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <style>{`
                      .react-tel-input .form-control {
                        position: relative;
                        padding-left: 60px !important;
                      }
                      
                      .react-tel-input .form-control::before {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50px;
                        transform: translateY(-50%);
                        height: 24px;
                        width: 1px;
                        background-color: #d1d5db;
                        z-index: 1;
                        pointer-events: none;
                      }
                      
                      .react-tel-input .flag-dropdown {
                        border-right: 1px solid #d1d5db;
                        background: white;
                      }
                      
                      .react-tel-input .selected-flag {
                        width: auto !important;
                        padding-right: 8px;
                      }
                      
                      .react-tel-input .country-list {
                        z-index: 9999;
                      }
                    `}</style>
                    <PhoneInput
                      country={'in'}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: false,
                        disabled: isSubmitting || submitStatus === 'success'
                      }}
                      inputStyle={{
                        width: '100%',
                        height: '48px',
                        paddingLeft: '60px',
                        borderRadius: '0.75rem',
                        border: '1px solid #d1d5db',
                        fontSize: '0.875rem',
                        transition: 'all 0.2s',
                        backgroundColor: isSubmitting || submitStatus === 'success' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.5)',
                        backdropFilter: 'blur(8px)',
                      }}
                      buttonStyle={{
                        border: '1px solid #d1d5db',
                        borderRight: '1px solid #d1d5db',
                        background: 'white',
                        borderTopLeftRadius: '0.75rem',
                        borderBottomLeftRadius: '0.75rem',
                        padding: '4px 8px',
                        width: '46px'
                      }}
                      dropdownStyle={{
                        borderRadius: '0.75rem',
                        marginTop: '4px',
                        fontSize: '0.875rem',
                        zIndex: 9999
                      }}
                      containerStyle={{
                        width: '100%'
                      }}
                      placeholder="+1 (555) 123-4567"
                      searchPlaceholder="Search country..."
                      enableSearch={true}
                      disableSearchIcon={true}
                      searchStyle={{
                        padding: '8px',
                        margin: '4px',
                        borderRadius: '0.375rem',
                        border: '1px solid #d1d5db',
                        fontSize: '0.875rem'
                      }}
                      countryCodeEditable={false}
                    />
                  </div>
                  </div>

                {/* Email Address */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || submitStatus === 'success'}
                      className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 bg-white/50 backdrop-blur-sm disabled:bg-gray-100 disabled:cursor-not-allowed placeholder:text-sm"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                </div>
                </div>

                {/* Query Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                    Type of Query *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {queryTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                          formData.queryType === type.value
                            ? 'border-[#FF0000] bg-red-50'
                            : 'border-gray-200 hover:border-gray-300'
                        } ${(isSubmitting || submitStatus === 'success') ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <input
                          type="radio"
                          name="queryType"
                          value={type.value}
                          checked={formData.queryType === type.value}
                          onChange={handleChange}
                          disabled={isSubmitting || submitStatus === 'success'}
                          className="hidden"
                        />
                        <span className="text-sm font-medium text-gray-700 text-center break-words whitespace-normal">
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                    Your Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting || submitStatus === 'success'}
                      rows={4}
                      className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 bg-white/50 backdrop-blur-sm disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
                      placeholder="Please describe your query in detail..."
                    />
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="mt-1"
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                    I agree to the terms and conditions and acknowledge that my data will be processed in accordance with the privacy policy.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success' || !formData.agreeTerms}
                  className={`w-full py-3.5 px-6 font-semibold transition-all duration-300 ${
                    isSubmitting || submitStatus === 'success' || !formData.agreeTerms
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'border border-2 bg-white md:border-[#FF0000] border-purple-700 text-black rounded-4xl shadow md:hover:bg-[#FF0000] hover:bg-purple-800 active:bg-purple-800 active:scale-105 active:-translate-y-1 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="animate-spin mr-2 h-5 w-5" />
                      Sending Message...
                    </span>
                  ) : submitStatus === 'success' ? (
                    'Message Sent ✓'
                  ) : (
                    <span className="flex items-center justify-center">
                      Submit Query
                      <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Full Rectangular Box with All Offices - 1 Row 4 Columns */}
        <div className="mt-16 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl">{office.flag}</span>
                    <h3 className="text-lg font-bold text-gray-800">{office.name}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-500 text-xs font-semibold mb-1">Address:</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{office.address}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-xs font-semibold mb-1">📞 Call / WhatsApp:</p>
                      <a href={`tel:${office.phone}`} className="text-gray-800 text-sm font-medium hover:text-[#FF0000] transition-colors">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;