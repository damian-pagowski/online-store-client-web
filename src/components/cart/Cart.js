import React from "react";
import "./Cart.css";
import CartItem from "../cart-item/CartItem";
import CartSummary from "../cart-summary/CartSummary";
import { connect } from "react-redux";

class Cart extends React.Component {
  render() {
    const cartData = this.props.cart;
    return (
      <div className="container">
        <div className="grid-container">
          <div className="item2">
            <ul>
              {cartData &&
                cartData.items &&
                cartData.items.map(item => <CartItem data={item} />)}
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
