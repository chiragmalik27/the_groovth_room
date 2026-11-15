"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plane } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HeroShowcase() {
  // DOM Refs for GSAP animation
  const runwayRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cabinWallRef = useRef<HTMLDivElement>(null);
  const windowFrameRef = useRef<HTMLDivElement>(null);
  const skyImageRef = useRef<HTMLDivElement>(null);
  const brandTextRef = useRef<HTMLDivElement>(null);

  // Text & Overlay Refs
  const navRef = useRef<HTMLElement>(null);
  const headingLeftRef = useRef<HTMLDivElement>(null);
  const headingRightRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger "Fly-Through Window" Timeline
  useGSAP(
    () => {
      if (!runwayRef.current || !windowFrameRef.current) return;

      const isMobile = window.innerWidth < 768;
      const targetScale = isMobile ? 26 : 22;

      // Master Timeline scrubbed to user scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: runwayRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1, // Smooth GSAP scrub
        },
      });

      // 1. Text elements and navigation smoothly fade out and drift upward
      tl.to(
        [
          navRef.current,
          headingLeftRef.current,
          headingRightRef.current,
          bottomLeftRef.current,
          ctaRef.current,
          scrollIndicatorRef.current,
        ],
        {
          opacity: 0,
          y: -35,
          stagger: 0.02,
          duration: 0.28,
          ease: "power2.inOut",
        },
        0
      );

      // 2. Brand text inside the window scales slightly and dissolves
      tl.to(
        brandTextRef.current,
        {
          opacity: 0,
          scale: 1.4,
          duration: 0.24,
          ease: "power1.inOut",
        },
        0.04
      );

      // 3. Cabin interior background dissolves
      tl.to(
        cabinWallRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.14
      );

      // 4. Centerpiece Airplane Window Frame zooms in dramatically (Fly-through effect)
      tl.to(
        windowFrameRef.current,
        {
          scale: targetScale,
          transformOrigin: "center center",
          duration: 0.8,
          ease: "power2.inOut",
        },
        0.08
      );

      // 5. Parallax sky image counter-motion for 3D optical depth
      tl.fromTo(
        skyImageRef.current,
        {
          scale: 1.22,
          y: "-3%",
        },
        {
          scale: 1.0,
          y: "0%",
          duration: 0.8,
          ease: "power1.out",
        },
        0.08
      );

      // 6. Seamless transition: sky dissolves into the canvas background of the next section
      tl.fromTo(
        revealRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.28,
          ease: "power2.out",
        },
        0.72
      );
    },
    { scope: runwayRef }
  );

  return (
    <div
      ref={runwayRef}
      className="relative w-full h-[280vh] sm:h-[300vh] bg-[#14100e]"
    >
      {/* Sticky Fullscreen Stage pinned during zoom flythrough */}
      <div
        ref={stageRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* 1. DARK MOODY CABIN INTERIOR BACKGROUND */}
        <div
          ref={cabinWallRef}
          className="absolute inset-0 z-0 pointer-events-none select-none transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #2f2722 0%, #211a16 38%, #14100e 75%, #0c0a08 100%)",
          }}
        >
          {/* Subtle warm halo glow centered behind the window */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(240,215,190,0.14)_0%,transparent_58%)]" />

          {/* Vignette border */}
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)]" />
        </div>

        {/* 2. TOP MINIMAL NAVIGATION BAR */}
        <header
          ref={navRef}
          className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-12 lg:px-16 py-6 sm:py-8 flex items-center justify-between text-[#e6e2dd]/85 pointer-events-auto select-none"
        >
          {/* Left Navigation Links */}
          <nav
            className="flex items-center gap-5 sm:gap-9 md:gap-12 text-xs sm:text-[13px] font-sans tracking-[0.08em] font-normal"
            aria-label="Hero Navigation"
          >
            <Link
              href="/about"
              className="hover:text-white transition-colors duration-150"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-white transition-colors duration-150"
            >
              Our Fleet
            </Link>
            <Link
              href="/approach"
              className="hover:text-white transition-colors duration-150"
            >
              Advantages
            </Link>
            <Link
              href="/services"
              className="hover:text-white transition-colors duration-150"
            >
              Global
            </Link>
          </nav>

          {/* Right Contact Details */}
          <div className="hidden sm:flex items-center gap-6 sm:gap-8 text-xs sm:text-[13px] font-sans tracking-wide">
            <a
              href="tel:+971544325050"
              className="hover:text-white transition-colors duration-150"
            >
              +971 54 432 5050
            </a>
            <a
              href="mailto:info@jeskojets.com"
              className="hover:text-white transition-colors duration-150"
            >
              info@jeskojets.com
            </a>
          </div>
        </header>

        {/* 3. DISPLAY HEADINGS (OVERLAPPING WINDOW SIDES) */}
        {/* Left Heading: "We are movement" */}
        <div
          ref={headingLeftRef}
          className="absolute left-5 sm:left-10 lg:left-16 xl:left-24 top-[32%] sm:top-[30%] -translate-y-1/2 z-20 pointer-events-none select-none max-w-[280px] xs:max-w-[340px] sm:max-w-md lg:max-w-xl"
        >
          <h1 className="font-sans font-black text-4xl xs:text-5xl sm:text-7xl lg:text-[88px] xl:text-[96px] leading-[0.88] tracking-[-0.04em] text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)] uppercase">
            We are
            <br />
            movement
          </h1>
        </div>

        {/* Right Heading: "We are distinction" */}
        <div
          ref={headingRightRef}
          className="absolute right-5 sm:right-10 lg:right-16 xl:right-24 top-[66%] sm:top-[68%] -translate-y-1/2 z-20 text-right pointer-events-none select-none max-w-[280px] xs:max-w-[340px] sm:max-w-md lg:max-w-xl"
        >
          <h2 className="font-sans font-black text-4xl xs:text-5xl sm:text-7xl lg:text-[88px] xl:text-[96px] leading-[0.88] tracking-[-0.04em] text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)] uppercase">
            We are
            <br />
            distinction
          </h2>
        </div>

        {/* 4. CENTERPIECE: REALISTIC AIRPLANE CABIN WINDOW */}
        <div
          ref={windowFrameRef}
          className="relative z-10 flex items-center justify-center select-none"
          style={{
            willChange: "transform",
            transformOrigin: "center center",
          }}
        >
          {/* Outer Bezel (Warm Metallic Polymer Frame) */}
          <div
            className="relative w-[280px] xs:w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] h-[430px] xs:h-[490px] sm:h-[580px] md:h-[640px] lg:h-[700px] rounded-[140px] xs:rounded-[160px] sm:rounded-[190px] md:rounded-[210px] lg:rounded-[230px] p-[16px] xs:p-[20px] sm:p-[24px] md:p-[28px] flex items-center justify-center"
            style={{
              background:
                "linear-gradient(145deg, #e7e3dc 0%, #d8d3c9 22%, #aca69c 55%, #dfdad2 82%, #cfc9be 100%)",
              boxShadow: `
                0 35px 95px rgba(0, 0, 0, 0.9),
                0 15px 40px rgba(0, 0, 0, 0.65),
                inset 0 3px 6px rgba(255, 255, 255, 0.9),
                inset 0 -6px 14px rgba(0, 0, 0, 0.45)
              `,
            }}
          >
            {/* Middle Frame (Recessed Inner Bevel Ring) */}
            <div
              className="relative w-full h-full rounded-[120px] xs:rounded-[140px] sm:rounded-[166px] md:rounded-[182px] lg:rounded-[202px] p-[10px] xs:p-[13px] sm:p-[16px] md:p-[18px] flex items-center justify-center overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #78736b 0%, #b5b0a6 32%, #958f84 68%, #4e4a43 100%)",
                boxShadow: `
                  inset 0 12px 24px rgba(0, 0, 0, 0.7),
                  inset 0 -8px 16px rgba(255, 255, 255, 0.4),
                  0 2px 6px rgba(0, 0, 0, 0.35)
                `,
              }}
            >
              {/* Airplane Window Shade Pull Tab (at Top of Middle Frame) */}
              <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 z-20 w-24 sm:w-32 md:w-36 h-5 sm:h-6 md:h-7 rounded-b-2xl bg-gradient-to-b from-[#24201d] via-[#38332c] to-[#1c1815] shadow-[inset_0_2px_4px_rgba(0,0,0,0.85),0_4px_10px_rgba(0,0,0,0.6)] border-t border-black/60 flex items-center justify-center">
                {/* Grip recess slot */}
                <div className="w-10 sm:w-14 h-1 sm:h-1.5 rounded-full bg-[#120f0d] shadow-inner opacity-75" />
              </div>

              {/* Inner Glass Pane / Aperture */}
              <div
                className="relative overflow-hidden w-full h-full rounded-[100px] xs:rounded-[120px] sm:rounded-[144px] md:rounded-[160px] lg:rounded-[180px]"
                style={{
                  boxShadow: `
                    inset 0 0 45px rgba(0, 0, 0, 0.45),
                    inset 0 4px 14px rgba(0, 0, 0, 0.6)
                  `,
                }}
              >
                {/* High Altitude Sky Image with Clouds */}
                <div ref={skyImageRef} className="absolute inset-0 z-0">
                  <Image
                    src="/images/airplane_sky.jpg"
                    alt="Bright azure blue sky with soft clouds"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover object-center scale-105"
                  />
                </div>

                {/* Glass Optical Specular Reflection Highlights */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background:
                      "linear-gradient(115deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.08) 26%, transparent 52%, rgba(255,255,255,0.06) 78%, rgba(255,255,255,0.18) 100%)",
                  }}
                />

                {/* Subtle Inner Glass Refraction Rim */}
                <div className="absolute inset-0 pointer-events-none z-10 border border-white/20 rounded-[inherit]" />

                {/* Centered Brand Text inside Sky */}
                <div
                  ref={brandTextRef}
                  className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none select-none px-4"
                >
                  <span className="font-sans font-medium text-sm xs:text-base sm:text-lg md:text-xl text-white/95 tracking-[0.28em] sm:tracking-[0.38em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] uppercase">
                    Jesko Jets
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM BAR / FOOTER OVERLAYS */}
        {/* Bottom-Left: "Your freedom to enjoy life" */}
        <div
          ref={bottomLeftRef}
          className="absolute left-5 sm:left-10 lg:left-16 xl:left-24 bottom-6 sm:bottom-10 z-20 max-w-[260px] xs:max-w-[300px] sm:max-w-[340px] pointer-events-none select-none"
        >
          <h3 className="font-sans font-bold text-xs sm:text-sm text-white tracking-wide mb-1.5">
            Your freedom to enjoy life
          </h3>
          <div className="w-8 sm:w-10 h-[1px] bg-white/40 my-2.5" />
          <p className="font-sans text-[11px] sm:text-xs leading-relaxed text-[#d4cec5]/80">
            Every flight is designed around your comfort, time, and ambitions —
            so you can focus on what truly matters, while we take care of
            everything else.
          </p>
        </div>

        {/* Bottom-Center: Pill CTA Button ("Book the Flight") */}
        <div
          ref={ctaRef}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-auto"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2.5 sm:gap-3 bg-white text-[#15110f] pl-5 sm:pl-6 pr-2 py-1.5 sm:py-2 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.65)] hover:bg-[#f6f2eb] hover:shadow-[0_16px_50px_rgba(0,0,0,0.85)] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span className="font-sans font-bold text-xs sm:text-sm tracking-wide">
              Book the Flight
            </span>
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#15110f] text-white flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current rotate-45" />
            </span>
          </Link>
        </div>

        {/* Bottom-Right: Subtle Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute right-5 sm:right-10 lg:right-16 xl:right-24 bottom-6 sm:bottom-10 z-20 flex flex-col items-end pointer-events-none select-none max-w-[260px] sm:max-w-none"
        >
          <div className="w-36 sm:w-56 lg:w-64 h-[1px] bg-white/30 mb-2" />
          <div className="w-full flex items-center justify-between gap-3 text-[9px] sm:text-[10px] font-mono tracking-[0.18em] sm:tracking-[0.24em] text-white/70 uppercase">
            <span>SCROLL DOWN</span>
            <span>TO START THE JOURNEY</span>
          </div>
        </div>

        {/* 6. SEAMLESS REVEAL TRANSITION TO NEXT SECTION */}
        <div
          ref={revealRef}
          className="absolute inset-0 z-40 pointer-events-none opacity-0 flex flex-col justify-end"
          style={{
            background:
              "linear-gradient(180deg, rgba(243,240,232,0) 0%, rgba(243,240,232,0.8) 70%, #f3f0e8 100%)",
          }}
        />
      </div>
    </div>
  );
}
