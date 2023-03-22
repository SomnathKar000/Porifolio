import React from "react";
import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Typography varient="h2">Contacts</Typography>
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Contact;
