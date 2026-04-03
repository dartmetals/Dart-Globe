import React from 'react';
import { Mail, Globe, Shield, FileText, AlertCircle, DollarSign, Lock, ExternalLink, Scale, Info } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Terms of Service - Dart Globe
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-3xl mx-auto">
            Welcome to Dart Globe. By accessing our website and using our services, you agree to comply with
            and be bound by the following Terms of Service. Please read these terms carefully before engaging
            with our services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        {/* <div className="p-3 mb-2">
          <p className="text-gray-700 leading-relaxed">
            Welcome to Dart Globe. By accessing our website and using our services, you agree to comply with
            and be bound by the following Terms of Service. Please read these terms carefully before engaging
            with our services.
          </p>
        </div> */}

        {/* Section 1 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">1. Acceptance of Terms</h2>
          </div>
          <p className="text-gray-700 mb-3">
            By using our website or services, you acknowledge that you have read, understood, and agree to be
            bound by these Terms of Service, along with our Privacy Policy.
          </p>
          <p className="text-gray-700">
            If you do not agree with these terms, you must not use our services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100">
              <Info className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">2. Services Offered</h2>
          </div>
          <p className="text-gray-700 mb-3">Dart Globe provides services including but not limited to:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Study Visa Processing</li>
            <li>Work Visa Assistance</li>
            <li>Youth Mobility Visa (UK)</li>
            <li>Study Abroad Programs</li>
            <li>IT Training & Placement Support</li>
            <li>Immigration and Career Guidance</li>
          </ul>
          <p className="text-gray-600 text-sm mt-3 italic">
            All services are subject to eligibility criteria, documentation, and approval from relevant authorities.
          </p>
        </div>

        {/* Section 3 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">3. User Responsibilities</h2>
          </div>
          <p className="text-gray-700 mb-3">By using our services, you agree to:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Provide accurate and complete information</li>
            <li>Submit genuine and valid documents</li>
            <li>Comply with all applicable immigration laws and regulations</li>
            <li>Not misuse or attempt to manipulate our services</li>
          </ul>
          <p className="text-gray-600 text-sm mt-3 italic">
            Dart Globe shall not be held responsible for delays or rejections caused by incorrect or incomplete
            information provided by the user.
          </p>
        </div>

        {/* Section 4 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-100">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">4. No Guarantee of Visa or Job Approval</h2>
          </div>
          <p className="text-gray-700 mb-3">While we strive to provide the best possible guidance and support:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Visa approvals are at the sole discretion of respective immigration authorities</li>
            <li>Job placements depend on candidate performance, eligibility, and market conditions</li>
          </ul>
          <p className="text-gray-600 text-sm mt-3 italic">
            Dart Globe does not guarantee approvals, admissions, or employment outcomes.
          </p>
        </div>

        {/* Section 5 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100">
              <DollarSign className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">5. Fees and Payments</h2>
          </div>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>All service fees must be paid as agreed before or during the process</li>
            <li>Fees once paid may be non-refundable, unless stated otherwise in writing</li>
            <li>Additional charges may apply for third-party services (visa fees, exam fees, etc.)</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100">
              <Lock className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">6. Intellectual Property</h2>
          </div>
          <p className="text-gray-700">
            All content on this website, including text, logos, and materials, is the property of Dart Globe and
            must not be copied, reproduced, or used without prior written consent.
          </p>
        </div>

        {/* Section 7 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-teal-100">
              <Shield className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">7. Confidentiality</h2>
          </div>
          <p className="text-gray-700">
            We respect your privacy and handle your personal data in accordance with our Privacy Policy. Your
            information will only be shared with relevant authorities or partners as required for service delivery.
          </p>
        </div>

        {/* Section 8 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100">
              <AlertCircle className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">8. Limitation of Liability</h2>
          </div>
          <p className="text-gray-700 mb-3">Dart Globe shall not be liable for:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Visa refusals or delays</li>
            <li>Changes in immigration laws or policies</li>
            <li>Actions taken by third-party institutions or authorities</li>
            <li>Any indirect or consequential losses</li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-pink-100">
              <ExternalLink className="h-6 w-6 text-pink-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">9. Third-Party Services</h2>
          </div>
          <p className="text-gray-700 mb-3">We may collaborate with third-party partners such as:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Universities and educational institutions</li>
            <li>Employers and recruiters</li>
            <li>Immigration authorities</li>
          </ul>
          <p className="text-gray-600 text-sm mt-3 italic">
            We are not responsible for the policies or actions of these third parties.
          </p>
        </div>

        {/* Section 10 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-100">
              <FileText className="h-6 w-6 text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">10. Termination of Services</h2>
          </div>
          <p className="text-gray-700 mb-3">Dart Globe reserves the right to:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Suspend or terminate services if false information is provided</li>
            <li>Refuse service in case of non-compliance with terms</li>
          </ul>
        </div>

        {/* Section 11 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">11. Changes to Terms</h2>
          </div>
          <p className="text-gray-700">
            We reserve the right to update or modify these Terms of Service at any time. Continued use of our
            services constitutes acceptance of the updated terms.
          </p>
        </div>

        {/* Section 12 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100">
              <Scale className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">12. Governing Law</h2>
          </div>
          <p className="text-gray-700">
            These terms shall be governed by and interpreted in accordance with the applicable laws of India
            and the United Kingdom, depending on the service location.
          </p>
        </div>

        {/* Section 13 - Contact Us */}
        <div className="p-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-black/20">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold">13. Contact Information</h2>
          </div>
          <p className="mb-4">
            For any questions regarding these Terms of Service:
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Mail size={18} />
              <span>Email: info@dartglobe.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Globe size={18} />
              <span>Website: www.dartglobe.com</span>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        {/* <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div> */}
      </div>
    </div>
  );
};

export default TermsOfService;