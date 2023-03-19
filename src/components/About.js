import React from "react";
import Somnath from "../assets/Somnath.jpeg";
import styled from "styled-components";
import { Typography, Box, Container, Button } from "@mui/material";
import { Contextvalues } from "../context/context";

const About = () => {
  return (
    <Wrapper>
      <Container className="Contain" maxWidth="xl">
        <Box className="text_box">
          <Typography variant="h3">
            Hi, I'm Somnath
            <br /> I love to build amazing apps
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque
            rem amet dicta unde debitis consectetur hic velit ipsa nesciunt!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            soluta nisi doloremque
          </Typography>
          <Box>
            <Button sx={{ margin: "1rem" }} variant="contained" color="success">
              Contact me
            </Button>
            <Button variant="contained">See my projects</Button>
          </Box>
        </Box>
        <Box className="profile_box">
          <img
            className="profile_box"
            src={Somnath}
            alt="Somnath"
            width="70%"
          />
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    border-radius: 10%;
  }
  margin: 5rem 1rem;
  .Contain {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-template-areas:
      "profile_box profile_box"
      "text_box text_box";
  }
  .profile_box {
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
