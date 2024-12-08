import { combineReducers } from "redux";
import user from "./users-reducer";
import cart from "./cart-reducer";
import products from "./products-reducer";
import categories from "./categories-reducer";

export default combineReducers({
  user,
  cart,
  products,
  categories,
});
