import { getCategories } from "../actions/categories-actions";
import api from "../api/productAPI";

export function _getCategories() {
  return dispatch => {
    api.categories().then(data => {
      dispatch(getCategories(data));
    });
  };
}
