import axios from '../../axios-instance';
import * as actionTypes from './actionTypes';



export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = (exp) => {
    const expTime = (exp * 1000) - (new Date().getTime());
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expTime) 
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email,
            password,
            token: ''
        };
        let url = '/users/add';
        if (!isSignup) {
            url = '/users/login';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response.data);
                const expirationDate = new Date(response.data.expirationDate * 1000) //there is something weird going on with the expiration
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.user._id);
                dispatch(authSuccess(response.data.token, response.data.user._id));
                dispatch(checkAuthTimeout(response.data.expirationDate));
            })
            .catch(e => {
                let errMessage = e.response.data.message
                if (!e.response.data.message) {
                    errMessage = "Something went wrong!"
                }
                dispatch(authFail(errMessage));
            });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime() / 1000));
            }
            
        }
    };
};