const BASE_URL = process.env.REACT_APP_API_URL;
const headerJson = { "content-type": "application/json" };

const api = {
  login(email, password) {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    return fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: headerJson,
      credentials: 'same-origin',

      body: JSON.stringify({ email, password }),
    }).then(response => response.json());
  },
  logout() {
    return fetch(`${BASE_URL}/users/logout`, {
      method: "GET",
      credentials: 'same-origin',
    }).then(response => response.json());
  },
};
export default api;
