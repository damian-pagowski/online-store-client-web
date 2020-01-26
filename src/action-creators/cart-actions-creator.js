import { createCart, addToCart } from "../actions/cart-actions";
import api from "../api/cartAPI";
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
    api
      .add({ productId: item.productId, quantity: 1 })
      .then(() =>
        api.details().then(details => console.log(JSON.stringify(details)))
      );
    console.log("adding item: " + JSON.stringify(item));
    dispatch(addToCart(item));
    //call api get cart details (total, etc)
    // dispatch cart update
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
