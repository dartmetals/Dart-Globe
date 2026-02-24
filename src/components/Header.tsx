import { ChevronDown, MessageCircleMore, X, Mail, Phone } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import PopupRegisterForm from './PopupRegisterForm';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStudyOpen, setIsStudyOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isCounsellingOpen, setIsCounsellingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [contactHeaderVisible, setContactHeaderVisible] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showMobileNotification, setShowMobileNotification] = useState(false);

  // Add this useEffect after your existing useEffect that checks for hasSeenPopup
useEffect(() => {
  const hasSeen = sessionStorage.getItem('hasSeenPopup');
  
  if (!hasSeen) {
    const timer = setTimeout(() => {
      setShowPopup(true);
      setIsPopupVisible(true);
      sessionStorage.setItem('hasSeenPopup', 'true');
    }, 1000);
    
    return () => clearTimeout(timer);
  } else {
    // If popup was already shown, show the floating icon on desktop
    if (window.innerWidth >= 768) {
      setShowFloatingIcon(true);
    }
  }
}, []);

  // Also update the handlePopupClose function to persist the floating icon state
const handlePopupClose = () => {
  setShowPopup(false);
  setIsPopupVisible(false);
  
  if (window.innerWidth >= 768) {
    setShowFloatingIcon(true);
    // Store that floating icon should be shown
    sessionStorage.setItem('shouldShowFloatingIcon', 'true');
  } else {
    setShowMobileNotification(true);
    // Store that mobile notification should be shown
    sessionStorage.setItem('shouldShowMobileNotification', 'true');
  }
};

