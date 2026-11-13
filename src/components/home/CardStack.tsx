"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Service } from "@/types";

interface CardStackProps {
  services: Service[];
}

// 8 Bespoke Artistic Gradients & Visual Atmospheres matching 21st.dev reference
const CARD_THEMES = [
  {
    // 01 Legal Assistance & Business Registration: Architectural Obsidian & Gold
    bgGradient: "linear-gradient(135deg, #04120e 0%, #0c2d22 50%, #154234 100%)",
    accentColor: "#c5a66a",
    glowColor: "rgba(197, 166, 106, 0.25)",
    artPattern: (
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="gold-glow-1" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#c5a66a" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#0f3a2c" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#gold-glow-1)" />
          {/* Subtle geometric legal architecture curves */}
          <circle cx="85%" cy="20%" r="180" fill="none" stroke="#c5a66a" strokeWidth="0.8" opacity="0.3" />
          <circle cx="85%" cy="20%" r="240" fill="none" stroke="#c5a66a" strokeWidth="0.5" opacity="0.2" />
          <circle cx="85%" cy="20%" r="300" fill="none" stroke="#c5a66a" strokeWidth="0.3" opacity="0.15" />
        </svg>
      </div>
    ),
  },
  {
    // 02 Marketing & Digital Growth: Emerald Liquid Energy & Waves
    bgGradient: "linear-gradient(135deg, #03140e 0%, #0d382b 45%, #186049 100%)",
    accentColor: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.25)",
    artPattern: (
      <div className="absolute inset-0 pointer-events-none opacity-35 mix-blend-screen">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="emerald-glow-2" cx="70%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#10b981" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#emerald-glow-2)" />
          {/* Dynamic flowing sine ribbons */}
          <path d="M-50,220 C100,100 250,320 400,180 C550,50 700,260 850,150" fill="none" stroke="#34d399" strokeWidth="1.2" opacity="0.3" />
          <path d="M-50,260 C120,130 280,340 430,210 C580,80 730,290 880,180" fill="none" stroke="#a7f3d0" strokeWidth="0.8" opacity="0.2" />
        </svg>
      </div>
    ),
  },
  {
    // 03 Business Strategy & Growth Planning: Deep Pine & Strategic Topography
    bgGradient: "linear-gradient(135deg, #061713 0%, #0f3529 50%, #1d5744 100%)",
    accentColor: "#e6c387",
    glowColor: "rgba(230, 195, 135, 0.22)",
    artPattern: (
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="gold-strat-3" cx="40%" cy="25%" r="75%">
              <stop offset="0%" stopColor="#e6c387" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#123c2f" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#gold-strat-3)" />
          <ellipse cx="20%" cy="80%" rx="260" ry="140" fill="none" stroke="#e6c387" strokeWidth="0.8" opacity="0.25" />
          <ellipse cx="20%" cy="80%" rx="320" ry="180" fill="none" stroke="#e6c387" strokeWidth="0.5" opacity="0.15" />
        </svg>
      </div>
    ),
  },
  {
    // 04 FMCG Brand & Market Enablement: Botanical Silk & Warm Amber
    bgGradient: "linear-gradient(135deg, #051a13 0%, #113f30 45%, #23654f 100%)",
    accentColor: "#b7c9b9",
    glowColor: "rgba(183, 201, 185, 0.25)",
    artPattern: (
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="fmcg-glow-4" cx="60%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#b7c9b9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#fmcg-glow-4)" />
          <path d="M0,100 Q200,280 400,100 T800,120" fill="none" stroke="#b7c9b9" strokeWidth="1" opacity="0.25" />
          <path d="M0,140 Q220,320 420,140 T820,160" fill="none" stroke="#c5a66a" strokeWidth="0.7" opacity="0.2" />
        </svg>
      </div>
    ),
  },
  {
    // 05 Distribution & Market Reach Setup: Dynamic Grid Networks
    bgGradient: "linear-gradient(135deg, #03140e 0%, #0b3125 50%, #195843 100%)",
    accentColor: "#6ee7b7",
    glowColor: "rgba(110, 231, 183, 0.22)",
    artPattern: (
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="dist-glow-5" cx="30%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dist-glow-5)" />
          <line x1="-50" y1="350" x2="600" y2="50" stroke="#6ee7b7" strokeWidth="1" opacity="0.2" />
          <line x1="-20" y1="380" x2="630" y2="80" stroke="#6ee7b7" strokeWidth="0.6" opacity="0.15" />
          <circle cx="320" cy="180" r="4" fill="#6ee7b7" opacity="0.6" />
          <circle cx="180" cy="240" r="3" fill="#6ee7b7" opacity="0.4" />
        </svg>
      </div>
    ),
  },
  {
    // 06 Pilot Testing & Market Validation: Quantum Ripple Waves
    bgGradient: "linear-gradient(135deg, #061914 0%, #0f3c2e 45%, #1f6b52 100%)",
    accentColor: "#d4af37",
    glowColor: "rgba(212, 175, 55, 0.25)",
    artPattern: (
      <div className="absolute inset-0 pointer-events-none opacity-35 mix-blend-screen">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="pilot-glow-6" cx="70%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#pilot-glow-6)" />
          <circle cx="70%" cy="30%" r="60" fill="none" stroke="#d4af37" strokeWidth="0.8" opacity="0.35" />
          <circle cx="70%" cy="30%" r="120" fill="none" stroke="#d4af37" strokeWidth="0.6" opacity="0.25" />
          <circle cx="70%" cy="30%" r="190" fill="none" stroke="#d4af37" strokeWidth="0.4" opacity="0.15" />
        </svg>
      </div>
    ),
  },
  {
    // 07 One-on-One Founder Assistance: Warm Executive Horizon & Halos
    bgGradient: "linear-gradient(135deg, #051611 0%, #12382c 50%, #205c49 100%)",
    accentColor: "#f3c68f",
    glowColor: "rgba(243, 198, 143, 0.25)",
    artPattern: (
      <div className="absolute inset-0 pointer-events-none opacity-35 mix-blend-screen">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="founder-glow-7" cx="25%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#f3c68f" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#c5a66a" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#founder-glow-7)" />
          <circle cx="25%" cy="35%" r="90" fill="none" stroke="#f3c68f" strokeWidth="0.7" opacity="0.3" />
          <circle cx="25%" cy="35%" r="160" fill="none" stroke="#c5a66a" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </div>
    ),
  },
  {
    // 08 Technology & Digital Enablement: Cyber Architecture & Digital Grid
    bgGradient: "linear-gradient(135deg, #04140f 0%, #0e3427 45%, #1a5742 100%)",
    accentColor: "#5eead4",
    glowColor: "rgba(94, 234, 212, 0.25)",
    artPattern: (
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="tech-glow-8" cx="65%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#5eead4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-glow-8)" />
          {/* Subtle tech isometric grid lines */}
          <path d="M100,50 L350,180 L350,400" fill="none" stroke="#5eead4" strokeWidth="0.8" opacity="0.25" />
          <path d="M200,30 L450,160 L450,380" fill="none" stroke="#5eead4" strokeWidth="0.5" opacity="0.15" />
        </svg>
      </div>
    ),
  },
];

