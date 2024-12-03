import { logIn, logOut } from "../actions/users-actions";
import api from "../api/usersApi";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleLogin(user) {
  return dispatch => {
    dispatch(showLoading());

    api.login(user.username, user.password).then(data => {
      localStorage.setItem("shop-user-profile", JSON.stringify({ ...data }));
      dispatch(logIn({ ...data }));
    }).catch(error => console.log("Error while logging in: " + error));
    dispatch(hideLoading());
  };
}

export function handleRegister(user) {
  return dispatch => {
    dispatch(showLoading());

    api.register(user.email, user.password).then(data => {
      localStorage.setItem("shop-user-profile", JSON.stringify({ ...data }));
      dispatch(logIn({ ...data }));
    }).catch(error => console.log("Error while logging in: " + error));
    dispatch(hideLoading());
  };
}

export function handleLogout() {
  return dispatch => {
    dispatch(logOut());
    localStorage.removeItem("store-user");
  };
}
