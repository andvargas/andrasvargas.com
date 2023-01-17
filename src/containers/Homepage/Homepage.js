import React, { Component } from "react";
import { connect } from "react-redux";

import Logo from "../../components/Logo/Logo";
import NavBarSmall from "../../components/Navigation/NavBarSmall";
import PortfolioItems from "../Portfolio/PortfolioItems";
import Helmet from "react-helmet";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Modal from "../../components/UI/Modal/Modal";
import Backdrop from "../../components/UI/Backdrop/BackDrop";
import Contact from "../Contact/Contact";
import Fab from "@material-ui/core/Fab";
import { AccountCircle } from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";

const classes = {
  login: {
    position: "absolute",
    right: "20px",
    top: "20px",
  },
  loginIcon: {
    color: "white",
  },
};

class Homepage extends Component {
  state = {
    modalIsOpen: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Andras Vargas | HomePage</title>
          <link rel="canonical" href={`${window.location.hostname}/`} />
        </Helmet>
        <header className="App-header">
          <Logo />
          <h1 className="headline">ANDRAS VARGAS</h1>
        </header>
        <hr className="animated"></hr>
        <Tooltip title="Login / REgister" placement="left-end">
          <Fab color="primary" style={classes.login} href="/login">
            <AccountCircle color="primary" style={classes.loginIcon} />
          </Fab>
        </Tooltip>

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
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Homepage);
