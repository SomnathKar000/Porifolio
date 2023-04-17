import React from "react";
import { Paper, Box, Typography, IconButton, Tooltip } from "@mui/material";
import styled from "styled-components";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CV from "../assets/SomnathCV.pdf";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const SocialAccounts = () => {
  return (
    <Wrapper>
      <Paper evevation={4}>
        <Typography>
          <EmailIcon />
          somnathkar2023@gmail.com
        </Typography>
        <Typography>
          <CallIcon />
          8509592835
        </Typography>
      </Paper>
      <Box sx={{ margin: 3 }} className="cvContainer">
        <Typography variant="h5">Download my CV</Typography>
        <Tooltip title="Click on this icon">
          <IconButton href={CV} download>
            <FileDownloadIcon sx={{ fontSize: 40 }} color="primary" />
          </IconButton>
        </Tooltip>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 2rem 0rem;
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
`;
export default SocialAccounts;
