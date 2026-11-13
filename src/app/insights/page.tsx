import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { INSIGHTS } from "@/data/insights";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "The Reading Room | The Grovvth Room",
  description:
    "Thoughtful notes on business growth, FMCG price-pack strategy, pilot testing, and channel economics from The Grovvth Room.",
};

export default function InsightsPage() {
  const [featured, ...otherArticles] = INSIGHTS;

  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <SectionTag className="mb-4">From The Reading Room</SectionTag>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1]">
                A little distance. <br />
                A useful perspective.
              </h1>
              <p className="font-sans text-base sm:text-xl text-charcoal/80 max-w-2xl leading-relaxed font-light">
                Dispatches, diagnostics, and field notes on strategic
                bottlenecks, consumer channel realities, and disciplined founder
                execution.
              </p>
            </div>
            <div className="lg:col-span-4 p-6 border border-line bg-canvas-card text-xs font-mono text-muted space-y-2">
              <div>EDITORIAL STANDARD: NO GHOSTWRITTEN FLUFF</div>
              <div>FOCUS: FOUNDER-LED BOTTLENECKS</div>
              <div>FREQUENCY: PURPOSEFUL NOTES ONLY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Draft Essay (Directly from Figma prototype) */}
      {featured && (
        <section className="py-16 md:py-24 border-b border-line bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
            <div className="p-8 sm:p-14 border border-charcoal/30 bg-canvas-card relative">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {featured.category}
                </span>
                <span className="font-mono text-xs text-muted">
                  {featured.readTime}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight max-w-3xl mb-6">
                <Link
                  href={`/insights/${featured.slug}`}
                  className="hover:underline underline-offset-4"
                >
                  {featured.title}
                </Link>
              </h2>

              <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed font-light mb-8">
                {featured.excerpt}
              </p>

              <div className="pt-6 border-t border-line flex items-center justify-between">
                <Link
                  href={`/insights/${featured.slug}`}
                  className="group inline-flex items-center gap-2 bg-charcoal text-canvas px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-charcoal-light transition-colors"
                >
                  <span>Read Full Essay</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <span className="font-mono text-xs text-muted">
                  {featured.publishedDate}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Additional Essays Grid */}
      <section className="py-16 md:py-24 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <SectionTag className="mb-8">Field Notes &amp; Frameworks</SectionTag>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherArticles.map((article) => (
              <div
                key={article.slug}
                className="p-8 border border-line bg-canvas-card flex flex-col justify-between hover:border-charcoal/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-muted">
                    <span>{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-charcoal leading-snug">
                    <Link
                      href={`/insights/${article.slug}`}
                      className="hover:underline"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="font-sans text-sm text-charcoal/75 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-line/60">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-charcoal hover:opacity-75 transition-opacity"
                  >
                    <span>Read note</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

