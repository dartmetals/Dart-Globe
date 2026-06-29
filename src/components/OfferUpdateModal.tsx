// OfferUpdateModal.tsx
// "Latest Update" notification popup — redesigned to match the new DartGlobe
// "Your UK Journey Starts Here" poster (navy / maroon / dark-teal / gold palette).
//
// Sizing now intentionally mirrors PopupRegisterForm exactly: w-full max-w-2xl h-[80vh],
// rounded-3xl, shadow-2xl, overflow-hidden, with the content area scrollable
// (flex-1 overflow-y-auto). That gives this modal the SAME width/height behaviour as the
// register form on mobile, tablet and desktop — you see the top of the poster first and
// scroll down inside the box to reach the contact row / locations footer, exactly like the
// register form does today.

import React, { useEffect, useState } from 'react';
import {
  X,
  Bell,
  Calendar,
  Users,
  FileText,
  Award,
  Stamp,
  Phone,
  Globe,
  MapPin,
  Plane,
} from 'lucide-react';

interface OfferUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimNow: () => void;
}

const OfferUpdateModal: React.FC<OfferUpdateModalProps> = ({ isOpen, onClose, onClaimNow }) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldShow(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else if (shouldShow) {
      setIsClosing(true);
      const t = setTimeout(() => {
        setShouldShow(false);
        setIsClosing(false);
      }, 280);
      document.body.style.overflow = 'auto';
      return () => clearTimeout(t);
    }
  }, [isOpen, shouldShow]);

  if (!shouldShow) return null;

  const NAVY = '#16243F';
  const MAROON = '#8C1F2F';
  const TEAL = '#11363B';
  const GOLD = '#C9A24B';
  const DARK_CREAM = '#E8DDCC'; 
