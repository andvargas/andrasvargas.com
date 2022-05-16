import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import Contact from "../Contact/Contact";
import avlogo from "../../staticAssets/avlogo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const thisYear = new Date().getFullYear();

  // open Contact form
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const callMe = () => window.location.href=('tel:07478659955');
  return (
    <div className="footer">
      <div className="columns">
        <div className="footerCard">
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
          <p>
            I offer freelance services in the intersection of digital marketing
            and web development
          </p>
        </div>
        <div className="footerCard">
          <h5>Links</h5>
          <Link to="/">Homepage</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="footerCard">
          <h5>Social</h5>
          <a href="https://www.facebook.com/andreasvargas07/">LinkedIn</a>
          <a href="https://www.linkedin.com/in/andrasvargas/">Facebook</a>
        </div>
        <div className="footerCard">
          <h5>Contact</h5>
          <button className="btnContact" onClick={callMe}>
            &#9742;&#65039; 0747 865 9955
          </button>
          <button className="btnContact" onClick={handleClickOpen}>
            &#128231;  E-mail me...
          </button>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright &copy; {thisYear} Andras Vargyas t/as Andras Vargas. All
          rights reserved.
        </p>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {<Contact onClose={handleClose} />}
      </Dialog>
    </div>
  );
};

export default Footer;
