import React from "react";
import SectionTag from "@/components/ui/SectionTag";

const AUDIENCES = [
  {
    num: "01",
    title: "First-time & Aspiring Founders",
    description:
      "Navigating company registration, founder equity agreements, initial value proposition, and sounding-board advisory before committing life savings.",
  },
  {
    num: "02",
    title: "Early-Stage Businesses",
    description:
      "Transitioning from idea to operational traction: conducting empirical pilot trials, building reliable lead funnels, and validating pricing models.",
  },
  {
    num: "03",
    title: "FMCG & Consumer Goods Brands",
    description:
      "Preparing retail-ready packaging, price-pack margin architectures, and structured outreach across Modern Trade, General Trade, and Quick Commerce.",
  },
  {
    num: "04",
    title: "Growth-Stage Companies",
    description:
      "Expanding regional distribution networks, evaluating channel partner economics, and coordinating performance marketing to scale acquisition.",
  },
  {
    num: "05",
    title: "Digitally Evolving Enterprises",
    description:
      "Streamlining operational friction by connecting CRM pipelines, automating administrative workflows, and coordinating modern tech implementations.",
  },
];

export default function AudienceSection() {
  return (
    <section className="py-20 md:py-28 bg-canvas border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6 space-y-4">
            <SectionTag>Relevant Profiles</SectionTag>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal">
              Who we support.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-6">
            <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed">
              We partner with founders and business builders at critical turning
              points — whether validating an unproven concept, preparing for
              retail distribution, or systematizing digital operations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCES.map((item) => (
            <div
              key={item.num}
              className="p-6 border border-line bg-canvas-card/40 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-muted block mb-2">
                  {item.num}.
                </span>
                <h3 className="font-sans text-base sm:text-lg font-semibold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

