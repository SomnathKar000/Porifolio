import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  Layers01Icon,
  CloudIcon,
} from "@hugeicons/core-free-icons";
import { Badge } from "../components/ui/Badge";
import { DottedRow } from "../components/ui/DottedRow";
import { LeafletMap } from "../components/ui/LeafletMap";
import { ProjectDetails } from "../utils/constants";

export const AboutView: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const SomnathAvatar = "/images/Somnath.jpeg";

  return (
    <div className="w-full max-w-[680px] mx-auto px-6 pb-12 flex flex-col gap-14">
      {/* Bio / Intro Section */}
      <section className="flex flex-col gap-5 sm:gap-6 pt-2 sm:pt-4">
        <div className="flex items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex flex-col gap-1 sm:gap-1.5 min-w-0">
            <h1 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
              Somnath
            </h1>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-neutral-400">
              <span className="text-neutral-300 font-medium">
                Software Engineer
              </span>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-neutral-600"></span>
              <span className="text-neutral-400 font-mono text-[11px] sm:text-xs">
                Kolkata, India (Remote)
              </span>
            </div>
          </div>
          <div className="relative shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-surface-container-high ring-1 ring-border-subtle shadow-md hover:ring-white/30 transition-all">
              <img
                alt="Somnath avatar profile"
                className="w-full h-full object-cover object-center transition-all duration-300"
                src={SomnathAvatar}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3.5 sm:gap-4">
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            I'm a software engineer who enjoys building reliable, user-friendly
            web applications. I mainly work on frontend development, building
            interfaces and product features that solve real problems. I also
            work with backend services and enjoy understanding how different
            parts of an application work together.
          </p>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            I like turning complex requirements into simple solutions, improving
            existing systems, and learning how to build better software.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 pt-1 text-xs sm:text-sm">
          <a
            className="text-neutral-300 hover:text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/80 transition-all font-medium py-0.5"
            href="#highlights"
          >
            Selected Work
          </a>
          <span className="text-neutral-700">/</span>
          <a
            className="text-neutral-400 hover:text-white transition-colors py-0.5"
            href="#experience"
          >
            Timeline
          </a>
          <span className="text-neutral-700">/</span>
          <Link
            to="/contact"
            className="group text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
          >
            <span className="truncate">somnathkar2023@gmail.com</span>
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={14}
              className="text-neutral-400 group-hover:text-white transition-colors shrink-0 arrow-redirect"
            />
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="flex flex-col gap-6" id="highlights">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-200 tracking-tight">
            Highlights
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {/* Highlight Card 1: ResumeForge */}
          <a
            href="https://resume-forge-web.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col gap-4 p-6 rounded-xl bg-[#131418] border border-white/[0.08] card-glow-hover cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-medium text-neutral-200 group-hover:text-white transition-colors flex items-center gap-1.5">
                  ResumeForge — AI-Powered Resume & ATS Tailoring
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={16}
                    className="text-text-dim arrow-redirect"
                  />
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  An AI-powered tool that takes your existing resume and a job description, and rewrites your resume to match that job. Highlights the right skills, uses optimal keywords, and formats everything in a clean ATS-friendly layout.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <Badge variant="mono">React</Badge>
              <Badge variant="mono">Node.js & Express</Badge>
              <Badge variant="mono">Google Gemini API</Badge>
              <Badge variant="mono">Puppeteer</Badge>
              <Badge variant="mono">Tailwind CSS</Badge>
            </div>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-200 tracking-tight">
            Projects
          </h2>
        </div>

        <div className="flex flex-col gap-3.5">
          {ProjectDetails.map((project) => {
            const isHovered = hoveredProject === project.name;
            const targetLink = project.websiteLink || project.gitHubLink;
            const hasImage = Boolean(project.image);

            const cardClasses =
              "group relative flex flex-col p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-[#131418] hover:border-white/15 card-glow-hover transition-all duration-300 cursor-pointer block";

            const content = (
              <>
                {/* Title with menu-type preview popover */}
                <div
                  className="relative inline-block self-start"
                  onMouseEnter={() => setHoveredProject(project.name)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 -ml-2 rounded-lg text-sm font-medium transition-colors text-neutral-200 group-hover:text-white group-hover:bg-white/[0.06] border border-transparent group-hover:border-white/10">
                    <span>{project.name}</span>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={14}
                      className="text-neutral-500 group-hover:text-neutral-200 opacity-60 group-hover:opacity-100 transition-all arrow-redirect"
                    />
                  </div>

                  {/* Menu type preview box: small enough to identify images, floats without growing the card */}
                  {hasImage && isHovered && (
                    <div className="absolute left-0 top-full pt-1.5 z-30 pointer-events-none animate-popover-in">
                      <div className="w-56 sm:w-64 p-1.5 rounded-xl bg-[#16171d]/95 backdrop-blur-md border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.65)]">
                        <div className="block rounded-lg overflow-hidden bg-black/60">
                          <img
                            src={project.image}
                            alt={project.name}
                            loading="lazy"
                            className="w-full h-32 sm:h-36 object-cover object-top"
                            onError={(e) => {
                              const container = e.currentTarget.closest(
                                ".absolute",
                              ) as HTMLElement;
                              if (container) container.style.display = "none";
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description below title */}
                <p className="text-xs sm:text-[13px] text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed mt-2.5">
                  {project.about}
                </p>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.04]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#17181e] text-neutral-400 border border-white/5 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </>
            );

            return targetLink ? (
              <a
                key={project.name}
                href={targetLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {content}
              </a>
            ) : (
              <div key={project.name} className={cardClasses}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex flex-col gap-6" id="experience">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-200 tracking-tight">
            Experience & Education
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {/* Experience Item 1: Wiseboxs */}
          <div className="flex flex-col gap-1.5 pb-5 border-b border-white/5">
            <div className="flex items-start gap-3.5">
              <a
                href="https://www.linkedin.com/company/wiseboxs/home/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wiseboxs Softworks LinkedIn Profile"
                className="w-10 h-10 rounded-lg bg-[#16181c] border border-white/10 hover:border-white/30 flex items-center justify-center shrink-0 overflow-hidden mt-0.5 transition-all group/logo cursor-pointer shadow-sm hover:scale-105"
              >
                <img
                  src="/images/experience_and_education/wiseboxs_logo.jpeg"
                  alt="Wiseboxs Softworks Logo"
                  className="w-full h-full object-cover group-hover/logo:opacity-90 transition-opacity"
                />
              </a>
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-medium text-neutral-200">
                    <a
                      href="https://www.linkedin.com/company/wiseboxs/home/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors hover:underline decoration-white/20 underline-offset-2"
                    >
                      Wiseboxs Softworks Pvt Ltd
                    </a>{" "}
                    <span className="font-normal text-neutral-400">
                      — Software Engineer
                    </span>
                  </h3>
                  <span className="text-[11px] text-neutral-400 font-mono shrink-0">
                    FEB 2024 — PRESENT
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Engineering production web platforms. Working with Vue 3 (Composition API), React, Quasar, Pinia, Node.js, AdonisJS, PostgreSQL, Redis/BullMQ, and Docker. Implemented automated scheduled tasks, workday and shift timers, drag-and-drop boards, and role-based access control.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Item 2: MAKAUT */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-start gap-3.5">
              <a
                href="https://www.linkedin.com/school/maulana-abul-kalam-azad-university-of-technology-west-bengal/home/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MAKAUT LinkedIn Profile"
                className="w-10 h-10 rounded-lg bg-[#16181c] border border-white/10 hover:border-white/30 flex items-center justify-center shrink-0 overflow-hidden mt-0.5 transition-all group/logo cursor-pointer shadow-sm hover:scale-105"
              >
                <img
                  src="/images/experience_and_education/maulana_abul_kalam_azad_university_of_technology_west_bengal_logo.jpeg"
                  alt="MAKAUT Logo"
                  className="w-full h-full object-cover group-hover/logo:opacity-90 transition-opacity"
                />
              </a>
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-medium text-neutral-200">
                    <a
                      href="https://www.linkedin.com/school/maulana-abul-kalam-azad-university-of-technology-west-bengal/home/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors hover:underline decoration-white/20 underline-offset-2"
                    >
                      Maulana Abul Kalam Azad University (MAKAUT)
                    </a>{" "}
                    <span className="font-normal text-neutral-400">
                      — B.Tech in CSE
                    </span>
                  </h3>
                  <span className="text-[11px] text-neutral-400 font-mono shrink-0">
                    AUG 2019 — SEPT 2023
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Mastered core computer science foundations (Data Structures, Algorithms, DBMS, Operating Systems, Networks) and learned the MERN stack (MongoDB, Express, React, Node.js), building full-stack web applications and project prototypes throughout college.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Stack Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-200 tracking-tight">
            Skills & Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Frontend Stack */}
          <div className="p-5 rounded-xl bg-[#131418] border border-white/[0.08] card-glow-hover flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={Layers01Icon}
                size={16}
                className="text-neutral-400"
              />
              <h3 className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-medium">
                Frontend Architecture
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "React",
                "Vue 3 (Composition API)",
                "Quasar",
                "Pinia",
                "Vuetify",
                "Tailwind CSS",
                "SCSS",
                "Infinite Scroll & Lazy Loading",
                "Drag-and-Drop Task Boards",
                "Multi-Step Onboarding Flows",
                "Custom Theme System",
                "Pixel-Perfect UI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded bg-[#1c1d22] text-neutral-300 border border-white/5 hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Cloud Stack */}
          <div className="p-5 rounded-xl bg-[#131418] border border-white/[0.08] card-glow-hover flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={CloudIcon}
                size={16}
                className="text-neutral-400"
              />
              <h3 className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-medium">
                Backend & Cloud
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Node.js",
                "Express.js",
                "AdonisJS",
                "PostgreSQL",
                "Redis & BullMQ",
                "Docker",
                "Firebase Functions (Scheduled Tasks)",
                "Role-Based Access Control (RBAC)",
                "Admin & Post Scheduling Tools",
                "Workday, Shift & Task Timers",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded bg-[#1c1d22] text-neutral-300 border border-white/5 hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* "Now" & Cartographic Map Section */}
      <section className="flex flex-col gap-5 sm:gap-6 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-200 tracking-tight">
            Now
          </h2>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <p className="text-sm text-neutral-400 leading-relaxed">
            Architecting next-generation distributed systems, exploring
            event-driven patterns, and crafting refined minimal web interfaces.
          </p>

          {/* Leaflet Dark Cartographic Map (Kolkata) */}
          <LeafletMap className="h-52 sm:h-72" />

          {/* Dotted Leader Info List */}
          <div className="flex flex-col divide-y divide-white/[0.05] sm:divide-y-0 sm:gap-3 pt-1 sm:pt-2">
            <DottedRow label="Location" value="Kolkata, West Bengal, India" />
            <DottedRow
              label="Learning"
              value="Distributed systems, event-driven architectures"
            />
            <DottedRow
              label="Interests"
              value="Clean architecture, zen, high-concurrency systems"
            />
            <DottedRow
              label="Availability"
              value={
                <span className="inline-flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  <span>Open for select roles (Remote / Hybrid)</span>
                </span>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};
