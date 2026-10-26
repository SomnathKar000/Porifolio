import React from "react";
import styled from "styled-components";
import { Typography, Box, Button, Tooltip, IconButton } from "@mui/material";
import { Contextvalues } from "../context/context";
import { getAccounts } from "../utills/constants";

const About = () => {
  const { mode, aboutRef, ViewPage, projectsRef, contactRef } = Contextvalues();
  const accounts = getAccounts(mode);

  const Somnath =
    process.env.REACT_APP_IMAGE ||
    "https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/247098543-58155098-8559-40cc-b52c-0d3ebaa0b914.jpeg";

  return (
    <Wrapper>
      <Box ref={aboutRef} className="Contain" maxWidth="xl">
        <Box className="text_box">
          <Typography className="HeaderText" variant="h4">
            Hi, I'm Somnath
            <br /> I'm a Software Engineer
          </Typography>
          <Typography variant="p">
            I'm a Software Engineer with 2+ years of experience building and
            improving modern web applications. I specialize in frontend
            development with Vue.js and TypeScript, responsive and pixel-perfect
            UI, Firebase integration, and cloud functions, and I also work on
            backend services with Node.js, PostgreSQL, and Redis. I've built
            scheduling systems, real-time features, and team collaboration tools
            used by real teams. I enjoy solving complex engineering problems,
            learning new technologies, and building reliable, user-friendly
            applications that deliver real value.
          </Typography>
          <Box>
            <Button
              onClick={() => {
                ViewPage(contactRef);
              }}
              sx={{ margin: "1rem" }}
              variant="contained"
              color="success"
            >
              Contact me
            </Button>
            <Button
              onClick={() => {
                ViewPage(projectsRef);
              }}
              variant="contained"
            >
              See my projects
            </Button>
          </Box>
          <Box className="social">
            <Typography sx={{ marginRight: 2 }} variant="h5">
              Social accounts :
            </Typography>

            <Box className="accounts">
              {accounts.map(({ name, link, icon }) => {
                return (
                  <Box key={link}>
                    <Tooltip title={`My ${name} account`}>
                      <IconButton href={link} sx={{ my: 1 }}>
                        {icon}
                      </IconButton>
                    </Tooltip>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        <Box className="profile_box">
          <img
            className="profile_box"
            src={Somnath}
            alt="Somnath"
            width="70%"
            style={{
              filter: mode === "light" ? "none" : "grayscale(100%)",
            }}
          />
        </Box>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    border-radius: 10%;
  }
  .social {
    display: flex;
    align-items: center;
  }
  .accounts {
    display: flex;
    align-items: center;
  }
  .Contain {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
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
  }

  @media screen and (min-width: 900px) {
    .Contain {
      grid-template-areas:
        "profile_box text_box"
        "profile_box text_box";
    }
  }
  @media screen and (max-width: 525px) {
    .social {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 1rem;
    }
  }
`;

export default About;
