import { Box, Button, Paper, TextField, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SaveOutlined } from "@material-ui/icons";
import axios from "../../axios-instance";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "7vw",
      width: "100%",
      // height: theme.spacing(50),
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    margin: "10px 20px",
  },
  btn: {
    color: "white",
  },
}));

const AddPost = () => {
  const classes = useStyles();
  const titleInputRef = useRef();
  const abstractInputRef = useRef();
  const pathInputRef = useRef();
  const bodyInputRef = useRef();
  const resourceBoxInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let enteredValues = {
      title: titleInputRef.current.value,
      abstract: abstractInputRef.current.value,
      path: pathInputRef.current.value,
      body: bodyInputRef.current.value,
      resourceBox: resourceBoxInputRef.current.value,
    };
    console.log(enteredValues);
    axios
      .post("/content/add", enteredValues)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("Need to fix form to reset after submit");
  return (
    <Box className={classes.root}>
      <Paper className={classes.form} variant="outlined" component={"form"} onSubmit={formSubmitHandler}>
        <Typography variant="h1">Add a blog post</Typography>
        <TextField className={classes.textField} id="title" inputRef={titleInputRef} label="Title" variant="outlined" />
        <TextField className={classes.textField} id="abstract" label="Abstract" variant="outlined" inputRef={abstractInputRef} />
        <TextField className={classes.textField} id="path" label="Path" variant="outlined" inputRef={pathInputRef} />
        <TextField className={classes.textField} id="article" label="Article" variant="outlined" inputRef={bodyInputRef} multiline minRows={4} />
        <TextField
          className={classes.textField}
          id="resourceBox"
          label="Resource Box"
          variant="outlined"
          inputRef={resourceBoxInputRef}
          multiline
          minRows={2}
        />

        <Button
          type="submit"
          className={classes.btn}
          variant="contained"
          color="primary"
          startIcon={<SaveOutlined />}
          style={{ width: "200px", margin: "20px auto", textAlign: "center" }}
        >
          Save
        </Button>
      </Paper>
    </Box>
  );
};

export default AddPost;