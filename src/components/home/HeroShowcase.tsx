"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface TabItem {
  id: string;
  label: string;
  badge: string;
  eyebrow: string;
  headline: string;
  description: string;
  image: string;
  status: string;
  ctaText: string;
  ctaHref: string;
}

const TABS: TabItem[] = [
  {
    id: "room",
    label: "The Room",
    badge: "FOUNDER-LED CONSULTANCY",
    eyebrow: "THE GROVVTH ROOM • HEADQUARTERS",
    headline: "WHERE BUSINESS STRATEGY MEETS EXECUTION",
    description:
      "A collaborative room where founders bring the context, and we bring clarity, structure, and execution velocity.",
    image: "/images/grovvth_room_meeting.jpg",
    status: "In Session • Founder Consultations Active",
    ctaText: "Start a Conversation",
    ctaHref: "/contact",
  },
  {
    id: "strategy",
    label: "Strategy",
    badge: "PILLAR 01 • POSITION & PLAN",
    eyebrow: "BUSINESS STRATEGY & GROWTH PLANNING",
    headline: "CLEAR BUSINESS MODELS & REVENUE ENGINES",
    description:
      "Strategic business planning covering revenue engines, competitor benchmarking, pricing power, and scalable motions.",
    image: "/images/grovvth_room_meeting.jpg",
    status: "Active Workstream • Strategic Advisory",
    ctaText: "Explore Strategy",
    ctaHref: "/services/business-strategy-growth-planning",
  },
  {
    id: "enablement",
    label: "Enablement",
    badge: "PILLAR 02 • BRAND & MARKET",
    eyebrow: "FMCG BRAND & MARKET READINESS",
    headline: "FMCG POSITIONING & RETAIL READINESS",
    description:
      "Price-pack strategy, Modern & General Trade channel mapping, and packaging coordination before full market launch.",
    image: "/images/grovvth_room_meeting.jpg",
    status: "Market Enablement • Retail Mapping",
    ctaText: "Explore FMCG",
    ctaHref: "/services/fmcg-brand-market-enablement",
  },
  {
    id: "distribution",
    label: "Distribution",
    badge: "PILLAR 03 • MARKET REACH",
    eyebrow: "DISTRIBUTION & CHANNEL MANAGEMENT",
    headline: "DISTRIBUTOR NETWORKS & CHANNEL ECONOMICS",
    description:
      "Distributor mapping, reseller outreach, partner onboarding workflows, and margin assessment that scale sustainably.",
    image: "/images/grovvth_room_meeting.jpg",
    status: "Network Expansion • Channel Velocity",
    ctaText: "Explore Distribution",
    ctaHref: "/services/distribution-channel-development",
  },
  {
    id: "advisory",
    label: "Advisory",
    badge: "ONE-ON-ONE • FOUNDER CLARITY",
    eyebrow: "EXECUTIVE SOUNDING BOARD",
    headline: "AN OBJECTIVE SOUNDING BOARD FOR FOUNDERS",
    description:
      "Confidential advisory sessions to challenge biases, evaluate pitch feedback, and maintain decisive momentum.",
    image: "/images/grovvth_room_meeting.jpg",
    status: "1-on-1 Sessions • Executive Clarity",
    ctaText: "Book Advisory",
    ctaHref: "/services/one-on-one-founder-assistance",
  },
];

