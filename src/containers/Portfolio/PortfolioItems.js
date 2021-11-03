import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Portfolio.module.css";
import PortfolioItem from './PortfolioItem';
import * as actions from '../../store/actions/projects';

class PortfolioItems extends Component {
    componentDidMount () {
        this.props.onFetchProjects()
    }
    render() {
        return (
            <div className={classes.container}>
                <h1>Projects</h1>
                <div className={classes.PortfolioItems}>
                    {this.props.prjs.map(card => (
                        <PortfolioItem
                            key={card._id}
                            img={'https://api.andrasvargas.com/portfolio-items/' + card._id + '/img'}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                            buttonRight={card.buttonRight}
                            buttonLeft={card.buttonLeft}
                            clicked={this.props.clicked} />
                    ))}
                    
                </div>
            </div>
            
            
        )
    }
}

const mapStateToProps = state => {
    return {
        prjs: state.projects.projectCards
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProjects: (payload) => dispatch(actions.initProjects(payload))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioItems);