import React from "react";
import styled from "styled-components";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { Typography, Box, Button } from "@mui/material";
import photo from "../assets/photo.png";
import { Contextvalues } from "../context/context";

const Projects = () => {
  const { mode, projectsRef } = Contextvalues();
  const backgroundColor = mode === "light" ? "#0277bd" : "#202020";
  const images = [photo, photo, photo, photo];
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
          {images.map((img, index) => (
            <div className="imageContainer" key={index}>
              <img className="image" src={img} alt={"Image" + { img }} />
              <Box
                className="HoverDetails"
                sx={{
                  background: backgroundColor,
                }}
              >
                <Box className="Ok">
                  <h3 className="text">Epic react app</h3>
                  <Typography variant="p" className="details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci, fuga!
                  </Typography>
                </Box>
                <Button variant="contained">View code</Button>
              </Box>
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
    display: grid;
    grid-template-column: 1fr;

    text-align: center;
  }

  .imageContainer {
    position: relative;
    border-radius: 0.7rem;
  }
  .HoverDetails {
    border-radius: 0.7rem;
    color: white;
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
  .text .details {
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
  }
`;

export default Projects;
