/*
 * action types
 */
export const CART_CREATE = "CART_CREATE";
export const CART_UPDATED = "CART_UPDATED";

// export const CART_CHECKOUT = "CART_CHECKOUT";
// export const CART_PAID = "CART_PAID";

/*
 * action creators
 */

export function createCart(cart) {
  return { type: CART_CREATE, cart };
}
export function updateCart(cart) {
  return { type: CART_UPDATED, cart };
}


// export function checkout() {
//   return { type: CART_CHECKOUT, item };
// }
