import React from "react";
import Link from "next/link";
import { FOOTER_SERVICES_NAV, MAIN_NAV } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-canvas border-t border-line text-charcoal pt-14 pb-12 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-line">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-block font-sans font-bold tracking-[0.16em] text-sm sm:text-base text-charcoal uppercase"
            >
              The Grovvth Room
            </Link>
            <p className="text-sm text-charcoal/80 max-w-sm leading-relaxed">
              Business growth and enablement consultancy spanning business
              foundation, strategy, FMCG brand readiness, distribution,
              marketing, validation, and technology enablement.
            </p>
            <div className="pt-2">
              <span className="font-mono text-xs text-muted block uppercase tracking-wider">
                Positioning
              </span>
              <p className="font-serif italic text-sm text-charcoal mt-1">
                Your partner in building, launching and growing businesses.
              </p>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs tracking-widest text-muted uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-charcoal/75 hover:text-charcoal transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs tracking-widest text-muted uppercase">
              Eight Official Services
            </h4>
            <ul className="grid grid-cols-1 gap-1.5 text-xs text-charcoal/75">
              {FOOTER_SERVICES_NAV.map((service, idx) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-charcoal transition-colors flex items-center gap-1.5"
                  >
                    <span className="font-mono text-[10px] text-muted">
                      0{idx + 1}.
                    </span>
                    <span className="truncate">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar matching Figma prototype exactly */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-charcoal/65">
          <div>
            <span className="font-semibold text-charcoal uppercase tracking-wider">
              The Grovvth Room
            </span>
            <span className="hidden sm:inline mx-2 text-charcoal/30">|</span>
            <span className="block sm:inline mt-1 sm:mt-0">
              Brand & growth for founder-led businesses.
            </span>
          </div>

          <div className="font-serif italic text-charcoal/80 text-sm">
            Make room for the next decision.
          </div>

          <div className="font-mono text-[11px] text-muted">
            &copy; {currentYear} The Grovvth Room. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

