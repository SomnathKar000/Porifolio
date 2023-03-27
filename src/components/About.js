import React from "react";
import Somnath from "../assets/Somnath.jpeg";
import styled from "styled-components";
import { Typography, Box, Button, Tooltip, IconButton } from "@mui/material";
import { Contextvalues } from "../context/context";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";

const About = () => {
  const { mode, aboutRef, ViewPage, projectsRef, contactRef } = Contextvalues();
  const accounts = [
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
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/somnath-kar-aa73aa1a3/",
      icon: <LinkedInIcon sx={{ fontSize: 30, color: "#0072b1" }} />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/Somnath0123456",
      icon: <TwitterIcon sx={{ fontSize: 30, color: "#00acee" }} />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/somnath.kar.77985",
      icon: <FacebookIcon sx={{ fontSize: 30, color: "#3b5998" }} />,
    },
    {
      name: "Reddit",
      link: "https://www.reddit.com/user/Somnath000",
      icon: <RedditIcon sx={{ fontSize: 30, color: "#FF4300" }} />,
    },
  ];
  return (
    <Wrapper>
      <Box ref={aboutRef} className="Contain" maxWidth="xl">
        <Box className="text_box">
          <Typography className="HeaderText" variant="h4">
            Hi, I'm Somnath
            <br /> I'm a MERN stack developer
          </Typography>
          <Typography variant="p">
            I specialize in building full-stack web applications using the MERN
            (MongoDB, Express, React, Node.js) stack. In addition, I have
            experience working with C++ and SQL. I'm passionate about developing
            elegant and efficient code, and I'm always looking to learn new
            technologies and programming paradigms.
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
`;

export default About;
