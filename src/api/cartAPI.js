const BASE_URL = process.env.REACT_APP_API_URL;

const headers = {
  Accept: "application/json",
};
const api = {
  details() {
    return fetch(`${BASE_URL}/cart/details`, {
      method: "GET",
      headers: headers(token),
    }).then(response => response.json());
  },
  add(item) {
    // productId, quantity
    let url = `${BASE_URL}/cart/add`;
    return fetch(url, {
      method: "POST",
      body: item,
      headers: headers,
    }).then(response => response.json());
  },

  update(item) {
    // productId, quantity
    let url = `${BASE_URL}/cart/edit`;
    return fetch(url, {
      method: "POST",
      body: item,
      headers: headers,
    }).then(response => response.json());
  },
  delete(item) {
    // productId
    let url = `${BASE_URL}/cart/remove`;
    return fetch(url, {
      method: "POST",
      body: item,
      headers: headers,
    }).then(response => response.json());
  },
};
export default api;
