import axios from 'axios'
import { toastr } from "react-redux-toastr";
import { GET_UNASSIGNED_USER, GET_ASSIGNED_USER, GET_ERROR, GET_DOCTORS } from './types'
import { url } from '../config'


export const getUnassignedUser= () => dispatch => {
    axios.get('/assignment/unassignedUser')
        .then(res =>{
            console.log('unassigned user', res.data);
            dispatch({
                type: GET_UNASSIGNED_USER,
                payload: res.data.result
            })}
        )
        .catch(err =>
            dispatch({
                type: GET_ERROR,
                payload: err
            })
        )
}

export const getAssignedUser = () => dispatch => {
    axios.get('/assignment')
        .then(res =>{
            console.log('assigned user', res.data);
            dispatch({
                type: GET_ASSIGNED_USER,
                payload: res.data.result
            })}
        )
        .catch(err =>
            dispatch({
                type: GET_ERROR,
                payload: err
            })
        )
}

export const getDoctors = () => dispatch => {
    axios.get('/doctor')
    .then(res =>{
        dispatch({
            type: GET_DOCTORS,
            payload: res.data.result
        })}
    )
    .catch(err =>
        dispatch({
            type: GET_ERROR,
            payload: err
        })
    )
}

export const assignUser = (assignData, history) => (dispatch) => {
    axios.post('/assignment', assignData)
    .then(res =>{
        history.push('/assigned')
        dispatch({
            type: GET_DOCTORS,
            payload: res.data.result
        })}
    )
    .catch(err =>
        dispatch({
            type: GET_ERROR,
            payload: err
        })
    )
}