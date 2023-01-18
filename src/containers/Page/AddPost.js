import { Button, Input, Paper, TextField, Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";

const AddPost = () => {
  // const [title, setTitle] = useState()
  const titleInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(titleInputRef.current); // continue from here
    // https://v4.mui.com/api/button/
    //
  };
  return (
    <Paper variant="outlined" component={"form"} onSubmit={formSubmitHandler}>
      <TextField id="title" label="Title" variant="outlined" />
      <TextField id="abstract" label="Abstract" variant="outlined" />
      <TextField id="path" label="Path" variant="outlined" />
      <Button type="submit">Submit</Button>
    </Paper>
  );
};

export default AddPost;
