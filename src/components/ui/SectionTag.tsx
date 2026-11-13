import React from "react";

interface SectionTagProps {
  children: React.ReactNode;
  theme?: "light" | "dark" | "burgundy";
  className?: string;
}

export default function SectionTag({
  children,
  theme = "light",
  className = "",
}: SectionTagProps) {
  const themeClasses = {
    light: "text-muted",
    dark: "text-stone-400",
    burgundy: "text-rose-200/80",
  };

  return (
    <div
      className={`font-mono text-[11px] sm:text-[12px] tracking-widest uppercase font-medium select-none ${themeClasses[theme]} ${className}`}
    >
      {children}
    </div>
  );
}

