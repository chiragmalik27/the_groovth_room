import React from "react";

interface EditorialCardProps {
  label: string;
  headline: string;
  subtext?: string;
  aspect?: "tall" | "square" | "wide";
  className?: string;
}

export default function EditorialCard({
  label,
  headline,
  subtext,
  aspect = "tall",
  className = "",
}: EditorialCardProps) {
  const aspectClasses = {
    tall: "min-h-[380px] sm:min-h-[440px]",
    square: "min-h-[320px] sm:min-h-[360px]",
    wide: "min-h-[260px] sm:min-h-[300px]",
  };

  return (
    <div
      className={`relative bg-taupe/90 text-charcoal border border-charcoal/15 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-sm ${aspectClasses[aspect]} ${className}`}
      style={{ backgroundColor: "#B7AA96" }}
    >
      {/* Inner fine border for bespoke print/editorial feel */}
      <div className="absolute inset-2 sm:inset-3 border border-charcoal/15 pointer-events-none" />

      {/* Top micro label */}
      <div className="relative z-10 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-charcoal/70">
        {label}
      </div>

      {/* Bottom text block */}
      <div className="relative z-10 mt-auto pt-16">
        <p className="font-serif text-lg sm:text-xl md:text-2xl leading-snug text-charcoal">
          {headline}
        </p>
        {subtext && (
          <p className="font-sans text-xs sm:text-sm text-charcoal/70 mt-2 font-normal">
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
}

