export const CART_CREATE = "CART_CREATE";
export const CART_UPDATED = "CART_UPDATED";

export function createCart(cart) {
  return { type: CART_CREATE, cart };
}
export function updateCart(cart) {
  return { type: CART_UPDATED, cart };
}
