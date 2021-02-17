import React from 'react';
import { NavLink } from "react-router-dom";

import { AccountCircle, Home, Mail, SupervisedUserCircle } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import classes from './NavBar.module.css'

const NavBarSmall = (props) => (
    <ul>
        <Tooltip title="Homepage">
            <NavLink activeClassName={classes.active} to="/" exact>
                <Home color="primary" />
            </NavLink>
        </Tooltip>
        <Tooltip title="Contact Me">
            <NavLink activeClassName={classes.active} to="/contact">
                <Mail color="primary" />
            </NavLink>
        </Tooltip>
        {props.isAuth 
            ? <Tooltip title="My Personal Dashboard">
                <NavLink activeClassName={classes.active} to="/dashboard">
                    <SupervisedUserCircle color="primary" />
                </NavLink>
            </Tooltip>
            : <Tooltip title="Login/Register">
                <NavLink activeClassName={classes.active} to="/register">
                    <AccountCircle color="primary" />
                </NavLink>
            </Tooltip>}
    </ul>
)

export default NavBarSmall;