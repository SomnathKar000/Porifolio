import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CpuIcon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { Contextvalues } from "../context/context";
import { Skills } from "../utils/constants";

const SkillsComponent: React.FC = () => {
  const { skillsRef } = Contextvalues();

  return (
    <section
      ref={skillsRef}
      className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mb-4 border border-emerald-200/50 dark:border-emerald-800/50">
          <HugeiconsIcon icon={CpuIcon} size={32} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Skills & Technologies
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
          A comprehensive toolkit covering frontend engineering, Firebase & cloud functions,
          responsive interfaces, and scalable web application development.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {Skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/70 shadow-sm hover:shadow transition-all group"
          >
            <HugeiconsIcon
              icon={CheckmarkCircle02Icon}
              size={16}
              className="text-emerald-500 shrink-0 group-hover:scale-110 transition-transform"
            />
            <span className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsComponent;
