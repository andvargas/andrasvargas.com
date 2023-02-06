import { Modal, Button, Container, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import NavBar from "../components/Navigation/NavBar";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@material-ui/core/styles";
import { PictureAsPdf, ContactMailOutlined } from "@material-ui/icons";
import ContactForm from "../components/contactForm";

const useStyles = makeStyles((theme) => ({
  textToLeft: {
    "& > p, ul": {
      textAlign: "left",
    },
  },
  btn: {
    textDecoration: "none",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  container: {
    paddingBottom: "40px",
  },
}));

const Service1 = () => {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    fetch("/service-seo-audit.md")
      .then((response) => response.text())
      .then((data) => {
        setContent(data);
      });
  }, []);

  const formHandleOpen = () => {
    setOpen(true);
  };
  const formHandleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={formHandleClose} className={classes.modal}>
        <div className={classes.paper}>
          <ContactForm onClose={formHandleClose} />
        </div>
      </Modal>
      <NavBar />
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="div">
          <ReactMarkdown className={classes.textToLeft}>{content}</ReactMarkdown>
        </Typography>
        <a href="/technical-seo-audit.pdf" target="_blank">
          <Button variant="outlined" color="primary" startIcon={<PictureAsPdf />}>
            Download Sample
          </Button>
        </a>

        <Button variant="contained" color="secondary" className={classes.btn} startIcon={<ContactMailOutlined />} onClick={formHandleOpen}>
          Enquire Now
        </Button>
      </Container>
    </>
  );
};

export default Service1;
