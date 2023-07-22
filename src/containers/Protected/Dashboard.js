import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Accordion, AccordionDetails, AccordionSummary, Paper } from "@mui/material";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
import { Menu, ExpandMore } from "@mui/icons-material";
import axios from "../../axios-instance";
import DisplayDate from "../../components/UI/DisplayDate";
import Duration from "../../components/UI/Duration";
import Helmet from "react-helmet";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  sessions: {
    alignItems: "center",
    margin: "16px 0",
  },
  acc: {
    width: "60vw",
    display: "flex",
    flexDirection: "column",
    margin: "8px 0",
    textAlign: "left",
  },
  header: {
    width: "90%",
    padding: "20px",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Helmet>
        <title>Andras V. | Dashboard</title>
        <link rel="canonical" href={`${window.location.hostname}/dashboard`} />
      </Helmet>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            size="large">
            <Menu />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Dashboard (Beta)
          </Typography>

          {/* <Button component={Link} to="/add-post" underline="none" color="inherit">
            Test
          </Button> */}
          <Button component={Link} to="/logout" underline="none" color="inherit">
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} className={classes.header}>
        <Typography variant="h6">This is a list of tasks Andras was working on this month</Typography>
        <Typography variant="body1">
          It has a number of {taskList ? taskList.length : 0} sessions (Start/Duration/Project - click for details).<br></br> Total hours spent this
          month: <Duration ms={summary} />
        </Typography>
      </Paper>
      <div className={classes.sessions}>
        {taskList.map((session) => {
          return (
            <Accordion className={classes.acc}>
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
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
