import React from "react";
import { useSelector } from "react-redux";
//import classes from "./NavBar.module.css";
import avLogo from "../../staticAssets/avlogo-white.png";
import { makeStyles } from "@mui/styles";

import NavBarItem from "./NavBarItem2";

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
  console.log(props);
  const classes = useStyles();

  const isAdmin = useSelector((state) => state.auth.userType);
  console.log(isAdmin);

  return (
    <ul id={props.id} className={classes.root} style={props.btMenu}>
      <NavBarItem link="/">
        <img src={avLogo} width="30" alt="logo" />
      </NavBarItem>
      <NavBarItem link="/">Homepage</NavBarItem>
      <NavBarItem link="/technical-seo-audit-service">Services</NavBarItem>
      <NavBarItem link="/about">About Me</NavBarItem>
      <NavBarItem link="#" openForm={props.openForm}>
        Contact Me
      </NavBarItem>
      <NavBarItem link="/dashboard" restricted>
        Dashboard
      </NavBarItem>
      <NavBarItem link="/logout" restricted>
        Log Out
      </NavBarItem>
      {isAdmin ? <NavBarItem link="/add-post">Add Article</NavBarItem> : null}
      {/* {props.isAuth ? <NavBarItem link="/register">Login/Register</NavBarItem> : <NavBarItem link="/logout">Log Out</NavBarItem>} */}
    </ul>
  );
};

export default NavBar;
