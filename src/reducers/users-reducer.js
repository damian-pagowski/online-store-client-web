import { USER_LOGIN, USER_LOGOUT } from "../actions/users-actions";

export default function user(state = {}, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, ...action.user };
    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
}
