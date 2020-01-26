import { GET_PRODUCTS } from "../actions/products-actions";

export default function products(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      const newState = {};
      action.products.forEach(element => {
        newState[element.productId] = element;
      });
      return newState;
    default:
      return state;
  }
}
