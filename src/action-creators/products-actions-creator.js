import { getProducts } from "../actions/products-actions";
import api from "../api/productAPI";
import { showLoading, hideLoading } from "react-redux-loading";

export function _getProducts(category, sub) {
  return dispatch => {
    dispatch(showLoading());
    api.products(category, sub).then(data => {
      dispatch(getProducts(data));
    });
    dispatch(hideLoading());
  };
}
