import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavBar.module.css';

const navBarItem = (props) => (
    <li>
        <NavLink 
            to={props.link}
            exact={props.exact}
            className={classes.NavBarItem}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
)

export default navBarItem;