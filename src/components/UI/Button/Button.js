import React from 'react';
import { Button } from '@material-ui/core';
import classes from "./Button.module.css";

const button = (props) => (
        <Button 
            className={classes.Button}
            color={props.color}
            disabled={props.disabled}
            variant={props.variant}
            type={props.type}
            onClick={props.clicked}>{props.children}</Button>
    )

export default button;