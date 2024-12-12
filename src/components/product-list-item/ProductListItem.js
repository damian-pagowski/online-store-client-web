import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ProductListItem.css";

const BASE_URL = process.env.REACT_APP_API_URL;

const ProductListItem = ({ data }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(data);
  };

  return (
    <li className="media product-list-item" id={`product-${data.productId}`}>
      <img
        src={`${BASE_URL}${data.image}`}
        className="mr-3 product-img"
        alt={data.name}
      />
      <div className="media-body">
        <div className="product-info-wrapper mx-4">
          <div className="mt-1 mb-2">
            <span className="h5 product-name">{data.name}</span>
            {data.badges.map((text, i) => (
              <small key={i}>
                <span className="badge badge-warning ml-2">{text}</span>
              </small>
            ))}
          </div>

          <div>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`fa fa-star ${
                  data.rating >= index + 1 ? "checked" : ""
                }`}
              ></span>
            ))}
          </div>
          <div className="product-description">{data.description}</div> // 
          <div>
            <h3>
              <span className="badge badge-light mr-2 product-price">
                {`EUR ${data.price}`}
              </span>
              <button
                className="btn btn-light add-button"
                onClick={handleAddToCart}
              >
                <i className="fa fa-cart-plus"></i>
              </button>
            </h3>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductListItem;