import axios from 'axios'
import { toastr } from "react-redux-toastr";
import { GET_ERROR, GET_ALL_USERS} from './types'
import { url } from '../config'

export const getUsers = () => {
 return dispatch => {
    axios.get(url.user)
        .then(res =>{
            console.log("response",res);
            dispatch({
                type: GET_ALL_USERS,
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
}