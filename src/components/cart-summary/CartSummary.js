import React, { useContext } from "react";
import "./CartSummary.css";
import { CartContext } from "../../context/CartContext";
// import api from "../../api/cartAPI";

const CartSummary = () => {
  const { cart, user } = useContext(CartContext);

  const handlePayment = async () => {
    try {
      // const response = await api.charge();
      console.log(":CHECKOUT:");
    } catch (error) {
      console.error("Error during payment:", error.message);
    }
  };

  return (
    <div className="card" id="card-cart">
      <div className="card-body">
        <h5 className="card-title text-center">Shopping Cart</h5>
        <p className="card-text text-center">
          Subtotal ({cart?.itemsCount || 0} items)
        </p>
        <h1 className="text-center mb-4">
          <span
            className="badge badge-pill badge-light"
            id="cart-total"
          >{`${cart?.currency || ''} ${cart?.total || 0}`}</span>
        </h1>
        {cart?.itemsCount > 0 && user?.email && (
          <button
            className="btn btn-success btn-block"
            onClick={handlePayment}
            id="pay-button"
          >
            Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default CartSummary;