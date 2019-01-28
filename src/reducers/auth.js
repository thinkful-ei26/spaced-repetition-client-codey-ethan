import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR, 
    AUTH_WARNING,
    CLEAR_AUTH_WARNING
} from '../actions/auth';

const initialState = {
    authToken: null,
    currentUser: null,
    loading: false,
    error: null,
    loginWarning: false
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === CLEAR_AUTH) {
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null
        });
    } else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.currentUser
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === AUTH_WARNING) {
        return Object.assign({}, state, {
            loginWarning: true
        });
    } else if (action.type === CLEAR_AUTH_WARNING) {
        return Object.assign({}, state, {
            loginWarning: false
        });
    }
    return state;
}
