import {
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR,
    SET_ANSWER_SUCCESS
} from '../actions/questions';

const initialState = {
    data: [{}],
    answer: null,
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_QUESTIONS_SUCCESS) {
        return Object.assign({}, state, {
            data: action.questions
        });
    }
    else if (action.type === FETCH_QUESTIONS_ERROR) {
        return Object.assign({}, state, {
            error: action.error        
        });
    }
    else if (action.type === SET_ANSWER_SUCCESS) {
        return Object.assign({}, state, {
            answer: action.answer
        })
    }
    return state;
}