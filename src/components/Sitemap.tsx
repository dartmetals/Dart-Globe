import React from 'react';

const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center mt-32">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Sitemap - Dart Globe
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-white/90 text-sm md:text-base">
              Explore all pages of our website to easily find the information you need about our services, locations, and resources.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        {/* Grid Layout for Sitemap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Main Pages */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-xl font-bold text-gray-800">🏠 Main Pages</h2>
            </div>
            <ul className="space-y-2 pl-7">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="/about-dartglobe" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-xl font-bold text-gray-800">🌍 Services</h2>
            </div>
            <ul className="space-y-2 pl-7">
              <li>
                <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">Study Visa Processing</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">Work Visa Services</a>
              </li>
              <li>
                <a href="/study-abroad/uk" className="text-gray-600 hover:text-purple-600 transition-colors">Youth Mobility Visa (UK)</a>
              </li>
              <li>
                <a href="/study-abroad/uk" className="text-gray-600 hover:text-purple-600 transition-colors">Study Abroad Programs</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">Immigration Services</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">IT Training Programs</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">IT Placement Support</a>
              </li>
            </ul>
          </div>

          {/* Coaching & Exams */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-xl font-bold text-gray-800">🎓 Coaching & Exams</h2>
            </div>
            <ul className="space-y-2 pl-7">
              <li>
                <a href="/" className="text-gray-600 hover:text-green-600 transition-colors">IELTS Coaching</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-green-600 transition-colors">PTE Coaching</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-green-600 transition-colors">TOEFL iBT Coaching</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-green-600 transition-colors">OET Coaching</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-green-600 transition-colors">CELPIP Coaching</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-green-600 transition-colors">SAT Coaching</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-green-600 transition-colors">GRE Coaching</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-green-600 transition-colors">GMAT Coaching</a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-xl font-bold text-gray-800">📍 Locations</h2>
            </div>
            <ul className="space-y-2 pl-7">
              <li>
                <a href="/" className="text-gray-600 hover:text-red-600 transition-colors">United Kingdom Office</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-red-600 transition-colors">Hyderabad Office</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-red-600 transition-colors">Bangalore Office</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-red-600 transition-colors">Vijayawada Office</a>
              </li>
            </ul>
          </div>

          {/* Career & Support */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-xl font-bold text-gray-800">💼 Career & Support</h2>
            </div>
            <ul className="space-y-2 pl-7">
              <li>
                <a href="/about-dartglobe" className="text-gray-600 hover:text-orange-600 transition-colors">Job Assistance</a>
              </li>
              <li>
                <a href="/about-dartglobe" className="text-gray-600 hover:text-orange-600 transition-colors">Part-Time Jobs in UK</a>
              </li>
              <li>
                <a href="/about-dartglobe" className="text-gray-600 hover:text-orange-600 transition-colors">Scholarship Assistance</a>
              </li>
              <li>
                <a href="/about-dartglobe" className="text-gray-600 hover:text-orange-600 transition-colors">Airport Pickup Support (UK)</a>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-xl font-bold text-gray-800">📄 Legal & Policies</h2>
            </div>
            <ul className="space-y-2 pl-7">
              <li>
                <a href="/privacy-policy" className="text-gray-600 hover:text-indigo-600 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-600 hover:text-indigo-600 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-gray-600 hover:text-indigo-600 transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="/disclaimer" className="text-gray-600 hover:text-indigo-600 transition-colors">Disclaimer</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-xl font-bold text-gray-800">📞 Quick Links</h2>
            </div>
            <ul className="space-y-2 pl-7">
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  Book Free Counselling
                </button>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-600 hover:text-pink-600 transition-colors">Enquiry Form</a>
              </li>
              <li>
                <a href="https://wa.me/447385649648" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a href="tel:+447385649648" className="text-gray-600 hover:text-pink-600 transition-colors">Call Now</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;