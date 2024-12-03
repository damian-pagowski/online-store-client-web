import { USER_LOGIN, USER_LOGOUT } from "../actions/users-actions";


export default function user(state = {}, action) {

  console.log("Action dispatched:", action); // Debugging
  console.log("State before:", state); // Debugging

  switch (action.type) {
    case USER_LOGIN:
      return { ...state, ...action.user };
    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
}
