import React from 'react';
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaArrowRight,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle section navigation
  const handleSectionNavigation = (sectionId: string) => {
    // If we're already on the homepage, scroll to section
    if (location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -80; // Adjust for header height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    } else {
      // Navigate to homepage with hash
      navigate(`/#${sectionId}`);
    }
  };

  // Function to handle regular page navigation
  const handlePageNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation links configuration
  const navLinks = [
    { 
      name: 'Home', 
      type: 'page',
      path: '/',
      onClick: () => handlePageNavigation('/')
    },
    { 
      name: 'About Us', 
      type: 'page',
      path: '/about-dartglobe',
      onClick: () => handlePageNavigation('/about-dartglobe')
    },
    { 
      name: 'Our Services', 
      type: 'section',
      sectionId: 'services',
      onClick: () => handleSectionNavigation('services')
    },
    { 
      name: 'Study Abroad', 
      type: 'page',
      path: '/study-abroad',
      onClick: () => handlePageNavigation('/study-abroad/uk')
    },
    { 
      name: 'Our Success', 
      type: 'section',
      sectionId: 'testimonials',
      onClick: () => handleSectionNavigation('testimonials')
    },
    { 
      name: 'Why Choose Us', 
      type: 'section',
      sectionId: 'why-choose-us',
      onClick: () => handleSectionNavigation('why-choose-us')
    },
    { 
      name: 'FAQ', 
      type: 'page',
      path: '/faq',
      onClick: () => handlePageNavigation('/faq')
    },
    { 
      name: 'Contact', 
      type: 'section',
      sectionId: 'contact',
      onClick: () => handlePageNavigation('/contact-us')
    },
    { 
      name: 'Study In UK', 
      type: 'page',
      path: '/study-abroad/uk',
      onClick: () => handlePageNavigation('/study-abroad/uk')
    },
    { 
      name: 'Study In USA', 
      type: 'page',
      path: '/study-abroad/usa',
      onClick: () => handlePageNavigation('/study-abroad/usa')
    },
    { 
      name: 'Study In Canada', 
      type: 'page',
      path: '/study-abroad/canada',
      onClick: () => handlePageNavigation('/study-abroad/canada')
    },
    { 
      name: 'Study In Australia', 
      type: 'page',
      path: '/study-abroad/australia',
      onClick: () => handlePageNavigation('/study-abroad/australia')
    },
    { 
      name: 'Study In Germany', 
      type: 'page',
      path: '/study-abroad/germany',
      onClick: () => handlePageNavigation('/study-abroad/germany')
    },
    { 
      name: 'Study In New Zealand', 
      type: 'page',
      path: '/study-abroad/usa',
      onClick: () => handlePageNavigation('/study-abroad/new-zealand')
    },
    { 
      name: 'Study In Europe', 
      type: 'page',
      path: '/study-abroad/europe',
      onClick: () => handlePageNavigation('/study-abroad/europe')
    },
    { 
      name: 'Study In Ireland', 
      type: 'page',
      path: '/study-abroad/ireland',
      onClick: () => handlePageNavigation('/study-abroad/ireland')
    },
  ];

  // Split navlinks into two columns
  const leftColumnLinks = navLinks.slice(0, 8);
  const rightColumnLinks = navLinks.slice(8);

  // Social media links configuration
  const socialLinks = [
    { 
      icon: FaLinkedinIn, 
      href: 'https://www.linkedin.com/company/dart-globe/?viewAsMember=true',
      label: 'LinkedIn'
    },
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/dart.globe/',
      label: 'Instagram'
    },
    { 
      icon: FaFacebookF, 
      href: 'https://www.facebook.com/share/1ccihQ3e9B/?mibextid=wwXIfr',
      label: 'Facebook'
    },
    { 
      icon: FaYoutube, 
      href: 'https://www.youtube.com/channel/UCFs6iqxcfhg8XyZgwfuuVTg',
      label: 'YouTube'
    },
    { 
      icon: FaThreads, 
      href: 'https://www.threads.com/@dart.globe',
      label: 'Threads'
    },
  ];

  return (
    <footer className="bg-[#20212B] text-slate-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* First Row: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text text-transparent">
                  DARTGLOBE
                </h2>
              </div>
            </div>
            
             <p className="text-gray-400 leading-relaxed">
              <strong className="text-gray-300">DartGlobe</strong> stands out because we treat your career goals as our own. We skip the "one-size-fits-all" approach and provide a personalized roadmap based on your unique academic background and budget. Our strong network of partner institutions ensures your profile reaches the right decision-makers.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-gray-300">Dream Locally, Achieve Globally.</strong> Transform your future with DartGlobe. We provide the bridge to top-tier universities and the expert guidance to get you there.
            </p>
            
            <div className="pt-4">
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-300 hover:bg-[#FF0000] rounded-full transition-all duration-300"
                      aria-label={social.label}
                    >
                      <IconComponent className="text-gray-700 hover:text-gray-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div className=''>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {leftColumnLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className="flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300 group w-full text-left"
                  >
                    <FaArrowRight className="mr-2 text-sm text-gray-500" />
                    <span>{link.name}</span>
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                {rightColumnLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className="flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300 group w-full text-left"
                  >
                    <FaArrowRight className="mr-2 text-sm text-gray-500" />
                    <span>{link.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Column 3: Contact Info */}
          <div className='shadow-md'>
            <h3 className="text-lg font-semibold mb-6 text-gray-300">
              Contact Us
            </h3>

            {/* Four Addresses in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* UK / International Office */}
              <div className="flex items-start space-x-3 group">
                <div>
                  <p className="font-semibold text-gray-400 mb-1 hover:text-gray-600">UK / International Office</p>
                  <p className="text-gray-400 text-xs leading-tight">
                    297, Suite 2,<br />
                    High Street North,<br />
                    London, E12 6SL
                  </p>
                  <p className="text-gray-200 font-semibold text-xs mt-1">Tel: +44 7385 649648</p>
                </div>
              </div>
              
              {/* Hyderabad Office */}
              <div className="flex items-start space-x-3 group">
                <div>
                  <p className="font-semibold text-gray-400 mb-1 hover:text-gray-600">Hyderabad Office</p>
                  <p className="text-gray-400 text-xs leading-tight">
                    #918, 8th Floor,<br />
                    Vasavi MPM Grand,<br />
                    Beside Ameerpet Metro,<br />
                    (Pillar 1062 & 1063),<br />
                    Ameerpet, Hyderabad - 500073
                  </p>
                  <p className="text-gray-200 font-semibold text-xs mt-1">Tel: +91 91333 29955</p>
                </div>
              </div>
              
              {/* Bangalore Office */}
              <div className="flex items-start space-x-3 group">
                <div>
                  <p className="font-semibold text-gray-400 mb-1 hover:text-gray-600">Bangalore Office</p>
                  <p className="text-gray-400 text-xs leading-tight">
                    No. 90/3, 2nd Floor,<br />
                    Outer Ring Rd,<br />
                    Opp. Innovative Multiplex,<br />
                    Marathahalli,<br />
                    Bangalore - 560037
                  </p>
                  <p className="text-gray-200 font-semibold text-xs mt-1">Tel: +91 97395 52345</p>
                </div>
              </div>
              
              {/* Vijayawada Office */}
              <div className="flex items-start space-x-3 group">
                <div>
                  <p className="font-semibold text-gray-400 mb-1 hover:text-gray-600">Vijayawada Office</p>
                  <p className="text-gray-400 text-xs leading-tight">
                    2B, 59A-3-3,<br />
                    Guru Nanak Colony Road,<br />
                    Teacher's Colony, Auto Nagar,<br />
                    Vijayawada - 520007,<br />
                    Andhra Pradesh
                  </p>
                  <p className="text-gray-200 font-semibold text-xs mt-1">Tel: +91 91333 29955</p>
                </div>
              </div>
            </div>

            {/* Email Below Addresses */}
            <div className="grid grid-cols-1 gap-4">
              {/* Email Address */}
              <div className="flex items-center space-x-3 group">
                <div>
                  <p className="font-semibold text-gray-400 hover:text-gray-600">Email Address</p>
                  <p className="text-gray-400 text-sm">info@dartglobe.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-2"></div>
        
        {/* Second Row: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-gray-200 font-semibold">DART GLOBE</span>. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => handlePageNavigation('/privacy-policy')} 
              className="text-gray-400 hover:text-gray-600 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handlePageNavigation('/terms-of-service')} 
              className="text-gray-400 hover:text-gray-600 text-sm transition-colors duration-300"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => handlePageNavigation('/cookie-policy')} 
              className="text-gray-400 hover:text-gray-600 text-sm transition-colors duration-300"
            >
              Cookie Policy
            </button>
            <button 
              onClick={() => handlePageNavigation('/disclaimer')} 
              className="text-gray-400 hover:text-gray-600 text-sm transition-colors duration-300"
            >
              Disclaimer
            </button>
            <button 
              onClick={() => handlePageNavigation('/sitemap')} 
              className="text-gray-400 hover:text-gray-600 text-sm transition-colors duration-300"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;