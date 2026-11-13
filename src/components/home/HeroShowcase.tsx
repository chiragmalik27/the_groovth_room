"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

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

  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Panel ref for real-time scroll tracking
  const panelRef = useRef<HTMLDivElement>(null);

  // Scroll tracking across the entire transition zone
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start 96%", "start 18%"],
  });

  // Hermite smoothstep curve for natural, buttery settle
  const p = useTransform(scrollYProgress, (val) => {
    const t = Math.min(Math.max(val, 0), 1);
    return t * t * (3 - 2 * t);
  });

  // Gentle parallax fade & upward drift on hero content as user scrolls towards showcase
  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.3]);
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, -32]);

  // Distinct, cool 3D perspective transforms synchronized with scroll
  const rotateX = useTransform(p, [0, 1], [isMobile ? 12 : 24, 0]);
  const scale = useTransform(p, [0, 1], [isMobile ? 0.93 : 0.89, 1.0]);
  const y = useTransform(p, [0, 1], [isMobile ? 24 : 54, 0]);
  const shadowOpacity = useTransform(p, [0, 1], [0, 1]);
  const sheenOpacity = useTransform(p, [0, 1], [0.4, 0]);

  const dynamicBoxShadow = useTransform(
    shadowOpacity,
    [0, 1],
    [
      "0 12px 30px -10px rgba(4, 17, 13, 0.2)",
      "0 32px 75px -15px rgba(4, 17, 13, 0.45)",
    ]
  );

  return (
    <div
      className="relative w-full"
      style={{
        overflowX: "clip",
        background: `
          linear-gradient(180deg, 
            #04110d 0%, 
            #0f3a2c 25%, 
            #1f6b52 48%, 
            #3f9179 68%, 
            #c9ddd0 88%, 
            #f4f1ea 100%
          )
        `,
      }}
    >
      {/* 2. HERO CONTENT (Scrolls normally, with subtle smooth parallax fade as showcase enters) */}
      <section className="relative min-h-[82vh] sm:min-h-[88vh] flex flex-col items-center justify-center pt-32 pb-14 sm:pt-40 sm:pb-20 text-[#f4f1ea] px-5 sm:px-8 text-center">
        <motion.div
          className="flex flex-col items-center justify-center w-full"
          style={{
            opacity: shouldReduceMotion ? 1 : heroOpacity,
            y: shouldReduceMotion ? 0 : heroY,
          }}
        >
          {/* Eyebrow / Announcement Pill */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[rgba(12,42,33,0.7)] border border-white/[0.12] backdrop-blur-md mb-8 sm:mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
            <span className="font-sans text-xs sm:text-[13px] font-medium tracking-wide text-[#f4f1ea]">
              Your Partner in Building and Growing Businesses
            </span>
          </div>

          {/* Large Serif Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] leading-[1.08] sm:leading-[1.04] tracking-tightest text-[#f4f1ea] max-w-4xl mx-auto mb-6 sm:mb-8 font-normal drop-shadow-sm">
            Build Stronger Foundations. <br className="hidden sm:inline" />
            <span className="italic font-light text-[#f4f1ea]">Create Room</span>{" "}
            to Grow.
          </h1>

          {/* Supporting Paragraph */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#f4f1ea]/85 max-w-2xl mx-auto leading-relaxed font-normal mb-10 sm:mb-12 text-balance">
            The Grovvth Room brings business strategy, marketing, market
            enablement and digital capabilities together to help businesses build,
            navigate and grow with clarity.
          </p>

          {/* Two CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
            {/* Primary CTA: Cream "Explore Our Services" Button */}
            <Link
              href="/services"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#f4f1ea] text-[#04110d] px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-white hover:shadow-[0_8px_30px_rgba(244,241,234,0.3)] transition-all duration-200"
            >
              <span>Explore Our Services</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Secondary CTA: Dark Green "Let's Discuss Your Business" Button */}
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0f3a2c]/80 hover:bg-[#0f3a2c] border border-white/20 text-[#f4f1ea] px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm font-medium tracking-wide backdrop-blur-sm transition-all duration-200"
            >
              <span>Let&apos;s Discuss Your Business</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 3 & 4. SHOWCASE PANEL WITH SYNCHRONIZED SCROLL-DRIVEN 3D TRANSITION */}
      <section
        ref={panelRef}
        className="relative pt-6 sm:pt-12 pb-24 sm:pb-36 px-4 sm:px-6 md:px-8 flex justify-center"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          className="relative w-full max-w-6xl rounded-3xl overflow-hidden bg-[#04110d] border-4 sm:border-[6px] border-white/35 sm:border-white/45 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
          style={{
            transformOrigin: "center top",
            transformStyle: "preserve-3d",
            willChange: "transform",
            rotateX: shouldReduceMotion ? 0 : rotateX,
            scale: shouldReduceMotion ? 1 : scale,
            y: shouldReduceMotion ? 0 : y,
            boxShadow: shouldReduceMotion
              ? "0 25px 60px -15px rgba(4, 17, 13, 0.35)"
              : dynamicBoxShadow,
          }}
        >
          {/* Dynamic 3D lighting sheen when tilted */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              opacity: shouldReduceMotion ? 0 : sheenOpacity,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 35%, transparent 70%)",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px] lg:min-h-[580px]">
            {/* Left ~75%: Dark photographic background with crossfade content */}
            <div className="md:col-span-9 relative flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden min-h-[440px] md:min-h-full">
              {/* Background Photographic Image with Dark Green Overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0 z-0"
                >
                  <Image
                    src={activeTab.image}
                    alt={activeTab.headline}
                    fill
                    priority
                    className="object-cover object-center scale-[1.02]"
                  />
                  {/* Darkened with green overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04110d] via-[#04110d]/75 to-[#04110d]/45" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#04110d]/85 via-[#04110d]/40 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Top Row: Left Mono Label & Right Pill */}
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f4f1ea]">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>THE GROVVTH ROOM</span>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#b7c9b9] bg-[#0c2a21]/90 border border-white/10 px-3.5 py-1 rounded-full backdrop-blur-sm">
                  {activeTab.badge}
                </span>
              </div>

              {/* Center Content: Eyebrow + Big Uppercase Serif Headline */}
              <div className="relative z-10 my-auto py-6 sm:py-8">
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#c5a66a] mb-2 font-medium">
                  {activeTab.eyebrow}
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#f4f1ea] uppercase leading-[1.1] max-w-2xl drop-shadow-md">
                  {activeTab.headline}
                </h2>
              </div>

              {/* Bottom Row: Divider, Status Dot, Description, and Sage CTA Button */}
              <div className="relative z-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5">
                {/* Status Dot + Description */}
                <div className="space-y-2 max-w-lg">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-mono font-medium text-emerald-300 tracking-wide">
                      {activeTab.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#f4f1ea]/85 leading-relaxed font-sans font-light">
                    {activeTab.description}
                  </p>
                </div>

                {/* Sage "Start a Conversation" Button */}
                <Link
                  href={activeTab.ctaHref}
                  className="group shrink-0 inline-flex items-center gap-2 bg-[#b7c9b9] hover:bg-white text-[#04110d] font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                >
                  <span>{activeTab.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right ~25%: Vertical Tab Rail with 5 Equal-Height Rows */}
            <div className="md:col-span-3 flex flex-row md:flex-col divide-x md:divide-x-0 md:divide-y divide-white/10 bg-[#0c2a21] border-t md:border-t-0 md:border-l border-white/10 overflow-x-auto md:overflow-visible">
              {TABS.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    className={`flex-1 min-w-[130px] md:min-w-0 flex items-center justify-between px-5 sm:px-6 py-4 lg:py-5 text-left transition-all duration-200 focus:outline-none ${
                      isActive
                        ? "bg-[#b7c9b9] text-[#04110d] font-semibold"
                        : "bg-[#0c2a21] text-[#f4f1ea]/75 hover:text-[#f4f1ea] hover:bg-[#11392d]"
                    }`}
                  >
                    <span className="text-sm sm:text-base tracking-wide font-sans">
                      {tab.label}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isActive ? "bg-[#04110d]" : "bg-white/20"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
