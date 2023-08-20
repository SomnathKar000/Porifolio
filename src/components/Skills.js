import React from "react";
import styled from "styled-components";
import { Box, Typography, Paper } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Contextvalues } from "../context/context";

const Skills = () => {
  const { skillsRef } = Contextvalues();

  const skills = [
    "TypeScript",
    "JavaScript",
    "C++",
    "React",
    "Redux Toolkit",
    "Bootstrap",
    "Material UI",
    "Axios",
    "Node.js",
    "Express.js",
    "Postman",
    "MySQL",
    "MongoDB",
    "AWS DynamoDB",
    "AWS IAM",
    "AWS API Gateway",
    "AWS Lambda",
    "AWS RDS",
    "AWS S3",
    "Stripe",
    "RESTful APIs",
    "Git",
    "GitHub",
    "GitHub Actions",
    "YML",
    "Vercel",
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
            I possess a diverse set of technical and interpersonal skills which
            are discussed below.
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
                  <Typography>{item}</Typography>
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
  .cvContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .name {
    text-align: center;
  }
  .skillsContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .skillText {
    display:flex;
  }


  @media screen and (max-width: 600px) {
    .skillsContainer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .skillText {
      display:flex
      font-size: 1rem;
      padding: 0.5rem;
      
    }
  }
`;
export default Skills;
