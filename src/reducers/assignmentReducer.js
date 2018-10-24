import { GET_UNASSIGNED_USER , GET_ASSIGNED_USER, GET_DOCTORS, DELETE_USER_ASSIGNMENT, DELETE_UNASSIGNED_USER, UPDATE_ASSIGNMENT} from '../actions/types';

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
    case DELETE_USER_ASSIGNMENT: 
      return {
         ...state,
         assignedUser: state.assignedUser.filter(user => user._id !== action.payload._id)
      }
    case DELETE_UNASSIGNED_USER:
       return {
         ...state,
         unAssignedUser: state.unAssignedUser.filter(user => user._id !== action.payload.userId)
       }
    case UPDATE_ASSIGNMENT: 
      const newAssignedUsers = state.assignedUser.filter(user => user._id !== action.payload.id)
      const updateUser = state.assignedUser.filter(user => user._id === action.payload.id)[0]
      const newDoc = state.doctors.filter(doc => doc._id === action.payload.docId)[0]
      const updateNewUser = { ...updateUser, doctor: { ...newDoc }}
      return {
        ...state,
        assignedUser: [ ...newAssignedUsers, updateNewUser]
      }
    default:
      return state;
  }
}