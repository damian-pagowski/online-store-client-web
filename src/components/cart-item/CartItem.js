import React from "react";
import "./CartItem.css";
import Select from "react-select";

function CartItem(props) {
  const data = props.data;
  const currency = props.currency;

  const options = [...Array(10).keys()].map(i => ({
    value: i + 1,
    label: `${i + 1}`,
  }));
  // console.log(JSON.stringify(options));
  return (
    <li className="media cart-item">
      <img src={data.image} className="mr-3 cart-item-img" alt={data.name} />
      <div className="media-body ">
        <div className="product-info-wrapper mx-4">
          <h5 className="mt-1 mb-2">{data.name}</h5>

          <div>{data.description}</div>
          <div>
            <h5>
              <div className="input-group my-3">
                <div className="input-group-prepend">
                  <label className="input-group-text" for="quantity-select">
                    Quantity
                  </label>
                </div>

                <Select
                  // className="custom-select"
                  id="quantity-select"
                  value={{
                    value: data.quantity,
                    label: `${data.quantity}`,
                  }}
                  onChange={props.handleChange}
                  options={options}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
                <div className="badge badge-pill badge-light">
                  {`Unit Price ${currency} ${data.price}`}
                </div>
                <div className="badge badge-pill badge-light">
                  {`Subtotal ${currency} ${data.subTotal}`}
                </div>
              </div>
            </h5>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
