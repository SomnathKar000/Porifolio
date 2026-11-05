import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SentIcon,
  CheckmarkCircle02Icon,
  AlertCircleIcon,
  Loading03Icon,
} from "@hugeicons/core-free-icons";
import { Contextvalues } from "../context/context";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { contactRef, isValidEmail } = Contextvalues();

  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error" | "info";
    message: string;
  }>({
    show: false,
    type: "info",
    message: "",
  });

  const showNotification = (type: "success" | "error" | "info", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isValidEmail(data.email)) {
      showNotification("error", "Please enter a valid email address");
      return;
    }
    if (data.name.trim().length < 3) {
      showNotification("error", "Please enter a valid name (at least 3 characters)");
      return;
    }
    if (data.message.trim().length < 5) {
      showNotification("error", "Please enter a message (at least 5 characters)");
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.send(
        "service_3npkrfo",
        "template_hh8m4xp",
        data as unknown as Record<string, unknown>,
        "Twwap4ZeVKnG-749h"
      );
      showNotification("success", "Message sent successfully! I'll get back to you soon.");
      setData({ name: "", email: "", message: "" });
    } catch (err) {
      showNotification("error", "Failed to send message. Please try reaching out directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <section
      ref={contactRef}
      className="py-16 md:py-24 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Get in Touch
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
          If you're interested in working with me, discussing potential opportunities,
          or just want to say hi, send a message below!
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={data.name}
            onChange={onChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={data.email}
            onChange={onChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={data.message}
            onChange={onChange}
            placeholder="Hi Somnath, I'd like to discuss a project..."
            className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-60 active:scale-[0.99] shadow-md hover:shadow-blue-500/25 transition-all"
        >
          {isSubmitting ? (
            <>
              <HugeiconsIcon icon={Loading03Icon} size={16} className="animate-spin" />
              Sending message...
            </>
          ) : (
            <>
              <HugeiconsIcon icon={SentIcon} size={16} />
              Send Message
            </>
          )}
        </button>
      </form>

      {/* Floating Notification Toast */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-bounce-in">
          <div
            className={`p-4 rounded-2xl shadow-xl border flex items-start gap-3 backdrop-blur-xl ${
              toast.type === "success"
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200"
                : toast.type === "error"
                ? "bg-rose-500/10 border-rose-500/30 text-rose-900 dark:text-rose-200"
                : "bg-blue-500/10 border-blue-500/30 text-blue-900 dark:text-blue-200"
            }`}
          >
            {toast.type === "success" && (
              <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} className="text-emerald-500 shrink-0 mt-0.5" />
            )}
            {toast.type === "error" && (
              <HugeiconsIcon icon={AlertCircleIcon} size={20} className="text-rose-500 shrink-0 mt-0.5" />
            )}
            <p className="text-sm font-medium leading-snug">{toast.message}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;

