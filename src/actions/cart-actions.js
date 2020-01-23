/*
 * action types
 */
export const CART_CREATE = "CART_CREATE";
export const CART_ADD = "CART_ADD";
export const CART_EDIT = "CART_EDIT";
export const CART_REMOVE = "CART_REMOVE";
// export const CART_CHECKOUT = "CART_CHECKOUT";
// export const CART_PAID = "CART_PAID";

/*
 * action creators
 */

export function createCart(cart) {
  return { type: CART_CREATE, cart };
}
export function addToCart(item) {
  return { type: CART_ADD, item };
}
export function editCartItem(item) {
  return { type: CART_EDIT, item };
}

export function removeCartItem(item) {
  return { type: CART_REMOVE, item };
}
// export function checkout() {
//   return { type: CART_CHECKOUT, item };
// }
