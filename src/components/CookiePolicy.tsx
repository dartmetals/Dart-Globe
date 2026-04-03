import React from 'react';
import { Mail, Globe, Cookie, Settings, ExternalLink, Info, AlertCircle, FileText } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-24 md:mt-28">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600">Dart Globe</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div> */}

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            This Cookie Policy explains how Dart Globe uses cookies and similar technologies when you visit our
            website. By continuing to browse or use our website, you agree to our use of cookies as outlined in
            this policy.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100">
              <Info className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800"> What Are Cookies?</h2>
          </div>
          <p className="text-gray-700">
            Cookies are small text files stored on your device (computer, mobile, or tablet) when you visit a
            website. They help improve user experience by remembering preferences and enabling certain
            website functionalities.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-100">
              <Cookie className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">How We Use Cookies</h2>
          </div>
          <p className="text-gray-700 mb-3">Dart Globe uses cookies to:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Enhance website functionality and performance</li>
            <li>Understand how users interact with our website</li>
            <li>Improve user experience and navigation</li>
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Support marketing and advertising activities</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100">
              <Settings className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Types of Cookies We Use</h2>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">a. Essential Cookies</h3>
            <p className="text-gray-700">
              These cookies are necessary for the website to function properly. They enable core features like form
              submissions, security, and accessibility.
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">b. Performance & Analytics Cookies</h3>
            <p className="text-gray-700">
              These cookies help us understand how visitors use our website by collecting anonymous data (e.g.,
              page visits, time spent, traffic sources).
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">c. Functional Cookies</h3>
            <p className="text-gray-700">
              These cookies remember your preferences, such as language and location, to provide a personalized
              experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">d. Marketing & Advertising Cookies</h3>
            <p className="text-gray-700">
              These cookies are used to deliver relevant advertisements and measure the effectiveness of
              marketing campaigns.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-yellow-100">
              <ExternalLink className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Third-Party Cookies</h2>
          </div>
          <p className="text-gray-700">
            We may use third-party services such as analytics tools and advertising partners that may place
            cookies on your device. These third parties have their own privacy and cookie policies, which we
            recommend reviewing.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-red-100">
              <Settings className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Managing Cookies</h2>
          </div>
          <p className="text-gray-700 mb-3">
            You can control or disable cookies through your browser settings. Please note that disabling cookies
            may affect the functionality and performance of our website.
          </p>
          <p className="text-gray-700 mb-3">To manage cookies:</p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Go to your browser settings</li>
            <li>Enable/disable cookies as per your preference</li>
            <li>Clear existing cookies if required</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-teal-100">
              <AlertCircle className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Consent</h2>
          </div>
          <p className="text-gray-700">
            By using our website, you consent to the use of cookies in accordance with this Cookie Policy. You
            may withdraw your consent at any time by adjusting your browser settings.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-100">
              <FileText className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Updates to This Policy</h2>
          </div>
          <p className="text-gray-700">
            Dart Globe reserves the right to update this Cookie Policy at any time. Any changes will be posted on
            this page.
          </p>
        </div>

        {/* Section 8 - Contact Us */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          </div>
          <p className="text-gray-700 mb-4">
            If you have any questions about our Cookie Policy, please contact us:
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-gray-700">
              <Mail size={18} className="text-blue-600" />
              <span>Email: info@dartglobe.com</span>
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <Globe size={18} className="text-blue-600" />
              <span>Website: www.dartglobe.com</span>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;