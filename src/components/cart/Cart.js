import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart-item/CartItem";
import Navbar from "../cart-item/CartItem";

import CartSummary from "../cart-summary/CartSummary";
import { _getCart } from "../../action-creators/cart-actions-creator";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(_getCart());
  }, [dispatch]);

  return (
    <div>
      <div className="cart-container">
        <div className="cart-grid-container">
          <div className="item2">
            <ul>
              {cartData?.items?.length > 0 ? (
                cartData.items.map((item, idx) => (
                  <CartItem data={item} currency={cartData.currency} key={idx} />
                ))
              ) : (
                <div className="alert alert-danger mt-5" role="alert">
                  <h2 className="text-center">Cart Empty</h2>
                </div>
              )}
            </ul>
          </div>
          <div className="item1">
            <CartSummary
              data={{
                itemsCount: cartData?.itemsCount || 0,
                total: cartData?.total || 0,
                currency: cartData?.currency || "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;