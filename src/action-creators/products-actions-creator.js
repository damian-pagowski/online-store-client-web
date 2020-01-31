import { getProducts } from "../actions/products-actions";
import api from "../api/productAPI";

export function _getProducts(category, sub) {
  return dispatch => {
    api.products(category, sub).then(data => {
      dispatch(getProducts(data));
    });
  };
}
