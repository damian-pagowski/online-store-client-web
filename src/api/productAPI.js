const BASE_URL = process.env.REACT_APP_API_URL;

const headers = {
  "Content-Type": "application/json",
};
const api = {
  products(category, sub) {
    let url = `${BASE_URL}/products`
    if (category) {
      url += `?category=${category}`
      if (sub) {
        url += `&subcategory=${sub}`
      }
    }

    return fetch(url, {
      method: "GET",
      headers: headers,
    }).then(response => response.json());
  },
  categories() {
    return fetch(`${BASE_URL}/products/categories`, {
      method: "GET",
      headers: headers,
    }).then(response => response.json());
  },
};
export default api;
