import React from "react";

export interface StatusDotProps {
  label?: string;
  className?: string;
}

export const StatusDot: React.FC<StatusDotProps> = ({
  label,
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="relative inline-flex rounded-full h-2 w-2 bg-status-active"></span>
      </span>
      {label && <span className="text-xs text-text-muted">{label}</span>}
    </div>
  );
};

