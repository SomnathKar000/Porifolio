import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Layers, Cloud } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { DottedRow } from "../components/ui/DottedRow";
import { ProjectDetails } from "../utils/constants";

export const AboutView: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const SomnathAvatar =
    "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/247098543-58155098-8559-40cc-b52c-0d3ebaa0b914.jpeg";

  return (
    <div className="w-full max-w-[680px] mx-auto px-6 pb-24 flex flex-col gap-14">
      {/* Bio / Intro Section */}
      <section className="flex flex-col gap-6 pt-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Somnath
            </h1>
            <p className="text-xs sm:text-sm text-text-dim flex items-center gap-2">
              <span className="text-text-muted">Full-Stack Engineer & Systems Architect</span>
              <span className="w-1 h-1 rounded-full bg-surface-container-highest"></span>
              <span className="text-text-dim font-mono text-xs">Kolkata, India (Remote)</span>
            </p>
          </div>
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container-high ring-1 ring-border-subtle shadow-md hover:ring-white/30 transition-all">
              <img
                alt="Somnath avatar profile"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
                src={SomnathAvatar}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            I'm a full-stack engineer and systems architect focused on building
            high-throughput web applications with the MERN stack (MongoDB,
            Express, React, Node.js) and resilient AWS cloud architectures. I enjoy
            turning complex data pipelines into intuitive, calm interfaces.
          </p>
          <p className="text-sm text-text-dim leading-relaxed">
            Currently engineering production systems at{" "}
            <span className="text-white font-medium">
              Wiseboxs Softworks
            </span>
            , scaling cloud infrastructure and boosting client asset delivery
            efficiency by{" "}
            <span className="text-white font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded border border-white/10">
              +35%
            </span>
            .
          </p>
        </div>

        <div className="flex items-center gap-4 pt-1 text-xs sm:text-sm">
          <a
            className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/80 transition-all font-medium"
            href="#highlights"
          >
            Selected Work
          </a>
          <span className="text-surface-container-highest">/</span>
          <a
            className="text-text-dim hover:text-white transition-colors"
            href="#experience"
          >
            Timeline
          </a>
          <span className="text-surface-container-highest">/</span>
          <Link
            to="/contact"
            className="group text-text-dim hover:text-white transition-colors flex items-center gap-1"
          >
            somnathkar2023@gmail.com
            <ArrowUpRight className="w-3.5 h-3.5 text-text-dim arrow-redirect" />
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="flex flex-col gap-6" id="highlights">
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-medium text-text-muted tracking-tight">
            Highlights
          </h2>
          <span className="text-[11px] text-text-dim font-mono">FEATURED CASE STUDIES</span>
        </div>

        <div className="flex flex-col gap-4">
          {/* Highlight Card 1: Vortex / S3 Pipeline (Navigates to case study route) */}
          <Link
            to="/blog/designing-direct-to-s3-multipart-uploads"
            className="group relative flex flex-col gap-4 p-6 rounded-xl bg-[#131418] border border-white/[0.08] card-glow-hover cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-medium text-white group-hover:text-white transition-colors flex items-center gap-1.5">
                  Vortex — Direct-to-S3 Multipart Upload Pipeline
                  <ArrowUpRight className="w-4 h-4 text-text-dim arrow-redirect" />
                </h3>
                <p className="text-xs text-text-dim leading-normal">
                  Bypassing application servers using presigned multipart URLs,
                  SHA-256 integrity verification, and zero proxy memory saturation.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <Badge variant="mono">AWS S3 & STS</Badge>
              <Badge variant="mono">Node.js</Badge>
              <Badge variant="mono">Redis Lock</Badge>
              <Badge variant="mono">TypeScript</Badge>
              <Badge variant="active">+35% Efficiency</Badge>
            </div>
          </Link>

          {/* Highlight Card 2: Modern E-Commerce */}
          <article className="group relative flex flex-col gap-4 p-6 rounded-xl bg-[#131418] border border-white/[0.08] card-glow-hover">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-medium text-white group-hover:text-white transition-colors flex items-center gap-1.5">
                  Full-Stack E-Commerce & Ingress Platform
                  <a
                    href="https://github.com/SomnathKar000/Furniture-website"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center"
                    aria-label="View on GitHub"
                  >
                    <ArrowUpRight className="w-4 h-4 text-text-dim arrow-redirect" />
                  </a>
                </h3>
                <p className="text-xs text-text-dim leading-normal">
                  A high-concurrency digital store with session storage, idempotent
                  RESTful webhook handling, and inventory consistency.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <Badge variant="mono">React</Badge>
              <Badge variant="mono">Node.js</Badge>
              <Badge variant="mono">Express</Badge>
              <Badge variant="mono">MongoDB</Badge>
              <Badge variant="mono">RESTful APIs</Badge>
            </div>
          </article>

          {/* Highlight Card 3: AI Assistant & Cloud Storage */}
          <article className="group relative flex flex-col gap-4 p-6 rounded-xl bg-[#131418] border border-white/[0.08] card-glow-hover">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-medium text-white group-hover:text-white transition-colors flex items-center gap-1.5">
                  CloudHive & AI Conversational Assistant
                  <a
                    href="https://cloud-hive.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center"
                    aria-label="Live Demo"
                  >
                    <ArrowUpRight className="w-4 h-4 text-text-dim arrow-redirect" />
                  </a>
                </h3>
                <p className="text-xs text-text-dim leading-normal">
                  Multi-tier storage with encrypted file sharing, DynamoDB session
                  persistence, and AWS Lambda serverless execution.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <Badge variant="mono">AWS Lambda</Badge>
              <Badge variant="mono">DynamoDB</Badge>
              <Badge variant="mono">React</Badge>
              <Badge variant="mono">Firebase</Badge>
              <Badge variant="mono">Serverless</Badge>
            </div>
          </article>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-medium text-text-muted tracking-tight">
            Projects
          </h2>
          <span className="text-[11px] text-text-dim font-mono">
            {ProjectDetails.length} REPOSITORIES
          </span>
        </div>

        <div className="flex flex-col gap-3.5">
          {ProjectDetails.map((project) => {
            const isHovered = hoveredProject === project.name;
            const targetLink = project.websiteLink || project.gitHubLink;
            const hasImage = Boolean(project.image);

            return (
              <div
                key={project.name}
                className="p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-[#131418] hover:border-white/15 transition-all duration-300 flex flex-col relative"
              >
                {/* Title as a transparent button with menu-type preview popover */}
                <div
                  className="relative inline-block self-start"
                  onMouseEnter={() => setHoveredProject(project.name)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {targetLink ? (
                    <a
                      href={targetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onFocus={() => setHoveredProject(project.name)}
                      onBlur={() => setHoveredProject(null)}
                      className={`inline-flex items-center px-2 py-1 -ml-2 rounded-lg text-sm font-medium transition-colors border ${
                        isHovered
                          ? "bg-white/[0.08] text-white border-white/10"
                          : "bg-transparent text-neutral-200 border-transparent hover:bg-white/[0.06] hover:text-white hover:border-white/10"
                      }`}
                    >
                      <span>{project.name}</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onFocus={() => setHoveredProject(project.name)}
                      onBlur={() => setHoveredProject(null)}
                      className={`inline-flex items-center px-2 py-1 -ml-2 rounded-lg text-sm font-medium transition-colors border cursor-default ${
                        isHovered
                          ? "bg-white/[0.08] text-white border-white/10"
                          : "bg-transparent text-neutral-200 border-transparent hover:bg-white/[0.06] hover:text-white hover:border-white/10"
                      }`}
                    >
                      <span>{project.name}</span>
                    </button>
                  )}

                  {/* Menu type preview box: small enough to identify images, floats without growing the card */}
                  {hasImage && isHovered && (
                    <div className="absolute left-0 top-full pt-1.5 z-30 pointer-events-auto animate-popover-in">
                      <div className="w-56 sm:w-64 p-1.5 rounded-xl bg-[#16171d]/95 backdrop-blur-md border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.65)]">
                        {targetLink ? (
                          <a
                            href={targetLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg overflow-hidden bg-black/60 group/preview"
                          >
                            <img
                              src={project.image}
                              alt={project.name}
                              loading="lazy"
                              className="w-full h-32 sm:h-36 object-cover object-top transition-transform duration-300 group-hover/preview:scale-[1.02]"
                              onError={(e) => {
                                const container = e.currentTarget.closest(".absolute") as HTMLElement;
                                if (container) container.style.display = "none";
                              }}
                            />
                          </a>
                        ) : (
                          <div className="rounded-lg overflow-hidden bg-black/60">
                            <img
                              src={project.image}
                              alt={project.name}
                              loading="lazy"
                              className="w-full h-32 sm:h-36 object-cover object-top"
                              onError={(e) => {
                                const container = e.currentTarget.closest(".absolute") as HTMLElement;
                                if (container) container.style.display = "none";
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Description below title */}
                <p className="text-xs sm:text-[13px] text-text-dim leading-relaxed mt-2.5">
                  {project.about}
                </p>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.04]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#17181e] text-text-dim border border-white/5 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex flex-col gap-6" id="experience">
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-medium text-text-muted tracking-tight">
            Experience & Education
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {/* Experience Item 1: Wiseboxs */}
          <div className="flex flex-col gap-1.5 pb-5 border-b border-white/5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#16181c] border border-white/10 flex items-center justify-center shrink-0 overflow-hidden text-text-muted mt-0.5">
                <span className="font-mono text-[13px] font-semibold text-text-muted">
                  W
                </span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-medium text-neutral-200">
                    Wiseboxs Softworks Pvt Ltd{" "}
                    <span className="font-normal text-text-dim">
                      — Software Engineer
                    </span>
                  </h3>
                  <span className="text-[11px] text-text-dim font-mono shrink-0">
                    FEB 2024 — PRESENT
                  </span>
                </div>
                <p className="text-xs text-text-dim leading-relaxed">
                  Building scalable MERN applications with integrated cloud infrastructure.
                  Architected direct S3 multipart upload pipelines boosting asset delivery
                  efficiency by 35%. Implemented robust scheduling engines and idempotent caching layers.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Item 2: MAKAUT */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#16181c] border border-white/10 flex items-center justify-center shrink-0 overflow-hidden text-text-muted mt-0.5">
                <span className="font-mono text-[13px] font-semibold text-text-muted">
                  M
                </span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-medium text-neutral-200">
                    Maulana Abul Kalam Azad University (MAKAUT){" "}
                    <span className="font-normal text-text-dim">
                      — B.Tech in CSE
                    </span>
                  </h3>
                  <span className="text-[11px] text-text-dim font-mono shrink-0">
                    2019 — 2023 · CGPA: 9.09
                  </span>
                </div>
                <p className="text-xs text-text-dim leading-relaxed">
                  Graduated with CGPA 9.09. Rigorous curriculum across Data Structures,
                  Algorithms, Database Management Systems, Computer Networks, and Cloud Computing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Stack Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-medium text-text-muted tracking-tight">
            Skills & Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Frontend Stack */}
          <div className="p-5 rounded-xl bg-[#131418] border border-white/[0.08] card-glow-hover flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-text-dim" />
              <h3 className="text-[11px] font-mono text-text-dim uppercase tracking-wider font-medium">
                Frontend Architecture
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "TypeScript",
                "React",
                "Vue.js",
                "JavaScript (ES6+)",
                "Tailwind CSS",
                "Glisse (Liquid Glass)",
                "Redux Toolkit",
                "Drag & Drop UI",
                "HTML5 & CSS3",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded bg-[#1c1d22] text-text-muted border border-white/5 hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Cloud Stack */}
          <div className="p-5 rounded-xl bg-[#131418] border border-white/[0.08] card-glow-hover flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-text-dim" />
              <h3 className="text-[11px] font-mono text-text-dim uppercase tracking-wider font-medium">
                Backend & Cloud
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Node.js",
                "Express.js",
                "Firebase",
                "Cloud Functions",
                "AWS Lambda",
                "AWS DynamoDB",
                "AWS S3",
                "PostgreSQL",
                "Redis",
                "MongoDB",
                "RESTful APIs",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded bg-[#1c1d22] text-text-muted border border-white/5 hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* "Now" & Cartographic Map Section */}
      <section className="flex flex-col gap-6 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-medium text-text-muted tracking-tight">
            Now
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-sm text-text-dim leading-relaxed">
            Architecting next-generation distributed systems, exploring event-driven
            patterns, and crafting refined minimal web interfaces.
          </p>

          {/* Dark Cartographic Map SVG Container (Kolkata Map) */}
          <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-white/[0.08] bg-[#121315] shadow-md card-glow-hover">
            <svg
              className="w-full h-full object-cover"
              preserveAspectRatio="xMidYMid slice"
              viewBox="0 0 800 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect fill="#16171a" height="100%" width="100%"></rect>
              <path
                d="M-20,90 Q120,130 220,190 T430,220 T610,310 T820,380 L820,420 L-20,420 Z"
                fill="#111214"
              ></path>
              <path
                d="M290,0 Q320,80 340,160 T430,220 T480,420"
                fill="none"
                stroke="#111214"
                strokeWidth="28"
              ></path>
              <path
                d="M620,0 Q610,120 630,200 T720,350"
                fill="none"
                stroke="#111214"
                strokeWidth="16"
              ></path>
              {/* Grid */}
              <g opacity="0.4" stroke="#26282c" strokeWidth="1">
                <line x1="0" x2="800" y1="60" y2="60"></line>
                <line x1="0" x2="800" y1="120" y2="120"></line>
                <line x1="0" x2="800" y1="180" y2="180"></line>
                <line x1="0" x2="800" y1="250" y2="250"></line>
                <line x1="0" x2="800" y1="320" y2="320"></line>
                <line x1="80" x2="80" y1="0" y2="400"></line>
                <line x1="160" x2="160" y1="0" y2="400"></line>
                <line x1="240" x2="240" y1="0" y2="400"></line>
                <line x1="360" x2="360" y1="0" y2="400"></line>
                <line x1="460" x2="460" y1="0" y2="400"></line>
                <line x1="560" x2="560" y1="0" y2="400"></line>
                <line x1="680" x2="680" y1="0" y2="400"></line>
                <line x1="760" x2="760" y1="0" y2="400"></line>
              </g>
              {/* Roads */}
              <g
                opacity="0.6"
                stroke="#38393e"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M-20,40 Q250,90 480,180 T820,290" fill="none" strokeWidth="2.5"></path>
                <path d="M120,-10 Q190,160 270,410" fill="none" strokeWidth="2.5"></path>
                <path d="M-20,310 Q280,240 540,110 T820,70" fill="none" strokeWidth="2.5"></path>
                <path d="M510,-10 Q500,210 670,410" fill="none" strokeWidth="2.5"></path>
                <path d="M310,210 L580,260 L780,210" fill="none" strokeWidth="1.8"></path>
                <path d="M40,220 L310,210 L440,390" fill="none" strokeWidth="1.8"></path>
              </g>
              <g opacity="0.75" stroke="#4a4c52" strokeWidth="3">
                <path d="M-10,160 Q210,170 380,210 T790,260" fill="none"></path>
              </g>
              {/* Labels */}
              <g fill="#71747d" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500">
                <text opacity="0.85" x="150" y="140">HOWRAH</text>
                <text opacity="0.85" x="530" y="180">SALT LAKE</text>
                <text opacity="0.7" x="610" y="90">AIRPORT</text>
                <text opacity="0.7" x="210" y="340">ALIPORE</text>
              </g>
              <g fill="#e3e2e5" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" letterSpacing="0.08em">
                <text opacity="0.9" x="370" y="195">KOLKATA</text>
              </g>
              {/* Location Pin */}
              <g transform="translate(395, 172)">
                <circle cx="0" cy="0" fill="#ffffff" opacity="0.2" r="10"></circle>
                <circle cx="0" cy="0" fill="#ffffff" opacity="0.4" r="6"></circle>
                <circle cx="0" cy="0" fill="#ffffff" r="3"></circle>
              </g>
            </svg>
          </div>

          {/* Dotted Leader Info List */}
          <div className="flex flex-col gap-3 pt-2">
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
              value="Open for select roles (Remote / Hybrid)"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
