import React from "react";
import styled from "styled-components";
import {
  Typography,
  Box,
  Button,
  Tooltip,
  IconButton,
  Chip,
} from "@mui/material";
import { Contextvalues } from "../context/context";
import { getAccounts } from "../utills/constants";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const About = () => {
  const { mode, aboutRef, ViewPage, projectsRef, contactRef } = Contextvalues();
  const accounts = getAccounts(mode);
  const CV = process.env.REACT_APP_CV;

  const Somnath =
    process.env.REACT_APP_IMAGE ||
    "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/247098543-58155098-8559-40cc-b52c-0d3ebaa0b914.jpeg";

  const techChips = ["React", "Vue.js", "TypeScript", "Firebase", "Node.js"];

  return (
    <Wrapper>
      <Box ref={aboutRef} className="Contain" maxWidth="xl">
        <Box className="profile_box">
          <img
            className="profile_img"
            src={Somnath}
            alt="Somnath"
            width="70%"
            style={{
              filter: mode === "light" ? "none" : "grayscale(100%)",
            }}
          />
        </Box>

        <Box className="text_box">
          <Typography className="HeaderText" variant="h4">
            Hi, I'm Somnath
          </Typography>
          <Typography className="subtitle" variant="h4">
            Software Engineer
          </Typography>

          <Typography className="tagline" variant="h6">
            I build fast, pixel-perfect web apps with Vue.js and TypeScript.
          </Typography>

          <Typography variant="p" className="description">
            2+ years of experience building scheduling systems, real-time
            features, and team collaboration tools. I work across the stack with
            Firebase, Node.js, PostgreSQL, and Redis.
          </Typography>

          <Box className="chips">
            {techChips.map((chip) => (
              <Chip
                key={chip}
                label={chip}
                variant="outlined"
                size="small"
                sx={{ borderRadius: "999px" }}
              />
            ))}
          </Box>

          <Box className="buttons">
            <Button
              onClick={() => {
                ViewPage(projectsRef);
              }}
              variant="contained"
            >
              See my projects
            </Button>
            <Button
              onClick={() => {
                ViewPage(contactRef);
              }}
              variant="outlined"
              color="inherit"
            >
              Contact me
            </Button>
            {CV && (
              <Tooltip title="Download Resume">
                <Button
                  href={CV}
                  download
                  variant="text"
                  color="inherit"
                  endIcon={<FileDownloadIcon />}
                >
                  Resume
                </Button>
              </Tooltip>
            )}
          </Box>

          <Box className="accounts">
            {accounts.map(({ name, link, icon }) => (
              <Box key={link}>
                <Tooltip title={`My ${name} account`}>
                  <IconButton href={link} sx={{ my: 0.5 }}>
                    {icon}
                  </IconButton>
                </Tooltip>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .profile_img {
    border-radius: 10%;
  }
  .accounts {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }
  .Contain {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "profile_box profile_box"
      "text_box text_box";
  }
  .profile_box {
    margin: 1rem;
    grid-area: profile_box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text_box {
    grid-area: text_box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    gap: 0.6rem;
  }
  .subtitle {
    color: #1976d2;
    font-weight: 500;
    margin-top: -0.4rem;
  }
  .tagline {
    font-weight: 700;
    margin-top: 0.5rem;
    line-height: 1.4;
  }
  .description {
    color: #aaa;
    line-height: 1.7;
    font-size: 0.95rem;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.4rem;
  }
  .buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 900px) {
    .Contain {
      grid-template-areas:
        "profile_box text_box"
        "profile_box text_box";
    }
  }
  @media screen and (max-width: 525px) {
    .buttons {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default About;
