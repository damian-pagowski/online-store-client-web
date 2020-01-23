import { createCart, addToCart } from "../actions/cart-actions";

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
    dispatch(addToCart(item));
  };
}

// export function _addToCart(item) {
//   return (dispatch, getState) => {
//     dispatch(addToCart(item));
//     //   const user = getState().user
//     //   api
//     //     .createComment(comment.issue, comment, user.token)
//     //     .then(comment => dispatch(addComment(comment)))
//     //     .catch(error => console.error(JSON.stringify(error)))
//   };
// }
