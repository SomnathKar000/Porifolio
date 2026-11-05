import React, { ReactNode } from "react";

export interface DottedRowProps {
  label: string;
  value: ReactNode;
  className?: string;
}

export const DottedRow: React.FC<DottedRowProps> = ({
  label,
  value,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 py-2.5 sm:py-0 text-xs sm:text-sm ${className}`}
    >
      <div className="flex items-baseline justify-between sm:justify-start min-w-0 sm:flex-1">
        <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium shrink-0">
          {label}
        </span>
        <span className="hidden sm:inline-block flex-1 mx-3 border-b border-dotted border-white/20 relative top-[-4px]"></span>
      </div>
      <div className="text-neutral-200 sm:text-neutral-300 font-normal sm:font-medium sm:text-right leading-relaxed sm:shrink-0 text-xs sm:text-sm">
        {value}
      </div>
    </div>
  );
};
