import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { PILLARS } from "@/data/services";

export default function PillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-canvas border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-16 md:mb-20">
          <div className="lg:col-span-7 space-y-4">
            <SectionTag>01 / WHAT WE WORK ON</SectionTag>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-[1.15]">
              The right question changes the work.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed">
              Three ways into the room. Start with the question in front of you,
              rather than a package of deliverables.
            </p>
          </div>
        </div>

        {/* The 3 Pillars Rows with dividers */}
        <div className="border-t border-line divide-y divide-line">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="py-8 md:py-10 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-baseline group hover:bg-canvas-card/60 transition-colors px-2 -mx-2"
            >
              {/* Number */}
              <div className="sm:col-span-1">
                <span className="font-serif italic text-2xl md:text-3xl text-charcoal/50 group-hover:text-charcoal transition-colors">
                  {pillar.number}
                </span>
              </div>

              {/* Pillar Title */}
              <div className="sm:col-span-3">
                <h3 className="font-sans text-xl sm:text-2xl font-semibold text-charcoal">
                  {pillar.name}
                </h3>
              </div>

              {/* Core Question */}
              <div className="sm:col-span-4">
                <p className="font-serif italic text-base sm:text-lg text-charcoal/90">
                  {pillar.question}
                </p>
              </div>

              {/* Explanation & Link */}
              <div className="sm:col-span-4 space-y-3">
                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  {pillar.summary}
                </p>
                <div className="pt-1">
                  <Link
                    href={`/services#pillar-${pillar.name.toLowerCase()}`}
                    className="inline-flex items-center gap-1 text-xs font-mono tracking-wider uppercase text-charcoal font-medium hover:opacity-75 transition-opacity"
                  >
                    <span>Explore {pillar.name} services</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

