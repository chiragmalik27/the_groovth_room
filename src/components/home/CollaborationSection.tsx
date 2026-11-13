import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import EditorialCard from "@/components/ui/EditorialCard";

export default function CollaborationSection() {
  return (
    <section className="py-20 md:py-28 bg-canvas border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <EditorialCard
              label="IMAGE 02 / PHOTOGRAPHY TO COMMISSION"
              headline="Hands sorting marked-up pages. One real decision in progress."
              subtext="Natural light — warm, low-saturation grade"
              aspect="tall"
            />
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionTag>02 / HOW IT FEELS TO WORK TOGETHER</SectionTag>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-[1.15]">
              Close enough to ask better questions.
            </h2>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
              We work with founders, not around them. You bring the context. We
              bring an outside view, honest conversation and a way to turn
              thinking into action.
            </p>

            <div className="pt-4 space-y-4 border-t border-line text-sm text-charcoal/75">
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs text-muted pt-0.5">01.</span>
                <p>
                  <strong className="text-charcoal font-medium">Honest Scope:</strong> We
                  only take on work where strategic coordination produces
                  tangible business traction.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono text-xs text-muted pt-0.5">02.</span>
                <p>
                  <strong className="text-charcoal font-medium">Transparent Delivery:</strong> Where
                  work requires certified specialists (corporate law, chartered
                  accountancy, custom engineering), we coordinate vetted
                  partners without markup obscurity.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono text-xs text-muted pt-0.5">03.</span>
                <p>
                  <strong className="text-charcoal font-medium">Execution Focus:</strong> We
                  replace speculative decks with prioritized 90-day execution
                  milestones.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/approach"
                className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:opacity-75 transition-opacity"
              >
                <span>Read our 6-step collaborative framework</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

