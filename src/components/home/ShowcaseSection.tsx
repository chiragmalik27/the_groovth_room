"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TabItem {
  id: string;
  tabLabel: string;
  badge: string;
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  statusText: string;
}

const TABS: TabItem[] = [
  {
    id: "room",
    tabLabel: "The Room",
    badge: "FOUNDER-LED CONSULTANCY",
    headline: "WHERE BUSINESS STRATEGY MEETS EXECUTION",
    subheadline: "THE GROVVTH ROOM • HEADQUARTERS",
    description:
      "A working table where founders bring the context, and we bring clarity, structure, and execution velocity.",
    ctaText: "Start a Conversation",
    ctaHref: "/contact",
    statusText: "In Session • Founder Consultations Active",
  },
  {
    id: "strategy",
    tabLabel: "Strategy",
    badge: "PILLAR 01 • POSITION & PLAN",
    headline: "CLEAR BUSINESS MODELS & REVENUE ENGINES",
    subheadline: "UNIT ECONOMICS & GTM ROADMAPS",
    description:
      "Strategic business planning covering revenue engines, competitor benchmarking, pricing power, and scalable motions.",
    ctaText: "Explore Strategy",
    ctaHref: "/services/business-strategy-growth-planning",
    statusText: "Strategy Advisory • Active Workstream",
  },
  {
    id: "enablement",
    tabLabel: "Enablement",
    badge: "PILLAR 02 • BRAND & MARKET",
    headline: "FMCG POSITIONING & RETAIL READINESS",
    subheadline: "CATEGORY ARCHITECTURE & PACKAGING",
    description:
      "Price-pack strategy, Modern & General Trade channel mapping, and packaging coordination before full market launch.",
    ctaText: "Explore FMCG",
    ctaHref: "/services/fmcg-brand-market-enablement",
    statusText: "Market Enablement • Retail Mapping",
  },
  {
    id: "distribution",
    tabLabel: "Distribution",
    badge: "PILLAR 03 • MARKET REACH",
    headline: "DISTRIBUTOR NETWORKS & CHANNEL ECONOMICS",
    subheadline: "REGIONAL REACH & B2B OUTREACH",
    description:
      "Distributor mapping, reseller outreach, partner onboarding workflows, and margin assessment that scale sustainably.",
    ctaText: "Explore Distribution",
    ctaHref: "/services/distribution-channel-development",
    statusText: "Network Expansion • Channel Velocity",
  },
  {
    id: "advisory",
    tabLabel: "Advisory",
    badge: "ONE-ON-ONE • FOUNDER CLARITY",
    headline: "AN OBJECTIVE SOUNDING BOARD FOR FOUNDERS",
    subheadline: "CRITICAL DECISIONS & ACCOUNTABILITY",
    description:
      "Confidential advisory sessions to challenge biases, evaluate pitch feedback, and maintain decisive momentum.",
    ctaText: "Book Advisory",
    ctaHref: "/services/one-on-one-founder-assistance",
    statusText: "1-on-1 Sessions • Executive Clarity",
  },
];

export default function ShowcaseSection() {
  const [activeTabId, setActiveTabId] = useState<string>("room");
  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  return (
    <section className="relative pt-4 pb-20 sm:pt-8 sm:pb-28 px-4 sm:px-6 md:px-8">
      {/* Main Showcase Container (Card floats with depth on the gradient canvas) */}
      <div className="relative z-10 max-w-6xl mx-auto rounded-3xl border-4 sm:border-[6px] border-white/35 sm:border-white/45 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_30px_70px_-15px_rgba(11,33,27,0.35)] bg-[#0B211B] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px]">
          {/* Left / Main Display Area (9 cols on desktop) */}
          <div className="lg:col-span-9 relative flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden min-h-[480px] lg:min-h-full">
            {/* Background Team Meeting Photograph */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/grovvth_room_meeting.jpg"
                alt="The Grovvth Room Team Strategic Session"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 scale-[1.02] hover:scale-105"
              />
              {/* Refined Multi-layer Gradient Overlay for readability while showcasing the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071713] via-[#071713]/70 to-[#071713]/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071713]/85 via-[#071713]/40 to-transparent" />
            </div>

            {/* Top Bar inside Card */}
            <div className="relative z-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ivory/80">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="font-semibold text-ivory">The Grovvth Room</span>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-sage bg-[#0B211B]/80 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                {activeTab.badge}
              </span>
            </div>

            {/* Center Massive Headline (Matches Reference Style: "TWENTY SEATS AND A ROASTER") */}
            <div className="relative z-10 my-auto py-8">
              <div className="text-[11px] font-mono uppercase tracking-widest text-gold mb-2">
                {activeTab.subheadline}
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ivory uppercase leading-[1.08] max-w-2xl drop-shadow-md">
                {activeTab.headline}
              </h2>
            </div>

            {/* Bottom Bar: Status Info + CTA Button */}
            <div className="relative z-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5">
              {/* Left: Status & Description */}
              <div className="space-y-2 max-w-lg">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-mono font-medium text-emerald-300 tracking-wide">
                    {activeTab.statusText}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-ivory/85 leading-relaxed font-sans">
                  {activeTab.description}
                </p>
              </div>

              {/* Right: High-Contrast CTA Button (Matches Reference "Get directions" style) */}
              <Link
                href={activeTab.ctaHref}
                className="group shrink-0 inline-flex items-center gap-2 bg-[#A8B8A3] hover:bg-ivory text-[#0B211B] font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
              >
                <span>{activeTab.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Sidebar: Vertical Tabs Stack (3 cols on desktop) */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col divide-x lg:divide-x-0 lg:divide-y divide-white/10 bg-[#0B211B] border-t lg:border-t-0 lg:border-l border-white/15 overflow-x-auto lg:overflow-visible">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex-1 min-w-[130px] lg:min-w-0 flex items-center justify-between px-5 sm:px-7 py-5 lg:py-6 text-left transition-all duration-200 focus:outline-none ${
                    isActive
                      ? "bg-[#A8B8A3] text-[#0B211B] font-semibold shadow-inner"
                      : "bg-[#0B211B] text-ivory/70 hover:text-ivory hover:bg-[#122A22]"
                  }`}
                >
                  <span className="text-sm sm:text-base tracking-wide font-sans">
                    {tab.tabLabel}
                  </span>
                  {isActive ? (
                    <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#0B211B]" />
                  ) : (
                    <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/20" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
