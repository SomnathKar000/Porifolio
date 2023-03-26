import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
} from "@mui/material";
import { Contextvalues } from "../context/context";
import styled from "styled-components";

const Contact = () => {
  const { mode, contactRef } = Contextvalues();
  const backgroundColor = mode === "light" ? "white" : "#121212";
  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <Wrapper>
      <Box ref={contactRef}>
        <Box sx={{ margin: 5 }}>
          <Typography className="HeaderText" variant="h3">
            Hire me
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            cumque, quae iste obcaecati reprehenderit blanditiis.
          </Typography>
        </Box>
        <form onSubmit={onSubmit} className="inputContainer">
          <TextField label="Name" id="fullWidth"></TextField>
          <TextField label="Email" id="fullWidth"></TextField>
          <TextareaAutosize
            label="message"
            aria-label="empty textarea"
            placeholder="Enter your message"
            style={{
              height: "20rem",
              background: backgroundColor,
              color: "white",
              fontSize: "1.1rem",
              padding: "0.5rem",
              borderRadius: "3px",
              borderColor: "#616161",
            }}
          />
          <Button
            variant="contained"
            type="submit"
            value="Submit"
            color="success"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  .inputContainer {
    display: grid;
    grid-template-columns: 40rem;
    justify-content: center;
    gap: 1.5rem;
  }
  @media screen and (max-width: 670px) {
    .inputContainer {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

export default Contact;
