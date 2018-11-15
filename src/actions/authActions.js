import axios from  'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERROR, SET_CURRENT_USER } from './types';
import { url } from '../config'

// Register User
export const registerUser = (userData, history) => dispatch =>  {
    axios.post(`${url.mtechAuth}/register`, userData)
    .then(res =>{
        console.log('res', res)
         history.push('/admin/login')
    })
    .catch(err => console.log('err', err))
}

// Login User
export const loginUser = (userData, history) => dispatch => {
    axios.post(`${url.mtechAuth}/login`, userData)
    .then( res => {
        console.log('login response', res)
        const { token } = res.data.result;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
        history.push('/admin')
    })
    .catch(err => {
        console.log('err:', err.response)
        dispatch({
            type: GET_ERROR,
            payload: err
        })}
    )
}

// Set logged in user
export const setCurrentUser = (decoded) => {
    return {
         type: SET_CURRENT_USER,
         payload: decoded
    }
}

// Log user out 
export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}))
}