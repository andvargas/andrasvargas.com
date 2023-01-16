import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "../../components/Navigation/NavBar";

class Dashboard extends Component {
  render() {
    let protectedRes = <h2>This is my personal dashboard, visible only for me!</h2>;
    if (!this.props.isAuthenticated) {
      // protectedRes = (
      //         <p>Page Restricted for logged in users!</p>
      // );
      return <Navigate replace to="/register" />;
    }

    return (
      <div>
        <NavBar isAuth={this.props.isAuthenticated} />
        {protectedRes}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Dashboard);
