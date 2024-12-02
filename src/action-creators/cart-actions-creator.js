import { updateCart } from "../actions/cart-actions";
import apiCart from "../api/cartAPI";

export function _addToCart(item) {
  return (dispatch, getState) => {
    const { authHeader, username } = getState().user; // Get authHeader and username from state
    const { productId } = item;
    apiCart
      .addItem(username, productId, 1, authHeader) // Call the updated addItem method
      .then((cart) => dispatch(updateCart(cart))) // Dispatch updated cart to the store
      .catch((err) => console.error("Error adding to cart:", err)); // Handle errors
  };
}

export function _updateQuantity(item) {
  return (dispatch, getState) => {
    const { authHeader, username } = getState().user; // Get authHeader and username from state

    apiCart
      .addItem(username, item.productId, item.quantity, authHeader) // Reuse addItem with the updated quantity
      .then((cart) => {
        dispatch(updateCart(cart)); // Dispatch updated cart
      })
      .catch((err) => console.error("Error updating quantity:", err));
  };
}

export function _removeItem(item) {
  return (dispatch, getState) => {
    const { authHeader, username } = getState().user; // Get authHeader and username from state

    apiCart
      .addItem(username, item.productId, -item.quantity, authHeader) // Reduce quantity by sending a negative value
      .then((cart) => {
        dispatch(updateCart(cart)); // Dispatch updated cart
      })
      .catch((err) => console.error("Error removing item:", err));
  };
}

export function _getCart() {
  return (dispatch, getState) => {
    const { authHeader, username } = getState().user; // Get authHeader and username from state

    apiCart
      .getCart(username, authHeader) // Fetch cart details for the user
      .then((cart) => {
        dispatch(updateCart(cart)); // Dispatch updated cart
      })
      .catch((err) => console.error("Error fetching cart:", err));
  };
}