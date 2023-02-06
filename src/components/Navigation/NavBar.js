import React from "react";
import classes from "./NavBar.module.css";
import avLogo from "../../staticAssets/avlogo-white.png";

import NavBarItem from "./NavBarItem2";

// import { SupervisedUserCircle, Home, AccountCircle } from "@material-ui/icons";

const navBar = (props) => {
  return (
    <ul className={classes.navBar}>
      <NavBarItem>
        <img src={avLogo} width="30" alt="logo" />
      </NavBarItem>
      <NavBarItem link="/">Homepage</NavBarItem>
      <NavBarItem link="/dashboard">Dashboard</NavBarItem>
      {!props.isAuth ? <NavBarItem link="/register">Login/Register</NavBarItem> : <NavBarItem link="/logout">Log Out</NavBarItem>}
    </ul>
  );
};

export default navBar;
