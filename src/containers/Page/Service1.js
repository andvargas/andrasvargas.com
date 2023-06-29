import { Modal, Button, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navigation/NavBar";
import ReactMarkdown from "react-markdown";
import { makeStyles } from "@mui/styles";
import { PictureAsPdf, ContactMailOutlined } from "@mui/icons-material";
import ContactForm from "../../components/contactForm";
import Helmet from "react-helmet";

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
      <Helmet>
        <title>Technical Seo Site Checkup | Service by Andras Vargas</title>
        <link rel="canonical" href={`${window.location.hostname}/technical-seo-audit-service`} />
        <meta
          name="description"
          content="My Technical SEO Site Checkup is an SEO Audit Service performed on your website to help boost your site's SEO performance."
        />
        <meta name="author" content="Andras Vargas" />
      </Helmet>
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
