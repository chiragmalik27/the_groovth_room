import React from "react";
import SectionTag from "@/components/ui/SectionTag";

export default function ReasonSection() {
  return (
    <section className="bg-canvas text-charcoal py-20 md:py-28 border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Tag and Headline */}
          <div className="lg:col-span-7 space-y-6">
            <SectionTag theme="light">01 / THE REASON WE EXIST</SectionTag>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] tracking-[-0.01em] text-charcoal">
              A growing business can get crowded with advice.
            </h2>
          </div>

          {/* Right Column: Grounded Editorial Paragraph */}
          <div className="lg:col-span-5 lg:pt-10">
            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
              More channels. More opinions. More things that feel urgent. The
              useful work is deciding what deserves your attention. We help you
              make that decision &mdash; and act on it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
