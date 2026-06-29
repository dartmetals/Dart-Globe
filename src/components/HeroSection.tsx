import React, { useState, useEffect } from "react";
import StatsSection from "./StatsSection";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, FileText, Award, Stamp, Plane, ChevronLeft, ChevronRight, BadgeCheck, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  const NAVY = '#16243F';
  const MAROON = '#8C1F2F';
  const TEAL = '#11363B';
  const GOLD = '#C9A24B';
  const PARCHMENT = '#F8F3E8';
  // const DARK_CREAM = '#E8DDCC';

  const slides = [
    {
      id: 1,
      title: "Your UK JOURNEY",
      subtitle: "STARTS HERE",
      description: "Get expert counselling, university applications, scholarship assistance, and visa support.",
      image: "/poster-img1.png",
      buttonText: "Check Your Eligibility",
      isLatestUpdate: true,
      showServices: true,
      showIntake: true,
      showOffer: true,
      showFlag: true,
      showEligibility: true
    },
    // {
    //   id: 2,
    //   title: "Build Your Global Future",
    //   subtitle: "With Confidence",
    //   description: "Your international career starts with the right guidance. Join hundreds of students at top-ranked universities with our expert admissions and visa support.",
    //   image: "/herosection4.png",
    //   buttonText: "Get Started",
    //   isLatestUpdate: false
    // },
  ];

  const services = [
    { icon: Users, bg: GOLD, title: 'EXPERT', title2: 'COUNSELLING', sub: 'Personalized Guidance' },
    { icon: FileText, bg: TEAL, title: 'UNIVERSITY', title2: 'APPLICATIONS', sub: 'Hassle-free Process' },
    { icon: Award, bg: MAROON, title: 'SCHOLARSHIP', title2: 'ASSISTANCE', sub: 'Maximize Your Benefits' },
    { icon: Stamp, bg: NAVY, title: 'VISA', title2: 'SUPPORT', sub: 'End-to-End Assistance' },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // const handleDotClick = (index: number) => {
  //   setCurrentSlide(index);
  // };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section
      className={`w-full py-12 md:py-2 px-6 relative overflow-hidden ${currentSlideData.isLatestUpdate ? 'text-white' : 'text-black'}`}
      style={{
        background: currentSlideData.isLatestUpdate
          ? `radial-gradient(circle at 12% 10%, rgba(201,162,75,0.32), transparent 40%), radial-gradient(circle at 92% 0%, rgba(140,31,47,0.38), transparent 42%), radial-gradient(circle at 50% 105%, rgba(201,162,75,0.12), transparent 55%), linear-gradient(160deg, #0A1322 0%, ${NAVY} 38%, ${TEAL} 80%, #0A2024 100%)`
          : '#EBF1FA',
      }}
    >
      {/* Fine gold frame, certificate-like — only for the latest-update slide */}
      {currentSlideData.isLatestUpdate && (
        <>
          <div className="pointer-events-none absolute inset-2 md:inset-4 rounded-[28px] border opacity-25" style={{ borderColor: GOLD }}></div>
          <div className="pointer-events-none absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 rounded-tl-xl opacity-60" style={{ borderColor: GOLD }}></div>
          <div className="pointer-events-none absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 rounded-tr-xl opacity-60" style={{ borderColor: GOLD }}></div>
          <div className="pointer-events-none absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 rounded-bl-xl opacity-60" style={{ borderColor: GOLD }}></div>
          <div className="pointer-events-none absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 rounded-br-xl opacity-60" style={{ borderColor: GOLD }}></div>

          {/* Ambient decorative compass / great-circle motif, evokes the UK flight route, slow ambient rotation */}
          <svg
            className="pointer-events-none absolute -top-16 right-0 w-[460px] h-[460px] opacity-[0.12] hidden md:block"
            viewBox="0 0 200 200"
            fill="none"
            style={{ animation: 'heroSpin 140s linear infinite' }}
          >
            <circle cx="100" cy="100" r="92" stroke={GOLD} strokeWidth="0.6" />
            <circle cx="100" cy="100" r="62" stroke={GOLD} strokeWidth="0.6" />
            <circle cx="100" cy="100" r="34" stroke={GOLD} strokeWidth="0.6" />
            <path d="M100 8 V192 M8 100 H192" stroke={GOLD} strokeWidth="0.6" />
            <path d="M30 30 L170 170 M170 30 L30 170" stroke={GOLD} strokeWidth="0.4" />
          </svg>
          <style>{`@keyframes heroSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

          {/* Soft route-line texture, lower-left */}
          <svg className="pointer-events-none absolute -bottom-10 -left-10 w-[360px] h-[360px] opacity-[0.10] hidden md:block" viewBox="0 0 200 200" fill="none">
            <path d="M10 180 C 60 120, 90 160, 130 90 S 170 40, 190 10" stroke={GOLD} strokeWidth="1" strokeDasharray="3 6" strokeLinecap="round" />
          </svg>
        </>
      )}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-2 items-start relative z-[1]">

        {/* LEFT CONTENT */}
        <div className="md:col-span-7 mt-20 md:mt-28 text-left transition-all duration-500">

          {/* Latest Update Badge - Only for slide 1 */}
          {currentSlideData.isLatestUpdate && (
            <div
              className={`mb-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
            >
              <span
                className="inline-flex items-center gap-1.5 text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wide shadow-[0_4px_14px_-2px_rgba(140,31,47,0.45)]"
                style={{ background: `linear-gradient(135deg, ${MAROON}, #6e1825)` }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: GOLD }}></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: GOLD }}></span>
                </span>
                LATEST UPDATE
              </span>
            </div>
          )}

          {/* Title */}
          {currentSlideData.isLatestUpdate ? (
            <div className={`transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <div className="text-2xl sm:text-3xl" style={{ fontFamily: "'Sacramento', cursive", color: GOLD, lineHeight: 1 }}>
                Your
              </div>
              <div
                className="text-3xl sm:text-4xl md:text-[3.4rem] font-black leading-[1.03] -mt-1 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: '#F5F2EA', textShadow: '0 2px 18px rgba(0,0,0,0.35)' }}
              >
                UK JOURNEY
              </div>
              <div className="relative inline-block">
                <div
                  className="text-3xl sm:text-4xl md:text-[3.4rem] font-black leading-[1.03] tracking-tight bg-clip-text text-transparent"
                  style={{ fontFamily: "'Playfair Display', serif", backgroundImage: `linear-gradient(100deg, ${GOLD}, #EBD9A8 45%, ${GOLD})` }}
                >
                  STARTS HERE
                </div>
                <svg className="absolute -bottom-2 left-0 w-[85%] h-4" viewBox="0 0 200 20" fill="none">
                  <path d="M2 14 C 60 22, 140 22, 178 6" stroke={GOLD} strokeWidth="2" strokeDasharray="1 6" strokeLinecap="round" />
                </svg>
                <Plane size={18} style={{ color: GOLD, transform: 'rotate(35deg)' }} className="absolute -bottom-1 right-0 sm:left-102 drop-shadow-sm" />
              </div>
            </div>
          ) : (
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-left text-black">
              {currentSlideData.title} <span className="block text-black">{currentSlideData.subtitle}</span>
            </h1>
          )}

          {/* Description */}
          <p
            className={`mt-4 sm:text-lg md:text-lg text-left max-w-3xl transition-all duration-700 delay-150 ${currentSlideData.isLatestUpdate ? 'text-[#D8E0EE]' : 'text-black'} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ opacity: mounted ? 0.9 : undefined }}
          >
            {currentSlideData.description}
          </p>

          {/* Intake & Offer Row - 2 columns on desktop with vertical line between */}
          {currentSlideData.isLatestUpdate && (
            <div
              className={`mt-4 flex flex-col md:flex-row items-stretch gap-3 md:gap-0 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            >
              {/* Left Column - Intake Pill */}
              <div className="flex-1 flex items-center justify-center md:justify-start">
                <div
                  className="inline-flex items-center gap-2 bg-white border-2 rounded-full px-4 py-2 shadow-[0_6px_16px_-4px_rgba(22,36,63,0.18)] hover:shadow-[0_8px_20px_-4px_rgba(22,36,63,0.26)] transition-shadow duration-300"
                  style={{ borderColor: GOLD }}
                >
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: `linear-gradient(135deg, ${MAROON}, #6e1825)` }}>
                    <Calendar size={18} className="text-white" />
                  </span>
                  <span className="text-[12px] sm:text-[14px] font-extrabold tracking-wide" style={{ color: NAVY }}>
                    SEPTEMBER 2026 INTAKE
                  </span>
                  <span className="text-[12px] sm:text-[12px] font-bold text-white px-2 py-0.5 rounded-full" style={{ background: MAROON }}>
                    LIMITED SEATS
                  </span>
                </div>
              </div>

              {/* Vertical Dashed Line - Hidden on mobile, visible on desktop */}
              <div className="hidden md:flex items-center justify-center px-2">
                <div className="w-px h-12 border-l-2 border-dashed" style={{ borderColor: GOLD }}></div>
              </div>

              {/* Right Column - Offer Panel */}
              <div className="flex-1 flex items-center justify-center md:justify-start">
                <div
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-[0_6px_16px_-4px_rgba(22,36,63,0.18)] hover:shadow-[0_8px_20px_-4px_rgba(22,36,63,0.26)] transition-shadow duration-300"
                  style={{ border: `2px solid ${GOLD}` }}
                >
                  <span className="text-[10px] sm:text-[12px] font-bold tracking-widest" style={{ color: NAVY }}>SAVE UP TO</span>
                  <span className="font-black text-2xl sm:text-3xl" style={{ color: GOLD, fontFamily: "'Playfair Display', serif" }}>
                    100%
                  </span>
                  <span className="text-[8px] sm:text-[16px] font-bold text-white px-2 py-0.5 rounded-full" style={{ background: MAROON }}>
                    ON IHS FEES
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div
            className={`mt-6 flex items-center gap-4 justify-start transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          >
            <button
              onClick={() => {
                if (currentSlideData.isLatestUpdate) {
                  navigate("/contact-us");
                } else {
                  navigate("/contact-us");
                }
              }}
              className={
                currentSlideData.isLatestUpdate
                  ? "group relative px-7 py-3 font-semibold rounded-4xl cursor-pointer overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-105 active:-translate-y-1"
                  : "px-6 py-3 border border-2 bg-[#EBF1FA] md:border-[#FF0000] border-purple-700 text-black font-semibold rounded-4xl shadow md:hover:bg-[#FF0000] hover:bg-purple-800 active:bg-purple-800 active:scale-105 active:-translate-y-1 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
              }
              style={
                currentSlideData.isLatestUpdate
                  ? {
                      background: `linear-gradient(135deg, ${GOLD}, #E0BD6F)`,
                      color: NAVY,
                      boxShadow: `0 10px 26px -8px rgba(201,162,75,0.55), 0 0 0 1px rgba(255,255,255,0.25) inset`,
                    }
                  : undefined
              }
            >
              {currentSlideData.isLatestUpdate && (
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
              )}
              <span className="relative z-[1]">{currentSlideData.buttonText}</span>
            </button>

            {currentSlideData.isLatestUpdate && (
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#E7DEC3]">
                <BadgeCheck size={16} style={{ color: GOLD }} />
                Trusted by 1000+ students
              </span>
            )}
          </div>
        </div>

        {/* RIGHT IMAGE - 30% */}
        <div className={`md:col-span-3 flex justify-center md:justify-end relative ${currentSlideData.isLatestUpdate ? 'mt-12 md:mt-24' : 'mt-12 md:mt-30'}`}>
          {currentSlideData.isLatestUpdate ? (
            <div
              className={`relative transition-all duration-700 delay-150 ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
            >
              {/* Soft glow behind the card, stronger now that the backdrop is dark */}
              <div
                className="absolute -inset-6 rounded-[30px] blur-3xl opacity-70"
                style={{ background: `radial-gradient(circle, ${GOLD}66, transparent 70%)` }}
              ></div>
              <div
                className="absolute -inset-3 rounded-[26px] blur-xl opacity-40"
                style={{ background: `radial-gradient(circle, ${MAROON}55, transparent 70%)` }}
              ></div>

              {/* Boarding-pass style frame */}
              <div
                className="relative p-2 rounded-[22px] shadow-[0_28px_60px_-14px_rgba(0,0,0,0.55)]"
                style={{ background: `linear-gradient(155deg, ${PARCHMENT}, #ffffff)`, border: `1px solid ${GOLD}66` }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
                    className="w-full h-[320px] max-w-sm relative z-10 transition-transform duration-700 object-cover hover:scale-[1.03]"
                  />
                  {/* Subtle bottom gradient for legibility/polish */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent"></div>
                </div>

                {/* Wax-seal style badge, riding the corner */}
                <div
                  className="absolute -top-4 -left-4 w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-[0_6px_14px_-2px_rgba(140,31,47,0.55)] border-2 border-white"
                  style={{ background: `linear-gradient(135deg, ${MAROON}, #6e1825)` }}
                >
                  <Stamp size={18} className="text-white" />
                  <span className="text-[6px] font-bold text-white tracking-widest mt-0.5">UK VISA</span>
                </div>

                {/* Perforated / boarding-pass stub edge */}
                <div className="flex items-center gap-1.5 px-2 pt-2">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span key={i} className="h-1 w-1 rounded-full" style={{ background: `${NAVY}33` }}></span>
                  ))}
                </div>

                {/* Mini destination strip, like a boarding pass footer */}
                <div className="flex items-center justify-between px-2 pt-1.5 pb-1">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold" style={{ color: NAVY }}>
                    <MapPin size={11} style={{ color: MAROON }} />
                    IN
                  </span>
                  <span className="flex-1 mx-2 border-t border-dashed" style={{ borderColor: `${GOLD}99` }}></span>
                  <Plane size={11} style={{ color: GOLD, transform: 'rotate(90deg)' }} />
                  <span className="flex-1 mx-2 border-t border-dashed" style={{ borderColor: `${GOLD}99` }}></span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold" style={{ color: NAVY }}>
                    UK
                    <MapPin size={11} style={{ color: TEAL }} />
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <img
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-[320px] max-w-sm relative z-10 transition-opacity duration-500 object-cover"
              />
            </div>
          )}
        </div>

      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/85 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="text-gray-700" />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/85 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="text-gray-700" />
      </button>

      {/* Stats Section - Only show for second slide */}
      {!slides[currentSlide].isLatestUpdate && (
        <div className="mt-4">
          <StatsSection />
        </div>
      )}

      {/* Services Section - Only show for first slide (latest update) */}
      {currentSlideData.isLatestUpdate && (
        <div className="mt-8 relative z-[1]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-4 rounded-xl bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-[0_10px_24px_-8px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 border ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                  style={{ transitionDelay: `${350 + i * 80}ms`, borderColor: `${GOLD}40` }}
                >
                  <span
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.25)]"
                    style={{ background: `linear-gradient(135deg, ${s.bg}, ${s.bg}cc)` }}
                  >
                    <s.icon size={24} className="text-white" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-sm font-extrabold" style={{ color: NAVY }}>{s.title}</div>
                    <div className="text-sm font-extrabold" style={{ color: NAVY }}>{s.title2}</div>
                    <div className="text-xs text-gray-500">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;