import React from 'react';
import { Mail, Globe, Shield, ExternalLink, FileText, XCircle, AlertTriangle, Users } from 'lucide-react';
import { PiInfoFill } from 'react-icons/pi';

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center mt-32">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Disclaimer - Dart Globe
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-white/90 text-sm md:text-base">
              Please read this disclaimer carefully before using our website or services.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        {/* Introduction with Title */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-100">
              <PiInfoFill className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">General Information</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The information provided on the Dart Globe website is for general informational purposes only.
            While we strive to ensure that all information is accurate, complete, and up to date, we make no
            guarantees or representations of any kind regarding the accuracy, reliability, or completeness of any
            content.
          </p>
        </div>

        {/* Section 1 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">No Guarantee of Visa or Job Approval</h2>
          </div>
          <p className="text-gray-700 mb-3">
            Dart Globe provides guidance and assistance for visa processing, study abroad, and job placement
            services. However:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6 mb-3">
            <li>Visa approvals are solely at the discretion of respective immigration authorities</li>
            <li>Admissions depend on educational institutions</li>
            <li>Job placements depend on individual performance, eligibility, and market conditions</li>
          </ul>
          <p className="text-gray-600 text-sm italic">
            We do not guarantee approvals, admissions, or employment outcomes.
          </p>
        </div>

        {/* Section 2 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100">
              <AlertTriangle className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Information Accuracy</h2>
          </div>
          <p className="text-gray-700">
            All content on this website is subject to change without notice. Immigration laws, visa requirements,
            and policies may change frequently, and Dart Globe is not responsible for any outdated or incorrect
            information.
          </p>
        </div>

        {/* Section 3 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Professional Advice</h2>
          </div>
          <p className="text-gray-700">
            The information provided on this website should not be considered legal, immigration, or financial
            advice. Users are encouraged to seek professional or legal consultation where required.
          </p>
        </div>

        {/* Section 4 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100">
              <ExternalLink className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Third-Party Links and Services</h2>
          </div>
          <p className="text-gray-700">
            Our website may include links to third-party websites, institutions, or service providers. Dart Globe
            does not control or guarantee the accuracy or reliability of any third-party content and is not
            responsible for their policies or actions.
          </p>
        </div>

        {/* Section 5 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Limitation of Liability</h2>
          </div>
          <p className="text-gray-700 mb-3">Dart Globe shall not be held liable for:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Visa refusals or delays</li>
            <li>Changes in immigration laws or policies</li>
            <li>Decisions made by embassies, universities, or employers</li>
            <li>Any direct, indirect, or consequential losses arising from the use of our services or website</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">User Responsibility</h2>
          </div>
          <p className="text-gray-700 mb-3">Users are responsible for:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6 mb-3">
            <li>Providing accurate and complete information</li>
            <li>Submitting genuine documents</li>
            <li>Complying with all applicable laws and regulations</li>
          </ul>
          <p className="text-gray-600 text-sm italic">
            Any misrepresentation may result in rejection or termination of services.
          </p>
        </div>

        {/* Section 7 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100">
              <FileText className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Intellectual Property</h2>
          </div>
          <p className="text-gray-700">
            All content on this website, including text, logos, and materials, is the property of Dart Globe and
            may not be reproduced or used without prior written consent.
          </p>
        </div>

        {/* Section 8 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-teal-100">
              <FileText className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Updates to Disclaimer</h2>
          </div>
          <p className="text-gray-700">
            Dart Globe reserves the right to update or modify this Disclaimer at any time without prior notice.
            Continued use of the website constitutes acceptance of these terms.
          </p>
        </div>

        {/* Section 9 - Contact Us */}
        <div className="p-3 text-black">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-black/20">
              <Mail className="h-6 w-6 text-black" />
            </div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <p className="text-black/90 mb-4">
            For any questions regarding this Disclaimer:
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
      </div>
    </div>
  );
};

export default Disclaimer;