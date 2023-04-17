import React from "react";
import { Paper, Box, Typography, IconButton, Tooltip } from "@mui/material";
import styled from "styled-components";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CV from "../assets/SomnathCV.pdf";

const SocialAccounts = () => {
  return (
    <Wrapper>
      <Paper evevation={4}></Paper>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default SocialAccounts;
