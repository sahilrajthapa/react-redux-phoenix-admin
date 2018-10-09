import { combineReducers } from 'redux';
import questionReducer from './questionReducer'
import errorReducer from './errorReducer'

export default combineReducers({
    question: questionReducer,
    error: errorReducer
})