//   const CREAM = '#b9ab95'

  const services = [
    { icon: Users, bg: GOLD, title: 'EXPERT', title2: 'COUNSELLING', sub: 'Personalized Guidance' },
    { icon: FileText, bg: TEAL, title: 'UNIVERSITY', title2: 'APPLICATIONS', sub: 'Hassle-free Process' },
    { icon: Award, bg: MAROON, title: 'SCHOLARSHIP', title2: 'ASSISTANCE', sub: 'Maximize Your Benefits' },
    { icon: Stamp, bg: NAVY, title: 'VISA', title2: 'SUPPORT', sub: 'End-to-End Assistance' },
  ];

  const locations = ['Hyderabad', 'Bangalore', 'Vijayawada', 'London'];

  return (
    <div
      className={`fixed inset-0 z-[9998] flex items-center justify-center p-4 ${
        isClosing ? 'animate-ouFadeOut' : 'animate-ouFadeIn'
      }`}
      onClick={onClose}
    >
      {/* Same footprint as PopupRegisterForm: w-full max-w-2xl h-[80vh] on every device */}
      <div
        className="relative w-full max-w-2xl h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`rounded-3xl shadow-2xl overflow-hidden border border-white/40 h-full flex flex-col ${
            isClosing ? 'animate-ouSlideDown' : 'animate-ouSlideUp'
          }`}
          style={{ background: 'linear-gradient(160deg, #F8F2E4 0%, #F3ECDC 100%)', fontFamily: "'Poppins', sans-serif" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
          >
            <X size={18} className="text-gray-700" />
          </button>

          {/* Scrollable poster content — top is visible first, scroll inside the box for the rest */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-5 sm:px-7 pt-5 pb-0 relative">

              {/* Top-right image — plain rectangle, no border radius or shape mask */}
              <div className="relative">
                <img
                  src="/uk-flag.png"
                  alt=""
                  className="absolute top-0 right-0 w-[180px] h-[80px] object-cover z-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Check Your Eligibility Button - below the flag image */}
                <div className="absolute top-[88px] right-0 z-10 mt-2">
                  <div onClick={onClaimNow}>
                    <button
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{
                       background: DARK_CREAM ,
                      border: `4px solid ${MAROON}`,
                    }}
                  >
                    <div className="text-center leading-tight px-1">
                      <span className="text-white text-[10px] font-extrabold block tracking-wider cursor-pointer" style={{ color: GOLD }}>
                        CHECK YOUR
                      </span>
                      <span className="text-white text-[10px] font-extrabold block tracking-wider cursor-pointer" style={{ color: NAVY }}>
                        ELIGIBILITY
                      </span>
                    </div>
                  </button>
                  </div>
                </div>
              </div>

              {/* Notification eyebrow */}
              <div className="relative z-10 mb-3 pr-20">
                <span
                  className="inline-flex items-center gap-1 text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide"
                  style={{ background: MAROON }}
                >
                  <Bell size={10} /> LATEST UPDATE
                </span>
              </div>

              {/* Brand row - with logo image beside DartGlobe title */}
              <div className="relative z-10 flex items-center gap-3 mb-4">
                <img
                  src="/DG Logo.png"
                  alt="DartGlobe logo"
                  className="w-14 h-14 object-contain shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="leading-tight">
                    
                  <div className="flex items-center gap-2">
                    <img
                      src="/DG Logo1.png"
                      alt="DartGlobe logo"
                      className="h-6 w-6 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="text-xl font-extrabold" style={{ color: NAVY }}>DartGlobe</div>
                    
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em]" style={{ color: NAVY }}>
                    OVERSEAS EDUCATION
                  </div>
                  <div className="text-[11px] text-gray-500 italic mt-0.5">
                    — Your Gateway to UK Education —
                  </div>
                </div>
              </div>

              {/* Hero: photo column + headline column */}
              <div className="relative z-10 flex gap-3 sm:gap-4 items-stretch">
                {/* Photo column */}
                <div className="w-[34%] sm:w-[36%] shrink-0 relative min-h-[230px]">
                  <img
                    src="/poster-img1.png"
                    alt="Student starting UK journey"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Headline + offer column */}
                <div className="flex-1 flex flex-col gap-2.5 min-w-0">
                  <div>
                    <div
                      className="text-2xl sm:text-3xl"
                      style={{ fontFamily: "'Sacramento', cursive", color: GOLD, lineHeight: 1 }}
                    >
                      Your
                    </div>
                    <div
                      className="text-2xl sm:text-3xl font-black leading-[1.05] -mt-1"
                      style={{ fontFamily: "'Playfair Display', serif", color: NAVY }}
                    >
                      UK JOURNEY
                    </div>
                    <div className="relative">
                      <div
                        className="text-2xl sm:text-3xl font-black leading-[1.05]"
                        style={{ fontFamily: "'Playfair Display', serif", color: MAROON }}
                      >
                        STARTS HERE
                      </div>
                      <svg
                        className="absolute -bottom-2 left-0 w-[85%] h-4"
                        viewBox="0 0 200 20"
                        fill="none"
                      >
                        <path
                          d="M2 14 C 60 22, 140 22, 178 6"
                          stroke={GOLD}
                          strokeWidth="2"
                          strokeDasharray="1 6"
                          strokeLinecap="round"
                        />
                      </svg>
                      <Plane
                        size={16}
                        style={{ color: NAVY, transform: 'rotate(35deg)' }}
                        className="absolute -bottom-3 right-0 sm:right-2"
                      />
                    </div>
                  </div>

                  {/* Intake pill */}
                  <div
                    className="inline-flex self-start items-center gap-2 bg-white border-2 rounded-full px-3 py-1.5 shadow-sm"
                    style={{ borderColor: GOLD }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: MAROON }}
                    >
                      <Calendar size={12} className="text-white" />
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wide" style={{ color: NAVY }}>
                      SEPTEMBER 2026 INTAKE
                    </span>
                  </div>

                  {/* Offer panel */}
                  <div className="rounded-2xl shadow-lg overflow-hidden" style={{ background: TEAL }}>
                    <div className="pt-3 px-3 flex items-center gap-2">
                      <span className="flex-1 border-t border-dashed" style={{ borderColor: GOLD }} />
                      <span className="text-white text-[11px] sm:text-xs font-bold tracking-widest">SAVE UP TO</span>
                      <span className="flex-1 border-t border-dashed" style={{ borderColor: GOLD }} />
                    </div>
                    <div className="text-center leading-none px-2 relative">
                      <span
                        className="font-black text-[44px] sm:text-[56px]"
                        style={{ color: GOLD, fontFamily: "'Playfair Display', serif" }}
                      >
                        100%
                      </span>
                      <span
                        className="absolute top-1 right-2 sm:right-4 text-sm sm:text-base font-bold"
                        style={{ color: GOLD }}
                      >
                        *
                      </span>
                    </div>
                    <div
                      className="mx-2 mb-2 rounded-lg text-center py-1.5"
                      style={{ background: MAROON }}
                    >
                      <span className="text-white text-xs sm:text-sm font-extrabold tracking-wide">
                        ON IHS FEES
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services row - Dark cream background */}
              <div className="relative z-10 mt-4 rounded-2xl shadow-md px-3 py-3 grid grid-cols-2 sm:grid-cols-4 gap-y-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200" style={{ background: DARK_CREAM }}>
                {services.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 px-1 pt-3 sm:pt-0 first:pt-0">
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: s.bg }}
                    >
                      <s.icon size={16} className="text-white" />
                    </span>
                    <div className="leading-tight">
                      <div className="text-[10px] font-extrabold" style={{ color: NAVY }}>{s.title}</div>
                      <div className="text-[10px] font-extrabold" style={{ color: NAVY }}>{s.title2}</div>
                      <div className="text-[9px] text-gray-500">{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Book consultation / contact row — split into 2 columns with | in middle */}
              <div className="relative z-10 mt-4 w-full flex items-stretch">
                {/* Left column - Book consultation - Clickable */}
                <button
                  onClick={onClaimNow}
                  className="flex-1 flex flex-col justify-center pr-3 text-left cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div
                    className="text-sm sm:text-lg"
                    style={{ fontFamily: "'Sacramento', cursive", color: GOLD, lineHeight: 1 }}
                  >
                    Book Your
                  </div>
                  <div className="text-sm sm:text-base font-extrabold" style={{ color: NAVY }}>
                    FREE CONSULTATION TODAY!
                  </div>
                </button>

                {/* Divider line */}
                <div className="flex items-center px-2">
                  <div className="w-px h-10 bg-gray-300"></div>
                </div>

                {/* Right column - Contact details */}
                <div className="flex-1 flex flex-col justify-center pl-3 gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: NAVY }}>
                      <Phone size={11} className="text-white" />
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold" style={{ color: NAVY }}>+91-91333 29955</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: MAROON }}>
                      <Globe size={11} className="text-white" />
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold" style={{ color: NAVY }}>www.dartglobe.com</span>
                  </div>
                </div>
              </div>

              {/* Skyline illustration — replaced with image, no border radius, no bg color */}
              <img
                src="/uk-landmark.png"
                alt="Skyline"
                className="relative z-10 mt-4 w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Locations bar — bottom of poster, no cream color below */}
              <div className="relative z-10 mt- rounded-b-3xl" style={{ background: TEAL, marginLeft: '-28px', marginRight: '-28px', paddingLeft: '28px', paddingRight: '28px' }}>
                <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1 px-3 py-2.5">
                  {locations.map((loc, i) => (
                    <React.Fragment key={loc}>
                      <span className="inline-flex items-center gap-1 text-white text-xs sm:text-sm font-semibold">
                        <MapPin size={13} style={{ color: GOLD }} /> {loc}
                      </span>
                      {i < locations.length - 1 && <span className="text-white/40">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Sacramento&family=Poppins:wght@500;600;700;800&display=swap');

        @keyframes ouFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes ouFadeOut { from { opacity: 1; } to { opacity: 0; } }
        @keyframes ouSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ouSlideDown {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(20px); }
        }
        .animate-ouFadeIn { animation: ouFadeIn 0.25s ease-out forwards; }
        .animate-ouFadeOut { animation: ouFadeOut 0.25s ease-out forwards; }
        .animate-ouSlideUp { animation: ouSlideUp 0.35s ease-out forwards; }
        .animate-ouSlideDown { animation: ouSlideDown 0.28s ease-in forwards; }
      `}</style>
    </div>
  );
};

export default OfferUpdateModal;