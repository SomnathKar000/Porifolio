import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 mt-auto bg-surface-base">
      <div className="max-w-[680px] mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-400">
        {/* Sign-off sentence and copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
          <span className="text-neutral-400">Be well, do good work, stay in touch.</span>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <span className="text-neutral-500">© {new Date().getFullYear()} Somnath</span>
        </div>

        {/* Social and Contact Icons */}
        <div className="flex items-center space-x-4 text-neutral-400">
          <a
            aria-label="X (formerly Twitter)"
            className="hover:text-white transition-colors duration-150 p-1"
            href="https://twitter.com/Somnathkar000"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Twitter className="w-4 h-4" />
          </a>

          <a
            aria-label="LinkedIn"
            className="hover:text-white transition-colors duration-150 p-1"
            href="https://www.linkedin.com/in/somnath-kar-aa73aa1a3/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            aria-label="GitHub"
            className="hover:text-white transition-colors duration-150 p-1"
            href="https://github.com/SomnathKar000"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            aria-label="Email"
            className="hover:text-white transition-colors duration-150 p-1"
            href="mailto:somnathkar2023@gmail.com"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

