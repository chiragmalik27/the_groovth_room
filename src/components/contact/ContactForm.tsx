"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, ArrowUpRight, Loader2 } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: initialService,
    stage: "Position",
    message: "",
    consent: true,
  });

  useEffect(() => {
    const s = searchParams.get("service");
    if (s) {
      setFormData((prev) => ({ ...prev, service: s }));
    }
  }, [searchParams]);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid work email address.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please share a brief description of your current priority or requirement.");
      return;
    }

    setStatus("submitting");

    // Simulate submission with 1.2s delay
    setTimeout(() => {
      // In production, this posts to the client-designated endpoint/CRM
      setStatus("success");
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      stage: "Position",
      message: "",
      consent: true,
    });
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-12 border border-line bg-canvas-card space-y-6 animate-in fade-in duration-300">
        <div className="w-12 h-12 bg-charcoal text-canvas flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
            Enquiry received.
          </h3>
          <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
            Thank you, <span className="font-semibold text-charcoal">{formData.name}</span>.
            We have received your requirements regarding{" "}
            <span className="font-medium text-charcoal">
              {formData.service || "business growth and enablement"}
            </span>.
          </p>
        </div>

        <div className="p-4 bg-canvas border border-line text-xs font-mono text-charcoal/70 space-y-1">
          <div>Next step: We will review your context and reply to {formData.email}.</div>
          <div>Review timeline: Typically within 1 business day.</div>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-mono uppercase tracking-wider text-charcoal underline underline-offset-4 hover:opacity-75"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-12 border border-line bg-canvas-card space-y-8"
      noValidate
    >
      <div className="space-y-2 pb-4 border-b border-line">
        <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
          Start a conversation.
        </h3>
        <p className="font-sans text-xs sm:text-sm text-charcoal/70">
          Share your context or the strategic hurdle currently in front of you.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name & Work Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block font-mono text-xs uppercase tracking-wider text-charcoal"
          >
            Full Name <span className="text-burgundy">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="e.g. Maya Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-canvas border border-line focus:border-charcoal focus:outline-none text-sm text-charcoal transition-colors placeholder:text-muted/50 rounded-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block font-mono text-xs uppercase tracking-wider text-charcoal"
          >
            Work Email <span className="text-burgundy">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="maya@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-canvas border border-line focus:border-charcoal focus:outline-none text-sm text-charcoal transition-colors placeholder:text-muted/50 rounded-none"
          />
        </div>
      </div>

      {/* Row 2: Phone & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block font-mono text-xs uppercase tracking-wider text-charcoal"
          >
            Phone / WhatsApp (Optional)
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-canvas border border-line focus:border-charcoal focus:outline-none text-sm text-charcoal transition-colors placeholder:text-muted/50 rounded-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="company"
            className="block font-mono text-xs uppercase tracking-wider text-charcoal"
          >
            Company / Organisation
          </label>
          <input
            id="company"
            type="text"
            placeholder="e.g. Acme Consumer Brands"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 bg-canvas border border-line focus:border-charcoal focus:outline-none text-sm text-charcoal transition-colors placeholder:text-muted/50 rounded-none"
          />
        </div>
      </div>

      {/* Row 3: Service of Interest & Stage */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="service"
            className="block font-mono text-xs uppercase tracking-wider text-charcoal"
          >
            Service of Interest
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 bg-canvas border border-line focus:border-charcoal focus:outline-none text-sm text-charcoal transition-colors rounded-none"
          >
            <option value="">General Growth / Advisory Enquiry</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.number}. {s.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="stage"
            className="block font-mono text-xs uppercase tracking-wider text-charcoal"
          >
            Primary Focus Area
          </label>
          <select
            id="stage"
            value={formData.stage}
            onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
            className="w-full px-4 py-3 bg-canvas border border-line focus:border-charcoal focus:outline-none text-sm text-charcoal transition-colors rounded-none"
          >
            <option value="Position">Positioning &mdash; &ldquo;What should we be known for?&rdquo;</option>
            <option value="Build">Build &mdash; &ldquo;How should that show up?&rdquo;</option>
            <option value="Grow">Grow &mdash; &ldquo;Where do we go from here?&rdquo;</option>
            <option value="Founder Advisory">One-on-One Founder Advisory</option>
          </select>
        </div>
      </div>

      {/* Row 4: Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block font-mono text-xs uppercase tracking-wider text-charcoal"
        >
          Brief description of requirement <span className="text-burgundy">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          placeholder="Tell us what you are building, the current stage of the business, or the specific question you need clarity on..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-canvas border border-line focus:border-charcoal focus:outline-none text-sm text-charcoal transition-colors placeholder:text-muted/50 rounded-none resize-y"
        />
      </div>

      {/* Privacy Notice and Submission */}
      <div className="space-y-4 pt-2">
        <p className="text-[11px] text-charcoal/65 leading-relaxed font-sans">
          <strong className="text-charcoal font-medium">Privacy Notice: </strong>
          Your information will be treated confidentially and used solely to
          evaluate your requirement and respond to your enquiry. We never share
          or sell client data.
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-charcoal text-canvas px-8 py-4 text-xs font-mono uppercase tracking-widest hover:bg-charcoal-light active:bg-charcoal-dark transition-all disabled:opacity-50"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <span>Submit Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

