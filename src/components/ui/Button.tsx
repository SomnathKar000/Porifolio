import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "pill" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "secondary",
  size = "md",
  icon,
  iconPosition = "left",
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 gap-1.5 rounded-lg",
    md: "text-sm px-4 py-2 gap-2 rounded-lg",
    lg: "text-base px-5 py-2.5 gap-2.5 rounded-xl",
  };

  const variantClasses = {
    primary:
      "bg-white text-zinc-950 hover:bg-neutral-200 shadow-sm font-semibold",
    secondary:
      "bg-surface-container-high text-text-primary hover:bg-surface-container-highest border border-border-subtle",
    pill:
      "bg-surface-container-high/80 text-text-primary hover:bg-surface-container-highest border border-border-subtle rounded-full px-4 py-1.5 text-xs sm:text-sm",
    ghost:
      "bg-transparent text-text-muted hover:text-text-primary hover:bg-surface-container/60",
    glass:
      "backdrop-blur-xl bg-surface-overlay/70 text-text-primary border border-border-subtle hover:border-white/20 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5)]",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
};

