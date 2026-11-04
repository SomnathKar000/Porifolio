import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Copy,
  Check,
  ArrowUpRight,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { StatusDot } from "../components/ui/StatusDot";

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

  const handleCopyEmail = () => {
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
    <div className="w-full max-w-2xl mx-auto px-6 py-8 flex flex-col gap-12">
      {/* Header */}
      <header className="flex flex-col">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-3">
          Contact
        </h1>
        <p className="text-sm text-neutral-400 leading-relaxed">
          I'm always open to discussing systems architecture, new product
          engineering challenges, open source collaborations, or full-time
          opportunities. Feel free to reach out directly or send a message below.
        </p>
      </header>

      {/* Direct Contact Cards */}
      <section className="flex flex-col gap-3">
        {/* Email Card with 1-click Copy */}
        <div className="flex items-center justify-between p-4 sm:p-5 rounded-xl bg-surface-raised border border-border-subtle hover:border-white/20 transition-all">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-text-dim font-medium">
              Email
            </span>
            <a
              className="text-sm sm:text-base font-medium text-text-primary hover:text-text-muted transition-colors tracking-tight"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              aria-label="Copy Email Address"
              className="px-3 py-1.5 rounded-lg bg-surface-container-high text-neutral-300 hover:bg-surface-container-highest transition-colors flex items-center gap-1.5 text-xs cursor-pointer border border-border-subtle"
              type="button"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
            <a
              aria-label="Send Email"
              className="p-1.5 rounded-lg bg-surface-container-high text-neutral-300 hover:bg-surface-container-highest transition-colors flex items-center justify-center border border-border-subtle hover:text-white"
              href={`mailto:${email}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Voice / Signal Card */}
        <div className="flex items-center justify-between p-4 sm:p-5 rounded-xl bg-surface-raised border border-border-subtle hover:border-white/20 transition-all">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-text-dim font-medium">
              Voice / Signal
            </span>
            <a
              className="text-sm sm:text-base font-medium text-text-primary hover:text-text-muted transition-colors font-mono tracking-tight"
              href="tel:+918509592835"
            >
              {phone}
            </a>
          </div>
          <a
            href="tel:+918509592835"
            className="p-2 rounded-lg bg-surface-container-high text-neutral-400 hover:text-white border border-border-subtle"
            aria-label="Call Somnath"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Verified Profiles */}
        <div className="flex items-center justify-between p-4 sm:p-5 rounded-xl bg-surface-raised border border-border-subtle hover:border-white/20 transition-all">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-wider text-text-dim font-medium">
              Verified Profiles
            </span>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <a
                className="text-neutral-200 hover:text-white transition-colors inline-flex items-center gap-1"
                href="https://github.com/SomnathKar000"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub <span className="text-text-dim text-xs">↗</span>
              </a>
              <a
                className="text-neutral-200 hover:text-white transition-colors inline-flex items-center gap-1"
                href="https://www.linkedin.com/in/somnath-kar-aa73aa1a3/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn <span className="text-text-dim text-xs">↗</span>
              </a>
              <a
                className="text-neutral-200 hover:text-white transition-colors inline-flex items-center gap-1"
                href="https://twitter.com/Somnathkar000"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter / X <span className="text-text-dim text-xs">↗</span>
              </a>
              <a
                className="text-neutral-200 hover:text-white transition-colors inline-flex items-center gap-1"
                href="https://leetcode.com/SomnathKar000/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LeetCode <span className="text-text-dim text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Send a Message Form */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
            Send a message
          </h2>
          <p className="text-xs text-text-dim">
            Structured inquiry, response within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-5 rounded-xl bg-surface-container-high border border-border-subtle text-text-primary text-xs sm:text-sm flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-status-active animate-pulse shrink-0"></span>
            <span>
              Inquiry transmitted successfully. Somnath will reply within 24 hours.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[11px] uppercase tracking-wider text-text-dim font-medium"
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
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-high border border-border-subtle text-neutral-200 text-sm placeholder:text-text-dim focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[11px] uppercase tracking-wider text-text-dim font-medium"
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
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-high border border-border-subtle text-neutral-200 text-sm placeholder:text-text-dim focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-[11px] uppercase tracking-wider text-text-dim font-medium"
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
                className="w-full px-4 py-2.5 rounded-lg bg-surface-container-high border border-border-subtle text-neutral-200 text-sm placeholder:text-text-dim focus:outline-none focus:border-white/30 transition-colors resize-none leading-relaxed"
              ></textarea>
            </div>

            {error && (
              <p className="text-xs text-rose-400 font-medium">{error}</p>
            )}

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
              <span className="text-xs text-text-dim">
                Direct transmission. Encrypted at rest.
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-lg bg-white text-zinc-950 text-sm font-medium hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Now & Location */}
      <section className="pt-4 border-t border-border-subtle flex flex-col gap-3">
        <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
          Now & Location
        </h2>
        <div className="flex flex-col gap-2 text-xs sm:text-sm text-neutral-400">
          <div className="flex items-baseline justify-between">
            <span className="text-text-dim">Location</span>
            <span className="text-text-primary">Kolkata, West Bengal, India</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-text-dim">Availability</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-status-active"></span>
              <span className="text-text-primary">
                Open for Select Roles (Remote / Hybrid)
              </span>
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-text-dim">Timezone</span>
            <span className="font-mono text-text-primary">IST (UTC+05:30)</span>
          </div>
        </div>
      </section>
    </div>
  );
};

