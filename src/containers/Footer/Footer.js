import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";
import Contact from "../Contact/Contact";
import avlogo from "../../staticAssets/av-logo.png";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    /* min-height: 50px; */
    height: "250px",
    width: "100%",
    backgroundColor: "#56001e",
    fontFamily: "Montserrat, sans-serif",
    /* padding: 0px 10vw; */
    bottom: "0px",
    color: "cornsilk",
    borderTop: "6px solid #ff6600",
    "& a": {
      color: "#e9e8e8",
    },
  },
  columns: {
    display: "flex",
    margin: "auto",
    width: "80%",
  },
  footerCard: {
    display: "flex",
    flexDirection: "column",
    width: "20vw",
    textAlign: "left",
    fontSize: "0.8rem",
    padding: "20px 40px 20px 0",
    paddingLeft: "0",
  },
  copyright: {
    fontSize: "0.8rem",
    paddingBottom: "1px",
    textAlign: "left",
    paddingLeft: "10vw",
  },
  a: {
    color: "#e9e8e8",
  },
  btnContact: {
    width: "15vw",
    background: "#f3f0dc",
    marginBottom: "5px",
    border: "solid 1px black",
    borderRadius: "4px",
    "&:hover": {
      background: "white",
      cursor: "pointer",
    },
  },
  /* btnContact:hover {
    
  } */
});

const Footer = () => {
  const classes = useStyles();
  const thisYear = new Date().getFullYear();

  // open Contact form
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const callMe = () => (window.location.href = "tel:07478659955");
  return (
    <div className={classes.root}>
      <div className={classes.columns}>
        <div className={classes.footerCard}>
          <div>
            <img
              style={{
                display: "inline-block",
                width: "50px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
              src={avlogo}
              alt="Andras Vargas logo"
              width="50"
            />
            <h5 style={{ display: "inline-block", width: "100px" }}>About</h5>
          </div>
          <p>I offer freelance services in the intersection of digital marketing and web development</p>
        </div>
        <div className={classes.footerCard}>
          <h5>Links</h5>
          <Link to="/">Homepage</Link>
          <Link to="/about">About</Link>
          <Link to="/technical-seo-audit-service">Technical SEO</Link>
          <Link to="/how-to-exclude-myself-from-google-analytics-4">Exclude traffic GTM</Link>
          <a href="https://floatingpint.com/seo-tool/">SEO Metadata Tool</a>
        </div>
        <div className={classes.footerCard}>
          <h5>Social</h5>
          <a href="https://www.facebook.com/andreasvargas07/">LinkedIn</a>
          <a href="https://www.linkedin.com/in/andrasvargas/">Facebook</a>
        </div>
        <div className={classes.footerCard}>
          <h5>Contact</h5>
          <button className={classes.btnContact} onClick={callMe}>
            &#9742;&#65039; 0747 865 9955
          </button>
          <button className={classes.btnContact} onClick={handleClickOpen}>
            &#128231; E-mail me...
          </button>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>Copyright &copy; {thisYear} Andras Vargyas t/as Andras Vargas. All rights reserved.</p>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {<Contact onClose={handleClose} />}
      </Dialog>
    </div>
  );
};

export default Footer;