export default function HeroShowcase() {
  const [activeTabId, setActiveTabId] = useState<string>("room");
  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  // DOM Refs for GSAP animation
  const runwayRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const windowFrameRef = useRef<HTMLDivElement>(null);
  const windowImageRef = useRef<HTMLDivElement>(null);
  const roomContentRef = useRef<HTMLDivElement>(null);
  const tabsRailRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger "Window / Portal" Zoom Animation
  useGSAP(
    () => {
      if (!runwayRef.current || !windowFrameRef.current) return;

      const isMobile = window.innerWidth < 768;

      // Master Timeline scrubbed to user scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: runwayRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2, // Silky smooth GSAP scrub
        },
      });

      // 1. Hero text floats up and gently dissolves
      tl.to(
        heroContentRef.current,
        {
          opacity: 0,
          y: -70,
          scale: 0.95,
          duration: 0.32,
          ease: "power2.inOut",
        },
        0
      );

      // 2. The Window expands from an inset framed card into 100% full screen
      tl.fromTo(
        windowFrameRef.current,
        {
          width: isMobile ? "92vw" : "84vw",
          maxWidth: isMobile ? "92vw" : "1152px",
          height: isMobile ? "46vh" : "54vh",
          borderRadius: isMobile ? "22px" : "32px",
          borderWidth: isMobile ? "3px" : "5px",
          borderColor: "rgba(255, 255, 255, 0.45)",
          y: isMobile ? 18 : 28,
          scale: 1,
        },
        {
          width: "100vw",
          maxWidth: "100vw",
          height: "100vh",
          borderRadius: "0px",
          borderWidth: "0px",
          borderColor: "rgba(255, 255, 255, 0)",
          y: 0,
          scale: 1,
          duration: 0.72,
          ease: "power2.inOut",
        },
        0.08
      );

      // 3. Counter-scale the image inside to create authentic 3D optical depth
      tl.fromTo(
        windowImageRef.current,
        {
          scale: 1.18,
          y: "-3%",
        },
        {
          scale: 1.0,
          y: "0%",
          duration: 0.72,
          ease: "power1.out",
        },
        0.08
      );

      // 4. Reveal the full room details & tabs as you pass through the glass
      tl.fromTo(
        roomContentRef.current,
        {
          opacity: 0.2,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        0.5
      );

      tl.fromTo(
        tabsRailRef.current,
        {
          opacity: 0,
          x: isMobile ? 0 : 45,
          y: isMobile ? 30 : 0,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        0.55
      );
    },
    { scope: runwayRef }
  );

  return (
    <div
      ref={runwayRef}
      className="relative w-full h-[260vh] sm:h-[280vh]"
      style={{
        background: `
          linear-gradient(180deg, 
            #020817 0%, 
            #06163a 20%, 
            #0b2b6b 42%, 
            #1d4ed8 65%, 
            #60a5fa 82%, 
            #bfdbfe 92%, 
            #f4f1ea 100%
          )
        `,
      }}
    >
      {/* Sticky viewport pins the camera scene */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between pt-24 pb-6 sm:py-10 px-4 sm:px-6 overflow-hidden">
        
        {/* 1. HERO CONTENT: Floats up and fades out as you zoom into the window */}
        <div
          ref={heroContentRef}
          className="relative z-20 flex flex-col items-center text-center max-w-4xl px-4 mt-2 sm:mt-6 select-none"
        >
          {/* Eyebrow / Announcement Pill */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#071c42]/85 border border-blue-400/25 backdrop-blur-md mb-4 sm:mb-6 shadow-[0_4px_20px_rgba(2,8,23,0.35)]">
            <span className="font-sans text-xs sm:text-[13px] font-medium tracking-wide text-[#f4f1ea]">
              Your Partner in Building and Growing Businesses
            </span>
          </div>

          {/* Large Serif Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] sm:leading-[1.04] tracking-tightest text-[#f4f1ea] font-normal drop-shadow-md mb-4 sm:mb-5">
            Build Stronger Foundations. <br className="hidden sm:inline" />
            <span className="italic font-light text-blue-200">Create Room</span>{" "}
            to Grow.
          </h1>

          {/* Supporting Paragraph */}
          <p className="font-sans text-xs sm:text-base md:text-lg text-[#f4f1ea]/85 max-w-2xl mx-auto leading-relaxed font-normal mb-5 sm:mb-6 line-clamp-2 sm:line-clamp-none text-balance">
            The Grovvth Room brings business strategy, marketing, market
            enablement and digital capabilities together to help businesses build,
            navigate and grow with clarity.
          </p>

          {/* Two CTAs */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-5 w-auto">
            {/* Primary CTA: Cream "Explore Our Services" Button */}
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 bg-[#f4f1ea] text-[#020817] px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide hover:bg-white hover:shadow-[0_8px_30px_rgba(244,241,234,0.3)] transition-all duration-200"
            >
              <span>Explore Our Services</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Secondary CTA: Royal Blue "Let's Discuss Your Business" Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#1d4ed8]/70 hover:bg-[#1d4ed8] border border-blue-400/30 text-[#f4f1ea] px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm transition-all duration-200"
            >
              <span>Let&apos;s Discuss</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 2. THE WINDOW FRAME: Scales up from inset card to 100% full-screen */}
        <div
          ref={windowFrameRef}
          className="relative overflow-hidden bg-[#030b1e] shadow-[0_30px_90px_rgba(2,8,23,0.85)] z-10 flex flex-col justify-end"
          style={{
            willChange: "width, height, transform, border-radius",
            transformOrigin: "center center",
          }}
        >
          {/* View through the window: Photographic Image with Royal Blue Lighting Overlay */}
          <div ref={windowImageRef} className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={activeTab.image}
                  alt={activeTab.headline}
                  fill
                  priority
                  className="object-cover object-center scale-[1.02]"
                />
                {/* Royal Blue Multi-layer Atmosphere Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#051329]/75 to-[#08204d]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/85 via-[#051329]/45 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Window Glass Highlight Sheen */}
          <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-white/[0.08] via-transparent to-transparent" />

          {/* 3. INSIDE THE ROOM: Interactive Consultation Workspace & Tabs */}
          <div className="relative z-20 w-full h-full grid grid-cols-1 md:grid-cols-12 min-h-full">
            {/* Left 9 Columns: Room Active Content */}
            <div
              ref={roomContentRef}
              className="md:col-span-9 flex flex-col justify-between p-6 sm:p-10 lg:p-12 min-h-[300px] md:min-h-full"
            >
              {/* Top Row: Left Mono Label & Right Pill */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f4f1ea]">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span>THE GROVVTH ROOM</span>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-200 bg-[#0c2656]/90 border border-blue-400/25 px-3.5 py-1 rounded-full backdrop-blur-md">
                  {activeTab.badge}
                </span>
              </div>

              {/* Center Content: Eyebrow + Headline */}
              <div className="my-auto py-4 sm:py-6">
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#c5a66a] mb-2 font-medium">
                  {activeTab.eyebrow}
                </div>
                <h2 className="font-serif text-xl sm:text-3xl lg:text-5xl font-normal tracking-tight text-[#f4f1ea] uppercase leading-[1.1] max-w-2xl drop-shadow-md">
                  {activeTab.headline}
                </h2>
              </div>

              {/* Bottom Row: Status Dot, Description, and CTA Button */}
              <div className="pt-4 sm:pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-5">
                <div className="space-y-1.5 max-w-lg">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                    </span>
                    <span className="text-xs font-mono font-medium text-blue-300 tracking-wide">
                      {activeTab.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#f4f1ea]/85 leading-relaxed font-sans font-light">
                    {activeTab.description}
                  </p>
                </div>

                <Link
                  href={activeTab.ctaHref}
                  className="group shrink-0 inline-flex items-center gap-2 bg-[#93c5fd] hover:bg-white text-[#020817] font-semibold text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                >
                  <span>{activeTab.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right 3 Columns: 5 Equal-Height Workstream Tabs */}
            <div
              ref={tabsRailRef}
              className="md:col-span-3 flex flex-row md:flex-col divide-x md:divide-x-0 md:divide-y divide-white/10 bg-[#06183a]/95 border-t md:border-t-0 md:border-l border-white/15 overflow-x-auto md:overflow-visible backdrop-blur-md"
            >
              {TABS.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    className={`flex-1 min-w-[120px] md:min-w-0 flex items-center justify-between px-4 sm:px-6 py-3.5 lg:py-5 text-left transition-all duration-200 focus:outline-none ${
                      isActive
                        ? "bg-[#bfdbfe] text-[#020817] font-semibold shadow-inner"
                        : "bg-transparent text-[#f4f1ea]/75 hover:text-white hover:bg-[#0c2b64]"
                    }`}
                  >
                    <span className="text-xs sm:text-sm lg:text-base tracking-wide font-sans">
                      {tab.label}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isActive ? "bg-[#020817]" : "bg-blue-300/30"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
