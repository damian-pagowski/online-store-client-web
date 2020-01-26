export const GET_PRODUCTS = "GET_PRODUCTS";

export function getProducts(products) {
  return { type: GET_PRODUCTS, products };
}
