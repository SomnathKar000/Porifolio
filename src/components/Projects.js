import React from "react";
import styled from "styled-components";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import {
  Typography,
  Box,
  Container,
  Button,
  ImageList,
  ImageListItem,
} from "@mui/material";
import photo from "../assets/photo.avif";

const Projects = () => {
  const images = [photo, photo, photo, photo];
  return (
    <>
      <Container>
        <Box>
          <AccountTreeIcon sx={{ fontSize: 40 }} />
          <Typography variant="h3">Apps I've Build</Typography>
        </Box>
        <Box>
          <ImageList sx={{ height: 450, width: 500 }} cols={2}>
            {images.map((item, index) => (
              <ImageListItem key={index}>
                <img src={item}></img>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </>
  );
};

export default Projects;
