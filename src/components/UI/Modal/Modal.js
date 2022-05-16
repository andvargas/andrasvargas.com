import React from 'react';

import classes from './Modal.module.css';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    closeBtn: {
        color: "red",
        display: "inline-block",
        position: "absolute",
        top: "-10px",
        right: "-10px",
        cursor: "pointer",
        overflow: "hidden"
    }
}))

const Modal = (props) => {
    const classes2 = useStyles();
    const cssClasses = [classes.Modal, props.show ? classes.ModalOpen : classes.ModalClosed]
    return (
        <div className={cssClasses.join(' ')}>
            <CancelOutlinedIcon className={classes2.closeBtn} onClick={props.closed} fontSize="large"/>
            {props.children}
            
        </div>
    )
};

export default Modal;