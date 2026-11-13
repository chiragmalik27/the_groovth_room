import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "burgundy" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-charcoal text-canvas hover:bg-charcoal-light active:bg-charcoal-dark border border-charcoal transition-colors duration-200",
    secondary:
      "bg-canvas text-charcoal hover:bg-canvas-subtle border border-charcoal/20 transition-colors duration-200",
    burgundy:
      "bg-burgundy text-canvas hover:bg-burgundy-light active:bg-burgundy-dark border border-burgundy transition-colors duration-200",
    outline:
      "bg-transparent text-charcoal hover:bg-charcoal/5 border border-line transition-colors duration-200",
    link:
      "p-0 bg-transparent text-charcoal hover:opacity-75 inline-flex items-center gap-1 font-medium underline underline-offset-4 decoration-line hover:decoration-charcoal transition-all",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const baseClasses =
    variant === "link"
      ? `${variantClasses.link} ${className}`
      : `group inline-flex items-center justify-center gap-2 rounded-none font-medium tracking-wide transition-all select-none ${sizeClasses[size]} ${variantClasses[variant]} ${
          disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        } ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
}

