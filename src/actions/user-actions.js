export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export function logIn(user) {
  return {
    type: USER_LOGIN,
    user,
  };
}

export function logOut() {
  return {
    type: USER_LOGOUT,
  };
}
