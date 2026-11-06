import React, { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "raised" | "flat" | "interactive";
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "raised",
  className = "",
  ...props
}) => {
  const variantClasses = {
    raised:
      "bg-surface-raised/70 border border-white/5 shadow-sm rounded-xl",
    flat:
      "bg-surface-base border border-border-subtle rounded-xl",
    interactive:
      "bg-surface-raised/70 border border-white/5 hover:border-white/15 transition-all duration-200 rounded-xl group",
  };

  return (
    <div
      className={`${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

