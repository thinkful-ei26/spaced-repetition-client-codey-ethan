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

export const POST_ANSWER_SUCCESS = 'POST_ANSWER_SUCCESS';
export const postAnswerSuccess = () => ({
    type: POST_ANSWER_SUCCESS
})

export const POST_ANSWER_ERROR = 'POST_ANSWER_ERROR';
export const postAnswerError = error => ({
    type: POST_ANSWER_ERROR,
    error
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
        dispatch(fetchQuestionsSuccess(res)
    )})
    .catch(err => {
        dispatch(fetchQuestionsError(err));
    });
};

export const postAnswer = (word, memoryStrength, correct, next, currentHead) => (dispatch, getState) => {
    console.log(word, memoryStrength, correct)
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
            word,
            memoryStrength,
            correct,
            next,
            currentHead
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
        dispatch(postAnswerSuccess(res)
    )})
    .catch(err => {
        dispatch(postAnswerError(err));
    });
}