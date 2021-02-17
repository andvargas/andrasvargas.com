import React from 'react';
import classes from './NavBar.module.css';

import NavBarItem from './NavBarItem';
import { SupervisedUserCircle, Home, AccountCircle } from '@material-ui/icons';

const navBar = (props) => {
    return (
        <ul className={classes.NavBar}>
            <NavBarItem link="/" exact>
                <Home />Homepage
            </NavBarItem>
            <NavBarItem link="/dashboard" exact>
                <SupervisedUserCircle  />Dashboard
            </NavBarItem>
            { !props.isAuth 
                ? <NavBarItem link="/register" exact>
                <AccountCircle />Login/Register
                </NavBarItem>
                : <NavBarItem link="/logout" exact>
                    <AccountCircle />Log Out
                </NavBarItem>}
            
        </ul>
    )
    
}

export default navBar;