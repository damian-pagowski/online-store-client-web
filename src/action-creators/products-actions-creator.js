import { getProducts } from "../actions/products-actions";
import api from "../api/productAPI";

export function _getProducts(category, sub, search) {
  return dispatch => {
    api.products(category, sub, search).then(data => {
      dispatch(getProducts(data));
    });
  };
}
