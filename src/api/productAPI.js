const BASE_URL = process.env.REACT_APP_API_URL;

const headers = {
  "Content-Type": "application/json",
};
const api = {
  products() {
    return fetch(`${BASE_URL}/products`, {
      method: "GET",
      headers: headers,
    }).then(response => response.json());
  },
};
export default api;
