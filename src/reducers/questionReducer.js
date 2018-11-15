import { GET_QUESTION_TYPE, GET_QUESTION } from '../actions/types';

const initialState = {
  questionType: [],
  question: {}
};

export default function(state = initialState, action) {
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
    default:
      return state;
  }
}