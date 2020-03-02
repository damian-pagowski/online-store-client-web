import React from "react";
import "./CartItem.css";
import Select from "react-select";
import {
  _updateQuantity,
  _removeItem
} from "../../action-creators/cart-actions-creator";
import { connect } from "react-redux";
const BASE_URL = process.env.REACT_APP_API_URL;

function CartItem(props) {
  const data = props.data;
  const currency = props.currency;

  const options = [...Array(10).keys()].map(i => ({
    value: i + 1,
    label: `${i + 1}`
  }));

  const handleChange = e => {
    props.dispatch(
      _updateQuantity({ productId: data.productId, quantity: e.value })
    );
  };
  const handleRemove = e => {
    console.log("REMOVE");
    props.dispatch(_removeItem({ productId: data.productId }));
  };

  return (
    <li className="media cart-item">
      <img src={BASE_URL+data.image} className="mr-3 cart-item-img" alt={data.name} />{" "}
      <div className="media-body ">
        <div className="product-info-wrapper mx-4">
          <h5 className="mt-1 mb-2 cart-item-description"> {data.name} </h5>{" "}
          <div> {data.description} </div>{" "}
          <div>
            <div className="input-group my-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="quantity-select">
                  Quantity{" "}
                </label>{" "}
              </div>{" "}
              <Select
              className="cart-item-quantity-select"
                id="quantity-select"
                value={{
                  value: data.quantity,
                  label: `${data.quantity}`
                }}
                onChange={handleChange}
                options={options}
              />{" "}
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary cart-item-remove"
                  type="button"
                  onClick={handleRemove}
                >
                  <i className="fa fa-trash"> </i>{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="badge badge-pill badge-light cart-item-unit-price">
              {" "}
              {`Unit Price ${currency} ${data.price}`}{" "}
            </div>{" "}
            <div className="badge badge-pill badge-light cart-item-value">
              {" "}
              {`Subtotal ${currency} ${data.subTotal}`}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </li>
  );
}
export default connect()(CartItem);
