import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import LeetCodeWhite from "../assets/LeetCodeWhite.svg";
import LeetCodeBlack from "../assets/LeetCodeBlack.svg";
export const getAccounts = (mode) => {
  let leetCodeImage = mode === "dark" ? LeetCodeWhite : LeetCodeBlack;
  return [
    {
      name: "GitHub",
      link: "https://github.com/SomnathKar000",
      icon: (
        <GitHubIcon
          sx={{ fontSize: 30, color: mode === "light" ? "#212121" : "white" }}
        />
      ),
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/SomnathKar000/",
      icon: (
        <img
          style={{ width: 30, height: 30 }}
          src={leetCodeImage}
          alt="LeetCode"
        />
      ),
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/somnath-kar-aa73aa1a3/",
      icon: <LinkedInIcon sx={{ fontSize: 30, color: "#0072b1" }} />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/Somnathkar000",
      icon: <TwitterIcon sx={{ fontSize: 30, color: "#00acee" }} />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/somnathkar000",
      icon: <FacebookIcon sx={{ fontSize: 30, color: "#3b5998" }} />,
    },
    {
      name: "Reddit",
      link: "https://www.reddit.com/user/Somnath000",
      icon: <RedditIcon sx={{ fontSize: 30, color: "#FF4300" }} />,
    },
  ];
};

export const ProjectDetails = [
  {
    name: "Furniture website",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/246487000-82cb9567-1e9a-45c4-a11d-9af97674e322.png",
    websiteLink: "",
    gitHubLink: "https://github.com/SomnathKar000/Furniture-website",

    about:
      "A responsive e-commerce website where users can browse and purchase furniture items. Built with React and Node.js, utilizing RESTful APIs for seamless integration with the back-end server.",
  },
  {
    name: "CloudHive",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/275884722-f861a5c4-1a05-4220-966a-db5b07a813b2.png",
    websiteLink: "https://cloud-hive.vercel.app",
    gitHubLink: "https://github.com/SomnathKar000/CloudHive",

    about:
      "CloudHive is a modern cloud storage platform that empowers users to seamlessly store, manage, and share their files in a secure and user-friendly environment.",
  },
  {
    name: "Ai CahtBot",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/244596256-54df3c50-52eb-4287-b418-5b41d88a8535.png",
    websiteLink: "",
    gitHubLink: "https://github.com/SomnathKar000/AI-Chatbot",

    about:
      "The Chat Bot Application is a robust and interactive chat bot built using various technologies. It leverages the power of AI and real-time communication to provide intelligent conversation capabilities and a seamless user experience.",
  },
  {
    name: "AWS Serverless API",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/251432884-5b82ce49-5c0c-495a-9fb8-da8155155429.png",
    websiteLink: "",
    gitHubLink: "https://github.com/SomnathKar000/AWS-Serverless-API",

    about:
      "This project provides a serverless CRUD (Create, Read, Update, Delete) API for DynamoDB using AWS Lambda and the Serverless Framework.",
  },
  {
    name: "Gallery website",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/244605688-3d9fe784-709e-4b74-a2a5-5a49381673bb.png",
    websiteLink: "https://gallery-website-somnath.vercel.app",
    gitHubLink: "https://github.com/SomnathKar000/Gallery-website",

    about:
      "Gallery website is a MERN stack project where users can upload their personal images and view them. Users must log in or sign up to upload their images. The site offers sorting functionality by image title and users can edit titles or delete images.",
  },
  {
    name: "User Registration Web Application",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/245683772-9371df94-731a-4bd8-a3d0-143c70df3ecc.png",
    websiteLink: "https://user-registration-somnath000.vercel.app",
    gitHubLink: "https://github.com/SomnathKar000/User-registration",

    about:
      "This is a web application that allows users to register, login, and manage their personal details, including changing their name and password. The application follows the given use cases and handles error scenarios. It is implemented using Node.js, ReactJS, and MongoDB.",
  },

  {
    name: "Notebook-firebase",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/245452955-ddff3de0-e930-420f-b316-bacdbe74dca7.png",
    websiteLink: "https://notebook-firebase-somnath000.vercel.app",
    gitHubLink: "https://github.com/SomnathKar000/Notebook-firebase",

    about:
      "A sleek note-taking app powered by Firebase. Real-time editing, customizable categories, secure authentication, and title-based note search. Effortlessly create, organize, and sync your notes for a seamless note-taking experience.",
  },
  {
    name: "TS Compiler Hub",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/250079565-09ae704b-406d-436e-b4ab-db9c331df42e.png",
    websiteLink: "https://ts-compiler-hub-somnath000.vercel.app",
    gitHubLink: "https://github.com/SomnathKar000/TS-Compiler-Hub",

    about:
      "TS Compiler Hub is an online TypeScript compiler and playground built with React. It provides a web-based interface for compiling, executing, and experimenting with TypeScript code right in the browser.",
  },
];

export const Skills = [
  "TypeScript",
  "JavaScript",
  "C++",
  "React",
  "Redux",
  "Bootstrap",
  "Material UI",
  "Axios",
  "Node.js",
  "Express.js",
  "Postman",
  "MySQL",
  "MongoDB",
  "AWS DynamoDB",
  "AWS IAM",
  "AWS API Gateway",
  "AWS Lambda",
  "AWS RDS",
  "AWS S3",
  "Stripe",
  "RESTful APIs",
  "Git",
  "GitHub",
  "GitHub Actions",
  "YML",
  "Vercel",
];
