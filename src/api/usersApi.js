const BASE_URL = process.env.REACT_APP_API_URL;

const defaultHeaders = {
  "Content-Type": "application/json",
};

const fetchJson = (url, options) =>
  fetch(url, options).then((response) => response.json());

const api = {
  login(username, password) {
    return fetchJson(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: defaultHeaders,
      credentials: "same-origin",
      body: JSON.stringify({ username, password }),
    });
  },
  register(email, password) {
    const username = email.split("@")[0];
    return fetchJson(`${BASE_URL}/users`, {
      method: "POST",
      headers: defaultHeaders,
      credentials: "same-origin",
      body: JSON.stringify({ email, password, username }),
    });
  },
  logout() {
    return fetchJson(`${BASE_URL}/users/logout`, {
      method: "GET",
      credentials: "same-origin",
    });
  },
};

export default api;