// Add this useEffect to restore floating icon state on page load
useEffect(() => {
  const shouldShowFloatingIcon = sessionStorage.getItem('shouldShowFloatingIcon');
  const shouldShowMobileNotification = sessionStorage.getItem('shouldShowMobileNotification');
  
  if (shouldShowFloatingIcon === 'true' && window.innerWidth >= 768) {
    setShowFloatingIcon(true);
  }
  
  if (shouldShowMobileNotification === 'true' && window.innerWidth < 768) {
    setShowMobileNotification(true);
  }
}, []);

  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupVisible]);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsCounsellingOpen(false);
      }
    };

    if (isCounsellingOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCounsellingOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 10;
      setScrolled(isScrolled);

      if (window.innerWidth >= 1024) {
        if (currentScrollY <= 10) {
          setContactHeaderVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setContactHeaderVisible(false);
        } else if (currentScrollY < lastScrollY && currentScrollY > 100) {
          setContactHeaderVisible(false);
        }
      } else {
        setContactHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const socialMedia = [
    { 
      name: 'LinkedIn', 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      href: 'https://linkedin.com/company/dartglobe' 
    },
    { 
      name: 'Instagram', 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      href: 'https://instagram.com/dartglobe' 
    },
    { 
      name: 'Facebook', 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      href: 'https://facebook.com/dartglobe' 
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const studyAbroadCountries = [
    { name: 'UK', path: '/study-abroad/uk' },
    { name: 'USA', path: '/study-abroad/usa' },
    { name: 'Canada', path: '/study-abroad/canada' },
    { name: 'Australia', path: '/study-abroad/australia' },
    { name: 'Germany', path: '/study-abroad/germany' },
    { name: 'New Zealand', path: '/study-abroad/new-zealand' },
    { name: 'Europe', path: '/study-abroad/europe' },
    { name: 'Ireland', path: '/study-abroad/Ireland' },
  ];

  const handleSectionNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash && location.pathname === '/') {
        const sectionId = hash.replace('#', '');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-dartglobe' },
    { name: 'Study Abroad', href: '#' },
    { 
      name: 'Our Services', 
      href: '#services',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleSectionNavigation('services');
      }
    },
    { 
      name: 'Why Choose Us', 
      href: '#why-choose-us',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleSectionNavigation('why-choose-us');
      }
    },
    { 
      name: 'Our Success', 
      href: '#testimonials',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleSectionNavigation('testimonials');
      }
    },
    { name: 'Contact Us', href: '/contact-us'},
    { name: 'FAQ', href: '/faq' },
    { name: 'Book Free Counselling', href: '#', isCta: true, onClick: () => setIsCounsellingOpen(true) }
  ];

  const contactItems = [
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:info@dartglobe.com',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-600',
      hoverBorderColor: 'hover:border-blue-700',
      onClick: () => {
        window.location.href = 'mailto:info@dartglobe.com?subject=Enquiry&body=Hello, I would like to get more information about your services.';
      }
    },
    { 
      icon: Phone, 
      label: 'Contact', 
      href: 'tel:+91 9133329955',
      iconColor: 'text-green-600',
      borderColor: 'border-green-600',
      hoverBorderColor: 'hover:border-green-700',
      onClick: () => {
        window.location.href = 'tel:+91 9133329955';
      }
    },
    { 
      icon: MessageCircleMore, 
      label: 'WhatsApp', 
      href: 'https://wa.me/+91 9133329955',
      iconColor: 'text-green-500',
      borderColor: 'border-green-500',
      hoverBorderColor: 'hover:border-green-600',
      onClick: () => {
        window.open('https://wa.me/919133329955?text=Hello%20DartGlobe,%20I%20would%20like%20to%20know%20more%20about%20your%20services.', '_blank');
      }
    }
  ];

  const handleContactClick = (item: typeof contactItems[0]) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      if (item.href.startsWith('mailto:') || item.href.startsWith('tel:')) {
        window.location.href = item.href;
      } else {
        window.open(item.href, '_blank');
      }
    }
  };

  return (
    <>
      <div 
        className={`top-0 left-0 w-full z-50 bg-black border-b border-gray-200 transition-all duration-300 ${
          contactHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          window.innerWidth >= 1024 ? 'fixed' : 'relative'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-2 ">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
              
              <div className="hidden md:flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
                <a 
                  href="mailto:info@dartglobe.com" 
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Mail size={16} className="text-blue-800" />
                  <span className='text-white font-semibold'>info@dartglobe.com</span>
                </a>
                
                <a 
                  href="tel:+91 9133329955" 
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Phone size={16} className="text-green-600" />
                  <span className='text-white font-semibold'>+91 91333 29955</span>
                </a>
              </div>
              
              <div className="md:hidden flex items-center gap-4 justify-center w-full">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-Purple-700 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
              
              <div className="hidden md:flex items-center gap-4">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FF0000] transition-colors transition-all duration-300 transform hover:-translate-y-0.5"
                    aria-label={social.name}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <header 
        className={`fixed z-40 transition-all duration-500 ${
          scrolled && window.innerWidth < 1024 
            ? 'bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/30 backdrop-blur-lg rounded-full shadow-lg' 
            : scrolled && window.innerWidth >= 1024
            ? 'top-0 left-0 w-full bg-white/30 backdrop-blur-lg shadow-lg'
            : `top-0 left-0 w-full ${contactHeaderVisible ? 'top-9 md:top-8' : 'top-0'}`
        }`}
        style={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.3)'
            : window.innerWidth < 1024
            ? 'white'
            : 'white',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled 
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
        }}
      >
        <div className={`w-full mx-auto px-4 sm:px-6 lg:px-6 transition-all duration-300`}>
          <div className={`transition-all duration-300 ${scrolled && window.innerWidth < 1024 ? 'py-3' : 'py-2'}`}>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
                <div className="flex items-center">
                  <img 
                    src="/dg-logo.png" 
                    alt="Dart Globe Logo" 
                    className={`transition-all duration-300 ${
                      scrolled && window.innerWidth < 1024 ? 'h-8 w-auto' : 'h-18 w-auto ml-6'
                    }`}
                  />
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className={`hidden lg:flex items-center space-x-5`}>
                {navLinks.map((link) =>
                  link.name === 'Study Abroad' ? (
                    <div key={link.name} className="relative group">
                      <button className="flex items-center gap- font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
                        Study Abroad
                        <ChevronDown size={18} className="group-hover:rotate-180 transition-transform" />
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-100">
                        <ul className="py-2">
                          {studyAbroadCountries.map((country, index) => (
                            <React.Fragment key={country.name}>
                              <li>
                                <Link to={country.path} className="block px-4 py-3 hover:bg-blue-50">
                                  Study in {country.name}
                                </Link>
                              </li>
                              {index < studyAbroadCountries.length - 1 && (
                                <li className="border-t border-dashed border-gray-200"></li>
                              )}
                            </React.Fragment>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={(e) => {
                        if (link.onClick) {
                          link.onClick(e);
                        }
                      }}
                      className={`font-medium ${
                        link.isCta
                          ? `bg-white border border-2 border-[#FF0000] text-black hover:text-white px-5 py-2.5 rounded-3xl hover:scale-105 hover:bg-[#FF0000] transition-all duration-300 transform hover:-translate-y-1 ${
                              scrolled ? 'md:bg-white/80' : ''
                            }`
                          : 'text-gray-700 hover:text-blue-600 hover:scale-105'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </nav>

              {/* Mobile/Tablet: Show popup notification inside header when scrolled */}
              {scrolled && window.innerWidth < 1024 && showMobileNotification ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {contactItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={item.label} className="relative group">
                          <button
                            onClick={() => handleContactClick(item)}
                            className={`w-8 h-8 rounded-full bg-white/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow hover:shadow-lg border-2 ${item.borderColor} ${item.hoverBorderColor}`}
                            title={item.label}
                          >
                            <IconComponent size={16} className={item.iconColor} />
                          </button>
                          <div className="absolute top-full right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div className="bg-white/90 px-2 py-1 rounded-lg shadow-md border border-gray-200 whitespace-nowrap">
                              <span className="text-xs font-medium text-gray-700">
                                {item.label}
                              </span>
                            </div>
                            <div className="absolute bottom-full right-2 -mb-1 border-4 border-transparent border-b-white/90"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => {
                      setShowPopup(true);
                      setShowMobileNotification(false);
                    }}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                    title="Register for Free Consultation"
                  >
                    <img 
                      src="/popup-icon2.png" 
                      alt="Free Consultation" 
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                          svg.setAttribute('class', 'w-4 h-4 text-white');
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
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-blue-100 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <div className="space-y-1">
                      <span className="block w-5 h-0.5 bg-blue-700"></span>
                      <span className="block w-5 h-0.5 bg-blue-700"></span>
                      <span className="block w-5 h-0.5 bg-blue-700"></span>
                    </div>
                  </button>
                </div>
              ) : (
                /* Regular mobile menu button */
                <button
                  className={`lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-all duration-300 ${
                    scrolled && window.innerWidth < 1024 ? 'p-2' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <div className="space-y-1.5">
                    <span className={`block bg-blue-700 transition-all duration-300 ${
                      scrolled && window.innerWidth < 1024 ? 'w-5 h-0.5' : 'w-6 h-0.5'
                    }`}></span>
                    <span className={`block bg-blue-700 transition-all duration-300 ${
                      scrolled && window.innerWidth < 1024 ? 'w-5 h-0.5' : 'w-6 h-0.5'
                    }`}></span>
                    <span className={`block bg-blue-700 transition-all duration-300 ${
                      scrolled && window.innerWidth < 1024 ? 'w-5 h-0.5' : 'w-6 h-0.5'
                    }`}></span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999] bg-black/50">
          <div 
            className="bg-white shadow-2xl w-full h-[100vh] overflow-hidden animate-slideDown"
            style={{ 
              position: 'fixed',
              top: window.scrollY <= 10 ? '3.5rem' : '0',
              left: '0',
              right: '0',
              maxHeight: 'calc(100vh - 3.5rem)',
              borderBottomLeftRadius: '1rem',
              borderBottomRightRadius: '1rem'
            }}
          >
            
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img 
                  src="/dg-logo.png" 
                  alt="Dart Globe Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div 
              className="overflow-y-auto h-full"
              style={{ 
                maxHeight: 'calc(100vh - 140px)',
                scrollbarWidth: 'thin',
                scrollbarColor: '#cbd5e0 #f1f5f9'
              }}
            >
              <nav className="flex flex-col space-y-0 p-4">
                
                {navLinks
                  .filter(link => link.name === 'Home')
                  .map((link) => (
                    <React.Fragment key={link.name}>
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-4 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center"
                      >
                        {link.name}
                      </Link>
                      <div className="border-t border-gray-100"></div>
                    </React.Fragment>
                  ))}

                {navLinks
                  .filter(link => link.name === 'About Us')
                  .map((link) => (
                    <React.Fragment key={link.name}>
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-4 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center"
                      >
                        {link.name}
                      </Link>
                      <div className="border-t border-gray-100"></div>
                    </React.Fragment>
                  ))}

                <div className="pt-1 cursor-pointer">
                  <button
                    className="flex items-center justify-between w-full py-4 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsStudyOpen(!isStudyOpen)}
                  >
                    <span className="flex items-center">
                      <span>Study Abroad</span>
                    </span>
                    <ChevronDown 
                      className={`${isStudyOpen ? 'rotate-180' : ''} transition-transform duration-200`} 
                      size={18} 
                    />
                  </button>
                  <div className="border-t border-gray-100"></div>

                  {isStudyOpen && (
                    <div className="mt-0 ml-4 space-y-0 border-l-2 border-blue-100 pl-4 pb-2">
                      {studyAbroadCountries.map((c, index) => (
                        <React.Fragment key={c.name}>
                          <Link
                            to={c.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors pl-4 flex items-center"
                          >
                            <span className="mr-2">•</span>
                            Study in {c.name}
                          </Link>
                          {index < studyAbroadCountries.length - 1 && (
                            <div className="border-t border-dashed border-gray-100 ml-4"></div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>

                {navLinks
                  .filter(link => link.name === 'Our Services')
                  .map((link) => (
                    <React.Fragment key={link.name}>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.onClick) link.onClick(e);
                          setIsMobileMenuOpen(false);
                        }}
                        className="py-4 px-4 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer flex items-center"
                      >
                        {link.name}
                      </button>
                      <div className="border-t border-gray-100"></div>
                    </React.Fragment>
                  ))}

                {navLinks
                  .filter(link => link.name === 'Why Choose Us')
                  .map((link) => (
                    <React.Fragment key={link.name}>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.onClick) link.onClick(e);
                          setIsMobileMenuOpen(false);
                        }}
                        className="py-4 px-4 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer flex items-center"
                      >
                        {link.name}
                      </button>
                      <div className="border-t border-gray-100"></div>
                    </React.Fragment>
                  ))}

                {navLinks
                  .filter(link => link.name === 'Our Success')
                  .map((link) => (
                    <React.Fragment key={link.name}>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.onClick) link.onClick(e);
                          setIsMobileMenuOpen(false);
                        }}
                        className="py-4 px-4 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer flex items-center"
                      >
                        {link.name}
                      </button>
                      <div className="border-t border-gray-100"></div>
                    </React.Fragment>
                  ))}

                {navLinks
                  .filter(link => link.name === 'Contact Us')
                  .map((link) => (
                    <React.Fragment key={link.name}>
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-4 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center"
                      >
                        {link.name}
                      </Link>
                      <div className="border-t border-gray-100"></div>
                    </React.Fragment>
                  ))}

                {navLinks
                  .filter(link => link.name === 'FAQ')
                  .map((link) => (
                    <React.Fragment key={link.name}>
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-4 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center"
                      >
                        {link.name}
                      </Link>
                      <div className="border-t border-gray-100"></div>
                    </React.Fragment>
                  ))}

                {navLinks
                  .filter(link => link.isCta)
                  .map((link) => (
                    <button
                      key={link.name}
                      onClick={() => {
                        if (link.onClick) {
                          if (typeof link.onClick === 'function') {
                            link.onClick({ preventDefault: () => {} } as React.MouseEvent);
                          }
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      className="mt-4 mb-6 mx-4 border-2 border-[#FF0000] bg-white text-black px-6 py-3.5 rounded-3xl font-medium hover:bg-[#FF0000] hover:text-white active:bg-[#FF0000] active:text-white transition-all duration-300 transform hover:scale-105 text-center shadow-md"
                    >
                      {link.name}
                    </button>
                  ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-7 right-0 z-50">
        <div className="flex flex-col items-end gap-3 p-2">
{/* {showFloatingIcon && !isMobile && (
  <div className="flex flex-col items-end gap-2 mb-2">
    <button
      onClick={() => {
        setShowPopup(true);
        setShowFloatingIcon(false);
      }}
      className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-xl animate-bounce"
      title="Register for Free Consultation"
    >
      <img 
        src="/popup-icon.png" 
        alt="Free Consultation" 
        className="w-10 h-10 object-contain"
        onError={(e) => {
          // Fallback to SVG if image doesn't load
          e.currentTarget.style.display = 'none';
          // Create SVG fallback
          const parent = e.currentTarget.parentElement;
          if (parent) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('class', 'w-8 h-8 text-white');
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
    </button>
    <div className="bg-white/90 px-3  rounded-lg shadow-md border border-gray-200 mr-1">
      <span className="text-xs font-medium text-purple-700 whitespace-nowrap">
        Free Consultation
      </span>
    </div>
  </div>
)} */}

          {/* {showMobileNotification && isMobile && (
  <div className="fixed bottom-0 left-0 right-0 z-[9997] bg-black border-t border-gray-200 animate-slideUpFromBottom">
    <div className="max-w-7xl mx-auto px-4">
      <div className="py-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 flex items-center justify-center">
              <img 
                src="/popup-icon2.png" 
                alt="Free Consultation" 
                className="w-4 h-4 object-contain"
                onError={(e) => { */}
                  {/* // Fallback to SVG if image doesn't load */}
                  {/* e.currentTarget.style.display = 'none'; */}
                  {/* // Create SVG fallback */}
                  {/* const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.setAttribute('class', 'w-4 h-4 text-white');
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
            <div>
              <h3 className="font-semibold text-sm text-white">Free Consultation Available</h3>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => {
                setShowPopup(true);
                setShowMobileNotification(false);
              }}
              className="px-3 py-1 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors text-xs"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> */}
{/* )} */}

{/* Mobile Notification Banner - Floating header style */}
{showMobileNotification && isMobile && !scrolled && (
  <div 
    className="fixed left-1/2 -translate-x-1/2 bottom-4 z-[9997] w-[90%] bg-white/30 backdrop-blur-lg rounded-full shadow-lg transition-all duration-500"
    style={{
      background: 'rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(10px)',
    }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <div className="py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Contact icons inside notification */}
            <div className="flex items-center gap-3">
              {contactItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.label} className="relative group">
                    <button
                      onClick={() => handleContactClick(item)}
                      className={`w-9 h-9 rounded-full bg-white/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow hover:shadow-lg border-2 ${item.borderColor} ${item.hoverBorderColor}`}
                      title={item.label}
                    >
                      <IconComponent size={18} className={item.iconColor} />
                    </button>
                    <div className="absolute bottom-full right-0 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white/90 px-3 py-1.5 rounded-lg shadow-md border border-gray-200 whitespace-nowrap">
                        <span className="text-xs font-medium text-gray-700">
                          {item.label}
                        </span>
                      </div>
                      <div className="absolute top-full right-2 -mt-1 border-4 border-transparent border-t-white/90"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <button
            onClick={() => {
              setShowPopup(true);
              setShowMobileNotification(false);
            }}
            className="px-5 py-2 font-semibold rounded-lg transition-colors text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
)}
          
          {/* Contact icons - vertical stack for desktop only */}
          <div className="hidden md:flex flex-col items-end gap-3 mb-3">
            {contactItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => handleContactClick(item)}
                    className={`w-12 h-12 rounded-full bg-white/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow hover:shadow-lg border-2 ${item.borderColor} ${item.hoverBorderColor}`}
                    title={item.label}
                  >
                    <IconComponent size={22} className={item.iconColor} />
                  </button>
                  <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white/90 px-3 py-1.5 rounded-lg shadow-md border border-gray-200 whitespace-nowrap">
                      <span className="text-xs font-medium text-gray-700">
                        {item.label}
                      </span>
                    </div>
                    <div className="absolute top-1/2 left-full -translate-y-1/2 -ml-1 border-4 border-transparent border-l-white/90"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Popup notification icon - below contact icons for desktop */}
          {showFloatingIcon && (
            <div className="hidden md:flex flex-col items-end gap-2">
              <button
                onClick={() => {
                  setShowPopup(true);
                  setShowFloatingIcon(false);
                }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-xl animate-bounce"
                title="Register for Free Consultation"
              >
                <img 
                  src="/popup-icon2.png" 
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
              </button>
              <div className="bg-white/90 px-2 rounded-lg shadow-md border border-gray-200 mr-1">
                <span className="text-xs font-medium text-purple-700 whitespace-nowrap">
                  Free Consultation
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <PopupRegisterForm 
        isOpen={showPopup} 
        onClose={handlePopupClose}
        isMobile={isMobile} 
      />

      {isCounsellingOpen && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 animate-fadeIn"
          onClick={() => setIsCounsellingOpen(false)}
        >
          <div 
            ref={modalRef}
            className="relative w-full max-w-5xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full max-h-[95vh] flex flex-col">
              
              <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center flex-shrink-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 pr-4">
                  Book Free Counselling
                </h2>
                <button
                  onClick={() => setIsCounsellingOpen(false)}
                  className="p-1 sm:p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X size={20} className="sm:w-6 sm:h-6 text-gray-600" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <ContactForm isModal={true} />
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.5);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }

        .overflow-y-auto {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Header;