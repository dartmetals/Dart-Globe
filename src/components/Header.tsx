import { ChevronDown, MessageCircleMore, X, Mail, Phone } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';

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
  
  // Ref for the modal container
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsCounsellingOpen(false);
      }
    };

    // Only add event listener when modal is open
    if (isCounsellingOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCounsellingOpen]);

  // Check scroll position and direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 10;
      setScrolled(isScrolled);

      // Only apply scroll hide/show logic on desktop (min-width: 1024px)
      if (window.innerWidth >= 1024) {
        if (currentScrollY <= 10) {
          // At top of page - show contact header
          setContactHeaderVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px - hide contact header
          setContactHeaderVisible(false);
        } else if (currentScrollY < lastScrollY && currentScrollY > 100) {
          // Scrolling up but not at top - keep contact header hidden
          setContactHeaderVisible(false);
        }
      } else {
        // On mobile/tablet, keep contact header visible
        setContactHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Social media icons
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
      name: 'Twitter', 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ), 
      href: 'https://twitter.com/dartglobe' 
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

  // Check if mobile on mount and resize
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

  // Function to handle navigation with scroll to section
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

  // Effect to handle hash navigation when page loads
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
    { name: 'Contact', href: '/contact'},
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

  // Handle contact item click
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

  // Helper function to render icon with increased size
  const renderIcon = (item: typeof contactItems[0]) => {
    const IconComponent = item.icon;
    return <IconComponent size={isMobile ? 22 : 24} className={item.iconColor} />;
  };

  return (
    <>
      {/* Contact Details Header - Fixed on desktop, static on mobile/tablet */}
      <div 
        className={`top-0 left-0 w-full z-50 bg-black border-b border-gray-200 transition-all duration-300 ${
          contactHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          // Fixed on desktop, static on mobile/tablet
          window.innerWidth >= 1024 ? 'fixed' : 'relative'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-2 md:py-2">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
              
              {/* Left side - Contact Info - Hidden on mobile, visible on desktop */}
              <div className="hidden md:flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
                {/* Email */}
                <a 
                  href="mailto:info@dartglobe.com" 
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Mail size={16} className="text-blue-800" />
                  <span className='text-white font-semibold'>info@dartglobe.com</span>
                </a>
                
                {/* Phone */}
                <a 
                  href="tel:+91 9133329955" 
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Phone size={16} className="text-green-600" />
                  <span className='text-white font-semibold'>+91 91333 29955</span>
                </a>
              </div>
              
              {/* On mobile, show only right side icons centered */}
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
              
              {/* On desktop, show right side icons as before */}
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

      {/* Main Header - Fixed at top when contact header hides on desktop */}
      <header 
        className={`fixed left-0 w-full z-40 transition-all duration-300 ${
          contactHeaderVisible ? 'top-9 md:top-8' : 'top-0'
        } ${
          scrolled ? 'bg-white/30 backdrop-blur-lg' : 'bg-white shadow-sm'
        }`}
      >
        <div className="relative w-full flex items-center justify-between w-full py-0.5 px-6">
          <div className={`w-[100%] mx-auto ${
            scrolled ? 'bg-transparent' : 'bg-white'
          } px-4 sm:px-6 lg:px-6 rounded-3xl transition-all duration-300`}>
            <div className="py-4">
              <div className="flex justify-between items-center">

                {/* Logo with Dart Globe Title */}
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
                  {/* <img
                    src="/logo"
                    alt="consultancy"
                    className="h-16 w-auto object-contain"
                  /> */}
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      DART GLOBE
                    </h1>
                    {/* <p className="text-xs text-gray-500 font-medium">Global Education Consultancy</p> */}
                  </div>
                </div>

                {/* Desktop Navigation */}
<nav className="hidden lg:flex items-center space-x-5">
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
                {/* Horizontal line after each item except the last */}
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

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden p-2 rounded-lg hover:bg-blue-100"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <div className="space-y-1.5">
                    <span className="block w-6 h-0.5 bg-blue-700"></span>
                    <span className="block w-6 h-0.5 bg-blue-700"></span>
                    <span className="block w-6 h-0.5 bg-blue-700"></span>
                  </div>
                </button>
              </div>

             {/* Mobile Menu */}
{isMobileMenuOpen && (
  <div className="lg:hidden fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm">
    {/* Mobile Menu Container - Start below contact header when at top */}
    <div 
      className="bg-white shadow-2xl w-full h-[100vh] overflow-hidden animate-slideDown"
      style={{ 
        position: 'fixed',
        top: window.scrollY <= 10 ? '3.5rem' : '0', // Start below contact header at top
        left: '0',
        right: '0',
        maxHeight: 'calc(100vh - 3.5rem)',
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem'
      }}
    >
      
      {/* Header with Close Button */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center flex-shrink-0">
        <div className="flex items-center space-x-2">
          <img
            src="/logo"
            alt="consultancy"
            className="h-10 w-auto object-contain"
          />
          <h3 className="text-lg font-bold text-gray-900">DART GLOBE</h3>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close menu"
        >
          <X size={24} className="text-gray-600" />
        </button>
      </div>

      {/* Scrollable Menu Content */}
      <div 
        className="overflow-y-auto h-full"
        style={{ 
          maxHeight: 'calc(100vh - 140px)', // Adjusted for the contact header
          scrollbarWidth: 'thin',
          scrollbarColor: '#cbd5e0 #f1f5f9'
        }}
      >
        <nav className="flex flex-col space-y-0 p-4">
          
          {/* Home */}
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

          {/* About Us */}
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

          {/* Study Abroad */}
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

          {/* Services */}
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

          {/* Why Choose Us */}
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

          {/* Our Success */}
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

          {/* FAQ */}
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

          {/* Book Free Counselling - CTA Button */}
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
)}    </div>
          </div>
        </div>
      </header>

      {/* Horizontal Contact Buttons - Always Visible */}
      <div className="fixed bottom-4 right-0 z-50">
        <div className="flex items-center gap-3 p-2">
          {contactItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleContactClick(item)}
              className={`w-12 h-12 rounded-full bg-white/30 backdrop-blur-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow hover:shadow-lg border-2 ${item.borderColor} ${item.hoverBorderColor}`}
              title={item.label}
            >
              {renderIcon(item)}
            </button>
          ))}
        </div>
      </div>

      {/* Free Counselling Modal - Pass isModal prop to ContactForm */}
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
            {/* Modal Container - Full height scrolling for mobile */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full max-h-[95vh] flex flex-col">
              
              {/* Header with Close Button */}
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

              {/* Scrollable Contact Form Content */}
              <div className="flex-1 overflow-y-auto">
                <ContactForm isModal={true} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS animations */}
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
        
        @keyframes popOut {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          70% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
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
        
        .animate-popOut {
          animation: popOut 0.3s ease-out forwards;
        }

        /* Hide scrollbar for modal content */
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