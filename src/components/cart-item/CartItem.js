import React, { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../context/CartContext";

const BASE_URL = process.env.REACT_APP_API_URL;

const CartItem = ({ data, currency }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(data);
  };

  return (
    <li className="media cart-item">
      <img
        src={`${BASE_URL}${data.image}`}
        className="mr-3 cart-item-img"
        alt={data.name}
      />
      <div className="media-body">
        <div className="product-info-wrapper mx-4">
          <h5 className="mt-1 mb-2 cart-item-description">{data.name}</h5>
          <div>{data.description}</div>
          <div>
            <div className="input-group my-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="quantity-select">

                  Quantity: {data.quantity}

                </label>
              </div>

              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary cart-item-remove"
                  type="button"
                  onClick={handleRemove}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
            <div className="badge badge-pill badge-light cart-item-unit-price">
              {`Unit Price ${currency} ${data.price}`}
            </div>
            <div className="badge badge-pill badge-light cart-item-value">
              {`Subtotal ${currency} ${(data.price * data.quantity).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;