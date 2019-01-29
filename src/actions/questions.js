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

export const SET_ANSWER_SUCCESS = 'SET_ANSWER_SUCCESS';
export const setAnswerSuccess = answer => ({
    type: SET_ANSWER_SUCCESS,
    answer
});


export const fetchQuestions = () => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            dispatch(fetchQuestionsSuccess(res)
        )})
        .catch(err => {
            dispatch(fetchQuestionsError(err));
        });
};

