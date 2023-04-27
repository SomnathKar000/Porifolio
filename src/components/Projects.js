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
import Gallery_website from "../assets/Gallery_website.gif";
import News_website from "../assets/News_website.gif";
import Notebook from "../assets/Notebook.gif";
import Furniture_website from "../assets/Furniture_website.gif";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const { projectsRef, mode } = Contextvalues();
  const images = [
    {
      name: "Furniture website",
      image: Furniture_website,
      websiteLink: "",
      gitHubLink: "https://github.com/SomnathKar000/Furniture-website",

      about:
        "A responsive e-commerce website where users can browse and purchase furniture items. Built with React and Node.js, utilizing RESTful APIs for seamless integration with the back-end server.",
    },
    {
      name: "Gallery website",
      image: Gallery_website,
      websiteLink: "https://gallery-website-somnath.vercel.app/",
      gitHubLink: "https://github.com/SomnathKar000/Gallery-website",

      about:
        "Gallery website is a MERN stack project where users can upload their personal images and view them. Users must log in or sign up to upload their images. The site offers sorting functionality by image title and users can edit titles or delete images.",
    },
    {
      name: "Notebook",
      image: Notebook,
      websiteLink: "https://notebook-somnath000.vercel.app/",
      gitHubLink: "https://github.com/SomnathKar000/Notebook",

      about:
        "An online notebook that allows users to take notes and organize their thoughts. The project involves implementing user authentication, a note-taking feature with editing and deleting functionality.",
    },
    {
      name: "News website",
      image: News_website,
      websiteLink: "",
      gitHubLink: "https://github.com/SomnathKar000/newsapp",

      about:
        "A comprehensive news platform that aggregates top stories from around the world, featuring a customizable dashboard and advanced search capabilities.",
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
