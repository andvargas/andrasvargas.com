import * as actionTypes from './actions/actionTypes';
import axios from "../axios-instance";

export const setProjects = (projects) => {
    return {
        type: actionTypes.SET_PROJECTS,
        prjs: projects
    }
}

export const initProjects = () => {
    return dispatch => {
        axios.get('/portfolio-items/')
            .then(response => {
                dispatch(setProjects(response.data));
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}