import { updateCart } from "../actions/cart-actions";
import api from "../api/cartAPI";

export function _addToCart(item) {
  return (dispatch, getState) => {
    api
      .add({ productId: item.productId, quantity: 1 })
      .then(cart => dispatch(updateCart(cart)));
  };
}

export function _updateQuantity(item) {
  return (dispatch, getState) => {
    api
      .update({ productId: item.productId, quantity: item.quantity })
      .then(cart => {
        dispatch(updateCart(cart));
      });
  };
}

export function _removeItem(item) {
  return (dispatch, getState) => {
    api.delete({ productId: item.productId }).then(cart => {
      dispatch(updateCart(cart));
    });
  };
}

export function _getCart() {
  return (dispatch, getState) => {
    api.details().then(cart => {
      dispatch(updateCart(cart));
    });
  };
}
