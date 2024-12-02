import { logIn, logOut } from "../actions/users-actions";
import api from "../api/usersApi";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleLogin(user) {
  console.log(JSON.stringify(user))
  return dispatch => {
    dispatch(showLoading());

    api.login(user.username, user.password).then(data => {
      localStorage.setItem("shop-user-profile", JSON.stringify({ ...data }));
      const authHeader = `Basic ${btoa(user.username + ":" + user.password)}`;

      dispatch(logIn({ ...data, authHeader:authHeader }));
    }).catch(error => console.log("Error while logging in: " + error));
    dispatch(hideLoading());
  };
}

export function handleRegister(user) {
  return dispatch => {
    dispatch(showLoading());

    api.register(user.email, user.password).then(data => {
      const authHeader = `Basic ${btoa(user.username + ":" + user.password)}`;
      localStorage.setItem("shop-user-profile", JSON.stringify({  ...data, authHeader:authHeader }));
      dispatch(logIn({ ...data, authHeader:authHeader }));
    }).catch(error => console.log("Error while logging in: " + error));
    dispatch(hideLoading());
  };
}

export function handleLogout() {
  return dispatch => {
    dispatch(showLoading());
    api.logout().then(data => {
      localStorage.removeItem("store-user");
      dispatch(logOut());
      dispatch(hideLoading());
    });
  };
}
