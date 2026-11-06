import React, { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  Link01Icon,
  Tick01Icon,
  FlashIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@hugeicons/core-free-icons";
import { BlogPosts, SampleCaseStudy } from "../data/blogData";

export const CaseStudyView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const matchedPost = BlogPosts.find((p) => p.slug === slug);
  if (!matchedPost) {
    return <Navigate to="/blog" replace />;
  }
  const data = SampleCaseStudy;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-6 pb-24 flex-1">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-medium text-text-muted hover:text-white transition-colors"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
          Back to all writing
        </Link>

        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1c1d22] text-xs text-neutral-300 hover:text-white border border-white/10 hover:border-white/30 transition-all shadow-sm"
        >
          {copied ? (
            <>
              <HugeiconsIcon icon={Tick01Icon} size={14} className="text-emerald-400" />
              <span className="text-emerald-400">Link copied</span>
            </>
          ) : (
            <>
              <HugeiconsIcon icon={Link01Icon} size={14} className="text-neutral-400" />
              <span>Share</span>
            </>
          )}
        </button>
      </div>

      {/* Hero Showcase Illustration Card */}
      <section className="w-full mb-12">
        <div className="w-full bg-white rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden text-neutral-900 border border-neutral-200">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-8 border-b border-neutral-100">
            <div>
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white mb-3 shadow-md shadow-blue-500/30">
                <HugeiconsIcon icon={FlashIcon} size={20} />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950">
                {data.tagline}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-sm font-normal leading-relaxed">
                {data.subtitle}
              </p>
            </div>

            {/* Mock Ingestion Widget */}
            <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 w-full md:w-64 text-xs space-y-2.5">
              <div className="font-semibold text-neutral-800 flex items-center gap-1.5">
                <HugeiconsIcon icon={ServerIcon} size={14} className="text-blue-600" />
                Chunked Ingestion Buffer
              </div>
              <div className="text-neutral-500 text-[11px] leading-snug">
                Direct multi-part pipeline running in edge isolate
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span className="px-2.5 py-1 bg-sky-500 text-white rounded font-medium text-[11px]">
                  Presigned Part
                </span>
                <span className="px-2.5 py-1 bg-neutral-200 text-neutral-700 rounded text-[11px]">
                  Direct to S3
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Tokens / Verification Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-2.5 bg-neutral-100 rounded-lg flex items-center gap-2 text-neutral-700">
              <HugeiconsIcon icon={ShieldCheckIcon} size={14} className="text-neutral-500" />
              <span className="truncate text-[11px]">SHA-256 Payload Hash</span>
            </div>
            <div className="p-2.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="truncate text-[11px]">STS Presigned URL (15m)</span>
            </div>
            <div className="p-2.5 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="truncate text-[11px]">ETag Checksum Verified</span>
            </div>
          </div>

          {/* Token Badges Row */}
          <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-2">
            {data.badges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-neutral-100 text-neutral-600"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Column Metadata Block */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6 pb-10 mb-10 border-b border-white/[0.08] text-sm">
        <div>
          <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-medium mb-1">
            Role
          </h4>
          <p className="text-white font-medium text-xs sm:text-sm">{data.role}</p>
        </div>
        <div>
          <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-medium mb-1">
            Duration
          </h4>
          <p className="text-white font-medium text-xs sm:text-sm">{data.duration}</p>
        </div>
        <div>
          <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-medium mb-1">
            Skills
          </h4>
          <ul className="text-white font-medium text-xs sm:text-sm space-y-0.5">
            {data.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-medium mb-1">
            Tools
          </h4>
          <ul className="text-white font-medium text-xs sm:text-sm space-y-0.5">
            {data.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Article Body Narrative */}
      <article className="space-y-10">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-tight mb-3">
            {matchedPost ? matchedPost.title : data.title}
          </h1>
          <p className="text-xs text-neutral-400 font-mono">
            Published · {matchedPost ? matchedPost.date : "Apr 18, 2025"} · {matchedPost ? matchedPost.readTime : "4 min read"}
          </p>
        </div>

        {/* Background */}
        <section className="space-y-3">
          <h3 className="text-base sm:text-lg font-medium text-white tracking-tight">
            Background
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed font-normal">
            {data.background}
          </p>
        </section>

        {/* The Bottleneck */}
        <section className="space-y-3">
          <h3 className="text-base sm:text-lg font-medium text-white tracking-tight">
            The Bottleneck & Constraints
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed font-normal">
            {data.problem}
          </p>
        </section>

        {/* System Architecture */}
        <section className="space-y-4">
          <h3 className="text-base sm:text-lg font-medium text-white tracking-tight">
            Architectural Invariants
          </h3>
          <ol className="space-y-3 text-sm text-neutral-300">
            {data.architecture.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container text-neutral-300 border border-white/10 shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Code Snippet */}
        {data.codeSnippet && (
          <section className="space-y-3">
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>ingress/signer.ts</span>
              <span>TypeScript</span>
            </div>
            <div className="p-4 rounded-xl bg-[#121316] border border-white/10 overflow-x-auto text-xs font-mono text-neutral-200 leading-relaxed shadow-inner">
              <pre>{data.codeSnippet.code}</pre>
            </div>
          </section>
        )}

        {/* Comparison Metrics Table */}
        <section className="space-y-4">
          <h3 className="text-base sm:text-lg font-medium text-white tracking-tight">
            Performance & Impact
          </h3>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121316] shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-white/10 text-neutral-400 font-mono text-[11px] bg-white/5 uppercase tracking-wider">
                <tr>
                  <th className="p-3 sm:p-4">Metric</th>
                  <th className="p-3 sm:p-4">Legacy Proxy</th>
                  <th className="p-3 sm:p-4 text-emerald-400">Vortex Pipeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-neutral-300 font-mono text-xs">
                <tr>
                  <td className="p-3 sm:p-4 font-sans font-medium text-white">Client Delivery Speed</td>
                  <td className="p-3 sm:p-4 text-neutral-400">Baseline</td>
                  <td className="p-3 sm:p-4 text-emerald-400 font-semibold">+35% Throughput</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-sans font-medium text-white">Node Server Memory Saturation</td>
                  <td className="p-3 sm:p-4 text-rose-400">~840 MB</td>
                  <td className="p-3 sm:p-4 text-emerald-400 font-semibold">&lt; 18 MB (Zero Proxy)</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-sans font-medium text-white">Network Interruption Recovery</td>
                  <td className="p-3 sm:p-4 text-neutral-400">Restart from 0%</td>
                  <td className="p-3 sm:p-4 text-emerald-400 font-semibold">Chunked Resume (ETag)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>
    </div>
  );
};
