import { Modal, Button, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navigation/NavBar";
import ReactMarkdown from "react-markdown";
import { styled } from "@mui/material/styles";
import { PictureAsPdf, ContactMailOutlined } from "@mui/icons-material";
import ContactForm from "../../components/contactForm";
import Helmet from "react-helmet";

// Define the styled components
const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledModalContent = styled("div")(({ theme }) => ({
  position: "absolute",
  width: 400,
  backgroundColor: theme.palette.background.paper,
  border: "2px solid #000",
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingBottom: "40px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textDecoration: "none",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  "& > p, ul": {
    textAlign: "left",
  },
}));

const Service1 = () => {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

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
      <StyledModal open={open} onClose={formHandleClose}>
        <StyledModalContent>
          <ContactForm onClose={formHandleClose} />
        </StyledModalContent>
      </StyledModal>
      <NavBar />
      <StyledContainer maxWidth="sm">
        <StyledTypography component="div">
          <ReactMarkdown>{content}</ReactMarkdown>
        </StyledTypography>
        <a href="/technical-seo-audit.pdf" target="_blank">
          <Button variant="outlined" color="primary" startIcon={<PictureAsPdf />}>
            Download Sample
          </Button>
        </a>

        <StyledButton variant="contained" color="secondary" startIcon={<ContactMailOutlined />} onClick={formHandleOpen}>
          Enquire Now
        </StyledButton>
      </StyledContainer>
    </>
  );
};

export default Service1;
