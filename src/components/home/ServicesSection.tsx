import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { SERVICES } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-canvas border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-line">
          <div className="space-y-3">
            <SectionTag>Official Service Catalogue</SectionTag>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal">
              Eight ways we support growth.
            </h2>
          </div>
          <p className="text-sm text-charcoal/70 max-w-md font-sans">
            Grounded capabilities across business foundation, market readiness,
            distribution, digital growth, and executive founder advisory.
          </p>
        </div>

        {/* 8 Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col justify-between p-6 sm:p-7 border border-line bg-canvas-card/40 hover:bg-canvas-card hover:border-charcoal/40 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Header row: Number & Pillar badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-charcoal/70">
                    {service.number}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 bg-canvas-subtle text-charcoal/70 border border-line">
                    {service.pillar}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal leading-snug group-hover:text-charcoal-light transition-colors">
                  <Link href={`/services/${service.slug}`} className="focus:outline-none">
                    {service.title}
                  </Link>
                </h3>

                {/* Skill description */}
                <div className="font-mono text-[11px] text-muted uppercase tracking-wider">
                  Skill: {service.skill}
                </div>

                {/* Concise Summary */}
                <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                  {service.summary}
                </p>
              </div>

              {/* Bottom link */}
              <div className="pt-6 mt-6 border-t border-line/50 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-charcoal font-medium hover:opacity-75 transition-opacity"
                >
                  <span>Explore service details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 pt-8 border-t border-line text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-charcoal text-canvas px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-charcoal-light transition-colors shadow-sm"
          >
            <span>View all service scopes &amp; workstreams</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

