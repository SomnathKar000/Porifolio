import React from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Box sx={{ margin: 5 }}>
          <Typography variant="h2">Hire me</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            cumque, quae iste obcaecati reprehenderit blanditiis.
          </Typography>
        </Box>
        <Box className="inputContainer">
          <TextField label="Name" id="fullWidth"></TextField>
          <TextField label="Email" id="fullWidth"></TextField>
          <TextField
            className="messageBox"
            sx={{ height: 40 }}
            label="Message"
          ></TextField>
          <Button variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  .inputContainer {
    display: grid;
    grid-template-columns: 50rem;
    justify-content: center;
    gap: 3rem;
  }
  .messageBox {
  }
`;

export default Contact;
