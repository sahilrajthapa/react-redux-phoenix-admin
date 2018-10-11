import axios from 'axios'
import { toastr } from "react-redux-toastr";
import { GET_QUESTION_TYPE, GET_QUESTION, GET_ERROR } from './types'
const url = 'http://120.79.226.222/question'
// const url = 'http://localhost:3001/question'

/* ------------------------- ALL QUESTION TYPE  ------------------------ */

// Get question type
export const getQuestionType = () => dispatch => {
    axios.get(url)
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
        .post(url, questData)
        .then(res => {
            history.push('/question-type');
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


/* ------------------------------  SINGLE QUESTION TYPE --------------------- */

// Get all questions from a question type
export const getQuestions = (type) => dispatch => {
    axios.get(`${url}/${type}`)
        .then(res => {
            console.log(res)
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
        .post(`${url}/addintro/${id}`, introData)
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
    .put(`${url}/parent/${parentId}/intro/${introId}`, introData)
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
        .delete(`${url}/parent/${parentId}/intro/${questId}`)
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
        .post(`${url}/addcore/${id}`, coreData)
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
    .put(`${url}/parent/${parentId}/core/${coreId}`, coreData)
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
        .delete(`${url}/parent/${parentId}/core/${coreId}`)
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

