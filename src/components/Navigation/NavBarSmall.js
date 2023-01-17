import React from "react";
import { NavLink } from "react-router-dom";

import { AccountCircle, Fingerprint, Home, Mail, SupervisedUserCircle, HowToReg } from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import classes from "./NavBar.module.css";

const NavBarSmall = (props) => (
  <ul>
    <Tooltip title="Homepage">
      <NavLink style={({ isActive }) => (isActive ? { display: "none" } : undefined)} to="/" end>
        <Home color="primary" />
      </NavLink>
    </Tooltip>

    <Tooltip title="Contact Me">
      <NavLink onClick={props.contact} to="#" /* activeClassName={classes.active} to="/contact" */>
        <Mail color="primary" />
      </NavLink>
    </Tooltip>
    {props.isAuth ? (
      <Tooltip title="My Personal Dashboard">
        <NavLink style={({ isActive }) => (isActive ? { display: "none" } : undefined)} to="/dashboard">
          <SupervisedUserCircle color="primary" />
        </NavLink>
      </Tooltip>
    ) : (
      <Tooltip title="Login/Register">
        <NavLink style={({ isActive }) => (isActive ? { display: "none" } : undefined)} to="/register">
          <AccountCircle color="primary" />
        </NavLink>
      </Tooltip>
    )}
    <Tooltip title="About Me">
      <NavLink style={({ isActive }) => (isActive ? { display: "none" } : undefined)} to="/about">
        <HowToReg color="primary" />
      </NavLink>
    </Tooltip>
  </ul>
);

export default NavBarSmall;
