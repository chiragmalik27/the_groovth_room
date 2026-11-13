import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center pt-32 pb-16 sm:pt-40 sm:pb-24 text-ivory">
      {/* Centered Hero Composition */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Eyebrow / Announcement Pill */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0B231C]/80 border border-sage/30 backdrop-blur-md mb-8 sm:mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.35)] animate-fade-in">
          <span className="font-sans text-xs sm:text-[13px] font-medium tracking-wide text-ivory/95">
            Your Partner in Building and Growing Businesses
          </span>
        </div>

        {/* Oversized Bold Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[86px] leading-[1.08] sm:leading-[1.05] tracking-tightest text-ivory max-w-4xl mx-auto mb-6 sm:mb-8 font-normal animate-fade-in-up drop-shadow-sm">
          Build Stronger Foundations. <br className="hidden sm:inline" />
          <span className="italic font-light text-ivory/95">Create Room</span> to Grow.
        </h1>

        {/* Supporting Paragraph */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-ivory/85 max-w-2xl mx-auto leading-relaxed font-normal mb-10 sm:mb-12 text-balance animate-fade-in-up">
          The Grovvth Room brings business strategy, marketing, market
          enablement and digital capabilities together to help businesses build,
          navigate and grow with clarity.
        </p>

        {/* Two Prominent CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto animate-fade-in-up">
          {/* Primary CTA: Warm Ivory with Forest Dark Text */}
          <Link
            href="/services"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-ivory text-forest-dark px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-white hover:shadow-[0_8px_30px_rgba(247,243,234,0.3)] transition-all duration-200"
          >
            <span>Explore Our Services</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Secondary CTA: Distinct Translucent Dark Pill on the Lighter Base */}
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#081F18]/65 hover:bg-[#081F18]/90 border border-white/20 hover:border-white/40 text-ivory px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm font-medium tracking-wide backdrop-blur-sm transition-all duration-200 shadow-sm"
          >
            <span>Let&apos;s Discuss Your Business</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Subtle Bottom Metric/Trust Signals */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-white/15 w-full max-w-3xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ivory/80 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Strategy &bull; Foundations &bull; Enablement</span>
          </div>
          <div>8 Specialized Workstreams</div>
          <div>Founder-Led Growth</div>
        </div>
      </div>
    </section>
  );
}
