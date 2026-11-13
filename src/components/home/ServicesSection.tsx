import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { SERVICES } from "@/data/services";
import CardStack from "@/components/home/CardStack";

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-canvas border-b border-line overflow-hidden w-full">
      {/* Section Header (Centered within 6xl grid) */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 mb-10 pb-6 border-b border-line">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <SectionTag>Official Service Catalogue</SectionTag>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal">
              Eight ways we support growth.
            </h2>
          </div>
          <p className="text-sm text-charcoal/70 max-w-md font-sans leading-relaxed">
            Grounded capabilities across business foundation, market readiness,
            distribution, digital growth, and executive founder advisory.
          </p>
        </div>
      </div>

      {/* 3D Card Stack (100% Full-Width Stage spanning edge-to-edge) */}
      <div className="w-full">
        <CardStack services={SERVICES} />
      </div>

      {/* View All CTA (Centered within 6xl grid) */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 mt-12 pt-8 border-t border-line text-center">
        <Link
          href="/services"
          className="group inline-flex items-center gap-2.5 bg-[#04110d] hover:bg-[#0c2a21] text-[#f4f1ea] px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <span>View all 8 service scopes &amp; workstreams</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}

