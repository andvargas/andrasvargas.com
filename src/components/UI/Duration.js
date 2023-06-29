import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  clock: {
    backgroundColor: "#56001e",
    padding: "2px 6px",
    color: "white",
    borderRadius: "6px",
    border: "3px solid gray",
    margin: "0 10px",
  },
}));

const Duration = (props) => {
  const classes = useStyles();
  const hours = Math.floor(props.ms / 3600000);
  const mins = Math.round(props.ms / 60000) % 60;
  const prfix = (input) => {
    return input < 10 ? "0" + input : input;
  };
  return <span className={classes.clock}>{prfix(hours) + " : " + prfix(mins)}</span>;
};

export default Duration;
