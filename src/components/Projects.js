import React from "react";
import styled from "styled-components";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import {
  Typography,
  Box,
  Button,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Contextvalues } from "../context/context";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const { projectsRef, mode } = Contextvalues();
  const images = [
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
      name: "ExpressTS-MySQL-CRUD",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/252409625-b7a5ff86-d285-45f0-904d-9694209e3a5f.png",
      websiteLink: "https://express-ts-my-sql-crud.vercel.app",
      gitHubLink: "https://github.com/SomnathKar000/ExpressTS-MySQL-CRUD",

      about:
        "ExpressTS-MySQL-CRUD is a backend application built with TypeScript, Express, and MySQL database. It provides a CRUD (Create, Read, Update, Delete) functionality for managing blog posts and users.",
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

  return (
    <Wrapper>
      <Box ref={projectsRef}>
        <Box sx={{ margin: "2rem" }}>
          <AccountTreeIcon sx={{ fontSize: 60 }} />
          <Typography className="HeaderText" variant="h3">
            Apps I've Build
          </Typography>
        </Box>
        <Box className="images">
          {images.map(
            ({ image, websiteLink, gitHubLink, name, about }, index) => (
              <div className="imageContainer" key={index}>
                <img className="image" src={image} alt={name} />
                <Paper className="HoverDetails" elevation={4}>
                  <Box className="Ok">
                    <h3 className="text">{name}</h3>
                    <Typography
                      sx={{ marginX: 2 }}
                      variant="p"
                      className="details"
                    >
                      {about}
                    </Typography>
                    <Box
                      className="link-container"
                      sx={{
                        marginTop: 4,
                      }}
                    >
                      <Tooltip
                        sx={{ marginX: 2 }}
                        title={`View my ${name} GitHub repository`}
                      >
                        <IconButton href={gitHubLink} target="_blank">
                          <GitHubIcon
                            sx={{
                              color: mode === "light" ? "#212121" : "white",
                              fontSize: "2rem",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        sx={{ marginX: 2 }}
                        disabled={websiteLink.length === 0}
                        title={`View my ${name}`}
                      >
                        <IconButton href={websiteLink} target="_blank">
                          <LinkIcon sx={{ fontSize: "2rem" }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </Paper>
              </div>
            )
          )}
        </Box>
        <Box sx={{ margin: "3rem" }}>
          <Button
            fullWidth
            href="https://github.com/SomnathKar000?tab=repositories"
            target="_blank"
            variant="contained"
          >
            View more
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  .Ok {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;
  }

  .imageContainer {
    position: relative;
    border-radius: 0.7rem;
  }
  .HoverDetails {
    border-radius: 0.7rem;

    position: absolute;
    bottom: 100%;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
    z-index: 1;
  }
  .imageContainer:hover .HoverDetails {
    bottom: 0;
    height: 100%;
  }
  .image {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 0.7rem;
  }
  .text.details {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  @media screen and (max-width: 900px) {
    .images {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    .HoverDetails{
      display:flex;
      align-items:center;
    }
  }
  @media screen and (max-width: 490px) {
    
    .Ok {
      h3 {
        font-size:1px:
        margin: 1rem;
      }
      p {
        margin: 0px;
      }
      .link-container {
        margin: 1rem;
      }
    }
  }
  @media screen and (max-width: 440px) {
    .Ok .details {
      display: none;
    }
  }


  
`;

export default Projects;
