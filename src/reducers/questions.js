import {
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR,
    SET_STATUS_CORRECT,
    SET_STATUS_INCORRECT,
    RESET_STATUS,
    INCREMENT_SCORE,
    POST_ANSWER_ERROR
} from '../actions/questions';

const initialState = {
    data: [{}],
    status: null,
    score: 0,
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_QUESTIONS_SUCCESS) {
        console.log(action)
        return Object.assign({}, state, {
            data: action.questions
        });
    }
    else if (action.type === FETCH_QUESTIONS_ERROR) {
        return Object.assign({}, state, {
            error: action.error        
        });
    }
    else if (action.type === POST_ANSWER_ERROR) {
        return Object.assign({}, state, {
            error: action.error        
        });
    }
    else if (action.type === SET_STATUS_CORRECT) {
        return Object.assign({}, state, {
            status: 'correct'        
        });
    }
    else if (action.type === SET_STATUS_INCORRECT) {
        return Object.assign({}, state, {
            status: 'incorrect'        
        });
    }
    else if (action.type === RESET_STATUS) {
        return Object.assign({}, state, {
            status: null        
        });
    }
    if (action.type === INCREMENT_SCORE) {
        return Object.assign({}, state, {
            score: state.score + 1
        });
    }
    return state;
}