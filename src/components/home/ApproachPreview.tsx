import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { APPROACH_STEPS } from "@/data/approach";

export default function ApproachPreview() {
  return (
    <section className="py-20 md:py-28 bg-canvas border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-line">
          <div className="space-y-3">
            <SectionTag>Client Engagement Journey</SectionTag>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal">
              A sequenced path to clarity.
            </h2>
          </div>
          <p className="text-sm text-charcoal/70 max-w-md font-sans">
            How we partner with companies to eliminate guesswork, coordinate the
            right specialists, and turn strategy into measured execution.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPROACH_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 border border-line bg-canvas-card/30 flex flex-col justify-between hover:border-charcoal/30 transition-colors"
            >
              <div>
                <div className="font-serif italic text-2xl text-charcoal/40 mb-3">
                  {step.step}
                </div>
                <h3 className="font-sans text-lg font-semibold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-charcoal/75 leading-relaxed">
                  {step.tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line/40 text-[11px] text-muted">
                {step.deliverables[0]}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/approach"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-charcoal hover:opacity-75 transition-opacity"
          >
            <span>Learn more about how we engage with teams</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

