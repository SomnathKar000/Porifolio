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
    <div className={`flex items-baseline justify-between text-xs sm:text-sm ${className}`}>
      <span className="font-mono text-[11px] uppercase tracking-wider text-text-dim font-medium shrink-0">
        {label}
      </span>
      <span className="flex-1 mx-3 border-b border-dotted border-white/20 relative top-[-4px]"></span>
      <span className="text-neutral-300 font-medium shrink-0 text-right">
        {value}
      </span>
    </div>
  );
};
