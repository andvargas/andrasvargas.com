import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { createTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Contact from "./containers/Contact/Contact";
import Auth from "./containers/Auth/AuthNew"; // change back to Auth/Auth, if the new one doesnt work
import Dashboard from "./containers/Protected/Dashboard";
import Logout from "./containers/Auth/Logout/Logout";
import Homepage from "./containers/Homepage/Homepage";
import * as actions from "./store/actions/index";
import Page from "./containers/Page/Page";
import SamplePage from "./containers/Page/SamplePage";
import Footer from "./containers/Footer/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6600",
    },
    secondary: {
      main: "#56001e",
    },
  },
  typography: {
    fontFamily: ["sans-serif", "Roboto"],
    h1: {
      fontSize: 30,
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        margin: "10px",
      },
    },
  },
});

class App extends Component {
  componentDidMount() {
    console.log(process.env.NODE_ENV);
    this.props.onTryAutosignup();
  }
  render() {
    // guests
    let routes = (
      <ScrollToTop>
        <Routes>
          <Route path="/about" element={<Page />} />
          <Route path="/sample-page" element={<SamplePage id="620fd5525d188b70b7d8ece0" />} />
          <Route path="/seo-tool" element={<SamplePage id="627ea3aec4b9a602f772ba1b" />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ScrollToTop>
    );
    // users logged in
    if (this.props.isAuthenticated) {
      routes = (
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sample-page" element={<SamplePage id="620fd5525d188b70b7d8ece0" />} />
            <Route path="/seo-tool" element={<SamplePage id="627ea3aec4b9a602f772ba1b" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/about" element={<Page />} />
          </Routes>
        </ScrollToTop>
      );
    }
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          {routes}
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutosignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
