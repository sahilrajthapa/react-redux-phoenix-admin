import { GET_QUESTION_TYPE, GET_QUESTION, DELETE_QUESTION_TYPE } from '../actions/types';

const initialState = {
  questionType: [],
  question: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUESTION_TYPE:
      return {
        ...state,
        questionType: action.payload
      }
    case GET_QUESTION:
      return {
        ...state,
        question: action.payload
      }
    case DELETE_QUESTION_TYPE:
      return {
        ...state,
        questionType: state.questionType.filter(qtype => qtype._id !== action.payload._id)
      }
    default:
      return state;
  }
}