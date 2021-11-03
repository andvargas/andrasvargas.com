import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    float: {
        position: "absolute",
        bottom: 10,
        right: 30,
    }
}));

export default function FloatingActionButtons(props) {
    const classes = useStyles();
    return (
        <div className={classes.float}>
            <Fab variant="extended" color='secondary' size='small' className={classes.Fab} href={props.href}>
                <ArrowDropDownCircleIcon className={classes.extendedIcon} />
                {props.children}
            </Fab>
        </div>
    );
}
