import { CART_CREATE, CART_UPDATED } from "../actions/cart-actions";

export default function cart(state = {}, action) {
  switch (action.type) {
    case CART_CREATE:

    case CART_UPDATED:
      return { ...action.cart };
    default:
      return state;
  }
}
