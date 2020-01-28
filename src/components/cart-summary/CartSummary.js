import React from "react";
import "./CartSummary.css";
import { Link } from "react-router-dom";
function CartSummary(props) {
  const data = props.data;
  return (
    <div className="card " id="card-cart">
      <div className="card-body">
        <h5 className="card-title text-center">Shopping Cart</h5>
        <p className="card-text text-center">Subtotal ({data.itemsCount} items)</p>
        <h1 className="text-center mb-4">
          <span className="badge badge-pill badge-light">{`${data.currency} ${data.total}`}</span>
        </h1>
        {data.total > 0 && (
          <Link to="/checkout" className="btn btn-primary btn-block mb-2">
            Proceed to checkout
          </Link>
        )}
      </div>
    </div>
  );
}

export default CartSummary;
