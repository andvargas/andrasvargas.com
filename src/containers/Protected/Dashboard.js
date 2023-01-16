import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import axios from "../../axios-instance";
import { Accordion, AccordionDetails, AccordionSummary, Paper } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DisplayDate from "../../components/UI/DisplayDate";
import Duration from "../../components/UI/Duration";

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
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const company = useSelector((state) => state.auth.company);
  console.log(company);

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    axios.get("/activities/" + company).then((response) => {
      const d = new Date();
      const oneMonthAgo = new Date(d.getFullYear(), d.getMonth(), 1);
      //oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      console.log(oneMonthAgo);
      const filteredTasks = response.data.filter((session) => {
        return new Date(session.startDate) > oneMonthAgo;
      });
      setTaskList(filteredTasks);
    });
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Dashboard (Beta)
          </Typography>

          <Button component={Link} to="/logout" underline="none" color="inherit">
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} className={classes.header}>
        <h2>This is a list of tasks Andras was working on this month</h2>
        <p>It has a number of {taskList ? taskList.length : 0} sessions (click for details). </p>
      </Paper>
      <div className={classes.sessions}>
        {taskList.map((session) => {
          return (
            <Accordion className={classes.acc}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
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
