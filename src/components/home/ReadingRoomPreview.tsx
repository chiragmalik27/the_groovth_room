import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";

export default function ReadingRoomPreview() {
  return (
    <section className="py-20 md:py-28 bg-canvas border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4">
            <SectionTag>02 / FROM THE READING ROOM</SectionTag>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-[1.15]">
              A little distance. <br />
              A useful perspective.
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/70 max-w-md pt-2">
              Unpacking common strategic traps, unit economics, and operational
              decision-making for founders who prefer substantive substance over
              slogans.
            </p>
          </div>

          {/* Right Column: Draft Editorial card matching Figma */}
          <div className="lg:col-span-6 border border-line bg-canvas-card p-8 sm:p-10 space-y-6">
            <div className="font-mono text-[11px] tracking-widest uppercase text-muted">
              Draft Editorial / Proposed Essay
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal leading-snug">
              Before you add another channel.
            </h3>

            <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed">
              A practical note on finding the bottleneck before adding more
              marketing to the business. When growth stalls, the issue is almost
              never lack of tactics &mdash; it is unclear positioning or leaky conversion.
            </p>

            <div className="pt-4 border-t border-line/60">
              <Link
                href="/insights/before-you-add-another-channel"
                className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-charcoal font-medium hover:opacity-75 transition-opacity"
              >
                <span>Read essay</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

