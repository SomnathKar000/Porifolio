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
import { ProjectDetails } from "../utills/constants";

const Projects = () => {
  const { projectsRef, mode } = Contextvalues();

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
          {ProjectDetails.map(
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
                      <Tooltip sx={{ marginX: 2 }} title={`View my ${name}`}>
                        <IconButton
                          disabled={websiteLink.length === 0}
                          href={websiteLink}
                          target="_blank"
                        >
                          <LinkIcon
                            sx={{
                              fontSize: "2rem",
                            }}
                          />
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
