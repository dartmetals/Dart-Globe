import React, { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, Loader2, CheckCircle, Sparkles } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  isModal?: boolean; // Add this prop
}

const ContactForm: React.FC<ContactFormProps> = ({ isModal = false }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    // Format phone number as user types
    if (value.length > 0) {
      if (value.length <= 3) {
        value = `(${value}`;
      } else if (value.length <= 6) {
        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
      } else if (value.length <= 10) {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
      } else {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
    
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw1ykSzRZNocEcculf8pTaDuDJqT2jrjUh-VcbOZIXE33Z6QTdhbUm7Vgd0f9R4xILV/exec";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
      const formBody = new URLSearchParams({
  fullName: formData.fullName,
  email: formData.email,
  phone: formData.phone,
  message: formData.message,
});

const response = await fetch(GOOGLE_SCRIPT_URL, {
  method: "POST",
  body: formBody, // <-- no headers
});

    if (!response.ok) {
  throw new Error("Network error");
}

// ✅ If we reached here, submission worked
setSubmitStatus("success");

setFormData({
  fullName: "",
  email: "",
  phone: "",
  message: "",
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
      fullName: '',
      email: '',
      phone: '',
      message: '',
    });
    setErrors({});
    setSubmitStatus('idle');
  };

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
                  <p className="text-sm text-gray-500">Typically within 2-4 hours</p>
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
                {/* Full Name */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={isSubmitting || submitStatus === 'success'}
                      className={`w-full pl-10 pr-3 py-3 rounded-xl border ${
                        errors.fullName 
                          ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200' 
                          : 'border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
                      } transition-all duration-200 bg-white/50 backdrop-blur-sm disabled:bg-gray-100 disabled:cursor-not-allowed`}
                      placeholder="Enter Your Full Name"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-sm text-rose-600 animate-shake">{errors.fullName}</p>
                  )}
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                      Email Address
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
                        disabled={isSubmitting || submitStatus === 'success'}
                        className={`w-full pl-10 pr-3 py-3 rounded-xl border placeholder:text-sm ${
                          errors.email 
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200' 
                            : 'border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
                        } transition-all duration-200 bg-white/50 backdrop-blur-sm disabled:bg-gray-100 disabled:cursor-not-allowed`}
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-rose-600 animate-shake">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        disabled={isSubmitting || submitStatus === 'success'}
                        className={`w-full pl-10 pr-3 py-3 rounded-xl border placeholder:text-sm ${
                          errors.phone 
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200' 
                            : 'border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
                        } transition-all duration-200 bg-white/50 backdrop-blur-sm disabled:bg-gray-100 disabled:cursor-not-allowed`}
                        placeholder="Enter your phone Number"
                        maxLength={14}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-sm text-rose-600 animate-shake">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting || submitStatus === 'success'}
                      rows={4}
                      className={`w-full pl-10 pr-3 py-3 rounded-xl border ${
                        errors.message 
                          ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200' 
                          : 'border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
                      } transition-all duration-200 bg-white/50 backdrop-blur-sm disabled:bg-gray-100 disabled:cursor-not-allowed resize-none`}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <div className="flex justify-between items-center mt-1.5">
                    {errors.message ? (
                      <p className="text-sm text-rose-600 animate-shake">{errors.message}</p>
                    ) : (
                      <p className="text-sm text-gray-500">
                        {formData.message.length}/500 characters
                      </p>
                    )}
                    <span className="text-xs text-gray-400">
                      Required *
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className={`w-full py-3.5 px-6  font-semibold  transition-all duration-300 ${
                    isSubmitting || submitStatus === 'success'
                      ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed'
                      : 'border border-2 bg-white md:border-[#FF0000] border-purple-700 text-black font-semibold rounded-4xl shadow  md:hover:bg-[#FF0000] hover:bg-purple-800 active:bg-purple-800 active:scale-105 active:-translate-y-1 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 transition cursor-pointer'
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
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-center text-sm text-gray-500 pt-3 border-t border-gray-100">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Privacy Policy
                  </a>
                  . We respect your privacy.
                </p>
              </form>
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
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        /* Smooth focus transitions */
        input, textarea {
          transition: all 0.2s ease;
        }
        
        /* Gradient border effect on focus */
        .gradient-border {
          position: relative;
          background: linear-gradient(white, white) padding-box,
                    linear-gradient(to right, #6366f1, #8b5cf6) border-box;
          border: 2px solid transparent;
        }
        
        /* Custom scrollbar for textarea */
        textarea::-webkit-scrollbar {
          width: 6px;
        }
        
        textarea::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        
        textarea::-webkit-scrollbar-thumb {
          background: #c7d2fe;
          border-radius: 4px;
        }
        
        textarea::-webkit-scrollbar-thumb:hover {
          background: #a5b4fc;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;