export default function CardStack({ services }: CardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const total = services.length;
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive screen check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handlers for next / prev
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation when hovered / focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Gentle autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Drag handler for swipe gestures
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 60) {
      handlePrev();
    } else if (info.offset.x < -60) {
      handleNext();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full py-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Stack Stage Container */}
      <div
        className="relative w-full h-[460px] sm:h-[480px] md:h-[520px] flex items-center justify-center overflow-hidden"
        style={{
          perspective: isMobile ? "900px" : "1300px",
        }}
      >
        {services.map((service, index) => {
          // Circular offset relative to currentIndex (-4 to +4)
          let offset = index - currentIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          const theme = CARD_THEMES[index % CARD_THEMES.length];

          // 3D Layout calculations matching 21st.dev reference
          let x = 0;
          let y = 0;
          let rotateZ = 0;
          let rotateY = 0;
          let scale = 1;
          let zIndex = 30;
          let opacity = 1;

          if (isActive) {
            x = 0;
            y = 0;
            rotateZ = 0;
            rotateY = 0;
            scale = 1;
            zIndex = 40;
            opacity = 1;
          } else if (offset === -1) {
            // Immediate Left Card: Tilted counter-clockwise, scaled down
            x = isMobile ? -130 : -280;
            y = isMobile ? 12 : 18;
            rotateZ = isMobile ? -8 : -13;
            rotateY = isMobile ? 10 : 16;
            scale = isMobile ? 0.88 : 0.86;
            zIndex = 30;
            opacity = 0.82;
          } else if (offset === 1) {
            // Immediate Right Card: Tilted clockwise, scaled down
            x = isMobile ? 130 : 280;
            y = isMobile ? 12 : 18;
            rotateZ = isMobile ? 8 : 13;
            rotateY = isMobile ? -10 : -16;
            scale = isMobile ? 0.88 : 0.86;
            zIndex = 30;
            opacity = 0.82;
          } else if (offset === -2) {
            // Outer Left Card: Further back and rotated
            x = isMobile ? -210 : -500;
            y = isMobile ? 24 : 38;
            rotateZ = isMobile ? -14 : -24;
            rotateY = isMobile ? 16 : 26;
            scale = isMobile ? 0.76 : 0.73;
            zIndex = 20;
            opacity = 0.48;
          } else if (offset === 2) {
            // Outer Right Card: Further back and rotated
            x = isMobile ? 210 : 500;
            y = isMobile ? 24 : 38;
            rotateZ = isMobile ? 14 : 24;
            rotateY = isMobile ? -16 : -26;
            scale = isMobile ? 0.76 : 0.73;
            zIndex = 20;
            opacity = 0.48;
          } else {
            // Far hidden cards
            x = offset > 0 ? 600 : -600;
            y = 50;
            rotateZ = offset > 0 ? 30 : -30;
            scale = 0.6;
            zIndex = 10;
            opacity = 0;
          }

          if (!isVisible) return null;

          return (
            <motion.div
              key={service.slug}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              onClick={() => {
                if (!isActive) {
                  setCurrentIndex(index);
                }
              }}
              animate={{
                x,
                y,
                rotateZ,
                rotateY,
                scale,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
                mass: 0.8,
              }}
              style={{
                zIndex,
                transformStyle: "preserve-3d",
                willChange: "transform, opacity",
              }}
              className={`absolute top-auto w-[290px] sm:w-[420px] md:w-[480px] lg:w-[520px] h-[370px] sm:h-[400px] md:h-[430px] rounded-[24px] overflow-hidden cursor-pointer ${
                isActive ? "cursor-grab active:cursor-grabbing" : ""
              }`}
            >
              {/* Outer Card Shell with 21st.dev style border & shadow */}
              <div
                className="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between text-[#f4f1ea] border-2 transition-all duration-300"
                style={{
                  background: theme.bgGradient,
                  borderColor: isActive
                    ? "rgba(255, 255, 255, 0.45)"
                    : "rgba(255, 255, 255, 0.15)",
                  boxShadow: isActive
                    ? `0 24px 60px -12px rgba(4, 17, 13, 0.65), 0 0 30px -5px ${theme.glowColor}`
                    : "0 15px 40px -10px rgba(4, 17, 13, 0.45)",
                }}
              >
                {/* Custom Geometric / Mesh Ambient Graphic */}
                {theme.artPattern}

                {/* Soft Lighting Sheen Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04110d]/90 via-[#04110d]/40 to-transparent pointer-events-none" />

                {/* Card Top Row: Number Badge & Pillar Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: theme.accentColor }}
                    />
                    <span className="font-mono text-xs font-bold tracking-widest text-[#f4f1ea]/90">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[#b7c9b9] backdrop-blur-md">
                    {service.pillar}
                  </span>
                </div>

                {/* Card Middle & Bottom Content */}
                <div className="relative z-10 space-y-3 mt-auto">
                  {/* Skill Subtitle / Micro-tag */}
                  <div
                    className="font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5"
                    style={{ color: theme.accentColor }}
                  >
                    <span>{service.skill}</span>
                  </div>

                  {/* Main Service Title */}
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#f4f1ea] leading-tight font-normal">
                    {service.title}
                  </h3>

                  {/* Concise Summary Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#f4f1ea]/80 leading-relaxed font-light line-clamp-2 sm:line-clamp-3">
                    {service.summary}
                  </p>

                  {/* Bottom Action Row */}
                  <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={(e) => {
                        if (!isActive) {
                          e.preventDefault();
                          setCurrentIndex(index);
                        }
                      }}
                      className="group/link inline-flex items-center gap-2 text-xs sm:text-[13px] font-sans font-medium text-[#f4f1ea] hover:text-white transition-colors"
                    >
                      <span className="underline-offset-4 group-hover/link:underline">
                        Explore scope &amp; workstreams
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>

                    {/* Small Expand / External Icon (Matches 21st.dev reference) */}
                    <span className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Floating Left Chevron Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous service card"
          className="absolute left-2 sm:left-4 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#081d17]/80 hover:bg-[#0c2a21] border border-white/20 backdrop-blur-md flex items-center justify-center text-[#f4f1ea] hover:text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Floating Right Chevron Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next service card"
          className="absolute right-2 sm:right-4 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#081d17]/80 hover:bg-[#0c2a21] border border-white/20 backdrop-blur-md flex items-center justify-center text-[#f4f1ea] hover:text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Bottom Controls Row: 8 Pagination Dots + Active Indicator */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        {/* Pagination Dots (Matching 21st.dev reference) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0c2a21]/90 border border-white/15 backdrop-blur-md shadow-md">
          {services.map((_, dotIndex) => {
            const isDotActive = dotIndex === currentIndex;
            return (
              <button
                key={dotIndex}
                type="button"
                onClick={() => setCurrentIndex(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  isDotActive
                    ? "w-7 h-2 bg-[#f4f1ea] shadow-[0_0_8px_rgba(244,241,234,0.6)]"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            );
          })}
        </div>

        {/* Counter Info */}
        <div className="font-mono text-xs uppercase tracking-wider text-charcoal/70">
          <span className="font-bold text-charcoal">{currentIndex + 1}</span> of{" "}
          <span>{total}</span> Services
        </div>
      </div>
    </div>
  );
}

