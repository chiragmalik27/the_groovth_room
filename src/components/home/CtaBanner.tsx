import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";

export default function CtaBanner() {
  return (
    <section
      className="text-canvas py-20 md:py-28 transition-colors"
      style={{ backgroundColor: "#622B2C" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5">
            <SectionTag theme="burgundy">The Next Conversation</SectionTag>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-canvas leading-[1.1]">
              What needs <br className="hidden sm:inline" />
              room to grow?
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-sans text-base sm:text-lg text-rose-100/90 font-light leading-relaxed">
              Bring the question you keep coming back to. We&apos;ll start there.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-canvas text-charcoal px-6 py-3.5 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-canvas-pure transition-colors shadow-sm"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

