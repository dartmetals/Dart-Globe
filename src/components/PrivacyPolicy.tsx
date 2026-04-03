import React from 'react';
import { Mail, Globe, Shield, Lock, Cookie, Eye, Users, FileText, ExternalLink } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Privacy Policy - Dart Globe
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your personal information.
          </p>
          {/* <div className="w-24 h-1 bg-white mx-auto mt-6 rounded-full"></div> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="p-3 mb-2">
          <p className="text-gray-700 leading-relaxed">
            At Dart Globe, we are committed to protecting your privacy and ensuring that your personal
            information is handled in a safe, secure, and responsible manner. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you interact with our website and
            services.
          </p>
        </div>

        {/* Section 1 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">1. Information We Collect</h2>
          </div>
          <p className="text-gray-700 mb-3">We may collect and process the following types of personal information:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Full Name, Contact Number, and Email Address</li>
            <li>Passport Details and Identification Documents</li>
            <li>Date of Birth, Nationality, and Address</li>
            <li>Educational and Employment Information</li>
            <li>Visa and Immigration-related details</li>
            <li>Any additional information voluntarily provided by you</li>
          </ul>
          <p className="text-gray-600 text-sm mt-3 italic">
            This information is collected when you fill out forms, contact us, register for services, or engage with our offerings.
          </p>
        </div>

        {/* Section 2 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100">
              <Eye className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">2. How We Use Your Information</h2>
          </div>
          <p className="text-gray-700 mb-3">Your information is used for the following purposes:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>To process visa applications, study abroad, and immigration services</li>
            <li>To provide IT training, job assistance, and placement services</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To communicate updates, offers, and important information</li>
            <li>To improve our services and user experience</li>
            <li>To comply with legal and regulatory requirements</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">3. Legal Basis for Processing</h2>
          </div>
          <p className="text-gray-700 mb-3">We process your personal data based on:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Your consent</li>
            <li>Performance of a contract or service request</li>
            <li>Compliance with legal obligations</li>
            <li>Legitimate business interests</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-100">
              <Users className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">4. Sharing of Information</h2>
          </div>
          <p className="text-gray-700 mb-3">We may share your information with:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Government authorities and immigration bodies</li>
            <li>Educational institutions and training partners</li>
            <li>Employers and recruitment partners</li>
            <li>Third-party service providers (IT, hosting, analytics)</li>
          </ul>
          <p className="text-gray-600 text-sm mt-3 italic">
            Your data will only be shared when necessary and in accordance with applicable laws. Similar policies
            ensure that personal data is shared only when required or permitted by law.
          </p>
        </div>

        {/* Section 5 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100">
              <Lock className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">5. Data Security</h2>
          </div>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to protect your personal data from
            unauthorized access, loss, misuse, or disclosure. However, while we strive to protect your data, no
            system is completely secure.
          </p>
        </div>

        {/* Section 6 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-teal-100">
              <FileText className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">6. Data Retention</h2>
          </div>
          <p className="text-gray-700 mb-3">We retain your personal information only for as long as necessary to:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Fulfill the purposes outlined in this policy</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Resolve disputes and enforce agreements</li>
          </ul>
          <p className="text-gray-600 text-sm mt-3 italic">
            Once no longer required, data will be securely deleted or anonymized.
          </p>
        </div>

        {/* Section 7 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100">
              <Cookie className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">7. Cookies and Tracking Technologies</h2>
          </div>
          <p className="text-gray-700 mb-3">Our website may use cookies and similar technologies to:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Enhance user experience</li>
            <li>Analyze website traffic</li>
            <li>Store user preferences</li>
          </ul>
          <p className="text-gray-600 text-sm mt-3 italic">
            You can choose to disable cookies through your browser settings.
          </p>
        </div>

        {/* Section 8 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100">
              <Shield className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">8. Your Rights</h2>
          </div>
          <p className="text-gray-700 mb-3">You have the right to:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Access, update, or correct your personal data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Object to or restrict processing</li>
            <li>Lodge a complaint with relevant authorities</li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-pink-100">
              <ExternalLink className="h-6 w-6 text-pink-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">9. Third-Party Links</h2>
          </div>
          <p className="text-gray-700">
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices of such websites and encourage you to review their policies separately.
          </p>
        </div>

        {/* Section 10 */}
        <div className="p-3 mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-100">
              <FileText className="h-6 w-6 text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">10. Updates to This Policy</h2>
          </div>
          <p className="text-gray-700">
            Dart Globe reserves the right to update this Privacy Policy at any time. Changes will be posted on this
            page, and continued use of our services constitutes acceptance of the updated policy.
          </p>
        </div>

        {/* Section 11 - Contact Us */}
        <div className="p-3 text-black">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-black/20">
              <Mail className="h-6 w-6 text-black" />
            </div>
            <h2 className="text-2xl font-bold">11. Contact Us</h2>
          </div>
          <p className="text-black/90 mb-4">
            If you have any questions regarding this Privacy Policy or your personal data, please contact us:
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

export default PrivacyPolicy;