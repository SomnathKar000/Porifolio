import React from "react";
import styled from "styled-components";
import { Box, Container, Typography } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";

const Skills = () => {
  return (
    <Wrapper>
      <Container>
        <Box sx={{ margin: "3rem" }}>
          <MemoryIcon sx={{ fontSize: 40 }} />
          <Typography variant="h3">Skills & Technologies</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            fuga!
          </Typography>
        </Box>
        <Box>Skills Section</Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;
export default Skills;
