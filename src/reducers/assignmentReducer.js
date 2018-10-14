import { GET_UNASSIGNED_USER , GET_ASSIGNED_USER, GET_DOCTORS } from '../actions/types';

const initialState = {
  unAssignedUser: [],
  assignedUser: [],
  doctors: [],
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_UNASSIGNED_USER:
      return {
        ...state,
        unAssignedUser: action.payload
      }
    case GET_ASSIGNED_USER:
      return {
        ...state,
        assignedUser: action.payload
      }
    case GET_DOCTORS: 
      return {
         ...state,
         doctors: action.payload
      }
    default:
      return state;
  }
}