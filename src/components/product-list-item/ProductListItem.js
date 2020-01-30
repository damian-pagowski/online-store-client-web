import React from "react";
import "./ProductListItem.css";
import { _addToCart } from "../../action-creators/cart-actions-creator";
import { connect } from "react-redux";

function ProductListItem(props) {
  const data = props.data;
  const currency = props.currency;
  const addToCart = () => {
    console.log("click!");
    props.dispatch(_addToCart(data));
  };
  return (
    <li className="media product-list-item">
      <img src={data.image} className="mr-3 product-img" alt="..." />
      <div className="media-body ">
        <div className="product-info-wrapper mx-4">
          <div className="mt-1 mb-2 ">
            <span className="h5">{data.name}</span>
            {data.badges.map(text => (
              <small>
                <span className="badge badge-warning ml-2">{text}</span>
              </small>
            ))}
          </div>

          <div>
            <span class={`fa fa-star ${data.rating >= 1 && "checked"}`}></span>
            <span class={`fa fa-star ${data.rating >= 2 && "checked"}`}></span>
            <span class={`fa fa-star ${data.rating >= 3 && "checked"}`}></span>
            <span class={`fa fa-star ${data.rating >= 4 && "checked"}`}></span>
            <span class={`fa fa-star ${data.rating == 5 && "checked"}`}></span>
          </div>
          <div>{data.description}</div>
          <div>
            <h3>
              <span className="badge badge-light mr-2">{`${currency} ${data.price}`}</span>
              <button className="btn btn-light">
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

// export default ProductListItem;
