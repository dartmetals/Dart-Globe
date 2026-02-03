// PopupRegisterForm.tsx
import React, { useEffect, useState } from 'react';
import { X, User, Mail, MessageSquare } from 'lucide-react';
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

interface PopupRegisterFormProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
}

const PopupRegisterForm: React.FC<PopupRegisterFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    queryType: 'document',
    message: '',
    agreeTerms: false,
  });
  const [isClosing, setIsClosing] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [animateToIcon, setAnimateToIcon] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldShow(true);
      setIsClosing(false);
      setAnimateToIcon(false);
    } else {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldShow(false);
        setIsClosing(false);
      }, 800); // Increased time for animation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleCloseWithAnimation = () => {
    setAnimateToIcon(true);
    setIsClosing(true);
    
    // Start the morph animation
    setTimeout(() => {
      onClose();
    }, 500);
  };

  if (!shouldShow) return null;

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

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 ${
        animateToIcon ? 'animate-none' : ''
      }`}
      onClick={handleCloseWithAnimation}
    >
      {/* Animated popup container */}
      <div 
        className={`relative ${
          animateToIcon 
            ? 'fixed bottom-4 right-4 z-[10000] animate-morphToIcon' 
            : `w-full max-w-2xl h-[80vh] ${isClosing ? 'animate-morphOut' : 'animate-slideUp'}`
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main popup content */}
        <div className={`
          ${animateToIcon 
            ? 'w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-xl' 
            : `bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 h-full flex flex-col ${
                isClosing ? 'animate-shrinkToIcon' : ''
              }`
          }
        `}>
          {!animateToIcon && (
            <>
              {/* Close button */}
              <button
                onClick={handleCloseWithAnimation}
                className={`absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg hover:shadow-xl ${
                  isClosing ? 'animate-fadeOut' : ''
                }`}
                aria-label="Close popup"
              >
                <X size={24} className="text-gray-700" />
              </button>

              {/* Form content */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="pb-4">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      Register for Free Expert Guidance
                    </h3>
                    <p className="text-gray-600">
                      Fill in your details and our team will contact you within 24 hours to discuss your study abroad options.
                    </p>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="mb-8 p-4 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl animate-fadeIn">
                      <div className="flex items-center space-x-3">
                        <div className="bg-emerald-100 p-2 rounded-full">
                          <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-emerald-800">Registered Successfully!</h3>
                          <p className="text-emerald-600 text-sm">Our counsellor will contact you within 24 hours.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-4">
                        <button
                          onClick={resetForm}
                          className="px-5 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors text-sm"
                        >
                          Register Another
                        </button>
                        <button
                          onClick={onClose}
                          className="px-5 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors text-sm"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-8 p-4 bg-gradient-to-r from-rose-50 to-red-50 border border-rose-100 rounded-2xl animate-fadeIn">
                      <div className="flex items-center space-x-3">
                        <div className="bg-rose-100 p-2 rounded-full">
                          <svg className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-rose-800">Registration Failed</h3>
                          <p className="text-rose-600 text-sm">Please try again or contact us directly.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          First Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting || submitStatus === 'success'}
                            className="w-full pl-10 pr-3 py-3.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed placeholder:text-sm"
                            placeholder="Enter your First Name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Last Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting || submitStatus === 'success'}
                            className="w-full pl-10 pr-3 py-3.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed placeholder:text-sm"
                            placeholder="Enter your Last Name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <style>{`
                            .react-tel-input .form-control {
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
                          `}</style>
                          <PhoneInput
                            country={'in'}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            inputProps={{
                              name: 'phone',
                              required: true,
                              disabled: isSubmitting || submitStatus === 'success'
                            }}
                            inputStyle={{
                              width: '100%',
                              height: '52px',
                              paddingLeft: '60px',
                              borderRadius: '0.5rem',
                              border: '1px solid #d1d5db',
                              fontSize: '0.875rem',
                              backgroundColor: (isSubmitting || submitStatus === 'success') ? '#f3f4f6' : 'white',
                            }}
                            buttonStyle={{
                              border: '1px solid #d1d5db',
                              borderRight: '1px solid #d1d5db',
                              background: 'white',
                              borderTopLeftRadius: '0.5rem',
                              borderBottomLeftRadius: '0.5rem',
                              padding: '4px 8px',
                              width: '46px'
                            }}
                            placeholder="+1 (555) 123-4567"
                            enableSearch={true}
                            disableSearchIcon={true}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Email Address *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting || submitStatus === 'success'}
                            className="w-full pl-10 pr-3 py-3.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed placeholder:text-sm"
                            placeholder="Enter Your Email Address"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Type of Query *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {queryTypes.map((type) => (
                          <label
                            key={type.value}
                            className={`flex items-center justify-center space-x-2 p-4 rounded-lg border-2 cursor-pointer transition-all ${
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
                            <span className="text-sm font-medium text-gray-700 text-center">
                              {type.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Your Message *
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting || submitStatus === 'success'}
                          rows={4}
                          className="w-full pl-10 pr-3 py-3.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
                          placeholder="Tell us about your study abroad plans..."
                        />
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 pt-2 pb-2">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        disabled={isSubmitting || submitStatus === 'success'}
                        className="mt-1.5"
                      />
                      <label htmlFor="agreeTerms" className="text-sm text-gray-600 leading-relaxed">
                        I agree to receive updates and guidance from DartGlobe regarding study abroad opportunities.
                      </label>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting || submitStatus === 'success' || !formData.agreeTerms}
                        className={`w-full py-4 px-6 font-semibold rounded-lg transition-all duration-300 ${
                          isSubmitting || submitStatus === 'success' || !formData.agreeTerms
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 active:scale-105 shadow-lg hover:shadow-xl'
                        }`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Registering...
                          </span>
                        ) : submitStatus === 'success' ? (
                          'Registered Successfully ✓'
                        ) : (
                          <span className="flex items-center justify-center">
                            Register for Free Consultation
                            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
          
          {/* Mini icon that appears during animation */}
          {animateToIcon && (
            <div className="flex items-center justify-center w-full h-full">
              <img 
                src="/popup-icon.png" 
                alt="Free Consultation" 
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.setAttribute('class', 'w-6 h-6 text-white');
                    svg.setAttribute('fill', 'none');
                    svg.setAttribute('viewBox', '0 0 24 24');
                    svg.setAttribute('stroke', 'currentColor');
                    
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('stroke-linecap', 'round');
                    path.setAttribute('stroke-linejoin', 'round');
                    path.setAttribute('stroke-width', '2');
                    path.setAttribute('d', 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z');
                    
                    svg.appendChild(path);
                    parent.appendChild(svg);
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupRegisterForm;