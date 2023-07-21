// seems like this is the old version of the Homepage.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "../../components/Logo/Logo";
import NavBarSmall from "../../components/Navigation/NavBarSmall";
import Navbar from "../../components/Navigation/NavBar";
import PortfolioItems from "../Portfolio/PortfolioItems";
import Helmet from "react-helmet";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Modal from "../../components/UI/Modal/Modal";
import Backdrop from "../../components/UI/Backdrop/BackDrop";
import Contact from "../Contact/Contact";
import Fab from "@mui/material/Fab";
import { AccountCircle, WhatsApp } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";

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
    backgroundColor: "rgb(0	208	92)",
    color: "white",
  },
  menubar: {
    position: "absolute",
    top: "96vh",
    right: 0,
    width: "100%",
  },
};

class Homepage extends Component {
  state = {
    modalIsOpen: false,
    navBarIsVisible: true,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    if ("IntersectionObserver" in window) {
      console.log("Your browser supports IntersectionObserver");
    } else {
      console.log("Your browser does not support IntersectionObserver");
    }

    // this will get the menubar in the DOM
    const target = document.getElementById("test");
    console.log(target);

    return (
      <>
        <Helmet>
          <title>Andras Vargas | HomePage</title>
          <link rel="canonical" href={`${window.location.hostname}/`} />
        </Helmet>
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
        <Navbar id="test" btMenu={classes.menubar}></Navbar>

        <Modal show={this.state.modalIsOpen} closed={this.closeModal}>
          {<Contact close={this.closeModal} />}
        </Modal>
        <Backdrop show={this.state.modalIsOpen} closed={this.closeModal} />
        <NavBarSmall isAuth={this.props.isAuthenticated} contact={this.showModal} close={this.closeModal} />
        <h2 className="quote"> Full Stack Web Development</h2>
        <AnchorLink href="#portf">
          <Fab>Projects</Fab>
        </AnchorLink>
        <section id="portf">
          <PortfolioItems id="portf" color="primary" clicked={this.showModal} />
        </section>
        {/* <a href="#internal-user">internal-user</a> click this link to add user to GA4 Internals*/}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Homepage);
