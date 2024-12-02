const BASE_URL = process.env.REACT_APP_API_URL;

const headers = {
  "Content-Type": "application/json",
};

const buildUrl = (base, params = {}) => {
  const query = new URLSearchParams(params).toString();
  return query ? `${base}?${query}` : base;
};

const fetchJson = (url, options = {}) =>
  fetch(url, { ...options, headers, mode: "cors" }).then((response) =>
    response.json()
  );

const api = {
  products(category, sub, search) {
    const params = {};
    if (category) params.category = category;
    if (sub) params.subcategory = sub;
    if (search) params.search = search;
    const url = buildUrl(`${BASE_URL}/products`, params);
    return fetchJson(url);
  },

  categories() {
    return fetchJson(`${BASE_URL}/products/categories`);
  },
};

export default api;