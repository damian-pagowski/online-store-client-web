import { logIn, logOut } from "../actions/users-actions";
import api from "../api/usersApi";

export function handleLogin(user) {
  return dispatch => {
    api.login(user.username, user.password).then(data => {
      localStorage.setItem("shop-user-profile", JSON.stringify({ ...data }));
      dispatch(logIn({ ...data }));
    }).catch(error => console.log("Error while logging in: " + error));
  };
}

export function handleRegister(user) {
  return dispatch => {
    api.register(user.email, user.password).then(data => {
      localStorage.setItem("shop-user-profile", JSON.stringify({ ...data }));
      dispatch(logIn({ ...data }));
    }).catch(error => console.log("Error while logging in: " + error));
  };
}

export function handleLogout() {
  return dispatch => {
    dispatch(logOut());
    localStorage.removeItem("store-user");
  };
}
