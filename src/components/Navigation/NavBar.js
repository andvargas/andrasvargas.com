import React from "react";
//import classes from "./NavBar.module.css";
import avLogo from "../../staticAssets/avlogo-white.png";
import { makeStyles } from "@material-ui/core/styles";

import NavBarItem from "./NavBarItem2";
// import { SupervisedUserCircle, Home, AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#56001e",
    listStyle: "none",
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    marginTop: "0px",
  },
});

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      <NavBarItem link="/">
        <img src={avLogo} width="30" alt="logo" />
      </NavBarItem>
      <NavBarItem link="/">Homepage</NavBarItem>
      <NavBarItem link="//technical-seo-audit-service">Services</NavBarItem>
      <NavBarItem link="/dashboard" restricted>
        Dashboard
      </NavBarItem>
      <NavBarItem link="/logout" restricted>
        Log Out
      </NavBarItem>
      {/* {props.isAuth ? <NavBarItem link="/register">Login/Register</NavBarItem> : <NavBarItem link="/logout">Log Out</NavBarItem>} */}
    </ul>
  );
};

export default NavBar;
