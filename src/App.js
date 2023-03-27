import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { createTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Contact from "./containers/Contact/Contact";
import Auth from "./containers/Auth/Auth";
import Dashboard from "./containers/Protected/Dashboard";
import Logout from "./containers/Auth/Logout/Logout";
import Homepage from "./containers/Homepage/Homepage";
import * as actions from "./store/actions/index";
import Page from "./containers/Page/Page";
import SamplePage from "./containers/Page/SamplePage";
import Footer from "./containers/Footer/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";
import AddPost from "./containers/Page/AddPost";
import Service1 from "./containers/Page/Service1";
import Admin from "./containers/Admin/Admin";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6600",
      contrastText: "white",
    },
    secondary: {
      main: "#56001e",
      contrastText: "white",
    },
    wa: {
      color: "red",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif", "Roboto"],
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
          <Route path="/andrasvargas-com" element={<SamplePage id="63c6f199d17f1a3a8d16c3a4" />} />
          <Route path="/register" element={<Auth isSignup={true} />} />
          <Route path="/login" element={<Auth isSignup={false} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/*<Route path="/add-post" element={<AddPost />} />   remove this when live */}
          <Route path="/technical-seo-audit-service" element={<Service1 />} />
        </Routes>
      </ScrollToTop>
    );
    // users logged in
    if (this.props.isAuthenticated) {
      routes = (
        <ScrollToTop>
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/sample-page" element={<SamplePage id="620fd5525d188b70b7d8ece0" />} />
            <Route path="/seo-tool" element={<SamplePage id="627ea3aec4b9a602f772ba1b" />} />
            <Route path="/andrasvargas-com" element={<SamplePage id="63c6f199d17f1a3a8d16c3a4" />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/about" element={<Page />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/technical-seo-audit-service" element={<Service1 />} />
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
