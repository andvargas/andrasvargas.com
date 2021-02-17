import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = {
    projectCards: [],
    error: false
}

const setProjects = (state, action) => {
    return updateObject(state, {
        projectCards: action.prjs
    })
}

const fetchProjectsFailed = (state, action) => {
    return updateObject(state, { error: true})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PROJECTS: return setProjects(state, action);
        case actionTypes.FETCH_PROJECTS_FAILED: return fetchProjectsFailed(state, action);
            /* return {
                ...state,
                projects: [{
                    ...state,
                    projects: action.prjs
                }]
            }; */
        /* case actionTypes.SET_PROJECTS:
            return {
                ...state,
                projects2: action.prjs
            } */
        default: return state;
    }
    
};

export default reducer;