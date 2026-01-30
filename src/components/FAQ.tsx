import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

type QueryType = 'document' | 'visa' | 'accommodation' | 'loan' | 'other';

interface FormData {
  firstName: string;
  lastName: string;
  country: string;
  phone: string;
  email: string;
  queryType: QueryType;
  message: string;
  agreeTerms: boolean;
}

const FAQ: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    country: '',
    phone: '',
    email: '',
    queryType: 'document',
    message: '',
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePhoneChange = (value: string, country: any) => {
    setFormData(prev => ({ 
      ...prev, 
      phone: value,
      country: country?.name || ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    phoneNumber: `+${formData.phone}`,
    email: formData.email,
    queryType: formData.queryType,
    message: formData.message
  };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxKvgNEJ4idu4E0Ki48hVHlfZfPS1GLfrr8Z743j9P3NfVqpifCiQsOj9YFiSlGxMNf/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    alert(
      "Your form is submitted successfully.\nWe will get in touch within 24 hours.\nThank you for contacting us."
    );

    // ✅ RESET FORM AFTER OK CLICK
    setFormData({
      firstName: '',
      lastName: '',
      country: '',
      phone: '',
      email: '',
      queryType: 'document',
      message: '',
      agreeTerms: false,
    });

  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
};

  const queryTypes: { value: QueryType; label: string }[] = [
    { value: 'document', label: 'University Admissions' },
    { value: 'visa', label: 'Visa Assistance' },
    // { value: 'accommodation', label: 'Accommodation' },
    // { value: 'loan', label: 'Loan Services' },
    { value: 'other', label: 'Other Queries' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF7F0] via-[#FFE5EF] to-[#E8F1FF] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column - 60% width (3/5 of the grid) */}
          <div className="lg:col-span-3 relative overflow-hidden">
            <div className="relative z-10 h-full p-6 flex flex-col">
              {/* Top Title Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Get Quick Answers
                </h2>
                <p className="text-gray-600">
                  Find answers to common questions about our services. If you need more information, feel free to contact us.
                </p>
              </div>
              <div className="mt-4 relative">
                <img
                  src="/faq-hero.png"
                  alt="FAQ illustration"
                  className="md:w-[80%] object-cover relative z-10"
                />
                <div className="absolute -bottom-2 left-34 md:left-66 -translate-x-1/2 w-4/4 h-6 blur- bg-black/40"></div>
              </div>

              {/* Bottom Contact Information */}
<div className="backdrop-blur-sm mt-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-">
    {/* 1*1 - Location */}
    <div className="flex items-start space-x-3 p-4">
      <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
        <FaMapMarkerAlt className="text-blue-600 text-xl" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-sm text-gray-700">International Office</p>
        <p className="text-gray-600 text-xs break-words">
          297 High Street North<br/>
London, E12 6SL
        </p>
      </div>
    </div>

    {/* 1*2 - Social Media */}
    <div className="p-4">
      <p className="font-medium text-sm text-gray-700 mb-2">Follow Us</p>
      <div className="flex space-x-2">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            aria-label={social.label}
            className="p-2 rounded-3xl hover:shadow-lg transition-all hover:-translate-y-1 bg-gray-50 active:bg-blue-800 active:bg-scale-105 active:-translate-y-1"
          >
            <social.icon className="text-gray-600 text-xl hover:text-[#FF0000]" />
          </a>
        ))}
      </div>
    </div>

    {/* 2*1 - Email */}
    <div className="flex items-start space-x-3 p-4">
      <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
        <FaEnvelope className="text-yellow-600 text-xl" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-sm text-gray-700">Email Address</p>
        <p className="text-gray-600 text-xs break-all">info@dartglobe.com</p>
      </div>
    </div>

    {/* 2*2 - Contact Number */}
    <div className="flex items-start space-x-3 p-4">
      <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
        <FaPhone className="text-green-600 text-xl" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-sm text-gray-700">Contact Number</p>
        <p className="text-gray-600 text-xs break-all">+91 91333 29955</p>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>

          {/* Right Column - 40% width (2/5 of the grid) */}
          <div className="md:h-[74%] md:mt-24 lg:col-span-2 bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors placeholder:text-sm"
                    placeholder="Enter your First Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors placeholder:text-sm"
                    placeholder="Enter your Last Name"
                  />
                </div>
              </div>

              {/* Country + Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Country */}
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  >
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div> */}

                {/* Phone with react-phone-input-2 */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Phone Number *
  </label>
  <div className="react-phone-input-custom">
    <style>{`
      /* Add vertical line after country code */
      .react-tel-input .form-control {
        position: relative;
      }
      
      .react-tel-input .form-control::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50px; /* Adjust based on country code width */
        transform: translateY(-50%);
        height: 24px;
        width: 1px;
        background-color: #d1d5db;
        z-index: 1;
        pointer-events: none;
      }
      
      /* Adjust input padding to account for the vertical line */
      .react-tel-input .form-control {
        padding-left: 60px !important;
      }
      
      /* Style adjustments for better visual separation */
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
      
      /* Add subtle spacing around country code */
      .react-tel-input .selected-flag .country-name {
        margin-right: 4px;
      }
    `}</style>
    <PhoneInput
      country={'in'}
      value={formData.phone}
      onChange={handlePhoneChange}
      inputProps={{
        name: 'phone',
        required: true,
        autoFocus: false
      }}
      inputStyle={{
        width: '100%',
        height: '42px',
        paddingLeft: '60px', /* Increased for vertical line */
        borderRadius: '0.5rem',
        border: '1px solid #d1d5db',
        fontSize: '0.875rem',
        transition: 'all 0.2s',
        position: 'relative'
      }}
      buttonStyle={{
        border: '1px solid #d1d5db',
        borderRight: '1px solid #d1d5db', /* Keep right border */
        background: 'white',
        borderTopLeftRadius: '0.5rem',
        borderBottomLeftRadius: '0.5rem',
        padding: '4px 8px',
        width: '46px' /* Allow width to adjust based on country code */
      }}
      dropdownStyle={{
        borderRadius: '0.5rem',
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

              {/* Email Full Width */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors placeholder:text-sm"
                  placeholder="Enter Your Email Address"
                />
              </div>
              </div>

              <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Type of Query *
  </label>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
    {queryTypes.map((type) => (
      <label
        key={type.value}
        className={`flex items-center justify-center space-x-2 p-2 rounded-lg border-2 cursor-pointer transition-all ${
          formData.queryType === type.value
            ? 'border-[#FF0000] bg-red-50'
            : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <input
          type="radio"
          name="queryType"
          value={type.value}
          checked={formData.queryType === type.value}
          onChange={handleChange}
          className="hidden"
        />
        <span className="text-sm font-medium text-gray-700 text-center break-words whitespace-normal">
          {type.label}
        </span>
      </label>
    ))}
  </div>
</div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  placeholder="Please describe your query in detail..."
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                  I agree to the terms and conditions and acknowledge that my data will be processed in accordance with the privacy policy.
                </label>
              </div>

              <button
                type="submit"
                className="w-full text-lg font-semibold py-3 px-6 rounded-4xl border border-2 border-purple-800 md:border-[#FF0000] bg-white text-black hover:bg-purple-800 active:bg-purple-800 active:text-white active:-translate-y-1 active:scale-105 md:hover:bg-[#FF0000] hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Submit Query
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;