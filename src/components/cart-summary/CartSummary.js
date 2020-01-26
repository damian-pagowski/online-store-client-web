import React from "react";
import "./CartSummary.css";
import { Link } from "react-router-dom";
function CartSummary(props) {
  const data = props.data;
  return (
    <div class="card " id="card-cart">
      <div class="card-body">
        <h5 class="card-title text-center">Shopping Cart</h5>
        <p class="card-text text-center">Subtotal ({data.itemsCount} items)</p>
        <h1 class="text-center mb-4">
          <span class="badge badge-pill badge-light">{data.total}</span>
        </h1>
        <Link to="/checkout" class="btn btn-primary btn-block mb-2">
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
}

export default CartSummary;
