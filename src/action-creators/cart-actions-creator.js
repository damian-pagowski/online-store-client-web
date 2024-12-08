import { updateCart } from "../actions/cart-actions";
import apiCart from "../api/cartAPI";

const handleApiResponse = (dispatch, apiCall) => {
  apiCall
    .then((cart) => dispatch(updateCart(cart)))
    .catch((err) => console.error("Cart API Error:", err));
};

const getAuthData = (getState) => {
  const { authHeader, username } = getState().user;
  if (!authHeader || !username) {
    throw new Error("User authentication data is missing");
  }
  return { authHeader, username };
};

export const _addToCart = (item) => (dispatch, getState) => {
  try {
    const { authHeader, username } = getAuthData(getState);
    const { productId } = item;
    handleApiResponse(dispatch, apiCart.addItem(username, productId, 1, authHeader));
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

export const _updateQuantity = (item) => (dispatch, getState) => {
  try {
    const { authHeader, username } = getAuthData(getState);
    handleApiResponse(dispatch, apiCart.addItem(username, item.productId, item.quantity, authHeader));
  } catch (error) {
    console.error("Error updating quantity:", error);
  }
};

export const _removeItem = (item) => (dispatch, getState) => {
  try {
    const { authHeader, username } = getAuthData(getState);
    handleApiResponse(dispatch, apiCart.addItem(username, item.productId, -item.quantity, authHeader));
  } catch (error) {
    console.error("Error removing item:", error);
  }
};

export const _getCart = () => (dispatch, getState) => {
  try {
    const { authHeader, username } = getAuthData(getState);
    handleApiResponse(dispatch, apiCart.getCart(username, authHeader));
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};