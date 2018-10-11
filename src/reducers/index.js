import { combineReducers } from 'redux';
import questionReducer from './questionReducer'
import errorReducer from './errorReducer'
import { reducer as toastrReducer } from 'react-redux-toastr'; 
export default combineReducers({
    question: questionReducer,
    error: errorReducer,
    toastr: toastrReducer
})