import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Sun01Icon,
  Moon02Icon,
  Menu01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { Contextvalues } from "../context/context";

const Header: React.FC = () => {
  const {
    mode,
    changeMode,
    ViewPage,
    aboutRef,
    skillsRef,
    projectsRef,
    contactRef,
    navbarRef,
  } = Contextvalues();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", pageRef: aboutRef },
    { name: "Projects", pageRef: projectsRef },
    { name: "Skills", pageRef: skillsRef },
    { name: "Contact", pageRef: contactRef },
  ];

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200/60 dark:border-zinc-800/60 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="/"
          className="text-lg font-bold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Somnath Kar
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => ViewPage(item.pageRef)}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={changeMode}
            aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
            className="p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-200/50 dark:border-zinc-800/50"
          >
            {mode === "light" ? (
              <HugeiconsIcon icon={Moon02Icon} size={16} />
            ) : (
              <HugeiconsIcon icon={Sun01Icon} size={16} className="text-amber-400" />
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <HugeiconsIcon icon={Cancel01Icon} size={20} />
            ) : (
              <HugeiconsIcon icon={Menu01Icon} size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setMobileMenuOpen(false);
                ViewPage(item.pageRef);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

