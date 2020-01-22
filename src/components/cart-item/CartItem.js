import React from "react";
import "./CartItem.css";

function CartItem(props) {
  const data = props.data;

  return (
    <li className="media cart-item">
      <img src={data.image} className="mr-3 cart-item-img" alt={data.name} />
      <div className="media-body ">
        <div className="product-info-wrapper mx-4">
          <h5 className="mt-1 mb-2">{data.name}</h5>

          <div>{data.description}</div>
          <div>
            <h2>
              <div className="input-group my-3">
                <div className="input-group-prepend">
                  <label className="input-group-text" for="quantity-select">
                    Quantity
                  </label>
                </div>
                <select className="custom-select" id="quantity-select">
                  <option selected value="1">
                    One
                  </option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
                <span className="badge badge-pill badge-light">
                  {data.price}
                </span>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
