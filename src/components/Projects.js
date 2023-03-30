import React from "react";
import styled from "styled-components";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { Typography, Box, Button, Paper } from "@mui/material";
import { Contextvalues } from "../context/context";
import Text_editor from "../assets/Text_editor.gif";
import News_website from "../assets/News_website.gif";
import Notebook from "../assets/Notebook.gif";
import Furniture_website from "../assets/Furniture_website.gif";

const Projects = () => {
  const { projectsRef } = Contextvalues();
  const images = [
    {
      image: Furniture_website,
      link: "https://github.com/SomnathKar000/Furniture-website",
      name: "Furniture website",
      about:
        "A responsive e-commerce website where users can browse and purchase furniture items. Built with React and Node.js, utilizing RESTful APIs for seamless integration with the back-end server.",
    },
    {
      image: Notebook,
      link: "https://github.com/SomnathKar000/Notebook",
      name: "Notebook",
      about:
        "An online notebook that allows users to take notes and organize their thoughts. The project involves implementing user authentication, a note-taking feature with editing and deleting functionality.",
    },
    {
      image: News_website,
      link: "https://github.com/SomnathKar000/newsapp",
      name: "News website",
      about:
        "A comprehensive news platform that aggregates top stories from around the world, featuring a customizable dashboard and advanced search capabilities.",
    },
    {
      image: Text_editor,
      link: "https://github.com/SomnathKar000/new-app",
      name: "Text editor",
      about:
        "Text editor is a React-based application offering a range of text manipulation functionalities, including case conversion, undo and redo, clearing the text field, and real-time formatting preview.",
    },
  ];

  return (
    <Wrapper>
      <Box>
        <Box sx={{ margin: "2rem" }}>
          <AccountTreeIcon sx={{ fontSize: 60 }} />
          <Typography className="HeaderText" variant="h3">
            Apps I've Build
          </Typography>
        </Box>
        <Box ref={projectsRef} className="images">
          {images.map(({ image, link, name, about }, index) => (
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
                  <Box className="link-container" sx={{ marginTop: 4 }}>
                    <Button href={link} target="_blank" variant="contained">
                      View code
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </div>
          ))}
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
