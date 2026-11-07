import React, { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle02Icon,
  AlertCircleIcon,
  InformationCircleIcon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";

export type ToastType = "success" | "error" | "info" | "default";

export interface ToastOptions {
  id?: string;
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

export interface ToastItem extends ToastOptions {
  id: string;
  createdAt: number;
}

type ToastListener = (toasts: ToastItem[]) => void;

let listeners: ToastListener[] = [];
let memoryToasts: ToastItem[] = [];

const notifyListeners = () => {
  listeners.forEach((listener) => listener([...memoryToasts]));
};

export const dismissToast = (id?: string) => {
  if (id) {
    memoryToasts = memoryToasts.filter((t) => t.id !== id);
  } else {
    memoryToasts = [];
  }
  notifyListeners();
};

export const toast = (options: ToastOptions | string) => {
  const opts: ToastOptions =
    typeof options === "string" ? { title: options } : options;
  const id = opts.id || Math.random().toString(36).substring(2, 9);
  const duration = opts.duration ?? 4500;

  const newToast: ToastItem = {
    ...opts,
    id,
    type: opts.type || "default",
    createdAt: Date.now(),
  };

  memoryToasts = [newToast, ...memoryToasts.filter((t) => t.id !== id)].slice(
    0,
    4,
  );
  notifyListeners();

  if (duration > 0) {
    setTimeout(() => {
      dismissToast(id);
    }, duration);
  }

  return id;
};

toast.success = (title: string, description?: string, duration?: number) =>
  toast({ title, description, type: "success", duration });

toast.error = (title: string, description?: string, duration?: number) =>
  toast({ title, description, type: "error", duration });

toast.info = (title: string, description?: string, duration?: number) =>
  toast({ title, description, type: "info", duration });

toast.dismiss = dismissToast;

export const Toaster: React.FC = () => {
  const [toasts, setToasts] = useState<ToastItem[]>(memoryToasts);

  useEffect(() => {
    listeners.push(setToasts);
    return () => {
      listeners = listeners.filter((l) => l !== setToasts);
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 max-w-sm w-[calc(100vw-2rem)] pointer-events-none"
    >
      {toasts.map((t) => {
        const isSuccess = t.type === "success";
        const isError = t.type === "error";
        const isInfo = t.type === "info";

        return (
          <div
            key={t.id}
            role="alert"
            className="pointer-events-auto group relative flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#131418]/95 backdrop-blur-md border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.65)] animate-toast-slide-in transition-all"
          >
            {/* Status Icon */}
            <div className="shrink-0 mt-0.5">
              {isSuccess && (
                <div className="p-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} />
                </div>
              )}
              {isError && (
                <div className="p-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400">
                  <HugeiconsIcon icon={AlertCircleIcon} size={16} />
                </div>
              )}
              {isInfo && (
                <div className="p-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <HugeiconsIcon icon={InformationCircleIcon} size={16} />
                </div>
              )}
              {!isSuccess && !isError && !isInfo && (
                <div className="p-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pr-1">
              <h4 className="text-xs sm:text-sm font-medium text-neutral-100 tracking-tight">
                {t.title}
              </h4>
              {t.description && (
                <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed mt-0.5">
                  {t.description}
                </p>
              )}
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => dismissToast(t.id)}
              aria-label="Dismiss notification"
              className="shrink-0 -mr-1 -mt-1 p-1 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

