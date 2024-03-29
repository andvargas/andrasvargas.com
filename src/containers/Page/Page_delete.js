import React, { useState } from "react";
import Helmet from "react-helmet";

// The Navbar should go into a new component
import { AppBar, Toolbar, IconButton, Typography, Paper, Grid, Container, Dialog, Menu, Search, MoreVert } from "@mui/material";
// import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// end Navbar
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
// import ContactForm from '../../components/contactForm';
import Contact from "../Contact/Contact";
// import Dialog from "@mui/material/Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: "white",
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
    color: "white",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "70vh",
  },
  cont: {
    marginTop: "16px",
  },
  text: {
    textAlign: "left",
    lineHeight: "28px",
  },
}));

const titleArticle = "About Me";
const steps = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "AWS",
  "Wordpress",
  "Node.js",
  "MongoDB",
  "mySQL",
  "Git",
  "Salesforce",
  "FilemakerPro",
  "Google Analytics",
  "Google Tag Manager",
];

const Page = (props) => {
  console.log(props);
  const classes = useStyles();
  const [title] = useState(`Hello, I'm Andras `);

  // open Contact form
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const skills = steps.map((skill) => {
    return <li key={skill}>{skill}</li>;
  });
  return (
    <div>
      <Helmet>
        <title>Andras Vargas | About Me</title>
        <link rel="canonical" href={`${window.location.hostname}/about`} />
      </Helmet>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" size="large">
            <Menu />
          </IconButton>
          <Typography className={classes.title} variant="h1" noWrap>
            {titleArticle}
          </Typography>
          <IconButton aria-label="search" color="inherit" size="large">
            <Search />
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit" size="large">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* end Navbar */}
      <Container className={classes.cont} maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <h4>Skills & Technologies</h4>
              <ul className={classes.text}>{skills}</ul>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <h4>{title}</h4>
              <p className={classes.text}>
                I’m a digital all rounder with a decade of experience in digital marketing as managing websites, CRM (Wordpress), email campaigns,
                databases and automations. In the last couple of years I become obsessed about how technology is capable to improve our lives and
                started diving deeper in web, mobile and software development. The pandemic helped me to have more time at home to satisfy my
                curiosity.
              </p>
              <p className={classes.text}>
                I'm always up for a challenge, and recently, as my day job at Colyer Group was affected by Covid-19 and redundancy, I've got free
                capacity to get involved in freelance jobs as a digital marketer specialised in web-design and development. Reach out to{" "}
                <button onClick={handleClickOpen}>connect</button>, if you need to sort out any of the below issues:
              </p>
              <ul className={classes.text}>
                <li>You manage a small business and you have not yet reached the stage where you can afford the costs of a marketing department.</li>
                <li>Your marketing manager is overwhelmed with the multitude of tasks to keep everything running.</li>
                <li>If you just have an issue with your server, website or CRM/database, let me check if I can quickly help.</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {<Contact onClose={handleClose} />}
      </Dialog>
    </div>
  );
};

export default Page;

// this is not in use, should rename and delete
