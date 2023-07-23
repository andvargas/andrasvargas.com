import React from "react";

import classes from "./Modal.module.css";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Box from "@mui/material/Box";

const Modal = (props) => {
  const cssClasses = [classes.Modal, props.show ? classes.ModalOpen : classes.ModalClosed];
  return (
    <Box className={cssClasses.join(" ")}>
      <CancelOutlinedIcon
        sx={{
          color: "red",
          display: "inline-block",
          position: "absolute",
          top: "-10px",
          right: "-10px",
          cursor: "pointer",
          overflow: "hidden",
        }}
        /* className={classes2.closeBtn} */ onClick={props.closed}
        fontSize="large"
      />
      {props.children}
    </Box>
  );
};

export default Modal;
