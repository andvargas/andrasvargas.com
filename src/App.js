import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import Contact from './containers/Contact/Contact';
import Auth from './containers/Auth/Auth';
import Dashboard from './containers/Protected/Dashboard';
import Logout from "./containers/Auth/Logout/Logout";
import Homepage from "./containers/Homepage/Homepage";
import * as actions from './store/actions/index';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff6600'
    },
    secondary: {
      main: '#56001e'
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
      <Switch>
        <Route path="/register" component={Auth} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Homepage} />
        <Redirect to="/" />
      </Switch>
    );
    // users logged in
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/contact" component={Contact} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Homepage} />
        </Switch>
      )
    }
    return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {routes}
        {/* <Route path="/" exact component={Homepage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contact" component={Contact}/>
        <Switch>
          <Route path="/register" component={Auth} />
          <Route path="/logout" component={Logout} />
        </Switch> */}
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
