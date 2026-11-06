import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Download01Icon,
  ArrowRight01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { Contextvalues } from "../context/context";
import { getAccounts } from "../utils/constants";

const About: React.FC = () => {
  const { mode, aboutRef, ViewPage, projectsRef, contactRef } = Contextvalues();
  const accounts = getAccounts(mode);

  const CV =
    import.meta.env.VITE_CV ||
    import.meta.env.REACT_APP_CV ||
    "https://github.com/SomnathKar000/Porifolio/files/12419445/Somnath_Kar_MERN_Stack_Developer.pdf";

  const SomnathImage =
    import.meta.env.VITE_IMAGE ||
    import.meta.env.REACT_APP_IMAGE ||
    "/images/Somnath.jpeg";

  const techChips = ["React", "Vue.js", "TypeScript", "Firebase", "Node.js", "Tailwind CSS"];

  return (
    <section
      ref={aboutRef}
      className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Profile Image Column */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-sky-400/20 to-indigo-500/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xl bg-zinc-100 dark:bg-zinc-900">
              <img
                src={SomnathImage}
                alt="Somnath Kar"
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  mode === "light" ? "" : "brightness-95 contrast-105"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Text Content Column */}
        <div className="md:col-span-7 flex flex-col items-start gap-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for new projects
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Somnath</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-zinc-600 dark:text-zinc-400 mt-1">
              Software Engineer
            </p>
          </div>

          <p className="text-lg font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
            I build fast, pixel-perfect web apps with Vue.js, React and TypeScript.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            2+ years of experience building scheduling systems, real-time features, and team
            collaboration tools. I work across the stack with Firebase, Node.js, PostgreSQL, and Redis.
          </p>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {techChips.map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
            <button
              onClick={() => ViewPage(projectsRef)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 active:scale-95 shadow-md hover:shadow-blue-500/25 transition-all"
            >
              See my projects
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
            </button>

            <button
              onClick={() => ViewPage(contactRef)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 active:scale-95 border border-zinc-300/80 dark:border-zinc-700/80 transition-all"
            >
              <HugeiconsIcon icon={Mail01Icon} size={16} />
              Contact me
            </button>

            {CV && (
              <a
                href={CV}
                download
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all"
              >
                <HugeiconsIcon icon={Download01Icon} size={16} />
                Resume
              </a>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex items-center flex-wrap gap-3 pt-2">
            {accounts.map(({ name, link, icon }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noreferrer"
                title={`My ${name} account`}
                className="p-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

