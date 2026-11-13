import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { APPROACH_STEPS } from "@/data/approach";
import EditorialCard from "@/components/ui/EditorialCard";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Our Approach | The Grovvth Room",
  description:
    "Explore our 6-step collaborative framework: Understand, Assess, Plan, Coordinate, Review, and Refine. How we turn business thinking into measured action.",
};

export default function ApproachPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <SectionTag className="mb-4">Engagement Methodology</SectionTag>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1]">
                A disciplined journey from diagnostic to execution.
              </h1>
              <p className="font-sans text-base sm:text-xl text-charcoal/80 max-w-2xl leading-relaxed font-light">
                We don&apos;t arrive with pre-packaged answers or rigid templates.
                We begin with honest examination, build actionable roadmaps, and
                coordinate the exact expertise required to move forward.
              </p>
            </div>
            <div className="lg:col-span-4 p-6 border border-line bg-canvas-card space-y-2">
              <span className="font-mono text-xs text-muted uppercase tracking-wider block">
                Framework Architecture
              </span>
              <p className="font-serif italic text-base text-charcoal">
                6 sequential phases designed to minimize risk, clarify
                accountability, and eliminate wasted effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Steps Deep Dive */}
      <section className="py-20 md:py-28 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 space-y-16">
          {APPROACH_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-8 sm:p-12 border border-line bg-canvas-card/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Step indicator */}
              <div className="lg:col-span-3 space-y-2">
                <span className="font-serif italic text-4xl sm:text-5xl text-charcoal/40 block">
                  {step.step}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  Phase 0{idx + 1}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">
                  {step.title}
                </h2>
              </div>

              {/* Description & Details */}
              <div className="lg:col-span-9 space-y-6 lg:border-l lg:border-line/60 lg:pl-10">
                <p className="font-serif italic text-lg sm:text-xl text-charcoal/90">
                  &ldquo;{step.tagline}&rdquo;
                </p>

                <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
                  {step.description}
                </p>

                <div className="pt-4 border-t border-line/50 space-y-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted block">
                    Typical Work Products &amp; Milestones:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {step.deliverables.map((item) => (
                      <div
                        key={item}
                        className="p-3 bg-canvas border border-line flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-charcoal shrink-0 mt-0.5" />
                        <span className="text-xs text-charcoal/80 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Philosophy with Editorial visual */}
      <section className="py-20 md:py-28 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionTag>Coordination &amp; Specialist Model</SectionTag>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
                How we coordinate multi-disciplinary execution.
              </h2>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                Modern business growth often spans domains that require
                specialized professional licensing &mdash; corporate law,
                chartered accountancy, custom enterprise engineering, or packaging
                production.
              </p>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                Rather than pretending to perform every regulated specialty
                in-house, we act as the strategic coordinator. We define the
                brief, vet qualified partners, oversee milestones, and protect
                the founder from managing disjointed vendor conversations alone.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-charcoal text-canvas px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-charcoal-light transition-colors"
                >
                  <span>Discuss an engagement</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EditorialCard
                label="IMAGE 04 / COORDINATION DIAGRAM"
                headline="One clear brief. Coordinated specialists. No fragmented games of telephone."
                subtext="Strategic oversight and single point of clarity"
                aspect="tall"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

