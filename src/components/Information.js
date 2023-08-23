import React from "react";
import { Paper, Box, Typography, IconButton, Tooltip } from "@mui/material";
import styled from "styled-components";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SchoolIcon from "@mui/icons-material/School";
import CakeIcon from "@mui/icons-material/Cake";

const SocialAccounts = () => {
  const CV =
    "https://github.com/SomnathKar000/Porifolio/files/12419445/Somnath_Kar_MERN_Stack_Developer.pdf";
  return (
    <Wrapper>
      <Paper evevation={4}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
            >
              <Typography>17/09/2001</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <CakeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography className="information" variant="h6" component="span">
                Birthday
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
              Kartickpur Deganga Adarsha Vidyapith
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography className="information" variant="h6" component="span">
                Secondary Education
              </Typography>
              <Typography
                variant="caption"
                display="block"
                color="text.secondary"
              >
                March 2016 -- March 2017
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
              Kartickpur Deganga Adarsha Vidyapith
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography className="information" variant="h6" component="span">
                Higher Secondary Education
              </Typography>
              <Typography
                variant="caption"
                display="block"
                color="text.secondary"
              >
                March 2018 -- March 2019
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
              Maulana Abul Kalam Azad University of Technology
              <Typography
                variant="caption"
                display="block"
                color="text.secondary"
              >
                Percentage: 82.7%
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography className="information" variant="h6" component="span">
                B.Tech in Computer Science and Engineering
              </Typography>
              <Typography
                variant="caption"
                display="block"
                color="text.secondary"
              >
                Sept 2019 -- July 2023
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Paper>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          gap: 5,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginY: 3,
          }}
        >
          <EmailIcon /> somnathkar2023@gmail.com
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginY: 3,
          }}
        >
          <CallIcon /> 8509592835
        </Typography>
      </Box>
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
  @media screen and (max-width: 380px) {
    .information {
      font-size: 1rem;
    }
  }
`;
export default SocialAccounts;
