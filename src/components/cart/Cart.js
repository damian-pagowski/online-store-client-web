import React from "react";
import "./Cart.css";
import CartItem from "../cart-item/CartItem";
import CartSummary from "../cart-summary/CartSummary";
import { connect } from "react-redux";
import { _getCart } from "../../action-creators/cart-actions-creator";
class Cart extends React.Component {
  componentDidMount() {
    this.props.dispatch(_getCart());
  }

  render() {
    const cartData = this.props.cart;
    return (
      <div className="container">
        <div className="grid-container">
          <div className="item2">
            <ul>
              {cartData && cartData.items && cartData.items.length > 0 ? (
                cartData.items.map(item => (
                  <CartItem data={item} currency={cartData.currency} />
                ))
              ) : (
                <div className="alert alert-danger mt-5" role="alert">
                  <h2>Cart Empty</h2>
                </div>
              )}
            </ul>
          </div>
          <div className="item1">
            <CartSummary
              data={{
                itemsCount: cartData.itemsCount,
                total: cartData.total,
                currency: cartData.currency,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return {
    cart,
  };
}

export default connect(mapStateToProps)(Cart);
