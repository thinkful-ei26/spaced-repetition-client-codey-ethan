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

export const FETCH_PROGRESS_SUCCESS = 'FETCH_PROGRESS_SUCCESS';
export const fetchProgressSuccess = progress => ({
    type: FETCH_PROGRESS_SUCCESS,
    progress
})

export const FETCH_PROGRESS_ERROR = 'FETCH_PROGRESS_ERROR';
export const fetchProgressError = error => ({
    type: FETCH_PROGRESS_ERROR,
    error
})

export const TOGGLE_PROGRESS = 'TOGGLE_PROGRESS';
export const toggleProgress = () => ({
    type: TOGGLE_PROGRESS,
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

export const postAnswer = (answer) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
            answer
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => {
        dispatch(postAnswerSuccess()
    )})
    .catch(err => {
        dispatch(postAnswerError(err));
    });
}

export const fetchProgress = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    // console.log('fetchProgress token: ', authToken)
    return fetch(`${API_BASE_URL}/questions/progress`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((res) => {
        // console.log('fetchProgress res: ', res)
        dispatch(fetchProgressSuccess(res)
    )})
    .catch(err => {
        dispatch(fetchProgressError(err));
    });
}