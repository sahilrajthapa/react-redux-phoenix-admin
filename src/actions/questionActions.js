import axios from 'axios'
import { GET_QUESTION_TYPE, GET_QUESTION, GET_ERROR } from './types'

const url = 'http://120.79.226.222/question'

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
        .then(res => history.push('/question-type'))
        .catch(err =>
            dispatch({
                type: GET_ERROR,
                payload: err
            })
        )
}

// Get all questions from a question type
export const getQuestions = () => dispatch => {
    axios.get(url)
        .then(res => {
            dispatch({
                type: GET_QUESTION,
                payload: res.data.questions
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

// Add  introquestions
export const addIntroQuestion = (id, type, introData, history) => (dispatch) => {
    axios
     .post(`${url}/addintro/${id}`, introData)
     .then(res => history.push(`/qset/${type}`))
     .catch(err =>
        dispatch({
            type: GET_ERROR,
            payload: err
        })
     )
}

// Add  corequestions
export const addCoreQuestion = (id, qtype, coreData, history) => (dispatch) => {
    axios
     .post(`${url}/addcore/${id}`, coreData)
     .then(res => history.push(`/qset/${qtype}`))
     .catch(err =>
        dispatch({
            type: GET_ERROR,
            payload: err
        })
     )
}


// Delete introquestions
export const deleteIntroQuestion = (qtype, parentId, questId, history) => (dispatch) => {
    axios
     .delete(`${url}/parent/${parentId}/intro/${questId}`)
     .then(res => history.push(`/qset/${qtype}`))
     .catch(err =>
        dispatch({
            type: GET_ERROR,
            payload: err
        })  
    )
}

// Delete corequestions
export const deleteCoreQuestion = (qtype, parentId, questId, history) => dispatch => {
    console.log(`${url}/parent/${parentId}/core/${questId}`)
    axios
    .delete(`${url}/parent/${parentId}/core/${questId}`)
    .then(res => history.push(`/qset/${qtype}`))
    .catch(err => 
        dispatch({
            type: GET_ERROR,
            payload: err
        })  
   )
}

