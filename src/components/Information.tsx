import React from "react";
import {
  Briefcase,
  GraduationCap,
  Cake,
  Mail,
  Phone,
  Download,
  Calendar,
} from "lucide-react";
import { TimelineEvents } from "../utils/constants";

const Information: React.FC = () => {
  const CV =
    import.meta.env.VITE_CV ||
    import.meta.env.REACT_APP_CV ||
    "https://github.com/SomnathKar000/Porifolio/files/12419445/Somnath_Kar_MERN_Stack_Developer.pdf";

  const email =
    import.meta.env.VITE_EMAIL ||
    import.meta.env.REACT_APP_EMAIL ||
    "somnathkar2023@gmail.com";

  const phone =
    import.meta.env.VITE_PHONE ||
    import.meta.env.REACT_APP_PHONE ||
    "8509592835";

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-5 h-5 text-emerald-500" />;
      case "education":
        return <GraduationCap className="w-5 h-5 text-blue-500" />;
      case "event":
      default:
        return <Cake className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 mb-4 border border-indigo-200/50 dark:border-indigo-800/50">
          <Calendar className="w-8 h-8" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Journey & Background
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
          Education, career milestones, and professional experience.
        </p>
      </div>

      {/* Modern Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-10 my-8">
        {TimelineEvents.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-blue-500 transition-all">
              {getIcon(item.type)}
            </div>

            {/* Content Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {item.date}
                </span>
                {item.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50">
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                {item.institution}
              </p>

              {item.description && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Contact & CV Info */}
      <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
            <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
            <a
              href={`mailto:${email}`}
              className="hover:underline font-medium hover:text-blue-600 dark:hover:text-blue-400"
            >
              {email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
            <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
            <a
              href={`tel:${phone}`}
              className="hover:underline font-medium hover:text-blue-600 dark:hover:text-blue-400"
            >
              +91 {phone}
            </a>
          </div>
        </div>

        {CV && (
          <a
            href={CV}
            download
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md hover:shadow-blue-500/25 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        )}
      </div>
    </section>
  );
};

export default Information;

