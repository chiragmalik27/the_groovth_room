import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import EditorialCard from "@/components/ui/EditorialCard";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | The Grovvth Room",
  description:
    "Learn about The Grovvth Room: our philosophy, collaborative model, and how we support founder-led businesses across foundation, strategy, and market expansion.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <SectionTag className="mb-4">Company &amp; Philosophy</SectionTag>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1]">
                Clear thinking for businesses at a turning point.
              </h1>
              <p className="font-sans text-lg sm:text-xl text-charcoal/80 leading-relaxed font-light">
                The Grovvth Room was conceived around a simple observation:
                growing businesses are frequently overwhelmed with disconnected
                advice, fragmented vendors, and speculative tactics.
              </p>
            </div>
            <div className="lg:col-span-4 lg:pt-4">
              <div className="p-6 border border-line bg-canvas-card space-y-3">
                <span className="font-mono text-xs text-muted uppercase tracking-wider block">
                  Core Proposition
                </span>
                <p className="font-serif italic text-base text-charcoal leading-snug">
                  &ldquo;Your partner in building, launching and growing
                  businesses.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section with Editorial Visual */}
      <section className="py-20 md:py-28 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <EditorialCard
                label="IMAGE 03 / STUDIO &amp; CONVERSATION"
                headline="A room without pretension. Transparent dialogue, notebooks, and shared focus."
                subtext="Natural daylight, candid studio setting"
                aspect="tall"
              />
            </div>

            <div className="lg:col-span-7 space-y-6 text-charcoal/85">
              <SectionTag>Our Operating Way</SectionTag>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-snug">
                More than a single service. A connected approach to growth.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed font-light">
                Rather than treating branding, marketing, legal setup, and tech
                as isolated silos handled by separate agencies with conflicting
                incentives, we look at the whole picture.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                When a founder needs market expansion, we don&apos;t just buy ads.
                We examine price-pack viability, distributor margins, unit
                economics, and customer validation signals. When a startup needs
                digital tools, we design the workflow first, ensuring automation
                serves people rather than creating complexity.
              </p>
              <div className="pt-4 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-charcoal/80">
                <div>
                  <strong className="block text-sm text-charcoal font-semibold mb-1">
                    Intentional Scope
                  </strong>
                  We only recommend initiatives where data and business logic
                  demonstrate clear strategic upside.
                </div>
                <div>
                  <strong className="block text-sm text-charcoal font-semibold mb-1">
                    Specialist Network
                  </strong>
                  When certified execution is needed (CAs, advocates, custom code),
                  we orchestrate verified professionals transparently.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Guiding Principles */}
      <section className="py-20 md:py-28 bg-canvas border-b border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="max-w-2xl mb-16 space-y-3">
            <SectionTag>Guiding Standards</SectionTag>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              What guides our decisions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-line bg-canvas-card space-y-4">
              <span className="font-serif italic text-3xl text-charcoal/40 block">
                01.
              </span>
              <h3 className="font-sans text-xl font-semibold text-charcoal">
                Clarity before Tactics
              </h3>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                We never recommend ad campaigns, distribution contracts, or software
                deployments until the core value proposition and unit margins are
                crystal clear.
              </p>
            </div>

            <div className="p-8 border border-line bg-canvas-card space-y-4">
              <span className="font-serif italic text-3xl text-charcoal/40 block">
                02.
              </span>
              <h3 className="font-sans text-xl font-semibold text-charcoal">
                Evidence over Assumption
              </h3>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                Unvalidated assumptions burn capital. We advocate for structured
                pilot testing, empirical user interviews, and small-scale trials
                before heavy financial commitments.
              </p>
            </div>

            <div className="p-8 border border-line bg-canvas-card space-y-4">
              <span className="font-serif italic text-3xl text-charcoal/40 block">
                03.
              </span>
              <h3 className="font-sans text-xl font-semibold text-charcoal">
                Restraint in Design &amp; Copy
              </h3>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                We avoid hollow slogans, manufactured superiority claims, and
                artificial urgency. Credibility is earned through accurate
                communication and reliable follow-through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Link Banner */}
      <section className="py-16 bg-charcoal text-canvas border-b border-charcoal-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <SectionTag theme="dark">Comprehensive Scope</SectionTag>
            <h3 className="font-serif text-2xl sm:text-3xl text-canvas">
              Explore the eight official service capabilities.
            </h3>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-canvas text-charcoal px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-canvas-pure transition-colors font-medium"
          >
            <span>Browse Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

