import React from "react";
import styled from "styled-components";
import { Box, Typography, Paper } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Contextvalues } from "../context/context";

const Skills = () => {
  const { skillsRef } = Contextvalues();

  const skills = [
    "JavaScript",
    "C++",
    "React",
    "Redux",
    "Axios",
    "Node.js",
    "Express.js",
    "Postman",
    "SQL",
    "MongoDB",
    "Bootstrap",
    "Material UI",
  ];
  return (
    <Wrapper>
      <Box ref={skillsRef}>
        <Box className="name" sx={{ marginY: "3rem" }}>
          <MemoryIcon sx={{ fontSize: 60 }} />
          <Typography className="HeaderText" variant="h3">
            Skills & Technologies
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            fuga!
          </Typography>
        </Box>
        <Box>
          <Box className="skillsContainer">
            {skills.map((item, index) => {
              return (
                <Paper
                  elevation={8}
                  className="skillText"
                  sx={{
                    borderRadius: 2,
                    padding: 2,
                  }}
                  key={index}
                >
                  <VerifiedIcon color="success" sx={{ marginRight: 2 }} />
                  {item}
                </Paper>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .name {
    text-align: center;
  }
  .skillsContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    .skillsContainer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .skillText {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }
`;
export default Skills;
