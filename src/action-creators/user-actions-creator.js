import { logIn, logOut } from "../actions/users-actions";
import api from "../api/usersApi";
export function handleLogin(user) {
  return dispatch => {
    //   dispatch(showLoading());

    api.login(user.email, user.password).then(data => {
      localStorage.setItem("shop-user-profile", JSON.stringify({ ...data }));
      dispatch(logIn({ ...data }));

      // dispatch(hideLoading());
    });
  };
}

export function handleLogout() {
  return dispatch => {
    //   dispatch(showLoading());

    api.logout().then(data => {
      localStorage.removeItem("store-user");
      dispatch(logOut());

      // dispatch(hideLoading());
    });
  };
}
