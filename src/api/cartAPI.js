const BASE_URL = process.env.REACT_APP_API_URL;

const headers = {
  "Content-Type": "application/json",
};

const fetchJson = (url, options = {}) =>
  fetch(url, { ...options}).then((response) =>
    response.json()
  );
  
const apiCart = {

  addItem(username, productId, quantity, authHeader) {
    const url = `${BASE_URL}/cart/${username}`;
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

  getCart(username, authHeader) {
    const url = `${BASE_URL}/cart/${username}`;
    return fetchJson(url, {
      method: "GET",
      headers: {
        ...headers,
        Authorization: authHeader,
      },
    });
  },

  deleteCart(username, authHeader) {
    const url = `${BASE_URL}/cart/${username}`;
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