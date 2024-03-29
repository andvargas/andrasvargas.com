import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { createTheme, ThemeProvider as MuiThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Contact from "./containers/Contact/Contact";
import Auth from "./containers/Auth/Auth";
import Dashboard from "./containers/Protected/Dashboard";
import Logout from "./containers/Auth/Logout/Logout";
import Homepage from "./containers/Homepage/Homepage";
import * as actions from "./store/actions/index";
// import Page from "./containers/Page/Page";
import SamplePage from "./containers/Page/SamplePage";
import Footer from "./containers/Footer/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";
import AddPost from "./containers/Page/AddPost";
import Service1 from "./containers/Page/Service1";
import Admin from "./containers/Admin/Admin";
import ChatModule from "./components/ChatGPT/ChatModule";

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
          <Route path="/how-to-exclude-myself-from-google-analytics-4" element={<SamplePage id="6421bcb28758c50462743a98" />} />
          <Route path="/about" element={<SamplePage id="645146fb2b35a2a334735e14" />} />
          <Route path="/ga4-implementation-service" element={<SamplePage id="645141da2b35a2a334735df5" />} />
          <Route path="/sample-page" element={<SamplePage id="620fd5525d188b70b7d8ece0" />} />
          <Route path="/seo-tool" element={<SamplePage id="627ea3aec4b9a602f772ba1b" />} />
          <Route path="/andrasvargas-com" element={<SamplePage id="63c6f199d17f1a3a8d16c3a4" />} />
          <Route path="/ga4-implementation" element={<SamplePage id="64253b233569bb32ee45ee28" />} />
          <Route path="/register" element={<Auth isSignup={true} />} />
          <Route path="/login" element={<Auth isSignup={false} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/*<Route path="/add-post" element={<AddPost />} />   remove this when live */}
          <Route path="/technical-seo-audit-service" element={<Service1 />} />
          <Route path="/chat-gpt" element={<ChatModule />} />
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
            <Route path="/ga4-implementation-service" element={<SamplePage id="645141da2b35a2a334735df5" />} />
            <Route path="/how-to-exclude-myself-from-google-analytics-4" element={<SamplePage id="6421bcb28758c50462743a98" />} />
            <Route path="/sample-page" element={<SamplePage id="620fd5525d188b70b7d8ece0" />} />
            <Route path="/seo-tool" element={<SamplePage id="627ea3aec4b9a602f772ba1b" />} />
            <Route path="/andrasvargas-com" element={<SamplePage id="63c6f199d17f1a3a8d16c3a4" />} />
            <Route path="/ga4-implementation" element={<SamplePage id="64253b233569bb32ee45ee28" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/about" element={<SamplePage id="645146fb2b35a2a334735e14" />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/technical-seo-audit-service" element={<Service1 />} />
            <Route path="/chat-gpt" element={<ChatModule />} />
          </Routes>
        </ScrollToTop>
      );
    }
    return (
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <div className="App">
                {routes}
                <Footer />
              </div>
            </ThemeProvider>
          </StyledEngineProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>
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
