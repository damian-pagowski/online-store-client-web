const BASE_URL = process.env.REACT_APP_API_URL;

const headers = {
  "Content-Type": "application/json"
};
const api = {
  details() {
    return fetch(`${BASE_URL}/cart/details`, {
      method: "GET",
      headers: headers,
      credentials: "include",
      mode: "cors" // no-cors, *cors, same-origin
    })
      .then(response => response.json())
      .catch(error => console.log(error));
  },
  add(item) {
    // productId, quantity
    let url = `${BASE_URL}/cart/add`;
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: headers,
      credentials: "include",
      mode: "cors" // no-cors, *cors, same-origin
    })
      .then(response => response.json())
      .catch(error => console.log(error));
  },
  charge() {
    // productId, quantity
    let url = `${BASE_URL}/cart/charge`;
    return fetch(url, {
      method: "GET",
      headers: headers,
      credentials: "include",
      mode: "cors" // no-cors, *cors, same-origin
    })
      .then(response => response.json())
      .catch(error => console.log(error));
  },
  update(item) {
    // productId, quantity
    let url = `${BASE_URL}/cart/edit`;
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: headers,
      credentials: "include",
      mode: "cors" // no-cors, *cors, same-origin
    })
      .then(response => response.json())
      .catch(error => console.log(error));
  },
  delete(item) {
    let url = `${BASE_URL}/cart/remove`;
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: headers,
      credentials: "include",
      mode: "cors"
    })
      .then(response => response.json())
      .catch(error => console.log(error));
  }
};
export default api;
