import axios from 'axios'
import { toastr } from "react-redux-toastr";
import { GET_QUESTION_TYPE, GET_QUESTION, GET_ERROR, DELETE_QUESTION_TYPE } from './types'
import { url } from '../config'

/* ------------------------- ALL QUESTION TYPE  ------------------------ */

// Get question type
export const getQuestionType = () => dispatch => {
    axios.get('/question')
        .then(res =>
            dispatch({
                type: GET_QUESTION_TYPE,
                payload: res.data.questions
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERROR,
                payload: err
            })
        )
}

// Add question type
export const addQuestionType = (questData, history) => (dispatch) => {
    axios
        .post('/question', questData )
        .then(res => { 
            history.push('/question-type');
            toastr.success("Success", "Question has been created");
        })
        .catch(err => {
            console.log('addQuestion err', err.response.data)
            dispatch({
                type: GET_ERROR,
                payload: err.response.data
            })
            toastr.error("Oops", "Something went wrong")
        })
}

// Delete question type
export const deleteQuestionType = (qId) => (dispatch) => {
    axios
    .delete(`/question/${qId}`)
    .then(res => {
         dispatch({
             type: DELETE_QUESTION_TYPE,
             payload: res.data.result
         })
         toastr.success("Success", "Question has been deleted");
    })
    .catch(err => {
        dispatch({
            type: GET_ERROR,
            payload: err
        })
        toastr.error("Oops", "Something went wrong")
    })
}


/* ------------------------------  SINGLE QUESTION TYPE --------------------- */

// Get all questions from a question type
export const getQuestions = (type) => dispatch => {
    axios.get(`/question//${type}`)
        .then(res => {
            dispatch({
                type: GET_QUESTION,
                payload: res.data
            })
        }
        )
        .catch(err =>
            dispatch({
                type: GET_ERROR,
                payload: err
            })
        )
}

/* -------------------------- INTRO QUESTIONS ---------------------- */

// Add  introquestions
export const addIntroQuestion = (id, qtype, introData, history) => (dispatch) => {
    axios
        .post(`/question/addintro/${id}`, introData)
        .then(res => {
            history.push(`/qset/${qtype}`)
            toastr.success("Success", "Question has been created");
        })
        .catch(err => {
            dispatch({
                type: GET_ERROR,
                payload: err
            })
            toastr.error("Oops", "Something went wrong")
        })
}

// Update introquestions
export const updateIntroQuestion = (parentId, introId, qtype, introData, history) => (dispatch) => {
    axios
    .put(`/question/parent/${parentId}/intro/${introId}`, introData)
    .then(res => {
        
        history.push(`/qset/${qtype}`)
        toastr.success("Success", "Question has been modified");
    })
    .catch(err => {
        dispatch({
            type: GET_ERROR,
            payload: err
        })
        toastr.error("Oops", "Something went wrong")
    })
}

// Delete introquestions
export const deleteIntroQuestion = ( parentId, questId ) => (dispatch) => {
    axios
        .delete(`/question/parent/${parentId}/intro/${questId}`)
        .then(res => {
            dispatch({
                type: GET_QUESTION,
                payload: res.data.result
            })
             toastr.success("Success", "Question has been deleted");
         })
        .catch(err => {
            dispatch({
                type: GET_ERROR,
                payload: err
            })
            toastr.error("Oops", "Something went wrong")
        })
}

/* -------------------------- CORE QUESTIONS ---------------------- */

// Add  corequestions
export const addCoreQuestion = (id, qtype, coreData, history) => (dispatch) => {
    axios
        .post(`/question/addcore/${id}`, coreData)
        .then(res => {
            history.push(`/qset/${qtype}`)
            toastr.success("Success", "Question has been created");
        })
        .catch(err => {
            dispatch({
                type: GET_ERROR,
                payload: err
            })
            toastr.error("Oops", "Something went wrong")
        })
}



// Update corequestions
export const updateCoreQuestion = (parentId, coreId, qtype, coreData, history) => (dispatch) => {
    axios
    .put(`${url.question }/parent/${parentId}/core/${coreId}`, coreData)
    .then(res => {
        console.log('core question updateed', qtype)
        history.push(`/qset/${qtype}`)
        toastr.success("Success", "Question has been modified");
    })
    .catch(err => {
        dispatch({
            type: GET_ERROR,
            payload: err
        })
        toastr.error("Oops", "Something went wrong")
    })
}

// Delete corequestions
export const deleteCoreQuestion = ( parentId, coreId ) => dispatch => {
    axios
        .delete(`${url.question }/parent/${parentId}/core/${coreId}`)
        .then(res => {
            dispatch({
                type: GET_QUESTION,
                payload: res.data.result
            })
            toastr.success("Success", "Question has been deleted");
        })
       .catch(err => {
           dispatch({
               type: GET_ERROR,
               payload: err
           })
           toastr.error("Oops", "Something went wrong")
       })
}

