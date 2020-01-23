const BASE_URL = process.env.REACT_APP_API_URL;
const headerForm = { "content-type": "multipart/form-data" };
const headerJson = { "content-type": "application/json" };

const api = {
  login(email, password) {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    return fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: headerJson,
      body: JSON.stringify({ email, password }),
    }).then(response => response.json());
  },
  logout() {
    return fetch(`${BASE_URL}/users/logout`, {
      method: "GET",
    }).then(response => response.json());
  },
};
export default api;
