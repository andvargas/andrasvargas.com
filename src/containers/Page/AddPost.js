import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import SaveOutlined from "@mui/icons-material/SaveOutlined";
import axios from "../../axios-instance";

const AddPost = () => {
  const titleInputRef = useRef();
  const abstractInputRef = useRef();
  const pathInputRef = useRef();
  const bodyInputRef = useRef();
  const resourceBoxInputRef = useRef();
  const [formInputs, setFormInputs] = useState({});

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFormInputs({
      title: titleInputRef.current.value,
      abstract: abstractInputRef.current.value,
      path: pathInputRef.current.value,
      body: bodyInputRef.current.value,
      resourceBox: resourceBoxInputRef.current.value,
    });
    console.log(formInputs);
    axios
      .post("/content/add", formInputs)
      .then((resp) => {
        console.log(resp);
        setFormInputs({});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("Need to fix form to reset after submit - still not working");
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
          margin: "7vw",
          width: "100%",
          // height: theme.spacing(50),
        },
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        variant="outlined"
        component={"form"}
        onSubmit={formSubmitHandler}
      >
        <Typography variant="h1">Add a blog post</Typography>
        <TextField
          sx={{
            margin: "10px 20px",
          }}
          id="title"
          inputRef={titleInputRef}
          label="Title"
          variant="outlined"
        />
        <TextField
          sx={{
            margin: "10px 20px",
          }}
          id="abstract"
          label="Abstract"
          variant="outlined"
          inputRef={abstractInputRef}
        />
        <TextField
          sx={{
            margin: "10px 20px",
          }}
          id="path"
          label="Path"
          variant="outlined"
          inputRef={pathInputRef}
        />
        <TextField
          sx={{
            margin: "10px 20px",
          }}
          id="article"
          label="Article"
          variant="outlined"
          inputRef={bodyInputRef}
          multiline
          minRows={4}
        />
        <TextField
          sx={{
            margin: "10px 20px",
          }}
          id="resourceBox"
          label="Resource Box"
          variant="outlined"
          inputRef={resourceBoxInputRef}
          multiline
          minRows={2}
        />

        <Button
          type="submit"
          sx={{
            color: "white",
          }}
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
