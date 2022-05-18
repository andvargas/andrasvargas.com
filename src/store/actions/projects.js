import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const setProjects = (projects) => {
    return {
        type: actionTypes.SET_PROJECTS,
        prjs: projects
    }
}

export const fetchProjectsFailed = () => {
    return {
        type: actionTypes.FETCH_PROJECTS_FAILED
    };
}

export const initProjects = () => {
    return dispatch => {
        axios.get('/portfolio-items/')
            .then(response => {
                const filteredProjects = response.data.filter((prj) => prj.status === 'featured').reverse()
                console.log(filteredProjects)
                dispatch(setProjects(filteredProjects));
            })
            .catch(error => {
                console.log(error)
                dispatch(fetchProjectsFailed())
            });
    }
}