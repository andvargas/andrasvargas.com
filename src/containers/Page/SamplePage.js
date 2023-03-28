import { Container, Grid, Paper } from "@material-ui/core";
//import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import axios from "../../axios-instance";
import ReactMarkdown from "react-markdown";
import NavBar from "../../components/Navigation/NavBar";
import Helmet from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
//import { MoreVert, Menu, NoteAdd } from "@material-ui/icons";

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
    textAlign: "left",
    color: theme.palette.text.secondary,
    minHeight: "70vh",
    lineHeight: "1.8",
  },
  abstract: {
    fontSize: "1em",
    fontWeight: "bold",
  },
  cont: {
    marginTop: "16px",
    marginBottom: "8px",
  },
  text: {
    textAlign: "left",
    lineHeight: "28px",
  },
  body: {
    fontSize: "inherit",
    "& pre": {
      color: "white",
      fontSize: "small",
      whiteSpace: "pre-wrap",
      backgroundColor: "grey",
      padding: "4px",
    },
  },
}));

const SamplePage = (props) => {
  const { id } = props;
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const userType = useSelector((state) => state.auth.userType);
  console.log(userType);

  // const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/content/" + id)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const content = {
    title: data.title,
    abstract: data.abstract,
    resourceBox: data.resourceBox,
    body: data.body,
  };

  return (
    <div>
      <Helmet>
        <title>{content.title + " | andrasvargas.com"}</title>
        <link rel="canonical" href={`${window.location.hostname}/${content.title}`} />
      </Helmet>
      <NavBar />
      {/* <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
            <Menu />
          </IconButton>
          <Typography className={classes.title} variant="h1" noWrap>
            {content.title}
          </Typography>
          {userType === "admin" && (
            <IconButton aria-label="" edge="end" color="inherit" onClick={() => navigate("/add-post")}>
              <NoteAdd />
            </IconButton>
          )}

          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <Container className={classes.cont} maxWidth="md">
        <Grid container spacing={3}>
          <h1>{content.title}</h1>
          <Grid item xs={3}>
            <Paper className={classes.paper}>{isLoading ? <p>Loading...</p> : <ReactMarkdown>{content.resourceBox}</ReactMarkdown>}</Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              {isLoading ? <p>Loading...</p> : <ReactMarkdown className={classes.abstract}>{content.abstract}</ReactMarkdown>}
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <ReactMarkdown className={classes.body} components={{ img: ({ node, ...props }) => <img style={{ maxWidth: "100%" }} {...props} /> }}>
                  {content.body}
                </ReactMarkdown>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SamplePage;
