import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = questions => ({
    type: FETCH_QUESTIONS_SUCCESS,
    questions
});

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = error => ({
    type: FETCH_QUESTIONS_ERROR,
    error
});

export const SET_STATUS_CORRECT = 'SET_STATUS_CORRECT';
export const setStatusCorrect = () => ({
    type: SET_STATUS_CORRECT
})

export const SET_STATUS_INCORRECT = 'SET_STATUS_INCORRECT';
export const setStatusIncorrect = () => ({
    type: SET_STATUS_INCORRECT
})

export const RESET_STATUS = 'RESET_STATUS';
export const resetStatus = () => ({
    type: RESET_STATUS
})

export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const incrementScore = () => ({
    type: INCREMENT_SCORE
})


export const fetchQuestions = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            console.log(res)
            dispatch(fetchQuestionsSuccess(res)
        )})
        .catch(err => {
            dispatch(fetchQuestionsError(err));
        });
};

