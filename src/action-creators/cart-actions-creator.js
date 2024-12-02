import { updateCart } from "../actions/cart-actions";
import apiCart from "../api/cartAPI";

export function _addToCart(item) {
  return (dispatch, getState) => {
    const { authHeader, username } = getState().user; 
    const { productId } = item;
    apiCart
      .addItem(username, productId, 1, authHeader)
      .then((cart) => dispatch(updateCart(cart)))
      .catch((err) => console.error("Error adding to cart:", err)); 
  };
}

export function _updateQuantity(item) {
  return (dispatch, getState) => {
    const { authHeader, username } = getState().user;

    apiCart
      .addItem(username, item.productId, item.quantity, authHeader)
      .then((cart) => {
        dispatch(updateCart(cart)); 
      })
      .catch((err) => console.error("Error updating quantity:", err));
  };
}

export function _removeItem(item) {
  return (dispatch, getState) => {
    const { authHeader, username } = getState().user; 

    apiCart
      .addItem(username, item.productId, -item.quantity, authHeader)
      .then((cart) => {
        dispatch(updateCart(cart));
      })
      .catch((err) => console.error("Error removing item:", err));
  };
}

export function _getCart() {
  return (dispatch, getState) => {
    const { authHeader, username } = getState().user;

    apiCart
      .getCart(username, authHeader)
      .then((cart) => {
        dispatch(updateCart(cart));
      })
      .catch((err) => console.error("Error fetching cart:", err));
  };
}