const BASE_URL = process.env.REACT_APP_API_URL;

const headers = {
  "Content-Type": "application/json"
};
const api = {
  products(category, sub, search) {
    console.log(
      ">>> API PRODUCTS PARAMS: " + category + " " + sub + " " + search
    );
    let url = `${BASE_URL}/products`;
    if (category) {
      url += `?category=${category}`;
      if (sub) {
        url += `&subcategory=${sub}`;
      }
    }
    if (search) {
      url += category ? `&search=${search}` : `?search=${search}`;
    }
    console.log("api -> get products. url: " + url);
    return fetch(url, {
      method: "GET",
      headers: headers
    }).then(response => response.json());
  },
  categories() {
    return fetch(`${BASE_URL}/products/categories`, {
      method: "GET",
      headers: headers
    }).then(response => response.json());
  }
};
export default api;
