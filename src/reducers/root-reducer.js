import { combineReducers } from "redux";
import user from "./users-reducer";
import cart from "./cart-reducer";
import products from "./products-reducer";
import categories from "./categories-reducer";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  user,
  cart,
  products,
  categories,
  loadingBar: loadingBarReducer,
});
