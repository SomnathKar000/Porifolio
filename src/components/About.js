import { Typography, Box, Container, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Contextvalues } from "../context/context";

const About = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h3">
          Hi, I'm Somnath
          <br /> I love to build amazing apps
        </Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque
          rem amet dicta unde debitis consectetur hic velit ipsa nesciunt! Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Odio soluta nisi
          doloremque
        </Typography>
        <Box>
          <Button sx={{ margin: "1rem" }} variant="contained" color="success">
            Contact me
          </Button>
          <Button variant="contained">See my projects</Button>
        </Box>
      </Box>
      <Box>
        <img src="../assets/Somnath.jpeg" alt="Somnath" />
      </Box>
    </Container>
  );
};

export default About;
