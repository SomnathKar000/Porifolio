import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { BlogPosts } from "../data/blogData";
import { BlogPost } from "../types";

export interface BlogViewProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onSelectPost }) => {
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
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2.5">
          Blog
        </h1>
        <p className="text-sm text-neutral-400 font-normal leading-relaxed max-w-xl">
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
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors shrink-0 ${
                  isSelected
                    ? "bg-[#1e2025] text-white border border-[#2b2e35]"
                    : "text-neutral-400 hover:text-white border border-[#1e2025] hover:border-[#2b2e35]"
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
        <ul className="divide-y divide-[#1e2025] border-t border-b border-[#1e2025]">
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <button
                onClick={() => onSelectPost(post)}
                className="w-full text-left group py-5 px-3 -mx-3 rounded-lg flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 hover:bg-[#14161a] transition-all duration-150 cursor-pointer"
              >
                <div className="flex-grow pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-medium text-neutral-200 group-hover:text-white transition-colors duration-150">
                      {post.title}
                    </span>
                    {post.hasCaseStudy && (
                      <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                        <Sparkles className="w-2.5 h-2.5" />
                        Case Study
                      </span>
                    )}
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 shrink-0 hidden sm:inline-block" />
                  </div>
                  <p className="text-xs text-neutral-400 font-normal mt-1 leading-relaxed line-clamp-1">
                    {post.summary}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 shrink-0 whitespace-nowrap mt-1 sm:mt-0 font-normal group-hover:text-neutral-400 transition-colors">
                  <span>{post.readTime}</span>
                  <span>·</span>
                  <time>{post.date}</time>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

