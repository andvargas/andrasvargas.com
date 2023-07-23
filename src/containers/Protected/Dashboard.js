import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Accordion, AccordionDetails, AccordionSummary, Paper } from "@mui/material";
import { Menu, ExpandMore } from "@mui/icons-material";
import axios from "../../axios-instance";
import DisplayDate from "../../components/UI/DisplayDate";
import Duration from "../../components/UI/Duration";
import Helmet from "react-helmet";

// Define the styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: theme.palette.secondary.main,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  width: "60vw",
  display: "flex",
  flexDirection: "column",
  margin: "8px 0",
  textAlign: "left",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "90%",
  padding: "20px",
}));

const Dashboard = () => {
  const company = useSelector((state) => state.auth.company);

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    axios.get("/activities/" + company).then((response) => {
      const d = new Date();
      const oneMonthAgo = new Date(d.getFullYear(), d.getMonth(), 1);
      const filteredTasks = response.data.filter((session) => {
        return new Date(session.startDate) > oneMonthAgo;
      });
      setTaskList(filteredTasks);
    });
  }, []);

  const summary = taskList.reduce((acc, curr) => acc + curr.duration, 0);

  return (
    <>
      <Helmet>
        <title>Andras V. | Dashboard</title>
        <link rel="canonical" href={`${window.location.hostname}/dashboard`} />
      </Helmet>
      <StyledAppBar color="secondary">
        <StyledToolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" size="large">
            <Menu />
          </IconButton>
          <StyledTitle variant="h5">Dashboard (Beta)</StyledTitle>
          <StyledButton component={Link} to="/logout" underline="none">
            Log Out
          </StyledButton>
        </StyledToolbar>
      </StyledAppBar>
      <StyledPaper elevation={3}>
        <Typography variant="h6">This is a list of tasks Andras was working on this month</Typography>
        <Typography variant="body1">
          It has a number of {taskList ? taskList.length : 0} sessions (Start/Duration/Project - click for details).<br></br> Total hours spent this
          month: <Duration ms={summary} />
        </Typography>
      </StyledPaper>
      <div>
        {taskList.map((session) => {
          return (
            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>
                  <DisplayDate date={session.startDate} />
                  <Duration ms={session.duration} />
                  {` ${session.project} `}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {session.tasksAccomplished.map((task) => {
                    return task[1] ? <li key={task[0]}>{task[2]}</li> : null;
                  })}
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
