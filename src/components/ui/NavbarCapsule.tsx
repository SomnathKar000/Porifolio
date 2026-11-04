import React from "react";
import { NavPage } from "../../types";

export interface NavbarCapsuleProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
}

export const NavbarCapsule: React.FC<NavbarCapsuleProps> = ({
  currentPage,
  onNavigate,
}) => {
  const tabs: { id: NavPage; label: string }[] = [
    { id: "about", label: "About" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="h-20 max-w-4xl mx-auto px-6 flex items-center pointer-events-auto justify-center">
        <nav
          className="h-11 px-1.5 bg-[#181a1f]/85 backdrop-blur-2xl rounded-full flex items-center gap-1 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.6)] border border-white/10"
          aria-label="Site Navigation"
        >
          {tabs.map((tab) => {
            const isActive =
              currentPage === tab.id ||
              (tab.id === "blog" && currentPage === "case-study");
            return (
              <button
                key={tab.id}
                onClick={() => {
                  onNavigate(tab.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-[#292a2c] text-white shadow-sm border border-white/15"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

