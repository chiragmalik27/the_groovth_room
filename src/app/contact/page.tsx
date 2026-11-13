import React, { Suspense } from "react";
import type { Metadata } from "next";
import SectionTag from "@/components/ui/SectionTag";
import ContactForm from "@/components/contact/ContactForm";
import EditorialCard from "@/components/ui/EditorialCard";

export const metadata: Metadata = {
  title: "Let's Talk | The Grovvth Room",
  description:
    "Have a business idea, growth challenge, or founder decision? Start a conversation with The Grovvth Room.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <SectionTag className="mb-4">The Next Conversation</SectionTag>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1]">
                What needs room to grow?
              </h1>
              <p className="font-sans text-base sm:text-xl text-charcoal/80 max-w-2xl leading-relaxed font-light">
                Bring the question you keep coming back to. Whether you are
                incorporating an entity, entering retail distribution, or seeking
                an objective sounding board, we start with an honest conversation.
              </p>
            </div>
            <div className="lg:col-span-4 p-6 border border-line bg-canvas-card space-y-3">
              <span className="font-mono text-xs text-muted uppercase tracking-wider block">
                Direct Communication
              </span>
              <p className="text-xs text-charcoal/80 leading-relaxed font-sans">
                Every enquiry is read directly by our leadership team. We do not
                route you to automated sales sequences or pushy account reps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form and Editorial Context */}
      <section className="py-16 md:py-24 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 border border-line bg-canvas-card text-center text-muted font-mono text-xs">
                    Loading enquiry interface...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* Right Column: Context & Guidelines */}
            <div className="lg:col-span-5 space-y-8">
              <EditorialCard
                label="IMAGE 05 / WORKING SESSION"
                headline="The useful work is deciding what deserves your attention."
                subtext="Candid advisory session. No vanity metrics."
                aspect="square"
              />

              <div className="p-6 border border-line bg-canvas-card space-y-4">
                <span className="font-mono text-xs text-muted uppercase tracking-wider block">
                  What to expect after submitting
                </span>
                <ol className="space-y-3 text-xs sm:text-sm text-charcoal/80">
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-xs text-muted pt-0.5">
                      01.
                    </span>
                    <span>
                      <strong className="text-charcoal font-medium">Initial Review:</strong> We
                      evaluate your brief against our service scope to verify if we
                      can add genuine value.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-xs text-muted pt-0.5">
                      02.
                    </span>
                    <span>
                      <strong className="text-charcoal font-medium">Introductory Dialogue:</strong> A
                      focused 30-minute discussion to clarify immediate
                      priorities and constraints.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono text-xs text-muted pt-0.5">
                      03.
                    </span>
                    <span>
                      <strong className="text-charcoal font-medium">Actionable Proposal:</strong> A
                      transparent roadmap outlining workstreams, timeline, and
                      required partner coordination.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

