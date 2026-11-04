import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Copy,
  Check,
  ArrowUpRight,
  Phone,
  Send,
  Loader2,
  Mail,
} from "lucide-react";

export const ContactView: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const email = "somnathkar2023@gmail.com";
  const phone = "+91 85095 92835";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.name.trim().length < 2) {
      setError("Please enter your name");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    if (formData.message.trim().length < 5) {
      setError("Please enter a message");
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.send(
        "service_3npkrfo",
        "template_hh8m4xp",
        formData as unknown as Record<string, unknown>,
        "Twwap4ZeVKnG-749h"
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to transmit message. Please contact directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-6 flex flex-col gap-12">
      {/* Header */}
      <header className="flex flex-col">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Contact
        </h1>
        <p className="text-sm text-text-muted leading-relaxed">
          I'm always open to discussing systems architecture, new product
          engineering challenges, open source collaborations, or full-time
          opportunities. Feel free to reach out directly or send a message below.
        </p>
      </header>

      {/* Direct Contact Cards */}
      <section className="flex flex-col gap-3.5">
        {/* Email Card: Inside page action, stationary arrow (no movement) */}
        <div
          onClick={() => (window.location.href = `mailto:${email}`)}
          className="group relative flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#131418] border border-white/[0.08] card-glow-hover cursor-pointer"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-text-dim font-medium flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-text-dim group-hover:text-neutral-300 transition-colors" />
              Email
            </span>
            <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-white transition-colors tracking-tight">
              {email}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              aria-label="Copy Email Address"
              className="px-3 py-1.5 rounded-lg bg-[#1c1d22] text-neutral-300 hover:text-white hover:bg-[#25272e] border border-white/10 hover:border-white/30 transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer shadow-sm active:scale-95"
              type="button"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-200 transition-colors" />
                  <span>Copy</span>
                </>
              )}
            </button>
            <a
              aria-label="Send Email"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg bg-[#1c1d22] border border-white/10 group-hover:border-white/30 transition-all flex items-center justify-center shadow-sm"
              href={`mailto:${email}`}
            >
              <ArrowUpRight className="w-4 h-4 text-[#63656e] group-hover:text-neutral-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* Voice / Signal Card: Shows a Phone icon instead of arrow */}
        <div
          onClick={() => (window.location.href = `tel:+918509592835`)}
          className="group relative flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#131418] border border-white/[0.08] card-glow-hover cursor-pointer"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-text-dim font-medium flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-text-dim group-hover:text-neutral-300 transition-colors" />
              Voice / Signal
            </span>
            <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-white transition-colors font-mono tracking-tight">
              {phone}
            </span>
          </div>
          <div className="p-2 rounded-lg bg-[#1c1d22] border border-white/10 group-hover:border-white/20 transition-colors flex items-center justify-center shadow-sm">
            <Phone className="w-4 h-4 text-[#63656e] group-hover:text-neutral-200 transition-colors" />
          </div>
        </div>

        {/* Verified Profiles Card: Redirecting to external pages, arrow moves upright */}
        <div className="group relative flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#131418] border border-white/[0.08] card-glow-hover">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-text-dim font-medium">
              Verified Profiles
            </span>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <a
                className="group/link text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1 font-medium"
                href="https://github.com/SomnathKar000"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
                <ArrowUpRight className="w-3.5 h-3.5 text-[#63656e] transition-all duration-150 group-hover/link:text-neutral-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
              <a
                className="group/link text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1 font-medium"
                href="https://www.linkedin.com/in/somnath-kar-aa73aa1a3/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5 text-[#63656e] transition-all duration-150 group-hover/link:text-neutral-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
              <a
                className="group/link text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1 font-medium"
                href="https://twitter.com/Somnathkar000"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter / X
                <ArrowUpRight className="w-3.5 h-3.5 text-[#63656e] transition-all duration-150 group-hover/link:text-neutral-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
              <a
                className="group/link text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1 font-medium"
                href="https://leetcode.com/SomnathKar000/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LeetCode
                <ArrowUpRight className="w-3.5 h-3.5 text-[#63656e] transition-all duration-150 group-hover/link:text-neutral-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Send a Message Form: Calm, stable inputs without flash/splash ring */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="text-[11px] uppercase tracking-wider text-text-dim font-mono font-medium mb-1">
            Send a message
          </h2>
          <p className="text-xs text-text-muted">
            Structured inquiry, response within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-5 rounded-xl bg-[#15161a] border border-emerald-500/30 text-text-primary text-xs sm:text-sm flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-status-active animate-pulse shrink-0"></span>
            <span className="text-neutral-200">
              Inquiry transmitted successfully. Somnath will reply within 24 hours.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[11px] font-mono uppercase tracking-wider text-text-dim font-medium"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Jane Doe"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg !bg-[#15161a] border border-white/10 !text-white text-sm placeholder:text-[#52545D] focus:outline-none focus:border-white/25 transition-colors duration-150"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[11px] font-mono uppercase tracking-wider text-text-dim font-medium"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jane@company.com"
                  className="w-full px-4 py-2.5 rounded-lg !bg-[#15161a] border border-white/10 !text-white text-sm placeholder:text-[#52545D] focus:outline-none focus:border-white/25 transition-colors duration-150"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-[11px] font-mono uppercase tracking-wider text-text-dim font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Share project scope, role outline, or technical discussion topics..."
                className="w-full px-4 py-2.5 rounded-lg !bg-[#15161a] border border-white/10 !text-white text-sm placeholder:text-[#52545D] focus:outline-none focus:border-white/25 transition-colors duration-150 resize-none leading-relaxed"
              ></textarea>
            </div>

            {error && (
              <p className="text-xs text-rose-400 font-medium">{error}</p>
            )}

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
              <span className="text-xs text-text-dim font-mono">
                Direct transmission. Encrypted at rest.
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-lg bg-white text-zinc-950 text-sm font-semibold hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send message</span>
                    <Send className="w-3.5 h-3.5 text-zinc-950" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Now & Location */}
      <section className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-text-dim font-medium">
          Now & Location
        </h2>
        <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
          <div className="flex items-baseline justify-between">
            <span className="text-text-dim font-mono text-xs uppercase tracking-wider">
              Location
            </span>
            <span className="text-white font-medium">
              Kolkata, West Bengal, India
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-text-dim font-mono text-xs uppercase tracking-wider">
              Availability
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-status-active animate-pulse"></span>
              <span className="text-white font-medium">
                Open for Select Roles (Remote / Hybrid)
              </span>
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-text-dim font-mono text-xs uppercase tracking-wider">
              Timezone
            </span>
            <span className="font-mono text-white font-medium">
              IST (UTC+05:30)
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
