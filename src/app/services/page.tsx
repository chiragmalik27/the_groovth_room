"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { SERVICES, PILLARS } from "@/data/services";
import { CapabilityPillar } from "@/types";
import CtaBanner from "@/components/home/CtaBanner";

export default function ServicesPage() {
  const [selectedPillar, setSelectedPillar] = useState<CapabilityPillar | "All">("All");

  const filteredServices =
    selectedPillar === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.pillar === selectedPillar);

  return (
    <div>
      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <SectionTag className="mb-4">Official Service Spectrum</SectionTag>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1]">
                Eight services. <br />
                One connected growth engine.
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed font-light">
                Every service is grounded in clear capability, transparent scope,
                and measured outcomes. From statutory registration coordination
                to FMCG channel development and executive advisory.
              </p>
            </div>
            <div className="lg:col-span-4 text-xs font-mono text-muted space-y-2 border-l border-line pl-6">
              <div>SOURCE: SERVICE DECK SPECIFICATIONS</div>
              <div>SCOPE: 8 OFFICIAL WORKSTREAMS</div>
              <div>DELIVERY: STRATEGIC &amp; COORDINATED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar Filter Bar */}
      <section className="sticky top-16 sm:top-20 z-40 bg-canvas/95 backdrop-blur border-b border-line py-4">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="font-mono text-xs text-muted uppercase mr-2 hidden sm:inline">
              Filter:
            </span>
            {(["All", "Position", "Build", "Grow"] as const).map((pillar) => (
              <button
                key={pillar}
                type="button"
                onClick={() => setSelectedPillar(pillar)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedPillar === pillar
                    ? "bg-charcoal text-canvas font-semibold shadow-sm"
                    : "bg-canvas-card text-charcoal/70 hover:text-charcoal border border-line"
                }`}
              >
                {pillar}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-muted">
            Showing {filteredServices.length} of 8 services
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 md:py-24 bg-canvas border-b border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 space-y-12">
          {filteredServices.map((service) => (
            <div
              key={service.number}
              id={`service-${service.number}`}
              className="p-8 sm:p-10 border border-line bg-canvas-card hover:border-charcoal/40 transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left col: Meta & Number */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-serif italic text-3xl sm:text-4xl text-charcoal/50">
                      {service.number}
                    </span>
                    <span className="font-mono text-xs uppercase px-2.5 py-0.5 border border-line bg-canvas text-charcoal">
                      {service.pillar}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-charcoal leading-snug">
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:underline underline-offset-4"
                    >
                      {service.title}
                    </Link>
                  </h2>

                  <div className="space-y-1 pt-2 border-t border-line/60">
                    <div className="font-mono text-[11px] text-muted uppercase tracking-wider">
                      Capability Skill:
                    </div>
                    <div className="text-xs font-medium text-charcoal">
                      {service.skill}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono text-[11px] text-muted uppercase tracking-wider">
                      Core Outcome:
                    </div>
                    <div className="text-xs text-charcoal/80">
                      {service.coreService}
                    </div>
                  </div>
                </div>

                {/* Right col: Description & Micro-details */}
                <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-line/60 lg:pl-8">
                  <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
                    {service.summary}
                  </p>

                  <div className="space-y-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted block">
                      Scope &amp; Micro-Detailing Workstreams:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.microDetails.map((detail) => (
                        <span
                          key={detail}
                          className="font-sans text-xs px-2.5 py-1 bg-canvas border border-line text-charcoal/85 rounded-none"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-canvas-subtle/70 border border-line text-[11px] text-charcoal/70 leading-relaxed">
                    <span className="font-semibold text-charcoal">Note: </span>
                    {service.contentCaution}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-1.5 bg-charcoal text-canvas px-4 py-2 text-xs font-mono uppercase tracking-wider hover:bg-charcoal-light transition-colors"
                    >
                      <span>Full Service Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-charcoal hover:underline underline-offset-4"
                    >
                      <span>Enquire about this service</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars Breakdown */}
      <section className="py-20 bg-canvas border-b border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <SectionTag className="mb-6">The Three Pillars Device</SectionTag>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((p) => (
              <div
                key={p.number}
                id={`pillar-${p.name.toLowerCase()}`}
                className="p-6 border border-line bg-canvas-card space-y-3"
              >
                <div className="font-serif italic text-2xl text-charcoal/40">
                  {p.number}
                </div>
                <h3 className="font-sans text-xl font-bold text-charcoal">
                  {p.name}
                </h3>
                <p className="font-serif italic text-sm text-charcoal/90">
                  &ldquo;{p.question}&rdquo;
                </p>
                <p className="text-xs text-charcoal/75 leading-relaxed pt-2 border-t border-line/60">
                  {p.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

