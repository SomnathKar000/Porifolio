import { ReactNode } from "react";

export type NavPage = "about" | "blog" | "contact" | "case-study";
export type ThemeMode = "light" | "dark";

export interface SocialAccount {
  name: string;
  link: string;
  icon: ReactNode;
}

export interface Project {
  name: string;
  image: string;
  websiteLink: string;
  gitHubLink: string;
  about: string;
  tags?: string[];
  metrics?: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  category: "Systems Architecture" | "Performance" | "Frontend & Craft";
  hasCaseStudy?: boolean;
}

export interface CaseStudyData {
  title: string;
  tagline: string;
  subtitle: string;
  role: string;
  duration: string;
  skills: string[];
  tools: string[];
  highlights: { label: string; value: string }[];
  badges: string[];
  background: string;
  problem: string;
  architecture: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface TimelineItem {
  date: string;
  title: string;
  institution: string;
  type: "event" | "education" | "work";
  badge?: string;
  description?: string;
}
