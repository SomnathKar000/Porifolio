import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  Linkedin02Icon,
  NewTwitterIcon,
  Facebook01Icon,
} from "@hugeicons/core-free-icons";
import LeetCodeWhite from "../assets/LeetCodeWhite.svg";
import LeetCodeBlack from "../assets/LeetCodeBlack.svg";
import { Project, SocialAccount, TimelineItem, ThemeMode } from "../types";

// Clean Reddit SVG Icon
const RedditIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.703zM9.25 12C8.56 12 8 12.56 8 13.25c0 .69.56 1.25 1.25 1.25.69 0 1.25-.56 1.25-1.25 0-.69-.56-1.25-1.25-1.25zm5.5 0c-.69 0-1.25.56-1.25 1.25 0 .69.56 1.25 1.25 1.25.69 0 1.25-.56 1.25-1.25 0-.69-.56-1.25-1.25-1.25zm-5.464 3.99a.327.327 0 0 0-.231.096.326.326 0 0 0 0 .461c.84.84 2.135 1.254 3.445 1.254 1.31 0 2.605-.414 3.445-1.254a.326.326 0 0 0 0-.46.327.327 0 0 0-.462 0c-.723.723-1.859 1.06-2.983 1.06-1.124 0-2.26-.337-2.983-1.06a.325.325 0 0 0-.231-.097z" />
  </svg>
);

export const getAccounts = (mode: ThemeMode): SocialAccount[] => {
  const leetCodeImage = mode === "dark" ? LeetCodeWhite : LeetCodeBlack;
  return [
    {
      name: "GitHub",
      link: "https://github.com/SomnathKar000",
      icon: (
        <HugeiconsIcon
          icon={GithubIcon}
          size={24}
          className="hover:text-black dark:hover:text-white transition-colors"
        />
      ),
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/SomnathKar000/",
      icon: (
        <img
          className="w-6 h-6 object-contain transition-transform hover:scale-110"
          src={leetCodeImage}
          alt="LeetCode"
        />
      ),
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/somnath-kar-aa73aa1a3/",
      icon: (
        <HugeiconsIcon
          icon={Linkedin02Icon}
          size={24}
          className="text-[#0072b1] hover:brightness-110 transition-all"
        />
      ),
    },
    {
      name: "Twitter",
      link: "https://twitter.com/Somnathkar000",
      icon: (
        <HugeiconsIcon
          icon={NewTwitterIcon}
          size={24}
          className="text-[#00acee] hover:brightness-110 transition-all"
        />
      ),
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/somnathkar000",
      icon: (
        <HugeiconsIcon
          icon={Facebook01Icon}
          size={24}
          className="text-[#3b5998] hover:brightness-110 transition-all"
        />
      ),
    },
    {
      name: "Reddit",
      link: "https://www.reddit.com/user/Somnath000",
      icon: (
        <RedditIcon className="w-6 h-6 text-[#FF4300] hover:brightness-110 transition-all" />
      ),
    },
  ];
};

export const ProjectDetails: Project[] = [
  {
    name: "ResumeForge",
    image: "/images/project/ResumeForge.png",
    websiteLink: "",
    gitHubLink: "https://github.com/SomnathKar000/ResumeForge",
    about:
      "ResumeForge is an AI-powered tool that takes your existing resume and a job description, and rewrites your resume to match that job. It highlights the right skills, uses the right keywords, and formats everything in a clean ATS-friendly layout.",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Gemini AI",
      "Puppeteer",
    ],
  },
  {
    name: "Furniture website",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/246487000-82cb9567-1e9a-45c4-a11d-9af97674e322.png",
    websiteLink: "",
    gitHubLink: "https://github.com/SomnathKar000/Furniture-website",
    about:
      "A responsive e-commerce website where users can browse and purchase furniture items. Built with React and Node.js, utilizing RESTful APIs for seamless integration with the back-end server.",
    tags: ["React", "Node.js", "RESTful APIs", "E-Commerce"],
  },
  {
    name: "CloudHive",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/275884722-f861a5c4-1a05-4220-966a-db5b07a813b2.png",
    websiteLink: "https://cloud-hive.vercel.app",
    gitHubLink: "https://github.com/SomnathKar000/CloudHive",
    about:
      "CloudHive is a modern cloud storage platform that empowers users to seamlessly store, manage, and share their files in a secure and user-friendly environment.",
    tags: ["React", "Cloud Storage", "Vercel", "Security"],
  },
  {
    name: "AI ChatBot",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/244596256-54df3c50-52eb-4287-b418-5b41d88a8535.png",
    websiteLink: "",
    gitHubLink: "https://github.com/SomnathKar000/AI-Chatbot",
    about:
      "The Chat Bot Application is a robust and interactive chat bot built using various technologies. It leverages the power of AI and real-time communication to provide intelligent conversation capabilities and a seamless user experience.",
    tags: ["AI", "React", "Real-time", "Conversational AI"],
  },
  {
    name: "AWS Serverless API",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/251432884-5b82ce49-5c0c-495a-9fb8-da8155155429.png",
    websiteLink: "",
    gitHubLink: "https://github.com/SomnathKar000/AWS-Serverless-API",
    about:
      "This project provides a serverless CRUD (Create, Read, Update, Delete) API for DynamoDB using AWS Lambda and the Serverless Framework.",
    tags: ["AWS Lambda", "DynamoDB", "Serverless", "Node.js"],
  },
  {
    name: "Gallery website",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/244605688-3d9fe784-709e-4b74-a2a5-5a49381673bb.png",
    websiteLink: "https://gallery-website-somnath.vercel.app",
    gitHubLink: "https://github.com/SomnathKar000/Gallery-website",
    about:
      "Gallery website is a MERN stack project where users can upload their personal images and view them. Users must log in or sign up to upload their images. The site offers sorting functionality by image title and users can edit titles or delete images.",
    tags: ["MERN", "MongoDB", "Express", "React", "Node.js"],
  },
];

export const Skills: string[] = [
  "Frontend Development",
  "React",
  "TypeScript",
  "JavaScript",
  "Firebase",
  "Cloud Functions",
  "Role-Based Access Control (RBAC)",
  "Responsive UI Development",
  "Drag & Drop Interfaces",
  "Workflows & Automation",
  "Performance & Lazy Loading",
  "Redux",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "RESTful APIs",
  "Postman",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "AWS Services",
  "Git & GitHub",
  "GitHub Actions",
  "Vercel",
  "C++",
];

export const TimelineEvents: TimelineItem[] = [
  {
    date: "17/09/2001",
    title: "Birthday",
    institution: "Birth",
    type: "event",
  },
  {
    date: "Sept 2019 — July 2023",
    title: "B.Tech in Computer Science and Engineering",
    institution: "Maulana Abul Kalam Azad University of Technology",
    description:
      "Learned core CS foundations (DSA, DBMS, Networks) and mastered the MERN stack (MongoDB, Express, React, Node.js), building full-stack web applications and project prototypes.",
    type: "education",
  },
  {
    date: "February 2024 — Present",
    title: "Software Engineer",
    institution: "Wiseboxs Softworks Pvt Ltd",
    badge: "Full-time",
    description:
      "Engineering production web platforms. Working with Vue 3 (Composition API), React, Quasar, Pinia, Node.js, AdonisJS, PostgreSQL, Redis/BullMQ, and Docker.",
    type: "work",
  },
];
