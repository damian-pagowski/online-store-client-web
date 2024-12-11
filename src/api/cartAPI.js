const BASE_URL = process.env.REACT_APP_API_URL;

const headers = {
  "Content-Type": "application/json",
};

const fetchJson = (url, options = {}) =>
  fetch(url, { ...options}).then((response) =>
    response.json()
  );
  
const apiCart = {

  addItem(productId, quantity, authHeader) {
    const url = `${BASE_URL}/cart`;
    const body = { productId, quantity };

    return fetchJson(url, {
      method: "POST",
      headers: {
        ...headers,
        Authorization: authHeader,
      },
      body: JSON.stringify(body),
    });
  },

  getCart( authHeader) {
    const url = `${BASE_URL}/cart`;
    return fetchJson(url, {
      method: "GET",
      headers: {
        ...headers,
        Authorization: authHeader,
      },
    });
  },

  deleteCart( authHeader) {
    const url = `${BASE_URL}/cart`;
    return fetchJson(url, {
      method: "DELETE",
      headers: {
        ...headers,
        Authorization: authHeader,
      },
    });
  },
};

export default apiCart;