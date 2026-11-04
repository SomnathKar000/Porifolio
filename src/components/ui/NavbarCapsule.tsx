import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavbarCapsule: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const tabs = [
    {
      to: "/",
      label: "About",
      isActive: pathname === "/" || pathname === "/about",
    },
    {
      to: "/blog",
      label: "Blog",
      isActive: pathname.startsWith("/blog"),
    },
    {
      to: "/contact",
      label: "Contact",
      isActive: pathname === "/contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="h-20 max-w-4xl mx-auto px-6 flex items-center pointer-events-auto justify-center">
        <nav
          className="h-11 px-1.5 bg-[#181a1f]/85 backdrop-blur-2xl rounded-full flex items-center gap-1 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.6)] border border-white/10"
          aria-label="Site Navigation"
        >
          {tabs.map((tab) => (
            <Link
              key={tab.to}
              to={tab.to}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-150 ${
                tab.isActive
                  ? "bg-[#292a2c] text-white shadow-sm border border-white/15"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
