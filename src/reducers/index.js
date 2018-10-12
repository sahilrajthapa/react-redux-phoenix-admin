import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'; 
import { reducer as formReducer } from 'redux-form'
import questionReducer from './questionReducer'
import errorReducer from './errorReducer'


export default combineReducers({
    question: questionReducer,
    error: errorReducer,
    toastr: toastrReducer,
    form: formReducer
})