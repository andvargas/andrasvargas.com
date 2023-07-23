import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";
import Contact from "../Contact/Contact";
import avlogo from "../../staticAssets/av-logo.png";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const footerCard = {
  display: "flex",
  flexDirection: "column",
  width: "20vw",
  textAlign: "left",
  fontSize: "0.8rem",
  padding: "20px 40px 20px 0",
  paddingLeft: "0",
};

const buttonCss = {
  width: "15vw",
  background: "#f3f0dc",
  marginBottom: "5px",
  border: "solid 1px black",
  borderRadius: "4px",
  "&:hover": {
    background: "white",
    cursor: "pointer",
  },
};

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
  const callMe = () => (window.location.href = "tel:07478659955");
  return (
    <Box
      sx={{
        position: "absolute",
        height: "250px",
        width: "100%",
        backgroundColor: "#56001e",
        fontFamily: "Montserrat, sans-serif",
        bottom: "0px",
        color: "cornsilk",
        borderTop: "6px solid #ff6600",
        "& a": {
          color: "#e9e8e8",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          width: "80%",
        }}
      >
        <Box sx={footerCard}>
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
        </Box>
        <Box sx={footerCard}>
          <h5>Links</h5>
          <Link to="/">Homepage</Link>
          <Link to="/about">About</Link>
          <Link to="/technical-seo-audit-service">Technical SEO</Link>
          <Link to="/how-to-exclude-myself-from-google-analytics-4">Exclude traffic GTM</Link>
          <a href="https://floatingpint.com/seo-tool/">SEO Metadata Tool</a>
        </Box>
        <Box sx={footerCard}>
          <h5>Social</h5>
          <a href="https://www.facebook.com/andreasvargas07/">LinkedIn</a>
          <a href="https://www.linkedin.com/in/andrasvargas/">Facebook</a>
        </Box>
        <Box sx={footerCard}>
          <h5>Contact</h5>
          <Box component="button" sx={buttonCss} onClick={callMe}>
            &#9742;&#65039; 0747 865 9955
          </Box>
          <Box component="button" sx={buttonCss} onClick={handleClickOpen}>
            &#128231; E-mail me...
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          fontSize: "0.8rem",
          paddingBottom: "1px",
          textAlign: "left",
          paddingLeft: "10vw",
        }}
      >
        <p>Copyright &copy; {thisYear} Andras Vargyas t/as Andras Vargas. All rights reserved.</p>
      </Box>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {<Contact onClose={handleClose} />}
      </Dialog>
    </Box>
  );
};

export default Footer;
