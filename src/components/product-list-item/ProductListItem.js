import React from "react";
import "./ProductListItem.css";
function ProductListItem(props) {
  const data = props.data;
  return (
    <li className="media product-list-item">
      <img src={data.image} className="mr-3 product-img" alt="..." />
      <div className="media-body ">
        <div className="product-info-wrapper mx-4">
          <h5 className="mt-1 mb-2 ">
            {data.name}
            <span className="badge badge-warning ml-2">Bastseller</span>
          </h5>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {data.rating}
            </div>
          </div>
          <div>{data.description}</div>
          <div>
            <h1>
              <span className="badge badge-pill badge-light">{data.price}</span>
              <i className="fa fa-cart-plus"></i>
            </h1>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductListItem;
