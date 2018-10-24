import axios from 'axios'
import { toastr } from "react-redux-toastr";
import { GET_UNASSIGNED_USER, GET_ASSIGNED_USER, GET_ERROR, GET_DOCTORS, DELETE_USER_ASSIGNMENT, DELETE_UNASSIGNED_USER, UPDATE_ASSIGNMENT } from './types'
import { url } from '../config'


export const getUnassignedUser = () => dispatch => {
    axios.get(`${url.assignment}/unassignedUser`)
        .then(res => {
            dispatch({
                type: GET_UNASSIGNED_USER,
                payload: res.data.result
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

export const getAssignedUser = () => dispatch => {
    axios.get(url.assignment)
        .then(res => {
            dispatch({
                type: GET_ASSIGNED_USER,
                payload: res.data.result
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

export const getDoctors = () => dispatch => {
    axios.get(`${url.doctor}`)
        .then(res => {
            dispatch({
                type: GET_DOCTORS,
                payload: res.data.result
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

export const assignUser = (assignData, history) => (dispatch) => {
   
    axios.post(`${url.assignment}`, assignData)
        .then(res => {
            
            history.push('/admin/assigned') 
            console.log('assignuser')    
             dispatch({
                type: GET_DOCTORS,
                payload: res.data.result
            })
            dispatch({
                type: DELETE_UNASSIGNED_USER,
                payload: assignData
            })
            toastr.success("Success", "User has been assigned");
         }
        )
        .catch(err => {
            toastr.error("Oops", "Something went wrong")
            dispatch({
                type: GET_ERROR,
                payload: err
            })
        })
}

export const updateUserAssignment = (assignId, docData) => (dispatch) => {
    axios.put(`${url.assignment}/${assignId}`, docData)
        .then(res => {
            const result = {
                id: res.data.result._id,
                docId: res.data.result.doctor
           }
            dispatch({
                type: UPDATE_ASSIGNMENT,
                payload: result
            })
            toastr.success("Success", "User Assignment has been updated");
        })
        .catch(err => {
            toastr.error("Oops", "Something went wrong")
            dispatch({
                type: GET_ERROR,
                payload: err
            })
        })
}


export const deleteUserAssignment = (assignId) => (dispatch) => {
    axios.delete(`${url.assignment}/${assignId}`)
        .then(res => {
            dispatch({
                type: DELETE_USER_ASSIGNMENT,
                payload: res.data.result
            })

            toastr.success("Success", "User Assignment has been deleted");
        })
        .catch(err => {
            toastr.error("Oops", "Something went wrong")
            dispatch({
                type: GET_ERROR,
                payload: err
            })
        })
}