"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setScrolledPastHero(true);
      return;
    }
    const handleScroll = () => {
      // Show global header after scrolling past initial hero view (~window.innerHeight * 0.7)
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.7);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isVisible = pathname !== "/" || scrolledPastHero;

  return (
    <header
      className={`fixed top-[12px] left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
    >
      <div className="pointer-events-auto max-w-[1040px] w-full rounded-[999px] bg-[rgba(5,19,41,0.85)] backdrop-blur-[16px] border border-white/[0.12] px-4 sm:px-6 py-2.5 sm:py-2.5 flex items-center justify-between gap-3 sm:gap-6 shadow-[0_10px_35px_rgba(2,8,23,0.45)]">
        {/* Left: Brand Wordmark */}
        <Link
          href="/"
          className="group flex items-center focus:outline-none shrink-0"
          aria-label="The Grovvth Room Home"
        >
          <span className="font-sans font-semibold tracking-[0.18em] text-xs sm:text-[13px] text-[#f4f1ea] uppercase group-hover:text-white transition-colors">
            The Grovvth Room
          </span>
        </Link>

        {/* Centre: Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 sm:gap-1.5"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs tracking-wide transition-all duration-150 px-3 py-1.5 rounded-full ${
                  isActive
                    ? "bg-[#0e2c5d] text-white font-medium border border-blue-400/25 shadow-sm"
                    : "text-[#f4f1ea]/75 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Cream "Let's Talk ↗" Button & Mobile Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/contact"
            className="group hidden sm:inline-flex items-center gap-1.5 bg-[#f4f1ea] text-[#020817] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-white hover:shadow-md active:scale-95 transition-all duration-200"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Drawer Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#f4f1ea] hover:text-white transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 sm:hidden bg-[rgba(4,14,33,0.96)] backdrop-blur-2xl border border-white/[0.12] rounded-3xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1.5">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm py-2 px-3.5 rounded-xl flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-[#0e2c5d] text-white font-semibold border border-blue-400/25"
                      : "text-[#f4f1ea]/75 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#93c5fd]" />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 mt-3 border-t border-white/[0.1]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#f4f1ea] text-[#020817] py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-white transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
