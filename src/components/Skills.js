import React from "react";
import styled from "styled-components";
import { Box, Container, Typography } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import VerifiedIcon from "@mui/icons-material/Verified";

const Skills = () => {
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
      <Container>
        <Box className="name" sx={{ margin: "3rem" }}>
          <MemoryIcon sx={{ fontSize: 60 }} />
          <Typography variant="h3">Skills & Technologies</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            fuga!
          </Typography>
        </Box>
        <Box>
          <Box className="skillsContainer">
            {skills.map((item, index) => {
              return (
                <Typography
                  sx={{
                    background: "rgba(255, 255, 255, 0.08)",
                    borderRadius: 2,
                    padding: 2,
                  }}
                  variant="h5"
                  key={index}
                >
                  <VerifiedIcon color="success" sx={{ marginRight: 2 }} />
                  {item}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Container>
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
`;
export default Skills;
