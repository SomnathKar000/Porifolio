import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
  Snackbar,
  Alert,
} from "@mui/material";
import { Contextvalues } from "../context/context";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const { mode, contactRef, isValidEmail } = Contextvalues();
  const backgroundColor = mode === "light" ? "white" : "#121212";
  const textColor = mode === "light" ? "black" : "white";
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [alertMessage, setAlertMessage] = useState("Enter your details");
  const [alertType, setAlertType] = useState("info");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail(data.email)) {
      setAlertMessage("Please enter a valid email");
      setAlertType("error");
      setOpen(true);
      return;
    }
    if (data.name.trim().length <= 4) {
      setAlertMessage("Please enter a valid name");
      setAlertType("error");
      setOpen(true);
      return;
    }
    if (data.message.trim().length <= 6) {
      setAlertMessage("Enter your message");
      setAlertType("error");
      setOpen(true);
      return;
    }

    emailjs
      .send("service_3npkrfo", "template_hh8m4xp", data, "Twwap4ZeVKnG-749h")
      .then((responce) => {
        setAlertMessage("Message sent successfully");
        setAlertType("success");
        setOpen(true);
        setData({ name: "", email: "", message: "" });
      });
  };

  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleClose = (event, reason) => {
    setOpen(false);
    if (reason === "clickaway") {
      return;
    }
  };
  return (
    <Wrapper>
      <Box ref={contactRef}>
        <Box sx={{ margin: 5 }}>
          <Typography className="HeaderText" variant="h3">
            Hire me
          </Typography>
          <Typography variant="p">
            If you're interested in working with me, please feel free to contact
            me using the form below.
            <br /> Thanks for stopping by and I look forward to hearing from you
            soon!
          </Typography>
        </Box>
        <form onSubmit={onSubmit} className="inputContainer">
          <TextField
            name="name"
            value={data.name}
            onChange={onChange}
            label="Name"
            id="fullWidth"
          ></TextField>
          <TextField
            name="email"
            onChange={onChange}
            value={data.email}
            label="Email"
            id="fullWidth"
          ></TextField>
          <TextareaAutosize
            value={data.message}
            onChange={onChange}
            name="message"
            label="message"
            aria-label="empty textarea"
            placeholder="Enter your message"
            style={{
              height: "20rem",
              background: backgroundColor,
              color: textColor,
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
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
