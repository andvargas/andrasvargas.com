import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import Contact from './containers/Contact/Contact';
import Auth from './containers/Auth/Auth';
import Dashboard from './containers/Protected/Dashboard';
import Logout from "./containers/Auth/Logout/Logout";
import Homepage from "./containers/Homepage/Homepage";
import * as actions from './store/actions/index';
import Page from './containers/Page/Page';
import SamplePage from './containers/Page/SamplePage'
import Footer from './containers/Footer/Footer';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6600'
    },
    secondary: {
      main: '#56001e'
    }
  },
  typography: {
    fontFamily: [
      'sans-serif',
      'Roboto'
    ],
    h1: {
      fontSize: 30,
      fontWeight: 'bold'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        margin: '10px'
      }
    }
  }
});

class App extends Component {
  componentDidMount () {
    this.props.onTryAutosignup();
  }
  render () {
    // guests
    let routes = (
      <div>
        <Switch>
          <Route path="/about" component={Page} />
          <Route path="/sample-page" id="620fd5525d188b70b7d8ece0" component={SamplePage}>
            {/* <SamplePage id="620fd5525d188b70b7d8ece0" /> */}
          </Route>
          <Route path="/seo-tool">
            <SamplePage id="627ea3aec4b9a602f772ba1b" />
          </Route>
          <Route path="/register" component={Auth} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Homepage} />
          <Route path="/" component={Footer} />
          <Redirect to="/" />
        </Switch>

        <Route path="/" component={Footer} />
      </div>
    );
    // users logged in
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/contact" component={Contact} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Footer} />
          <Route path="/" component={Homepage} />
        </Switch>
      );
    }
    return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {routes}
      </div>
    </ThemeProvider>
  );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutosignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
