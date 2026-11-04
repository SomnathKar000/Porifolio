import React from "react";
import { ArrowUpRight, ArrowRight, Layers, Cloud, Sparkles } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { DottedRow } from "../components/ui/DottedRow";
import { NavPage } from "../types";
import { ProjectDetails } from "../utils/constants";

export interface AboutViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenCaseStudy: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenCaseStudy,
}) => {
  const SomnathAvatar =
    "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/247098543-58155098-8559-40cc-b52c-0d3ebaa0b914.jpeg";

  return (
    <div className="w-full max-w-[680px] mx-auto px-6 pb-24 flex flex-col gap-14">
      {/* Bio / Intro Section */}
      <section className="flex flex-col gap-6 pt-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight">
              Somnath
            </h1>
            <p className="text-xs sm:text-sm text-text-muted flex items-center gap-2">
              <span>Full-Stack Engineer & Systems Architect</span>
              <span className="w-1 h-1 rounded-full bg-surface-container-highest"></span>
              <span className="text-text-dim">Kolkata, India (Remote)</span>
            </p>
          </div>
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container-high ring-1 ring-border-subtle shadow-md">
              <img
                alt="Somnath avatar profile"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
                src={SomnathAvatar}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed text-neutral-300">
            I'm a full-stack engineer and systems architect focused on building
            high-throughput web applications with the MERN stack (MongoDB,
            Express, React, Node.js) and resilient AWS cloud architectures. I enjoy
            turning complex data pipelines into intuitive, calm interfaces.
          </p>
          <p className="text-sm text-text-muted leading-relaxed">
            Currently engineering production systems at{" "}
            <span className="text-text-primary font-medium">
              Wiseboxs Softworks
            </span>
            , scaling cloud infrastructure and boosting client asset delivery
            efficiency by{" "}
            <span className="text-text-primary font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded border border-white/5">
              +35%
            </span>
            .
          </p>
        </div>

        <div className="flex items-center gap-4 pt-1 text-xs sm:text-sm">
          <a
            className="text-text-primary underline decoration-white/20 underline-offset-4 hover:decoration-white/80 transition-all font-medium"
            href="#highlights"
          >
            Selected Work
          </a>
          <span className="text-surface-container-highest">/</span>
          <a
            className="text-text-muted hover:text-text-primary transition-colors"
            href="#experience"
          >
            Timeline
          </a>
          <span className="text-surface-container-highest">/</span>
          <button
            onClick={() => onNavigate("contact")}
            className="text-text-muted hover:text-text-primary transition-colors flex items-center gap-1"
          >
            somnathkar2023@gmail.com
            <ArrowUpRight className="w-3.5 h-3.5 text-text-dim" />
          </button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="flex flex-col gap-6" id="highlights">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-text-primary tracking-tight">
            Highlights
          </h2>
          <span className="text-xs text-text-dim font-mono">FEATURED CASE STUDIES</span>
        </div>

        <div className="flex flex-col gap-4">
          {/* Highlight Card 1: Vortex / S3 Pipeline (Click opens case study) */}
          <article
            onClick={onOpenCaseStudy}
            className="group relative flex flex-col gap-4 p-6 rounded-xl bg-surface-raised/70 border border-white/5 hover:border-white/15 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-medium text-text-primary group-hover:text-white transition-colors flex items-center gap-1.5">
                  Vortex — Direct-to-S3 Multipart Upload Pipeline
                  <ArrowUpRight className="w-4 h-4 text-text-dim group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-xs text-text-muted leading-normal">
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
          </article>

          {/* Highlight Card 2: Modern E-Commerce */}
          <article className="group relative flex flex-col gap-4 p-6 rounded-xl bg-surface-raised/70 border border-white/5 hover:border-white/15 transition-all duration-200">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-medium text-text-primary group-hover:text-white transition-colors flex items-center gap-1.5">
                  Full-Stack E-Commerce & Ingress Platform
                  <a
                    href="https://github.com/SomnathKar000/Furniture-website"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center"
                    aria-label="View on GitHub"
                  >
                    <ArrowUpRight className="w-4 h-4 text-text-dim group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </h3>
                <p className="text-xs text-text-muted leading-normal">
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
          <article className="group relative flex flex-col gap-4 p-6 rounded-xl bg-surface-raised/70 border border-white/5 hover:border-white/15 transition-all duration-200">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-[15px] font-medium text-text-primary group-hover:text-white transition-colors flex items-center gap-1.5">
                  CloudHive & AI Conversational Assistant
                  <a
                    href="https://cloud-hive.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center"
                    aria-label="Live Demo"
                  >
                    <ArrowUpRight className="w-4 h-4 text-text-dim group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </h3>
                <p className="text-xs text-text-muted leading-normal">
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

      {/* Projects (Minimal Row List) */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-text-primary tracking-tight">
            All Projects
          </h2>
          <span className="text-xs text-text-dim font-mono">
            {ProjectDetails.length} REPOSITORIES
          </span>
        </div>

        <div className="flex flex-col -mx-3 divide-y divide-white/5">
          {ProjectDetails.map((project) => (
            <a
              key={project.name}
              href={project.websiteLink || project.gitHubLink}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-surface-raised/60 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 min-w-0">
                <span className="text-[14px] font-medium text-text-primary group-hover:text-white transition-colors truncate">
                  {project.name}
                </span>
                <span className="text-xs text-text-muted truncate max-w-sm sm:max-w-md">
                  {project.about}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-text-dim group-hover:text-text-primary transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex flex-col gap-6" id="experience">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-text-primary tracking-tight">
            Experience & Education
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {/* Experience Item 1: Wiseboxs */}
          <div className="flex flex-col gap-1.5 pb-5 border-b border-white/5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#16181c] border border-white/10 flex items-center justify-center shrink-0 overflow-hidden text-text-muted mt-0.5">
                <span className="font-mono text-[13px] font-semibold text-text-primary">
                  W
                </span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-medium text-text-primary">
                    Wiseboxs Softworks Pvt Ltd{" "}
                    <span className="font-normal text-text-muted">
                      — Software Engineer
                    </span>
                  </h3>
                  <span className="text-[11px] text-text-dim font-mono shrink-0">
                    FEB 2024 — PRESENT
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Building scalable MERN applications with integrated cloud infrastructure.
                  Architected direct S3 multipart upload pipelines boosting asset delivery
                  efficiency by 35%. Implemented robust scheduling engines and idempotent caching layers.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Item 2: MAKAUT */}
          <div className="flex flex-col gap-1.5 pb-5 border-b border-white/5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#16181c] border border-white/10 flex items-center justify-center shrink-0 overflow-hidden text-text-muted mt-0.5">
                <span className="font-mono text-[13px] font-semibold text-text-primary">
                  M
                </span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-medium text-text-primary">
                    Maulana Abul Kalam Azad University (MAKAUT){" "}
                    <span className="font-normal text-text-muted">
                      — B.Tech in CSE
                    </span>
                  </h3>
                  <span className="text-[11px] text-text-dim font-mono shrink-0">
                    2019 — 2023 · CGPA: 9.09
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Graduated with CGPA 9.09. Rigorous curriculum across Data Structures,
                  Algorithms, Database Management Systems, Computer Networks, and Cloud Computing.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Item 3: School */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#16181c] border border-white/10 flex items-center justify-center shrink-0 overflow-hidden text-text-muted mt-0.5">
                <span className="font-mono text-[13px] font-semibold text-text-primary">
                  K
                </span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-medium text-text-primary">
                    Kartickpur Deganga Adarsha Vidyapith{" "}
                    <span className="font-normal text-text-muted">
                      — Secondary & Higher Secondary
                    </span>
                  </h3>
                  <span className="text-[11px] text-text-dim font-mono shrink-0">
                    2016 — 2019
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Focus on Mathematics, Physics, Chemistry, and Computer Science fundamentals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Stack Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-text-primary tracking-tight">
            Skills & Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Frontend Stack */}
          <div className="p-5 rounded-xl bg-surface-raised/40 border border-white/5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-text-dim" />
              <h3 className="text-xs text-text-primary uppercase tracking-wider font-medium">
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
                  className="text-xs px-2.5 py-1 rounded bg-surface-container-high/60 text-neutral-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Cloud Stack */}
          <div className="p-5 rounded-xl bg-surface-raised/40 border border-white/5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-text-dim" />
              <h3 className="text-xs text-text-primary uppercase tracking-wider font-medium">
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
                  className="text-xs px-2.5 py-1 rounded bg-surface-container-high/60 text-neutral-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* "Now" & Cartographic Map Section */}
      <section className="flex flex-col gap-6 pt-4 border-t border-white/5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-text-primary tracking-tight flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Now
          </h2>
          <span className="text-xs text-text-dim font-mono">Q4 2025</span>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-sm text-neutral-300 leading-relaxed">
            Architecting next-generation distributed systems, exploring event-driven
            patterns, and crafting refined minimal web interfaces.
          </p>

          {/* Dark Cartographic Map SVG Container (Kolkata Map) */}
          <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-white/5 bg-[#121315] shadow-md">
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

