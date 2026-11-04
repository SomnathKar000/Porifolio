import { ReactNode } from "react";

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
}

export interface TimelineItem {
  date: string;
  title: string;
  institution: string;
  type: "event" | "education" | "work";
  badge?: string;
  description?: string;
}

