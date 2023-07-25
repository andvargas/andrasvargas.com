import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Fab from "@mui/material/Fab";
import { AccountCircle, WhatsApp } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";

import Logo from "../../components/Logo/Logo";
import NavBarSmall from "../../components/Navigation/NavBarSmall";
import Navbar from "../../components/Navigation/NavBar";
import PortfolioItems from "../Portfolio/PortfolioItems";
import Modal from "../../components/UI/Modal/Modal";
import Backdrop from "../../components/UI/Backdrop/BackDrop";
import Contact from "../Contact/Contact";

const distanceFromTop = window.innerHeight - 50;
const classes = {
  login: {
    position: "absolute",
    right: "20px",
    top: "20px",
  },
  gpt: {
    position: "absolute",
    left: "20px",
    top: "90vh",
    backgroundColor: "#82eefd",
    color: "white",
  },
  loginIcon: {
    color: "white",
  },
  waIcon: {},
  wa: {
    position: "absolute",
    right: "20px",
    top: "90vh",
    backgroundColor: "rgb(0 208 92)",
    color: "white",
  },
  menubar: {
    position: "absolute",
    top: distanceFromTop,
    right: 0,
    width: "100%",
    padding: "10px",
  },
  fixedMenu: {
    position: "sticky",
    top: "0",
    margin: "0",
    zIndex: "10",
    paddingTop: "5px",
  },
  projects: {
    marginTop: "20px",
    zIndex: "-1",
  },
};

const Homepage = ({ isAuthenticated }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState(classes.menubar);
  const [isScrolled, setIsScrolled] = useState(true); // State to track scrolling

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    let target = document.getElementById("menubar");

    let callback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setMenuStyle(classes.fixedMenu);
        }
      }, []);
    };

    let options = {
      root: null, // null is the viewport
      rootMargin: "0px",
      threshold: 0.9,
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(target);

    // continue from here: add back original class when scroll goes back to top
    // implement with scroll event listener
    // Event listener for scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (isScrolled) setMenuStyle(classes.menubar);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Helmet>
        <title>Andras Vargas | HomePage</title>
        <link rel="canonical" href={`${window.location.hostname}/`} />
      </Helmet>
      <Navbar id="menubar" btMenu={menuStyle} openForm={showModal} close={closeModal} />
      <header className="App-header">
        <Logo />
        <h1 className="headline">ANDRAS VARGAS</h1>
      </header>
      <hr className="animated"></hr>
      <Link to="/login">
        <Tooltip title="Login / Register" placement="left-end">
          <Fab color="primary" style={classes.login}>
            <AccountCircle color="primary" style={classes.loginIcon} />
          </Fab>
        </Tooltip>
      </Link>
      <Tooltip title="Send me a WhatsApp Message (will open your app)" placement="left-end">
        <Fab color="inherit" href="https://wa.me/447478659955" target="_blank" rel="noreferrer" style={classes.wa}>
          <WhatsApp />
        </Fab>
      </Tooltip>
      <Link to="/chat-gpt">
        <Tooltip title="Chat with AndreGPT" placement="right-end">
          <Fab color="inherit" style={classes.gpt}>
            <AccountCircle color="primary" style={classes.loginIcon} />
          </Fab>
        </Tooltip>
      </Link>
      {/* <Navbar id="menubar" btMenu={menuStyle} /> */}

      <Modal show={modalIsOpen} closed={closeModal}>
        <Contact close={closeModal} />
      </Modal>
      <Backdrop show={modalIsOpen} closed={closeModal} />
      <AnchorLink offset="50" href="#portf">
        <Fab style={classes.projects}>Projects</Fab>
      </AnchorLink>
      {/* <NavBarSmall isAuth={isAuthenticated} contact={showModal} close={closeModal} /> */}
      <h2 className="quote">Full Stack Web Development</h2>

      <section id="portf">
        <PortfolioItems id="portf" color="primary" clicked={showModal} />
      </section>
      {/* <a href="#internal-user">internal-user</a> click this link to add user to GA4 Internals*/}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(Homepage);
