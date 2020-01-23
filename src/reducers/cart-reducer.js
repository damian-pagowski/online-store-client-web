import {
  CART_CREATE,
  CART_EDIT,
  CART_ADD,
  CART_REMOVE,
} from "../actions/cart-actions";

export default function cart(state = {}, action) {
  switch (action.type) {
    case CART_ADD:
      let stateCopy = { ...state };
      let productId = action.item.productId;
      if (stateCopy.items[productId]) {
        stateCopy.items[productId].quantity += 1;
      } else {
        action.item.quantity = 1;
        stateCopy.items[productId] = action.item;
      }
      return {
        ...state,
        ...stateCopy,
      };

    case CART_CREATE:
      return {
        ...state,
        ...action.cart,
      };

    case CART_REMOVE:
      let stateCopyRemoveItem = { ...state };
      let productIdRemoveItem = action.item.productId;
      delete stateCopyRemoveItem.items[productIdRemoveItem];
      return {
        ...state,
        ...stateCopyRemoveItem,
      };

    case CART_EDIT:
      let stateCopyEditCart = { ...state };
      let productIdEditCart = action.item.productId;
      stateCopyEditCart.items[productIdEditCart] = action.item;
      return {
        ...state,
        ...stateCopyEditCart,
      };

    default:
      return state;
  }
}
