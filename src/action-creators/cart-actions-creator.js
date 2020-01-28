import { createCart, updateCart } from "../actions/cart-actions";
import api from "../api/cartAPI";
const cart = {
  items: [],
  customerId: null,
  sessionId: null,
  paid: false,
  created: new Date(),
};

export function _createCart() {
  return (dispatch, getState) => {
    dispatch(createCart(cart));
  };
}

export function _addToCart(item) {
  return (dispatch, getState) => {
    api
      .add({ productId: item.productId, quantity: 1 })
      .then(cart => dispatch(updateCart(cart)));
  };
}
