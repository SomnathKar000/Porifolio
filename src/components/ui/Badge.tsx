import React, { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "mono" | "active" | "subtle";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "mono",
  className = "",
}) => {
  const variantClasses = {
    default:
      "bg-surface-container text-text-muted border border-border-subtle",
    mono:
      "bg-surface-container text-text-muted font-mono text-[11px] sm:text-xs border border-white/5",
    active:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    subtle:
      "bg-surface-container-high/50 text-text-muted border border-border-subtle/50",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

