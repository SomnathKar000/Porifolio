import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { BlogPosts } from "../data/blogData";

export const BlogView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Systems Architecture",
    "Performance",
    "Frontend & Craft",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? BlogPosts
      : BlogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="w-full max-w-2xl mx-auto px-6 pt-6 pb-24">
      {/* Section Heading */}
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-200 mb-2.5">
          Blog
        </h1>
        <p className="text-sm text-text-muted font-normal leading-relaxed max-w-xl">
          Thoughts on distributed architecture, high-concurrency systems, and calm interface craft.
        </p>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 text-xs">
          {categories.map((category) => {
            const count =
              category === "All"
                ? BlogPosts.length
                : BlogPosts.filter((p) => p.category === category).length;
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all shrink-0 ${
                  isSelected
                    ? "bg-[#25272e] text-white border border-white/20 shadow-sm"
                    : "text-text-muted hover:text-white border border-white/5 hover:border-white/15 hover:bg-[#15161b]"
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Article Listing */}
      <section aria-label="Essays and technical notes">
        <ul className="divide-y divide-white/5 border-t border-b border-white/5">
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <Link
                to={`/blog/${post.slug}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full text-left group py-5 px-3.5 -mx-3.5 rounded-xl flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 hover:bg-[#14161a] border border-transparent hover:border-white/[0.06] transition-all duration-150 cursor-pointer block"
              >
                <div className="flex-grow pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-medium text-neutral-200 group-hover:text-white transition-colors duration-150">
                      {post.title}
                    </span>
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} className="text-text-dim opacity-0 group-hover:opacity-100 arrow-redirect shrink-0 hidden sm:inline-block" />
                  </div>
                  <p className="text-xs text-text-muted font-normal mt-1 leading-relaxed line-clamp-1">
                    {post.summary}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-dim shrink-0 whitespace-nowrap mt-1 sm:mt-0 font-mono group-hover:text-text-muted transition-colors">
                  <span>{post.readTime}</span>
                  <span>·</span>
                  <time>{post.date}</time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
