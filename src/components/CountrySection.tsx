import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CountriesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  
  // Refs to manage auto-scroll - use ReturnType<typeof setTimeout> for NodeJS.Timeout
  const autoScrollIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAutoScrollActiveRef = useRef(true);
  const lastInteractionTimeRef = useRef(Date.now());
  const isSwipingRef = useRef(false);
  const swipeProcessedRef = useRef(false);
  const autoScrollPausedRef = useRef(false);
  const swipeConfirmationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const countries = [
    { name: "Study in UK", image: "/uk-img.jpg", path: "/study-abroad/uk" },
    { name: "Study in USA", image: "/usa-img.jpg", path: "/study-abroad/usa" },
    { name: "Study in Canada", image: "/canada-img.jpg", path: "/study-abroad/canada" },
    { name: "Study in Australia", image: "/australia-img2.png", path: "/study-abroad/australia" },
    { name: "Study in Germany", image: "/germany-img2.png", path: "/study-abroad/germany" },
    { name: "Study in New Zealand", image: "/newzealand-img2.png", path: "/study-abroad/new-zealand" },
    { name: "Study in Europe", image: "/europe-img1.png", path: "/study-abroad/europe" },
    { name: "Study in Ireland", image: "/ireland-img.png", path: "/study-abroad/ireland" }
  ];

  // Function to handle image click
  const handleCountryClick = (path: string) => {
    navigate(path);
  };

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle physical scrolling when index changes
  useEffect(() => {
    if (isMobile && scrollContainerRef.current && !isTransitioning) {
      const container = scrollContainerRef.current;
      const card = container.children[currentIndex] as HTMLElement;
      if (card) {
        const scrollLeft = card.offsetLeft - container.offsetLeft;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [currentIndex, isMobile, isTransitioning]);

  // Start auto-scroll
  const startAutoScroll = () => {
    if (!isMobile || autoScrollPausedRef.current || !isAutoScrollActiveRef.current) return;
    
    // Clear any existing interval
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    
    // Start new interval for auto-scroll
    autoScrollIntervalRef.current = setInterval(() => {
      if (isAutoScrollActiveRef.current && !autoScrollPausedRef.current && !isSwipingRef.current && !isTransitioning) {
        scrollRight();
      }
    }, 5000); // Auto-scroll every 5 seconds
  };

  // Stop auto-scroll
  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
    autoScrollPausedRef.current = true;
    isAutoScrollActiveRef.current = false;
  };

  // Resume auto-scroll with confirmation delay
  const resumeAutoScrollWithDelay = () => {
    // Clear any existing confirmation timeout
    if (swipeConfirmationTimeoutRef.current) {
      clearTimeout(swipeConfirmationTimeoutRef.current);
    }
    
    // Wait 2-3 seconds to confirm swipe has stopped before resuming auto-scroll
    swipeConfirmationTimeoutRef.current = setTimeout(() => {
      if (!isSwipingRef.current && !isTransitioning) {
        autoScrollPausedRef.current = false;
        isAutoScrollActiveRef.current = true;
        lastInteractionTimeRef.current = Date.now();
        startAutoScroll();
      }
    }, 3000); // 3 seconds delay to confirm swipe has stopped
  };

  // Initialize auto-scroll
  useEffect(() => {
    if (isMobile) {
      startAutoScroll();
    }
    
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      if (swipeConfirmationTimeoutRef.current) {
        clearTimeout(swipeConfirmationTimeoutRef.current);
      }
    };
  }, [isMobile]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
    isSwipingRef.current = true;
    swipeProcessedRef.current = false;
    setIsTransitioning(false);
    
    // Stop auto-scroll immediately when swipe starts
    stopAutoScroll();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart !== null) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !isMobile || isTransitioning) {
      isSwipingRef.current = false;
      resumeAutoScrollWithDelay();
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (!swipeProcessedRef.current && (isLeftSwipe || isRightSwipe)) {
      swipeProcessedRef.current = true;
      setIsTransitioning(true);
      
      if (isLeftSwipe) {
        scrollRight();
      } else if (isRightSwipe) {
        scrollLeft();
      }
    } else {
      // If swipe distance was too small, resume auto-scroll
      isSwipingRef.current = false;
      resumeAutoScrollWithDelay();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const scrollLeft = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      if (prev <= 0) {
        return countries.length - 1;
      }
      return prev - 1;
    });
    
    // After transition completes
    setTimeout(() => {
      setIsTransitioning(false);
      isSwipingRef.current = false;
      resumeAutoScrollWithDelay();
    }, 300);
  };

  const scrollRight = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      if (prev >= countries.length - 1) {
        return 0;
      }
      return prev + 1;
    });
    
    // After transition completes
    setTimeout(() => {
      setIsTransitioning(false);
      isSwipingRef.current = false;
      resumeAutoScrollWithDelay();
    }, 300);
  };

  const nextCard = () => {
    if (isTransitioning) return;
    stopAutoScroll();
    setIsTransitioning(true);
    
    setCurrentIndex(prev => {
      if (prev >= countries.length - 1) {
        return 0;
      }
      return prev + 1;
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
      resumeAutoScrollWithDelay();
    }, 300);
  };

  const prevCard = () => {
    if (isTransitioning) return;
    stopAutoScroll();
    setIsTransitioning(true);
    
    setCurrentIndex(prev => {
      if (prev <= 0) {
        return countries.length - 1;
      }
      return prev - 1;
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
      resumeAutoScrollWithDelay();
    }, 300);
  };

  return (
    <section ref={sectionRef} className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empowering Your Global Ambitions
          </h2>
          <p className="sm:text-med md:text-lg text-center text-gray-600 max-w-4xl mx-auto">
            Secure your place at a top-ranked international university. We provide the expert admissions and visa guidance you need to turn your study abroad goals into a global career.
          </p>
        </div>

        {/* Mobile & Tablet Carousel */}
        <div className="sm:hidden lg:hidden relative">
          <button
            onClick={prevCard}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous card"
            disabled={isTransitioning}
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextCard}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Next card"
            disabled={isTransitioning}
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80%] mx-2 snap-center"
              >
                <div 
                  className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ${
                    index === currentIndex ? 'scale-100' : 'scale-95 opacity-80'
                  }`}
                  onClick={() => handleCountryClick(country.path)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="h-48 relative">
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={country.image} 
                        alt={country.name} 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className={`absolute inset-0 flex items-bottom mt-32 justify-center text-center px-4 transition-all duration-700`}>
                      <h3 className="text-xl font-bold text-white">{country.name}</h3>
                    </div>
                  </div>
                </div>
               </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:grid lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div key={index}>
              <div className="w-[80%] sm:w-[90%] md:w-full mx-auto">
                <div 
                  className="relative overflow-hidden rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
                  onClick={() => handleCountryClick(country.path)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="h-48 relative">
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={country.image} 
                        alt={country.name} 
                        className="w-full h-full object-cover object-top" 
                      />
                    </div>
                    <div className={`absolute inset-0 flex mt-28 items-center justify-center text-bottom text-black px-4 transition-all duration-700`}>
                      <h3 className="text-xl font-bold text-white">{country.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-gray-500 text-sm">
            Over 10,000+ students successfully placed in these destinations
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;