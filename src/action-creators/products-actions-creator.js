import { getProducts } from "../actions/products-actions";
import api from "../api/productAPI";
import { showLoading, hideLoading } from "react-redux-loading";

export function _getProducts(category, sub, search) {
  console.log("category: " + JSON.stringify(category))
  return dispatch => {
    dispatch(showLoading());
    api.products(category, sub, search).then(data => {
      dispatch(getProducts(data));
    });
    dispatch(hideLoading());
  };
}
