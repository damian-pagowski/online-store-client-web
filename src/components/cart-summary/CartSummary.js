import React from "react";
import "./CartSummary.css";
import { connect } from "react-redux";
import api from "../../api/cartAPI";
const PK_STRIPE = process.env.REACT_APP_PK_STRIPE;

function CartSummary(props) {
  const { cart, user } = props;
  const handlePayment = () => {
    console.log("Public key: " + PK_STRIPE);
    api.charge().then(r => {
      console.log("/charge response: " + JSON.stringify(r))
      const stripe = window.Stripe(PK_STRIPE);
      stripe
        .redirectToCheckout({
          sessionId: r.session.id,
        })
        .then(function(result) {
          console.log("Payment Result: " + JSON.stringify(result));
        });
    });
  };
  return (
    <div className="card " id="card-cart">
      <div className="card-body">
        <h5 className="card-title text-center">Shopping Cart</h5>
        <p className="card-text text-center">
          Subtotal ({cart.itemsCount} items)
        </p>
        <h1 className="text-center mb-4">
          <span className="badge badge-pill badge-light" id="cart-total">{`${cart.currency} ${cart.total}`}</span>
        </h1>
        {cart.itemsCount > 0 && user.email && (
          <button className="btn btn-success btn-block" onClick={handlePayment} id="pay-button">
            Pay
          </button>
        )}
      </div>
    </div>
  );
}

function mapStateToProps({ cart, user }) {
  return {
    cart,
    user,
  };
}

export default connect(mapStateToProps)(CartSummary);
