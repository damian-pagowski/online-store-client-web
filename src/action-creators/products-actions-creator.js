import { getProducts } from "../actions/products-actions";
import api from "../api/productAPI";

export function _getProducts() {
  return dispatch => {
    //   dispatch(showLoading());
    api.products().then(data => {
      dispatch(getProducts(data));
      // dispatch(hideLoading());
    });
  };
}
