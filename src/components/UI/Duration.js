import React from "react";
import Box from "@mui/material/Box";

const Duration = (props) => {
  const hours = Math.floor(props.ms / 3600000);
  const mins = Math.round(props.ms / 60000) % 60;
  const prfix = (input) => {
    return input < 10 ? "0" + input : input;
  };
  return (
    <Box
      component="span"
      sx={{
        backgroundColor: "#56001e",
        padding: "2px 6px",
        color: "white",
        borderRadius: "6px",
        border: "3px solid gray",
        margin: "0 10px",
      }}
    >
      {prfix(hours) + " : " + prfix(mins)}
    </Box>
  );
};

export default Duration;
