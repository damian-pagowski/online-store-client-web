import React from "react";
import "./ProductListItem.css";
import { _addToCart } from "../../action-creators/cart-actions-creator";
import { connect } from "react-redux";
const BASE_URL = process.env.REACT_APP_API_URL;

function ProductListItem(props) {
  const data = props.data;
  const currency = props.currency;
  const addToCart = () => {
    props.dispatch(_addToCart(data));
  };
  return (
    <li className="media product-list-item" id={`product-${data.productId}`}>
      <img src={BASE_URL+data.image} className="mr-3 product-img" alt="..." />
      <div className="media-body">
        <div className="product-info-wrapper mx-4">
          <div className="mt-1 mb-2 ">
            <span className="h5 product-name">{data.name}</span>
            {data.badges.map((text, i) => (
              <small key={i}>
                <span className="badge badge-warning ml-2">{text}</span>
              </small>
            ))}
          </div>
          <div>
            <span className={`fa fa-star ${data.rating >= 1 && "checked"}`}></span>
            <span className={`fa fa-star ${data.rating >= 2 && "checked"}`}></span>
            <span className={`fa fa-star ${data.rating >= 3 && "checked"}`}></span>
            <span className={`fa fa-star ${data.rating >= 4 && "checked"}`}></span>
            <span className={`fa fa-star ${data.rating === 5 && "checked"}`}></span>
          </div>
          <div className="product-description">{data.description}</div>
          <div>
            <h3>
              <span className="badge badge-light mr-2 product-price">{`${currency} ${data.price}`}</span>
              <button className="btn btn-light add-button">
                <i className="fa fa-cart-plus" onClick={addToCart}></i>
              </button>
            </h3>
          </div>
        </div>
      </div>
    </li>
  );
}
export default connect()(ProductListItem);
