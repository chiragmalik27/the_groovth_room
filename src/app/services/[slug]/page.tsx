import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/data/services";
import SectionTag from "@/components/ui/SectionTag";
import CtaBanner from "@/components/home/CtaBanner";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | The Grovvth Room`,
    description: service.summary,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug)
  );

  return (
    <div>
      {/* Top Breadcrumb */}
      <div className="bg-canvas border-b border-line py-3">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between text-xs font-mono text-muted">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 hover:text-charcoal transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
          <span className="uppercase">
            Service {service.number} &mdash; Pillar: {service.pillar}
          </span>
        </div>
      </div>

      {/* Service Hero */}
      <section className="py-16 md:py-24 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-serif italic text-4xl text-charcoal/40">
                  {service.number}
                </span>
                <span className="font-mono text-xs uppercase px-2.5 py-0.5 border border-line bg-canvas-card text-charcoal">
                  Pillar {service.pillar}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal leading-[1.1]">
                {service.title}
              </h1>

              <p className="font-sans text-base sm:text-xl text-charcoal/80 max-w-2xl leading-relaxed font-light">
                {service.summary}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="group inline-flex items-center gap-2 bg-charcoal text-canvas px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-charcoal-light transition-colors shadow-sm"
                >
                  <span>Enquire for this service</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/services"
                  className="text-xs font-mono uppercase tracking-wider text-charcoal/70 hover:text-charcoal"
                >
                  Compare other services
                </Link>
              </div>
            </div>

            {/* Right Meta Card */}
            <div className="lg:col-span-4 p-6 sm:p-7 border border-line bg-canvas-card space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-[11px] text-muted uppercase tracking-wider block">
                  Designated Skill
                </span>
                <p className="font-sans text-sm font-semibold text-charcoal">
                  {service.skill}
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-line/60">
                <span className="font-mono text-[11px] text-muted uppercase tracking-wider block">
                  Core Service Outcome
                </span>
                <p className="font-sans text-sm text-charcoal/85 leading-relaxed">
                  {service.coreService}
                </p>
              </div>

              <div className="pt-4 border-t border-line/60 space-y-2">
                <span className="font-mono text-[11px] text-muted uppercase tracking-wider block">
                  Service Scope Standard
                </span>
                <p className="text-[11px] text-charcoal/70 leading-relaxed">
                  {service.contentCaution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Business Need */}
      <section className="py-16 md:py-20 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="max-w-3xl space-y-4">
            <SectionTag>The Business Need</SectionTag>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal">
              Why founders engage this service.
            </h2>
            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed font-light pt-2">
              {service.businessNeed}
            </p>
          </div>
        </div>
      </section>

      {/* Scope: Micro-Detailing Activities */}
      <section className="py-16 md:py-24 border-b border-line bg-canvas-subtle/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="space-y-3 mb-12">
            <SectionTag>Workstreams &amp; Micro-Detailing</SectionTag>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal">
              What the service covers.
            </h2>
            <p className="text-sm text-charcoal/70 max-w-xl">
              Official activity areas defined in the service deck. Engagements
              are customized around relevant priorities rather than forced
              packages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.microDetails.map((activity, index) => (
              <div
                key={activity}
                className="p-5 border border-line bg-canvas flex items-start gap-3 hover:border-charcoal/30 transition-colors"
              >
                <span className="font-mono text-xs text-muted pt-0.5">
                  0{index + 1}.
                </span>
                <span className="font-sans text-sm font-medium text-charcoal">
                  {activity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Potential Outputs */}
      <section className="py-16 md:py-24 border-b border-line bg-canvas">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="space-y-3 mb-12">
            <SectionTag>Concrete Deliverables</SectionTag>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal">
              Potential outputs &amp; milestones.
            </h2>
            <p className="text-sm text-charcoal/70 max-w-xl">
              Tangible deliverables tailored to your company&apos;s stage and verified
              scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.potentialOutputs.map((output, idx) => (
              <div
                key={output}
                className="p-6 border border-line bg-canvas-card flex items-start gap-3.5"
              >
                <CheckCircle2 className="w-5 h-5 text-charcoal shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-xs text-muted block mb-1">
                    Deliverable 0{idx + 1}
                  </span>
                  <p className="font-sans text-sm text-charcoal/85 leading-relaxed">
                    {output}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-20 border-b border-line bg-canvas">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
            <div className="space-y-3 mb-8">
              <SectionTag>Complementary Workstreams</SectionTag>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                Frequently paired services.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group p-6 border border-line bg-canvas-card hover:border-charcoal/40 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-[11px] text-muted">
                      {rel.number} &bull; {rel.pillar}
                    </span>
                    <h4 className="font-serif text-lg text-charcoal group-hover:underline">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-charcoal/70 line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-charcoal">
                    <span>View service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Banner */}
      <CtaBanner />
    </div>
  );
}

