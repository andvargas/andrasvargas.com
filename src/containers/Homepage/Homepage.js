import React, { Component } from "react";
import { connect } from 'react-redux';

import Logo from '../../components/Logo/Logo';
import NavBarSmall from "../../components/Navigation/NavBarSmall";
import PortfolioItems from "../Portfolio/PortfolioItems";
import Helmet from 'react-helmet';

class Homepage extends Component {
    render () {
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
                <NavBarSmall isAuth={this.props.isAuthenticated}/>
                <h2 className="quote">“Work hard in silence, let your success be your noise”</h2>
                <PortfolioItems color="primary"/>
            </div>
            
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Homepage);